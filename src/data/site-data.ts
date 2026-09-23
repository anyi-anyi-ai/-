export type ProjectCategory = "室内设计" | "毕业设计" | "概念设计" | "家具设计" | "AIGC实验" | "其他";

export type ProjectType = "室内设计" | "文化展示" | "商业空间" | "概念设计" | "家具设计";

export type SiteProject = {
  slug: string;
  title: string;
  englishTitle: string;
  category: ProjectCategory;
  type: ProjectType;
  year: string;
  cover: string;
  gallery: string[];
  gallerySections?: {
    title: string;
    description?: string;
    images: string[];
  }[];
  videos?: {
    title: string;
    description?: string;
    src: string;
    poster?: string;
  }[];
  summary: string;
  concept: string;
  overview?: string;
  designStatement?: string;
  highlights?: string[];
  processNotes?: string[];
  capabilitySummary?: string;
  projectValue?: string;
  status?: string;
  tags: string[];
  featured: boolean;
  atmosphere: string;
  route: string;
  materialStatus?: string;
  resourceHref?: string;
};

export type LearningCategory = {
  title: string;
  description: string;
  tags: string[];
};

export type SkillProgressItem = {
  name: string;
  value: number;
  category: string;
  status: string;
  accent: "sky" | "cyan" | "violet" | "amber";
};

export type ProgressTimelineItem = {
  time: string;
  title: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
};

export type ToolGroup = {
  label: string;
  description: string;
  items: string[];
};

function gallery(slug: string, total: number): string[] {
  return Array.from({ length: total }, (_, index) => `/projects/${slug}/detail-${index + 1}.webp`);
}

function galleryPaths(paths: string[]): string[] {
  return paths;
}

