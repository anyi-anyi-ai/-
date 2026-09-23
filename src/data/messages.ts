export type MessageStatus = "visible" | "pending";

export type MessageItem = {
  id: string;
  name: string;
  contact?: string;
  content: string;
  createdAt: string;
  status: MessageStatus;
  meta?: string;
};

export const mockMessages: MessageItem[] = [
  {
    id: "msg-001",
    name: "An Architect",
    content: "很喜欢这个作品集网站的设计，干净利落。",
    createdAt: "2026-06-11",
    status: "visible",
    meta: "Public",
  },
  {
    id: "msg-002",
    name: "访客 B",
    content: "排版和色彩都很棒，加油！",
    createdAt: "2026-06-10",
    status: "visible",
    meta: "Public",
  },
  {
    id: "msg-003",
    name: "访客 C",
    content: "空间氛围感营造得很不错。",
    createdAt: "2026-06-09",
    status: "visible",
    meta: "Public",
  },
];
