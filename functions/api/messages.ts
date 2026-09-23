type MessageStatus = "visible" | "pending";

type MessageItem = {
  id: string;
  name: string;
  contact?: string;
  content: string;
  createdAt: string;
  status: MessageStatus;
};

type Env = {
  MESSAGES?: unknown;
};

type FunctionContext = {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
};

type PagesFunctionHandler = (context: FunctionContext) => Response | Promise<Response>;

const mockMessages: MessageItem[] = [
  {
    id: "msg-001",
    name: "访客 A",
    content: "网站第一版先完成视觉与结构闭环。",
    createdAt: "示例留言",
    status: "visible",
  },
  {
    id: "msg-002",
    name: "访客 B",
    content: "后续接入云函数后，这里会显示真实留言。",
    createdAt: "示例留言",
    status: "visible",
  },
];

function json(data: unknown, init?: ResponseInit) {
  return Response.json(data, {
    headers: {
      "cache-control": "no-store",
    },
    ...init,
  });
}

function sanitizeVisibleMessages(messages: MessageItem[]) {
  return messages
    .filter((item) => item.status === "visible")
    .map(({ id, name, content, createdAt, status }) => ({
      id,
      name,
      content,
      createdAt,
      status,
    }));
}

function validateBody(body: Partial<MessageItem>) {
  const name = body.name?.trim() ?? "";
  const contact = body.contact?.trim() ?? "";
  const content = body.content?.trim() ?? "";

  if (!name) {
    return { ok: false as const, message: "昵称不能为空。" };
  }

  if (name.length > 24) {
    return { ok: false as const, message: "昵称不能超过 24 个字符。" };
  }

  if (!content) {
    return { ok: false as const, message: "留言内容不能为空。" };
  }

  if (content.length < 12) {
    return { ok: false as const, message: "留言内容至少写 12 个字。" };
  }

  if (content.length > 500) {
    return { ok: false as const, message: "留言内容不能超过 500 个字符。" };
  }

  if (contact.length > 80) {
    return { ok: false as const, message: "联系方式不能超过 80 个字符。" };
  }

  return {
    ok: true as const,
    payload: {
      name,
      contact,
      content,
    },
  };
}

export const onRequestGet: PagesFunctionHandler = async () => {
  return json({
    ok: true,
    source: "mock",
    items: sanitizeVisibleMessages(mockMessages),
    note: "当前为 Cloudflare Pages Functions 占位接口；后续可改为从 D1 或 KV 读取。",
  });
};

export const onRequestPost: PagesFunctionHandler = async ({ request }) => {
  let body: Partial<MessageItem>;

  try {
    body = (await request.json()) as Partial<MessageItem>;
  } catch {
    return json(
      {
        ok: false,
        message: "请求体必须是 JSON。",
      },
      { status: 400 }
    );
  }

  const result = validateBody(body);
  if (!result.ok) {
    return json(
      {
        ok: false,
        message: result.message,
      },
      { status: 400 }
    );
  }

  const message: MessageItem = {
    id: crypto.randomUUID(),
    name: result.payload.name,
    contact: result.payload.contact,
    content: result.payload.content,
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  return json(
    {
      ok: true,
      item: {
        id: message.id,
        name: message.name,
        content: message.content,
        createdAt: message.createdAt,
        status: message.status,
      },
      note: "当前未写入数据库；真实上线时建议接入 Turnstile、频率限制，并将数据写入 D1 后默认审核。",
    },
    { status: 202 }
  );
};

export const onRequest: PagesFunctionHandler = async ({ request, next }) => {
  if (request.method === "GET" || request.method === "POST") {
    return next();
  }

  return json(
    {
      ok: false,
      message: "Method Not Allowed",
    },
    {
      status: 405,
      headers: {
        allow: "GET, POST",
      },
    }
  );
};