export const projects: SiteProject[] = [
  {
    slug: "chen-ai-zhi-shang",
    title: "尘埃之上",
    englishTitle: "Above The Dust",
    category: "概念设计",
    type: "概念设计",
    year: "2025",
    cover: "/projects/chen-ai-zhi-shang/cover.webp",
    gallery: gallery("chen-ai-zhi-shang", 11),
    summary: "面向火星极端环境构想生态居住系统，以地球四季意象组织异星生活场景。",
    concept: "项目将生存技术、社区演化与心理慰藉放在同一条叙事线上：火星不只是科研基地，也可以成为被季节、光线、植物和记忆重新照亮的居住地。",
    overview: "项目面向火星极端环境构建高度自给自足的生态居住系统，以地球四季为主题组织异星生活场景，不仅回应生存技术与社区发展需求，也尝试通过文化意象与生态微景观建立面向移民者的心理慰藉机制。",
    designStatement: "本项目在高辐射、大温差、低气压的火星环境中构建一个以地球四季为主题的居住原型，让未来概念空间不只停留在技术设想，也成为带有心理温度和文化记忆的异星日常场景。",
    highlights: [
      "围绕高辐射、大温差、低气压等火星环境条件提出居住原型。",
      "通过四季主题与生态系统构建更具情感承接能力的异星日常场景。",
      "兼顾未来技术验证、社区演化与精神缓冲三重命题。",
    ],
    processNotes: [
      "先从火星极端环境的客观条件出发，建立居住系统必须解决的生存技术前提。",
      "再引入地球四季这一情绪性线索，让未来概念空间不仅成立，也具备可感知的心理温度。",
      "最终通过系统叙事与视觉表达同步推进，形成既有未来感又有完整阅读路径的作品展示。",
    ],
    capabilitySummary: "这一项目集中体现概念建构、系统叙事、未来场景想象与高完成度视觉表达能力。",
    projectValue: "它在网站中承担未来概念与系统化表达的代表角色，也是首页第一视觉记忆点之一。",
    status: "完整方案",
    tags: ["异星居住", "生态系统", "未来场景"],
    featured: true,
    atmosphere: "冷冽、漂浮、带有微弱生命感的未来栖居想象。",
    route: "/projects/chen-ai-zhi-shang",
  },
  {
    slug: "dao-yin-wu-ming",
    title: "道隐无名",
    englishTitle: "Nameless Retreat",
    category: "室内设计",
    type: "室内设计",
    year: "2025",
    cover: "/projects/dao-yin-wu-ming/cover.webp",
    gallery: gallery("dao-yin-wu-ming", 20),
    summary: "以道家哲思与自然材料语言建立静修型文化民宿空间氛围。",
    concept: "设计以虚实相生、动静结合为线索，把木、石、水、光影转译为可停留、可静修、可体验的精神场域。",
    overview: "项目以道家天人合一的哲思为母题，把文化民宿从单一住宿空间转向更具精神体验属性的场域，让静修、讲解、香文化、素斋与养生体验共享同一套空间气质。",
    designStatement: "设计从虚实相生、动静结合出发，通过木、石、水、光影等自然元素构建一个更安静、更克制、也更具精神停留感的文化民宿空间。",
    highlights: [
      "以道家哲思为母题，通过虚实、动静与自然材质建立整体空间氛围。",
      "功能覆盖静修、讲解、香文化、素斋、太极养生等复合体验场景。",
      "强调精神场域营造，让文化主题与当代旅居体验形成结合。",
    ],
    processNotes: [
      "先从道家文化母题切入，明确静修民宿不仅是住宿空间，更是精神体验空间。",
      "再通过木、石、水、光影等自然元素建立空间情绪，让文化表达落到材料和氛围上。",
      "最后用图像和网页化排版把项目的静谧气质、动线体验与精神场域完整呈现出来。",
    ],
    capabilitySummary: "这一项目主要体现文化母题转译、精神场域营造、空间氛围控制与主题性表达能力。",
    projectValue: "它适合作为体现空间气质、文化转译与概念表达能力的代表项目。",
    status: "完整方案",
    tags: ["道家文化", "静修空间", "木石光影"],
    featured: true,
    atmosphere: "安静、克制、像山间雾气一样慢慢展开。",
    route: "/projects/dao-yin-wu-ming",
  },
  {
    slug: "mi-zong",
    title: "觅踪",
    englishTitle: "Tracing The Silk",
    category: "室内设计",
    type: "商业空间",
    year: "2025",
    cover: "/projects/mi-zong/cover.webp",
    gallery: gallery("mi-zong", 11),
    summary: "将丝路文化与青年消费体验结合，构建可探索的主题零售空间。",
    concept: "以丝路、蚕茧、丝线作为空间母题，让零售、沉浸体验、社群交流和文化转译被一条寻踪路径串联起来。",
    overview: "项目尝试将丝路文脉与青年消费文化放进同一条空间叙事中，通过零售、停留、探索与社群连接，构建更具探索感的主题体验空间。",
    designStatement: "设计以丝路、蚕茧、丝线为核心意象，把文化转译落实到导视、体验节点与浏览节奏上，让零售空间同时拥有商业逻辑和文化认同。",
    highlights: [
      "将丝路、蚕茧、丝线等意象转化为空间导视与体验结构。",
      "在探索零售、沉浸体验、交流活动和非遗转译之间建立节奏。",
      "强调文化认同、青年社群与商业体验的共同生成。",
    ],
    processNotes: [
      "先建立丝路文化与青年消费体验之间的双重主题关系，明确项目的识别基础。",
      "再把文化意象转化为空间导视、体验节点和浏览节奏，使零售空间具备探索感。",
      "最后通过图像展示与文字说明共同强化项目的社群属性、商业逻辑与文化体验感。",
    ],
    capabilitySummary: "这一项目主要体现文化叙事、青年消费体验组织、商业空间节奏控制与视觉表达能力。",
    projectValue: "它补足了文化叙事与青年商业体验结合的项目维度。",
    status: "完整方案",
    tags: ["丝路转译", "青年文化", "零售体验"],
    featured: true,
    atmosphere: "流动、探索、带一点轻盈的商业冒险感。",
    route: "/projects/mi-zong",
  },
  {
    slug: "ran-meng-li-fang",
    title: "燃梦立方",
    englishTitle: "Dream Cube",
    category: "室内设计",
    type: "商业空间",
    year: "2024",
    cover: "/projects/ran-meng-li-fang/cover.webp",
    gallery: gallery("ran-meng-li-fang", 6),
    summary: "通过红色立方元素组织接待、办公与展示秩序，回应校园创业场景。",
    concept: "项目用不断拆解与重组的红色立方建立视觉焦点，让接待、会议、办公、展览和自主售卖区形成清晰秩序。",
    overview: "项目以大学校园中的创业办公场景为背景，围绕共享、交流、互助与展示需求搭建复合型办公空间，通过统一的红色立方语言强化识别性与秩序感。",
    designStatement: "设计把红色立方作为空间识别符号与功能承载元素，让接待、洽谈、办公、展览和自主售卖区在同一逻辑下被组织起来，既有现实使用前提，也具备鲜明视觉焦点。",
    highlights: [
      "以红色立方作为空间识别符号与功能承载元素。",
      "覆盖接待、洽谈、办公、展览、自主售卖等多种使用场景。",
      "适合体现商业空间逻辑、秩序构建与视觉焦点控制能力。",
    ],
    processNotes: [
      "先明确共享办公与校园创业场景中的功能需求，确定接待、办公、展示之间的组织关系。",
      "再用红色立方建立项目的视觉识别，使功能秩序与视觉焦点形成统一表达。",
      "最后通过图像呈现和页面排版强化其现实场景属性与商业空间逻辑。",
    ],
    capabilitySummary: "这一项目主要体现商业空间逻辑、功能组织、视觉焦点控制与现实场景表达能力。",
    projectValue: "它帮助作品集补齐现实场景与商业办公逻辑更强的项目维度。",
    status: "完整方案",
    tags: ["共享办公", "立方秩序", "竞赛作品"],
    featured: true,
    atmosphere: "热烈、明确、像一枚正在启动的能量核心。",
    route: "/projects/ran-meng-li-fang",
  },
  {
    slug: "qin-tu-jiu-qiang",
    title: "秦土旧腔",
    englishTitle: "Old Qinqiang Echo",
    category: "室内设计",
    type: "文化展示",
    year: "2025",
    cover: "/projects/qin-tu-jiu-qiang/cover.webp",
    gallery: gallery("qin-tu-jiu-qiang", 20),
    summary: "围绕秦腔文化、夯土材料与舞台感，塑造地域记忆体验空间。",
    concept: "设计把秦腔的激昂、厚重和地方生命力转化为空间的材料质感、展陈节奏与戏剧性画面。",
    overview: "项目围绕地方戏曲文化、舞台感与地域记忆展开设计表达，通过更具情绪与戏剧性的画面组织强化秦腔文化的空间叙事。",
    designStatement: "设计以夯土材料为文化载体，承接秦腔的激昂、厚重与地方生命力，让材料质感、展陈节奏与戏剧性画面共同建立文化体验空间。",
    highlights: [
      "强调地方戏曲文化与空间氛围塑造之间的关系。",
      "通过舞台感、视觉母题与文化记忆强化叙事张力。",
      "适合作为文化展示类作品在网站中的重要补充。",
    ],
    processNotes: [
      "先从地方戏曲文化与地域记忆中提取视觉母题，明确项目的核心情绪基调。",
      "再通过舞台感、展陈气质和画面组织强化空间中的戏剧性与文化厚度。",
      "最后让图像展示承接地方文化叙事，使项目在网站中承担更鲜明的文化展示角色。",
    ],
    capabilitySummary: "这一项目主要体现戏曲文化转译、文化记忆塑造、舞台感空间表达与叙事氛围控制能力。",
    projectValue: "它强化了作品集中地域文化与空间叙事并重的方向。",
    status: "概念方案",
    tags: ["秦腔文化", "夯土材料", "舞台感"],
    featured: false,
    atmosphere: "厚重、粗粝、像旧戏台里回荡的声音。",
    route: "/projects/qin-tu-jiu-qiang",
  },
  {
    slug: "qi-huang-yang-sheng-xuan",
    title: "岐黄养生轩",
    englishTitle: "Qihuang Wellness House",
    category: "室内设计",
    type: "室内设计",
    year: "2025",
    cover: "/projects/qi-huang-yang-sheng-xuan/cover.webp",
    gallery: gallery("qi-huang-yang-sheng-xuan", 8),
    summary: "围绕中医养生理念与主题餐饮体验，探索文化表达与商业功能结合。",
    concept: "项目以中庭和藤蔓意象组织空间，将药食同源、开放式药膳厨房与中医文化交流转化为可体验的餐饮场景。",
    overview: "项目围绕中医养生理念与主题餐饮空间体验展开，尝试在文化识别、商业功能与场景氛围之间建立平衡，让中医文化以更当代的方式进入日常消费空间。",
    designStatement: "设计以中庭和藤蔓意象组织空间，将药食同源、开放式药膳厨房与中医文化交流转化为可体验的餐饮场景，使文化表达不止停留在装饰层面。",
    highlights: [
      "以中医养生文化为主题线索，强化空间中的精神识别与场景气质。",
      "兼顾餐饮空间的现实功能与文化主题表达。",
      "适合作为文化主题与商业空间结合方向的重要补充案例。",
    ],
    processNotes: [
      "先明确中医养生文化在餐饮空间中的主题定位，确保文化表达不是表层装饰。",
      "再围绕商业餐饮功能组织空间，使主题识别与现实使用场景相匹配。",
      "最后通过图像与页面表达，把文化气质、餐饮氛围和商业属性同步呈现出来。",
    ],
    capabilitySummary: "这一项目主要体现中医文化主题转译、餐饮空间定位与商业功能结合能力。",
    projectValue: "它补充了文化主题与商业空间结合的实践方向。",
    status: "概念方案",
    tags: ["中医文化", "药食同源", "主题餐饮"],
    featured: false,
    atmosphere: "舒缓、自然、带有东方草木气息。",
    route: "/projects/qi-huang-yang-sheng-xuan",
  },
  {
    slug: "yu-le-kong-jian",
    title: "娱乐空间",
    englishTitle: "Entertainment Space",
    category: "室内设计",
    type: "室内设计",
    year: "2025",
    cover: "/projects/yu-le-kong-jian/cover.webp",
    gallery: gallery("yu-le-kong-jian", 5),
    summary: "面向公共娱乐与电竞体验场景，强化未来科技感和沉浸氛围。",
    concept: "通过克莱因蓝、黑白对比、金属玻璃材质与线性灯光，构建具有高科技骨架的感官体验空间。",
    overview: "项目聚焦更贴近现实使用场景的公共娱乐类空间表达，用金属、玻璃和线性灯光强化未来感与科技属性，为玩家提供更强的沉浸式体验。",
    designStatement: "设计以克莱因蓝、黑白对比和金属玻璃材质为主导，结合线性灯光与球形光束构建未来竞技场般的感官体验空间。",
    highlights: [
      "补足现实娱乐与公共体验类场景方向。",
      "强调功能组织、体验节奏与场景应用的结合。",
      "适合作为现实感更强的空间案例补充网站结构。",
    ],
    processNotes: [
      "先从公共娱乐空间的实际使用需求和人群体验方式出发，明确项目的功能前提。",
      "再通过场景组织与图像展示强化体验感，让空间不只是功能成立，也具备吸引力。",
      "最后将项目纳入网站体系中，补足现实公共体验类案例的表达层次。",
    ],
    capabilitySummary: "这一项目主要体现公共娱乐空间表达、体验场景组织与现实功能应用理解能力。",
    projectValue: "它为作品集补上了现实功能场景更强的体验型案例。",
    status: "概念方案",
    tags: ["公共娱乐", "电竞空间", "感官体验"],
    featured: false,
    atmosphere: "锐利、明亮、带有未来竞技场的速度感。",
    route: "/projects/yu-le-kong-jian",
  },
  {
    slug: "jia-ju-she-ji",
    title: "家具设计",
    englishTitle: "Aegis Arc",
    category: "家具设计",
    type: "家具设计",
    year: "2025",
    cover: "/projects/jia-ju-she-ji/cover.webp",
    gallery: gallery("jia-ju-she-ji", 6),
    summary: "从个人工作终端出发，探索安全、沉浸与极简美学结合的家具尺度表达。",
    concept: "Aegis Arc 不是单纯的一把椅子，而是面向混合办公时代的个人工作解决方案，回应数字主权、专注边界与身体尺度。",
    overview: "项目重点展示单体家具在尺度、结构、细节与图像呈现方面的表达能力，把设计视角从空间整体推进到个人工作终端。",
    designStatement: "Aegis Arc 面向混合办公时代的知识工作者，强调数字主权、深度工作与极简美学的结合，回应家具单体在结构、尺度与使用边界上的综合推敲。",
    highlights: [
      "通过单体家具设计补足空间项目之外的设计维度。",
      "强调结构关系、细部节点与尺度控制能力。",
      "适合作为网站中体现基础设计素养与细节推敲能力的补充案例。",
    ],
    processNotes: [
      "先从家具单体本身的功能与尺度关系出发，确定设计需要解决的基本结构问题。",
      "再通过材料、结构和细部节点不断推敲，使单体从形态上成立并具备真实感。",
      "最后用图像展示强调完成度，让这个项目成为空间项目之外的重要补充。",
    ],
    capabilitySummary: "这一项目主要体现家具单体设计、结构理解、尺度控制与细节推敲能力。",
    projectValue: "它帮助网站展示空间项目之外的基础设计素养和细部控制能力。",
    status: "完整方案",
    tags: ["家具单体", "人体工学", "结构表达"],
    featured: false,
    atmosphere: "精密、包裹、像一处个人工作的安静护盾。",
    route: "/projects/jia-ju-she-ji",
  },
  {
    slug: "ci-an-bi-an",
    title: "此岸彼岸",
    englishTitle: "Between This Shore And The Other",
    category: "毕业设计",
    type: "概念设计",
    year: "2025",
    cover: "/projects/ci-an-bi-an/cover.png",
    gallery: galleryPaths([
      "/projects/ci-an-bi-an/detail-1.jpg",
      "/projects/ci-an-bi-an/detail-2.jpg",
      "/projects/ci-an-bi-an/detail-3.jpg",
      "/projects/ci-an-bi-an/detail-4.jpg",
      "/projects/ci-an-bi-an/detail-5.png",
    ]),
    gallerySections: [
      {
        title: "此岸空间",
        description: "承接日常、生命教育与进入路径的空间效果图。",
        images: galleryPaths([
          "/projects/ci-an-bi-an/this-shore/this-shore-01.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-02.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-03.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-04.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-05.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-06.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-07.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-08.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-09.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-10.png",
          "/projects/ci-an-bi-an/this-shore/this-shore-11.png",
        ]),
      },
      {
        title: "彼岸空间",
        description: "独立告别、情绪疗愈与纪念性场所的效果图。",
        images: galleryPaths([
          "/projects/ci-an-bi-an/other-shore/other-shore-01.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-02.jpg",
          "/projects/ci-an-bi-an/other-shore/other-shore-03.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-04.jpeg",
          "/projects/ci-an-bi-an/other-shore/other-shore-05.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-06.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-07.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-08.png",
          "/projects/ci-an-bi-an/other-shore/other-shore-09.jpeg",
          "/projects/ci-an-bi-an/other-shore/other-shore-10.jpeg",
          "/projects/ci-an-bi-an/other-shore/other-shore-11.jpg",
        ]),
      },
      {
        title: "建筑与场地",
        description: "建筑体量、矿坑地景与整体空间关系的效果图。",
        images: galleryPaths([
          "/projects/ci-an-bi-an/architecture/architecture-01.png",
          "/projects/ci-an-bi-an/architecture/architecture-02.png",
          "/projects/ci-an-bi-an/architecture/architecture-03.png",
          "/projects/ci-an-bi-an/architecture/architecture-04.png",
        ]),
      },
      {
        title: "展板汇总",
        description: "毕业设计展板，用于快速查看完整方案排版。",
        images: galleryPaths([
          "/projects/ci-an-bi-an/boards/board-01.jpg",
          "/projects/ci-an-bi-an/boards/board-02.jpg",
          "/projects/ci-an-bi-an/boards/board-03.jpg",
          "/projects/ci-an-bi-an/boards/board-04.jpg",
        ]),
      },
    ],
    videos: [
      {
        title: "雾气氛围动态",
        description: "由原始 GIF 转为 MP4，作为项目水雾与矿坑氛围的动态补充。",
        src: "/projects/ci-an-bi-an/motion/mist-4k.mp4",
        poster: "/projects/ci-an-bi-an/cover.png",
      },
    ],
    summary: "以废弃矿坑为场地原型，将中式哲学、生死教育与哀悼疗愈路径转译为可被当代人进入的纪念性空间。",
    concept: "项目以太极阴阳关系组织“此岸—彼岸—花园”三重空间层级：此岸承接日常与生命教育，彼岸承担独立告别与情绪疗愈，花园则引导生者从悲伤缓慢返回现实。通过下沉、告别、安放、哭泣、宣泄、冥想、书写、观水与上升的单向路径，空间不再只是处理仪式，而是稳稳接住家属的情绪。",
    overview: "项目选址于废弃矿坑，以中式哲学中的阴阳关系组织“此岸—彼岸—花园”三重空间层级，把生死教育、情绪疗愈与地景更新转译为可被当代人进入的纪念性空间。",
    designStatement: "设计以矿坑下沉的地形、水体与岩壁为场所基础，通过独立告别路径、情绪空间节点与回归花园，回应“如何让空间真正接住悲伤”这一更具人文性的殡葬疗愈命题。",
    highlights: [
      "以太极阴阳关系组织此岸、彼岸与花园三重空间层级。",
      "把下沉、告别、安放、哭泣、宣泄、书写、观水与上升组织成单向疗愈路径。",
      "结合废弃矿坑更新，让受伤地景与情绪疗愈发生双重转化。",
    ],
    processNotes: [
      "先从现有殡葬空间过快、过冷、过度流程化的问题出发，重新思考空间应该如何承接悲伤。",
      "再以矿坑、水体、岩壁和中式哲学为结构基础，组织此岸、彼岸与花园的情绪层级。",
      "最后将疗愈路径、生态安放、纪念书写与回归花园串联，让整个项目形成可被阅读的完整叙事闭环。",
    ],
    capabilitySummary: "这一项目主要体现毕业设计级别的概念深度、空间叙事能力、文化转译能力与人文议题处理能力。",
    projectValue: "它在网站中承担毕业设计代表作的角色，也最能说明设计如何回应情绪、记忆与场所更新。",
    status: "毕业设计 / 完整方案",
    tags: ["毕业设计", "丧葬疗愈", "中式哲学", "矿坑更新"],
    featured: false,
    atmosphere: "沉静、克制、带着矿坑地景与水雾气息的纪念性疗愈空间。",
    route: "/projects/ci-an-bi-an",
  },
  {
    slug: "wen-zi-gao-tu-zhi",
    title: "文字稿与图纸档案",
    englishTitle: "Drafts & Drawings",
    category: "其他",
    type: "概念设计",
    year: "2026",
    cover: "/projects/jia-ju-she-ji/cover.webp",
    gallery: [],
    summary: "整理设计过程中的文字稿、图纸与表达文件，呈现项目从构思到图面表达的过程。",
    concept: "这一条目更像过程资料汇编页，用来承接文字稿、图纸与过程型文件，而不是单一渲染图项目。",
    overview: "在这里，我将不同阶段的图纸、草稿、PDF 与视觉实验进行存档。这些文件往往是完整项目之前或之外的碎片，但同样构成了设计思维的一部分。",
    designStatement: "这些碎片档案保持原始格式被收录进来，保留了在进入网页视觉规范之前的排版状态。",
    highlights: [
      "整理设计过程中产生的各种原始格式文件",
      "展示从草图到详细图面的思考过程",
      "作为已发布核心项目的补充资料库",
    ],
    processNotes: [
      "汇编散落的 PDF 设计稿与草图",
      "保留原始版式，不做过度的二次美化",
      "提供对项目背后的技术和构思参考",
    ],
    capabilitySummary: "这份图纸档案展现了设计背后的底层逻辑、排版功底以及在不同媒介下切换表达方式的能力。",
    status: "档案记录中",
    tags: ["图纸表达", "设计整理", "项目文档"],
    featured: false,
    atmosphere: "更偏工作台与整理台的气质，强调过程而非最终单幅结果。",
    route: "/projects/wen-zi-gao-tu-zhi",
    materialStatus: "当前已接入现有 PDF 文件，可以继续补充更多图纸和过程稿。",
    resourceHref: "/assets/process/apartment-vlog.pdf",
  },
];

