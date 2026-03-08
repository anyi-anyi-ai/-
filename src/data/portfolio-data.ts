export type PortfolioItem = {
  title: string;
  slug: string;
  type: string;
  summary: string;
  status: string;
  heroImage: string;
  keywords: string[];
  overview: string;
  highlights: string[];
  gallery: string[];
  detailHref?: string;
  processNotes: string[];
  capabilitySummary: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "尘埃之上",
    slug: "chen-ai-zhi-shang",
    type: "未来生态 / 概念居住",
    summary: "面向火星极端环境构想生态居住系统，以四季意象组织异星生活场景。",
    status: "已纳入网站结构",
    heroImage: "/projects/chen-ai-zhi-shang/cover.webp",
    keywords: ["异星居住", "四季系统", "精神缓冲带"],
    overview:
      "《尘埃之上》立足于火星极端环境中的未来居住命题，尝试构建一个兼顾生存技术、生态系统与心理慰藉的异星生活原型。作品集页面将围绕其概念来源、系统构成与视觉表达展开，帮助浏览者理解该项目的整体叙事逻辑。",
    highlights: [
      "聚焦未来生态居住命题，突出概念建构与系统叙事能力。",
      "以四季主题组织异星环境中的生活场景，强化视觉与情绪层面的可读性。",
      "适合作为网站中的第一视觉型作品集入口。",
    ],
    gallery: [
      "/projects/chen-ai-zhi-shang/cover.webp",
      "/projects/chen-ai-zhi-shang/detail-1.png",
      "/projects/chen-ai-zhi-shang/detail-2.png",
    ],
    detailHref: "/projects/chen-ai-zhi-shang",
    processNotes: [
      "从火星极端环境这一前提出发，先解决居住系统成立的逻辑问题，再展开四季主题的情绪表达。",
      "通过概念叙事与图像组织并行推进，让项目既具未来想象力，也能保持阅读上的完整结构。",
      "在作品集中承担第一视觉记忆点，用于快速建立网站整体气质。",
    ],
    capabilitySummary: "这一作品集最适合体现概念建构、系统叙事、未来场景想象与高完成度视觉表达能力。",
  },
  {
    title: "道隐无名",
    slug: "dao-yin-wu-ming",
    type: "文化民宿 / 空间改造",
    summary: "以道家哲思与自然材料语言建立静修型文化民宿空间氛围。",
    status: "已纳入网站结构",
    heroImage: "/projects/dao-yin-wu-ming/cover.webp",
    keywords: ["道家文化", "静修空间", "木石光影"],
    overview:
      "《道隐无名》以道家天人合一思想为母题，把木、石、水、光影等自然元素转译为静修型文化空间语言。作品集页面重点承接其文化背景、空间气质与精神场域的组织方式。",
    highlights: [
      "强化文化母题转译，突出精神场域与空间氛围营造。",
      "通过材料、光影与动静关系建立更完整的阅读节奏。",
      "适合体现文化民宿与主题空间表达能力。",
    ],
    gallery: [
      "/projects/dao-yin-wu-ming/cover.webp",
      "/projects/dao-yin-wu-ming/detail-1.webp",
      "/projects/dao-yin-wu-ming/detail-2.webp",
    ],
    detailHref: "/projects/dao-yin-wu-ming",
    processNotes: [
      "先建立道家文化与精神疗愈的主题方向，再决定材料、氛围与空间节奏如何组织。",
      "通过木、石、水、光影等自然元素，强化空间中的静修感与文化体验感。",
      "作品集页重点服务于文化叙事和空间气质判断。",
    ],
    capabilitySummary: "这一作品集主要体现文化母题转译、精神场域营造、空间氛围控制与主题性表达能力。",
  },
  {
    title: "家具设计",
    slug: "jia-ju-she-ji",
    type: "家具单体 / 结构表达",
    summary: "作为空间项目之外的设计补充，强调尺度、结构与细节推敲能力。",
    status: "已补入真实图像素材",
    heroImage: "/projects/jia-ju-she-ji/cover.jpg",
    keywords: ["家具单体", "结构表达", "细节推敲"],
    overview:
      "《家具设计》承担作品集结构中的补充角色，用于展示空间之外的单体设计能力。当前已接入真实图像素材，后续会继续深化设计逻辑、结构节点与尺寸控制说明。",
    highlights: [
      "补充空间项目之外的尺度理解与单体设计能力。",
      "适合体现结构控制、节点推敲与细节表达。",
      "用真实图像承接单体设计成果，丰富网站作品类型。",
    ],
    gallery: [
      "/projects/jia-ju-she-ji/cover.jpg",
      "/projects/jia-ju-she-ji/detail-1.jpg",
      "/projects/jia-ju-she-ji/detail-2.png",
    ],
    processNotes: [
      "先从单体家具本身的尺度和功能关系入手，再逐步推敲结构与细节表现。",
      "图像材料用于支撑设计完成度，后续应继续加入结构说明与关键节点解释。",
      "这个作品集在网站中承担补足‘空间之外的设计能力’这一作用。",
    ],
    capabilitySummary: "这一作品集主要体现家具单体设计、结构理解、尺度控制与细节推敲能力。",
  },
  {
    title: "觅踪",
    slug: "mi-zong",
    type: "零售体验 / 主题空间",
    summary: "以丝路文化和二次元消费体验为双线索，构建青年零售叙事空间。",
    status: "已纳入网站结构",
    heroImage: "/projects/mi-zong/cover.webp",
    keywords: ["丝路转译", "二次元零售", "文化体验"],
    overview:
      "《觅踪》将丝路文化与青年消费场景结合，以文化转译与社群体验共同组织空间逻辑。作品集页将承接其叙事主题、空间节奏与零售体验策略。",
    highlights: [
      "文化转译与青年零售体验结合明确。",
      "适合体现商业空间中的叙事组织与场景节奏。",
      "兼具文化识别度与现实消费场景的可读性。",
    ],
    gallery: [
      "/projects/mi-zong/cover.webp",
      "/projects/mi-zong/detail-1.webp",
      "/projects/mi-zong/detail-2.webp",
    ],
    detailHref: "/projects/mi-zong",
    processNotes: [
      "从丝路文化与二次元消费习惯两条线索同时出发，建立项目的双重阅读逻辑。",
      "重点通过体验节奏、探索感和社群停留感组织零售空间的叙事路径。",
      "这一页更适合帮助浏览者判断你在商业与文化结合方向上的能力。",
    ],
    capabilitySummary: "这一作品集主要体现文化叙事、青年消费体验组织、商业空间节奏控制与视觉表达能力。",
  },
  {
    title: "岐黄养生轩",
    slug: "qi-huang-yang-sheng-xuan",
    type: "主题餐饮 / 中医文化",
    summary: "围绕中医养生理念与主题餐饮体验，探索文化表达与商业功能结合。",
    status: "已补入真实图像素材",
    heroImage: "/projects/qi-huang-yang-sheng-xuan/cover.webp",
    keywords: ["中医文化", "养生主题", "餐饮空间"],
    overview:
      "《岐黄养生轩》以中医养生文化为核心切入点，当前已经接入真实图像素材。后续页面将继续从文化意象、主题餐饮定位和空间体验三方面补充完整内容。",
    highlights: [
      "具有鲜明的文化主题与商业落点。",
      "适合作为中医文化空间表达案例继续深化。",
      "真实图像已经接入，可支撑后续页面继续补齐说明资料。",
    ],
    gallery: [
      "/projects/qi-huang-yang-sheng-xuan/cover.webp",
      "/projects/qi-huang-yang-sheng-xuan/detail-1.webp",
      "/projects/qi-huang-yang-sheng-xuan/detail-2.webp",
    ],
    processNotes: [
      "先确立中医养生文化与餐饮场景结合的核心命题，再决定视觉与空间氛围走向。",
      "通过主题图像建立文化识别感，后续应补充功能组织与体验逻辑说明。",
      "这一作品集适合作为文化表达与现实商业场景结合的补充案例。",
    ],
    capabilitySummary: "这一作品集主要体现中医文化主题转译、餐饮空间定位与商业功能结合能力。",
  },
  {
    title: "秦土旧腔",
    slug: "qin-tu-jiu-qiang",
    type: "文化展示 / 戏曲主题",
    summary: "以地方戏曲文化与空间氛围塑造为核心，强化文化记忆与叙事表达。",
    status: "已补入真实图像素材",
    heroImage: "/projects/qin-tu-jiu-qiang/cover.webp",
    keywords: ["戏曲主题", "文化展示", "地方记忆"],
    overview:
      "《秦土旧腔》围绕地方戏曲文化、舞台感与地域记忆展开表达，当前已接入真实图像资料。后续作品集页将进一步强化其文化线索、视觉母题与展示氛围构建方式。",
    highlights: [
      "适合作为文化记忆型项目补足网站内容层次。",
      "可以突出戏曲意象、舞台表达与空间叙事结合。",
      "真实图像已接入，后续可继续深化项目过程说明。",
    ],
    gallery: [
      "/projects/qin-tu-jiu-qiang/cover.webp",
      "/projects/qin-tu-jiu-qiang/detail-1.webp",
      "/projects/qin-tu-jiu-qiang/detail-2.webp",
    ],
    processNotes: [
      "围绕地方戏曲文化与舞台感建立视觉母题，先确定情绪基调再决定展示方式。",
      "空间表达重点不只是展示图像本身，更是对地方文化记忆的叙事组织。",
      "这个作品集适合作为文化展示类项目的重要补充。",
    ],
    capabilitySummary: "这一作品集主要体现戏曲文化转译、文化记忆塑造、舞台感空间表达与叙事氛围控制能力。",
  },
  {
    title: "燃梦立方",
    slug: "ran-meng-li-fang",
    type: "共享办公 / 商业空间",
    summary: "通过红色立方元素组织接待、办公与展示秩序，突出商业场景逻辑。",
    status: "已纳入网站结构",
    heroImage: "/projects/ran-meng-li-fang/cover.webp",
    keywords: ["校园创业", "立方秩序", "红色焦点"],
    overview:
      "《燃梦立方》围绕共享办公与校园创业场景展开，以红色立方元素组织功能与视觉焦点。作品集页将强化其商业逻辑、功能秩序与成果支撑关系。",
    highlights: [
      "适合体现现实商业空间中的功能组织能力。",
      "红色立方元素形成清晰视觉识别与秩序结构。",
      "具备竞赛成果支撑，适合作为求职展示中的现实场景代表作。",
    ],
    gallery: [
      "/projects/ran-meng-li-fang/cover.webp",
      "/projects/ran-meng-li-fang/detail-1.webp",
      "/projects/ran-meng-li-fang/detail-2.webp",
    ],
    detailHref: "/projects/ran-meng-li-fang",
    processNotes: [
      "先明确共享办公与创业展示的功能需求，再通过红色立方建立视觉秩序。",
      "空间中的接待、办公、洽谈与展示关系是该项目阅读的核心。",
      "作品集页承担现实商业办公场景表达能力的判断功能。",
    ],
    capabilitySummary: "这一作品集主要体现商业空间逻辑、功能组织、视觉焦点控制与现实场景表达能力。",
  },
  {
    title: "娱乐空间",
    slug: "yu-le-kong-jian",
    type: "公共娱乐 / 场景体验",
    summary: "面向现实娱乐与公共体验场景，补充更贴近功能应用的空间方向。",
    status: "已补入真实图像素材",
    heroImage: "/projects/yu-le-kong-jian/cover.jpg",
    keywords: ["公共娱乐", "体验场景", "空间功能"],
    overview:
      "《娱乐空间》用于补充更贴近现实功能应用的空间表达方向，当前已补入真实图像资料。后续页面将继续从使用场景、空间体验和功能组织三个角度增强内容说明。",
    highlights: [
      "补充现实公共娱乐类项目方向。",
      "适合体现空间体验与功能表达的结合。",
      "图像素材已接入，可继续深化场景逻辑说明。",
    ],
    gallery: [
      "/projects/yu-le-kong-jian/cover.jpg",
      "/projects/yu-le-kong-jian/detail-1.jpg",
      "/projects/yu-le-kong-jian/detail-2.jpg",
    ],
    processNotes: [
      "优先从真实功能场景与人群体验需求切入，再决定空间组织方式。",
      "图像材料用于支撑公共娱乐和体验场景表达的现实感。",
      "这一作品集适合作为更贴近真实功能应用场景的补充案例。",
    ],
    capabilitySummary: "这一作品集主要体现公共娱乐空间表达、体验场景组织与现实功能应用理解能力。",
  },
];

export const portfolioMap = Object.fromEntries(portfolioItems.map((item) => [item.slug, item])) as Record<string, PortfolioItem>;