export const categories = ["全部", "室内设计", "毕业设计", "概念设计", "家具设计", "AIGC实验", "其他"] as const;

export const projectPageStats = ["10 Works", "7 Categories", "Spatial / Interior / Concept"];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, SiteProject>;

export const quickLinks = [
  { title: "作品集 Works", description: "浏览空间、室内、环境与概念设计作品。", href: "/projects", icon: "✦" },
  { title: "关于我 About", description: "了解设计方向、工具技能与创作理念。", href: "/about", icon: "◎" },
  { title: "学习进程 Progress", description: "记录软件训练、AIGC 工作流与建站过程。", href: "/progress", icon: "⌁" },
  { title: "在线留言 Message", description: "交流、合作或建议，可以从这里开始。", href: "/message", icon: "✉" },
];

export const capabilities = [
  "空间叙事与概念建构",
  "文化母题转译",
  "室内与商业空间表达",
  "AIGC 辅助创意迭代",
  "3ds Max / V-Ray / Blender / CAD / PS / AI",
];

export const progressItems: ProgressTimelineItem[] = [
  {
    time: "2026 / NOW",
    title: "空间档案馆架构重构与交互升级",
    category: "建站记录",
    description: "确立以作品为核心入口的双核心架构，在首页构建多分类即时切换流，将技能图谱、近期学习攻坚日志与长期目标系统化整合至【进程】档案。",
    status: "持续迭代",
    tags: ["Next.js", "静态作品集", "信息架构", "交互升级"],
  },
  {
    time: "2026 / Q2",
    title: "毕业设计施工节点与工程图深化",
    category: "设计学习",
    description: "以毕业设计《此岸彼岸》为载体，系统推进节点大样、平立剖、机电点位与构造做法深化，将概念推导延伸至可落地的工程施工图规范体系。",
    status: "阶段完成",
    tags: ["AutoCAD", "施工图深化", "节点大样", "空间落地"],
  },
  {
    time: "2026 / Q1",
    title: "ComfyUI 空间概念生成与材质工作流搭建",
    category: "AIGC 工作流",
    description: "探索 ControlNet、LoRA 与定制节点在空间概念体量推敲与真实材质测试中的结合，构建从空间线稿到光影氛围渲染的半自动生成管线。",
    status: "持续实验",
    tags: ["ComfyUI", "ControlNet", "材质测试", "工作流整合"],
  },
  {
    time: "2025 / Q4",
    title: "个人作品集系统化梳理与策展",
    category: "作品集整理",
    description: "围绕 8 个核心项目统一封面规格、渲染图面、设计说明与空间叙事阅读路径，形成既具有整体视觉秩序又保留独立情绪温度的展览逻辑。",
    status: "阶段完成",
    tags: ["作品策展", "图面统一", "空间叙事", "详情排版"],
  },
  {
    time: "2025 / Q2-Q3",
    title: "文化母题转译与情绪空间推敲",
    category: "设计学习",
    description: "在《此岸彼岸》《道隐无名》《秦土旧腔》等项目中，持续实验传统哲学母题、地域戏剧记忆与当代空间形式的结合，避免表面符号化堆砌。",
    status: "已形成代表作",
    tags: ["文化转译", "毕业设计", "概念空间", "材料意象"],
  },
  {
    time: "2024 / Q3-Q4",
    title: "空间竞赛实践与多维渲染表达",
    category: "软件学习",
    description: "通过《燃梦立方》等创业与商业空间竞赛，强化 3ds Max 复杂建模、V-Ray 真实光影渲染、展板版面设计与完整商业逻辑陈述能力。",
    status: "竞赛获奖",
    tags: ["3ds Max", "V-Ray", "商业空间", "竞赛实践"],
  },
];

export const aboutProfile = {
  name: "anyi",
  identity: "空间设计方向",
  school: "烟台大学",
  role: "一名空间设计方向的学习者与创作者。",
  intro:
    "我关注空间如何影响人的感受、行为与记忆，也尝试通过材质、光影、动线与数字工具，构建更具情绪温度和叙事线索的空间体验。",
  philosophy:
    "我更在意一个空间为什么成立、它怎样被阅读，以及人在其中会留下什么样的感受，而不只是在最后完成一张效果图。",
};

export const aboutBlocks = [
  {
    title: "个人简介",
    content:
      "我目前专注于空间设计方向，学习与实践内容包括室内设计、环境设计、空间叙事、材质表达与视觉呈现，也在持续积累从概念母题、空间组织到网页化展示的完整表达能力。",
  },
  {
    title: "设计方向",
    content:
      "偏好从情绪线索、文化母题与使用场景出发，让空间不是被装饰出来，而是被推演出来，并尽量让路径、停留、光线和材料共同参与叙事。",
  },
  {
    title: "教育经历",
    content:
      "烟台大学在读。学习过程中逐步建立了从概念生成、图纸表达、空间建模到最终视觉呈现的完整设计流程，也开始尝试将 AIGC 与数字工具引入设计表达中。",
  },
];

export const designFocuses = [
  {
    title: "空间体验",
    description: "关注人进入空间后的停留、转折、视线与情绪变化，让动线也成为叙事的一部分。",
  },
  {
    title: "室内与环境",
    description: "在室内尺度和环境关系之间寻找平衡，让功能、氛围与记忆点能够同时成立。",
  },
  {
    title: "材质与光影",
    description: "把木、石、玻璃、金属与光线当作情绪语言，而不是只当作表面装饰。",
  },
  {
    title: "AIGC 辅助设计",
    description: "把 ComfyUI、AI 编程和网页表达接到设计流程里，用来加速发散、对比和整理。",
  },
];

export const toolGroups: ToolGroup[] = [
  {
    label: "设计软件",
    description: "围绕图纸、建模与空间表达建立稳定的基础工具能力。",
    items: ["CAD", "SketchUp / SU", "3ds Max", "Adobe Illustrator / AI", "Photoshop"],
  },
  {
    label: "数字工具",
    description: "把渲染、排版与网页化展示接入作品输出过程，让成果更适合线上阅读与投递。",
    items: ["Blender", "V-Ray", "网页化排版", "静态站点构建"],
  },
  {
    label: "AI / 编程工具",
    description: "把 AIGC、AI 编程和前端实现接回设计流程，用于发散、整理与重写表达媒介。",
    items: ["ComfyUI", "AI 编程", "Next.js", "Cloudflare Pages 预研"],
  },
];

export const contactMethods = [
  { label: "邮箱", value: "anyi@anyitmr.com", href: "mailto:anyi@anyitmr.com" },
  { label: "QQ", value: "1839628583" },
  { label: "学校", value: "烟台大学" },
];

export const learningCategories: LearningCategory[] = [
  {
    title: "设计学习",
    description: "记录空间设计、室内设计、环境设计、空间叙事、材料与光影等方向的持续积累。",
    tags: ["空间", "动线", "材质", "光影", "叙事"],
  },
  {
    title: "软件学习",
    description: "围绕 CAD、SketchUp、3ds Max、Adobe Illustrator 等工具保持阶段性训练，并把练习不断接回项目表达。",
    tags: ["CAD", "SU", "3ds Max", "AI", "表达"],
  },
  {
    title: "AIGC 工作流",
    description: "把图像生成、风格测试、方案对比和灵感整理纳入设计前期与中期的工作流中。",
    tags: ["图像生成", "方案对比", "提示词", "工作流"],
  },
  {
    title: "AI 编程",
    description: "通过 AI 协作完成网站开发、数据结构整理、页面重写和轻量工具搭建，让表达媒介从图纸延伸到代码。",
    tags: ["Next.js", "数据整理", "自动化", "前端实现"],
  },
  {
    title: "建站记录",
    description: "持续迭代个人网站的信息架构、视觉语言、页面模块与部署思路，让网站成为稳定的线上作品入口。",
    tags: ["信息架构", "视觉统一", "静态部署", "交互细化"],
  },
  {
    title: "作品集整理",
    description: "统一项目封面、叙事顺序、说明文案、过程节点与详情图输出，让每个作品都能被更完整地阅读。",
    tags: ["图像整理", "文案重写", "详情页", "策展顺序"],
  },
];

export const skillProgress: SkillProgressItem[] = [
  { name: "AutoCAD", value: 85, category: "施工与工程图纸", status: "平立剖与施工图规范稳定表达", accent: "sky" },
  { name: "3ds Max", value: 80, category: "空间建模 / 渲染", status: "室内与空间项目核心表达工具", accent: "violet" },
  { name: "SketchUp / SU", value: 78, category: "方案推敲 / 体量", status: "方案前期体量与动线快速推敲", accent: "cyan" },
  { name: "V-Ray / 渲染器", value: 76, category: "光影表现", status: "真实材质质感与空间光影营造", accent: "violet" },
  { name: "Adobe PS / AI", value: 82, category: "排版与后期", status: "方案展板设计与效果图氛围润色", accent: "amber" },
  { name: "ComfyUI / AIGC", value: 75, category: "数字与AI工作流", status: "空间概念快速发散与材质测试", accent: "cyan" },
  { name: "Blender", value: 68, category: "三维与材质节点", status: "程序化材质与复杂造型进阶中", accent: "amber" },
  { name: "Next.js / 网页呈现", value: 72, category: "前端实现 / 媒介", status: "个人作品档案系统持续迭代", accent: "sky" },
];

export const nextGoals = {
  near: [
    "完善全站作品分类即时筛选与高保真灯箱大图浏览体验。",
    "深化毕业设计《此岸彼岸》图纸深化与全流程施工构造节点归档。",
    "将 ComfyUI 空间生成工作流固化为标准参数化节点流程。",
    "整理个人空间设计方法论随笔与阶段性学习日志。",
  ],
  long: [
    "探索实体空间设计、材质触感与数字生成的深层次结合。",
    "独立主导文化主题空间或概念展陈项目的完整落地交付。",
    "持续迭代个人数字空间档案馆，将其拓展为支持多维交互的沉浸式作品站。",
  ],
};

export const activeGrowthSnapshot = {
  status: "Active & Iterating",
  period: "2026 持续推进中",
  currentFocus: "正在攻克 ComfyUI 空间概念生成工作流，并深化毕业设计施工节点图纸",
  recentMilestone: "完成空间档案馆架构重构，作品分类流与成长档案全面贯通",
  nextMilestone: "落地文化空间材质实验，补齐参数化三维展示",
  tags: ["ComfyUI 工作流", "施工图深化", "空间叙事", "Next.js 架构"],
};

export const guestbookSamples = [
  { name: "An Architect", text: "很喜欢这个作品集网站的设计，干净利落。", meta: "留言墙" },
  { name: "访客 B", text: "排版和色彩都很棒，加油！", meta: "留言墙" },
  { name: "访客 C", text: "空间氛围感营造得很不错。", meta: "留言墙" },
];
