export type PortfolioItem = {
  title: string;
  slug: string;
  type: string;
  subtitle: string;
  summary: string;
  status: string;
  heroImage: string;
  keywords: string[];
  tags: string[];
  overview: string;
  designStatement: string;
  highlights: string[];
  gallery: string[];
  detailHref: string;
  portfolioHref: string;
  processNotes: string[];
  capabilitySummary: string;
  value: string;
  featured: boolean;
  videoSrc?: string;
};

function buildGallery(slug: string, detailCount: number): string[] {
  const images: string[] = [];
  for (let i = 1; i <= detailCount; i++) {
    images.push(`/projects/${slug}/detail-${i}.webp`);
  }
  return images;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "尘埃之上",
    slug: "chen-ai-zhi-shang",
    type: "未来生态 / 概念居住",
    subtitle: "未来生态 / 概念居住",
    summary: "面向火星极端环境构想生态居住系统，以四季意象组织异星生活场景。",
    status: "已纳入网站结构",
    heroImage: "/projects/chen-ai-zhi-shang/cover.webp",
    keywords: ["异星居住", "四季系统", "精神缓冲带"],
    tags: ["异星居住", "四季系统", "精神缓冲带"],
    overview:
      "项目面向火星极端环境构建高度自给自足的生态居住系统，以地球「四季」为主题组织异星生活场景，不仅回应生存技术与社区发展需求，也尝试通过文化意象与生态微景观建立面向移民者的心理慰藉机制。",
    designStatement:
      "本项目旨在火星极端环境（高辐射、大温差、低气压）中构建一个以地球「四季」为主题、高度自给自足的生态居住系统。它将作为移民阶段的「弹性适配者」，从科研枢纽发展为生活社区与星际体验窗口；成为异星生存的「精神缓冲带」，通过地球文化符号和生态微景观，缓解心理压力；同时，也是移民技术的「实战试验场」，验证并优化火星生存关键技术。",
    videoSrc: "/videos/chen-ai-zhi-shang-utopia.mp4",
    highlights: [
      "围绕高辐射、大温差、低气压等火星环境条件提出居住原型。",
      "通过四季主题与生态系统构建更具情感承接能力的异星日常场景。",
      "兼顾未来技术验证、社区演化与精神缓冲三重命题。",
    ],
    gallery: buildGallery("chen-ai-zhi-shang", 11),
    detailHref: "/projects/chen-ai-zhi-shang",
    portfolioHref: "/portfolio/chen-ai-zhi-shang",
    processNotes: [
      "先从火星极端环境的客观条件出发，建立居住系统必须解决的生存技术前提。",
      "再引入地球四季这一情绪性线索，让未来概念空间不仅成立，也具备可感知的心理温度。",
      "最终通过系统叙事与视觉表达同步推进，形成既有未来感又有完整阅读路径的作品展示。",
    ],
    capabilitySummary: "这一作品集最适合体现概念建构、系统叙事、未来场景想象与高完成度视觉表达能力。",
    value: "承担首页第一视觉记忆点，集中体现概念叙事、未来想象与系统化表达能力。",
    featured: true,
  },
  {
    title: "道隐无名",
    slug: "dao-yin-wu-ming",
    type: "文化民宿 / 空间改造",
    subtitle: "文化民宿 / 空间改造",
    summary: "以道家哲思与自然材料语言建立静修型文化民宿空间氛围。",
    status: "已纳入网站结构",
    heroImage: "/projects/dao-yin-wu-ming/cover.webp",
    keywords: ["道家文化", "静修空间", "木石光影"],
    tags: ["道家文化", "静修空间", "木石光影"],
    overview:
      "「道隐无名」立足于对道家天人合一哲思的体悟，以文化民宿为载体，将木、石、水、光影等自然元素转译为静修型空间语言，回应现代人对于精神疗愈、文化体验与返璞归真生活方式的想象。",
    designStatement:
      "「道隐无名」民宿立足于对道家「天人合一」哲思的深刻体悟，以700平方米的空间为载体，旨在构筑一处涤荡尘嚣、返璞归真的精神场域。设计以「道」之无形为本，解构道家经典，将「虚实相生」「动静结合」的辩证思维融入空间布局，以木石、水等自然材质的肌理，辅以素雅色彩与光影交错，营造出空灵意境。空间功能涵盖悟道静修、经书讲解、非遗香文化、素斋餐饮、太极养生、围棋对弈、五音疗法及道医文化等多元体验，期望通过此空间推动文化复兴，实现人与自然的和谐共生。",
    highlights: [
      "以道家哲思为母题，通过虚实、动静与自然材质建立整体空间氛围。",
      "功能覆盖静修、讲解、香文化、素斋、太极养生等复合体验场景。",
      "强调精神场域营造，让文化主题与当代旅居体验形成结合。",
    ],
    gallery: buildGallery("dao-yin-wu-ming", 20),
    detailHref: "/projects/dao-yin-wu-ming",
    portfolioHref: "/portfolio/dao-yin-wu-ming",
    processNotes: [
      "先从道家文化母题切入，明确静修民宿不仅是住宿空间，更是精神体验空间。",
      "再通过木、石、水、光影等自然元素建立空间情绪，让文化表达落到材料和氛围上。",
      "最后用图像和网页化排版把项目的静谧气质、动线体验与精神场域完整呈现出来。",
    ],
    capabilitySummary: "这一作品集主要体现文化母题转译、精神场域营造、空间氛围控制与主题性表达能力。",
    value: "强调文化母题转译与精神场域营造，适合作为体现空间气质与概念表达能力的代表项目。",
    featured: true,
  },
  {
    title: "觅踪",
    slug: "mi-zong",
    type: "零售体验 / 主题空间",
    subtitle: "零售体验 / 主题空间",
    summary: "以丝路文化和二次元消费体验为双线索，构建青年零售叙事空间。",
    status: "已纳入网站结构",
    heroImage: "/projects/mi-zong/cover.webp",
    keywords: ["丝路转译", "二次元零售", "文化体验"],
    tags: ["丝路转译", "二次元零售", "文化体验"],
    overview:
      "「觅踪」位于西安，是一个将丝路文脉与二次元青年消费文化结合的零售体验空间。项目以「丝路新生，次元织梦」为核心主题，通过文化转译与体验重构，把零售、停留、探索与社群连接组织成一条连续的空间叙事路径。",
    designStatement:
      "「觅踪」是一个位于西安的二次元文化零售体验空间，以「丝路新生，次元织梦」为核心主题。融合西安的丝路起点文脉与当代青年热爱的二次元文化，通过「文化转译」与「体验重构」的设计哲学，空间以「丝路」「蚕茧」「丝线」为核心意象，构建了一场引导用户主动探索的寻踪之旅。布局上划分出入口、探索零售、沉浸体验、交流活动和非遗转译等功能区域，由流动的丝线意象串联。「觅踪」不仅是售卖商品的场所，更是孵化文化认同、促进社群连接、激发创造活力的「文化发生场」。",
    highlights: [
      "将丝路、蚕茧、丝线等意象转化为空间导视与体验结构。",
      "在探索零售、沉浸体验、交流活动和非遗转译之间建立节奏。",
      "强调文化认同、青年社群与商业体验的共同生成。",
    ],
    gallery: buildGallery("mi-zong", 11),
    detailHref: "/projects/mi-zong",
    portfolioHref: "/portfolio/mi-zong",
    processNotes: [
      "先建立丝路文化与二次元消费文化之间的双重主题关系，明确项目的识别基础。",
      "再把文化意象转化为空间导视、体验节点和浏览节奏，使零售空间具备探索感。",
      "最后通过图像展示与文字说明共同强化项目的社群属性、商业逻辑与文化体验感。",
    ],
    capabilitySummary: "这一作品集主要体现文化叙事、青年消费体验组织、商业空间节奏控制与视觉表达能力。",
    value: "展示文化叙事与青年消费体验结合的能力，强化商业与体验兼具的项目维度。",
    featured: true,
  },
  {
    title: "燃梦立方",
    slug: "ran-meng-li-fang",
    type: "共享办公 / 商业空间",
    subtitle: "共享办公 / 商业空间",
    summary: "通过红色立方元素组织接待、办公与展示秩序，突出商业场景逻辑。",
    status: "已纳入网站结构",
    heroImage: "/projects/ran-meng-li-fang/cover.webp",
    keywords: ["校园创业", "立方秩序", "红色焦点"],
    tags: ["校园创业", "立方秩序", "红色焦点"],
    overview:
      "《燃梦立方》以大学校园中的创业办公场景为背景，围绕共享、交流、互助与展示需求搭建复合型办公空间。项目通过反复解构的红色立方元素组织接待、洽谈、办公与展览区域，形成鲜明而统一的视觉秩序。",
    designStatement:
      "该空间选址于大学校园内，旨在提供一个开放、互助、思维碰撞的平台。功能布局包括会议区、洽谈区、办公区、展览区、自主售卖区等，以满足不同商务需求。设计以正方体房间抽离出的立方元素为核心，赋予热烈的红色形成独特视觉焦点——红色立方体接待台作为入口标识，红色立方网架隔断在通透与隐私间取得平衡，红色立方展示架则强化展览区的展示效果与创业叙事。通过反复使用不同解构手法的红色立方，形成节奏感与统一性。",
    highlights: [
      "以红色立方作为空间识别符号与功能承载元素。",
      "覆盖接待、洽谈、办公、展览、自主售卖等多种使用场景。",
      "适合体现商业空间逻辑、秩序构建与视觉焦点控制能力。",
    ],
    gallery: buildGallery("ran-meng-li-fang", 6),
    detailHref: "/projects/ran-meng-li-fang",
    portfolioHref: "/portfolio/ran-meng-li-fang",
    processNotes: [
      "先明确共享办公与校园创业场景中的功能需求，确定接待、办公、展示之间的组织关系。",
      "再用红色立方建立项目的视觉识别，使功能秩序与视觉焦点形成统一表达。",
      "最后通过图像呈现和页面排版强化其现实场景属性与商业空间逻辑。",
    ],
    capabilitySummary: "这一作品集主要体现商业空间逻辑、功能组织、视觉焦点控制与现实场景表达能力。",
    value: "突出功能组织、视觉焦点和商业办公逻辑，补齐作品集的现实场景表达。",
    featured: true,
  },
  {
    title: "秦土旧腔",
    slug: "qin-tu-jiu-qiang",
    type: "文化展示 / 戏曲主题",
    subtitle: "文化展示 / 戏曲主题",
    summary: "以地方戏曲文化与空间氛围塑造为核心，强化文化记忆与叙事表达。",
    status: "已补入真实图像素材",
    heroImage: "/projects/qin-tu-jiu-qiang/cover.webp",
    keywords: ["戏曲主题", "文化展示", "地方记忆"],
    tags: ["戏曲主题", "文化展示", "地方记忆"],
    overview:
      "《秦土旧腔》围绕地方戏曲文化、舞台感与地域记忆展开设计表达，通过更具情绪与戏剧性的画面组织空间叙事。当前页面先承接真实图像与主题说明，后续将继续深化展陈逻辑与文化母题分析。",
    designStatement:
      "本项目旨在通过深度挖掘秦腔这一极具地域特色和生命力的戏曲艺术，结合现代空间设计手法，打造一个集历史溯源、艺术品鉴、沉浸体验、文化传承与创新发展于一体的秦腔文化体验空间。设计核心在于以「夯土」这一最古老、最质朴的建筑材料为载体，承载秦腔「吼动山河」的激昂、「土塑风骨」的深沉，赋予空间独特的文化温度、历史厚重感与强大的生命力，实现传统文化与当代空间的有机融合。",
    highlights: [
      "强调地方戏曲文化与空间氛围塑造之间的关系。",
      "通过舞台感、视觉母题与文化记忆强化叙事张力。",
      "适合作为文化展示类作品在网站中的重要补充。",
    ],
    gallery: buildGallery("qin-tu-jiu-qiang", 20),
    detailHref: "/projects/qin-tu-jiu-qiang",
    portfolioHref: "/portfolio/qin-tu-jiu-qiang",
    processNotes: [
      "先从地方戏曲文化与地域记忆中提取视觉母题，明确项目的核心情绪基调。",
      "再通过舞台感、展陈气质和画面组织强化空间中的戏剧性与文化厚度。",
      "最后让图像展示承接地方文化叙事，使项目在网站中承担更鲜明的文化展示角色。",
    ],
    capabilitySummary: "这一作品集主要体现戏曲文化转译、文化记忆塑造、舞台感空间表达与叙事氛围控制能力。",
    value: "围绕地方戏曲意象与文化记忆展开空间转译，适合进一步强化文化叙事线索。",
    featured: false,
  },
  {
    title: "岐黄养生轩",
    slug: "qi-huang-yang-sheng-xuan",
    type: "主题餐饮 / 中医文化",
    subtitle: "主题餐饮 / 中医文化",
    summary: "围绕中医养生理念与主题餐饮体验，探索文化表达与商业功能结合。",
    status: "已补入真实图像素材",
    heroImage: "/projects/qi-huang-yang-sheng-xuan/cover.webp",
    keywords: ["中医文化", "养生主题", "餐饮空间"],
    tags: ["中医文化", "养生主题", "餐饮空间"],
    overview:
      "《岐黄养生轩》围绕中医养生理念与主题餐饮空间体验展开，尝试在文化识别、商业功能与场景氛围之间建立平衡。当前详情页先承接核心图像与主题说明，后续将继续深化功能组织与设计推演内容。",
    designStatement:
      "本餐厅融合中医非遗文化，以「中庭」为核心，藤蔓意象自然延展，非规则曲线勾勒和谐空间。深度展示中医方剂与炮制艺术，结合「药食同源」理念，呈现味蕾与健康的双重享受。提供中医文化交流平台，通过互动体验与讲座深化顾客对中医文化的认识。开放式药膳厨房让顾客亲眼见证美食诞生，增强信任与参与感。这里不仅是品尝美食之地，更是传承与弘扬中医文化的窗口，致力于将中医非遗融入生活，共享中医文化的和谐与智慧。",
    highlights: [
      "以中医养生文化为主题线索，强化空间中的精神识别与场景气质。",
      "兼顾餐饮空间的现实功能与文化主题表达。",
      "适合作为文化主题与商业空间结合方向的重要补充案例。",
    ],
    gallery: buildGallery("qi-huang-yang-sheng-xuan", 8),
    detailHref: "/projects/qi-huang-yang-sheng-xuan",
    portfolioHref: "/portfolio/qi-huang-yang-sheng-xuan",
    processNotes: [
      "先明确中医养生文化在餐饮空间中的主题定位，确保文化表达不是表层装饰。",
      "再围绕商业餐饮功能组织空间，使主题识别与现实使用场景相匹配。",
      "最后通过图像与页面表达，把文化气质、餐饮氛围和商业属性同步呈现出来。",
    ],
    capabilitySummary: "这一作品集主要体现中医文化主题转译、餐饮空间定位与商业功能结合能力。",
    value: "以中医养生理念为基础组织主题餐厅空间，体现文化符号与商业体验结合能力。",
    featured: false,
  },
  {
    title: "娱乐空间",
    slug: "yu-le-kong-jian",
    type: "公共娱乐 / 场景体验",
    subtitle: "公共娱乐 / 场景体验",
    summary: "面向现实娱乐与公共体验场景，补充更贴近功能应用的空间方向。",
    status: "已补入真实图像素材",
    heroImage: "/projects/yu-le-kong-jian/cover.webp",
    keywords: ["公共娱乐", "体验场景", "空间功能"],
    tags: ["公共娱乐", "体验场景", "空间功能"],
    overview:
      "《娱乐空间》聚焦更贴近现实使用场景的公共娱乐类空间表达，用于补充作品集中相对更强调功能应用与体验组织的方向。当前页面已承接真实图像，并可继续作为后续深化场景逻辑的重要基础。",
    designStatement:
      "本空间设计以先锋的克莱茵蓝与纯粹的黑白作为主导色调，构建视觉基石。材质选用上大面积运用金属与玻璃，以其锋利的质感和通透性强化空间的未来感与科技属性。照明系统结合犀利的线性灯光勾勒出未来科技的骨架，同时以灵动的球形光束点缀其间，共同营造出高科技、超现实的竞技氛围，为玩家提供沉浸式的感官体验。",
    highlights: [
      "补足现实娱乐与公共体验类场景方向。",
      "强调功能组织、体验节奏与场景应用的结合。",
      "适合作为现实感更强的空间案例补充网站结构。",
    ],
    gallery: buildGallery("yu-le-kong-jian", 5),
    detailHref: "/projects/yu-le-kong-jian",
    portfolioHref: "/portfolio/yu-le-kong-jian",
    processNotes: [
      "先从公共娱乐空间的实际使用需求和人群体验方式出发，明确项目的功能前提。",
      "再通过场景组织与图像展示强化体验感，让空间不只是功能成立，也具备吸引力。",
      "最后将项目纳入网站体系中，补足现实公共体验类案例的表达层次。",
    ],
    capabilitySummary: "这一作品集主要体现公共娱乐空间表达、体验场景组织与现实功能应用理解能力。",
    value: "偏向真实功能场景与体验表达，可补充项目类型的现实应用维度。",
    featured: false,
  },
  {
    title: "家具设计",
    slug: "jia-ju-she-ji",
    type: "家具单体 / 结构表达",
    subtitle: "家具单体 / 结构表达",
    summary: "作为空间项目之外的设计补充，强调尺度、结构与细节推敲能力。",
    status: "已补入真实图像素材",
    heroImage: "/projects/jia-ju-she-ji/cover.webp",
    keywords: ["家具单体", "结构表达", "细节推敲"],
    tags: ["家具单体", "结构表达", "细节推敲"],
    overview:
      "《家具设计》作为空间项目之外的重要补充，重点展示单体家具在尺度、结构、细节与图像呈现方面的表达能力。通过真实图像接入，这一页开始承担从单体成果到设计逻辑说明的过渡作用。",
    designStatement:
      "在人工智能与混合办公浪潮重塑工作方式的时代，个人数据的安全边界与物理空间的专注需求变得前所未有的重要。Aegis Arc 的诞生，旨在为新时代的知识工作者提供一个兼具极致安全、高效沉浸与极简美学的个人工作解决方案。设计的不是一把椅子，而是一个独立的、智能化的个人工作终端。Aegis Arc 的愿景是：在开放的协作环境中，赋予每个个体受保护的数字主权与深度工作的权利。",
    highlights: [
      "通过单体家具设计补足空间项目之外的设计维度。",
      "强调结构关系、细部节点与尺度控制能力。",
      "适合作为网站中体现基础设计素养与细节推敲能力的补充案例。",
    ],
    gallery: buildGallery("jia-ju-she-ji", 6),
    detailHref: "/projects/jia-ju-she-ji",
    portfolioHref: "/portfolio/jia-ju-she-ji",
    processNotes: [
      "先从家具单体本身的功能与尺度关系出发，确定设计需要解决的基本结构问题。",
      "再通过材料、结构和细部节点不断推敲，使单体从形态上成立并具备真实感。",
      "最后用图像展示强调完成度，让这个项目成为空间项目之外的重要补充。",
    ],
    capabilitySummary: "这一作品集主要体现家具单体设计、结构理解、尺度控制与细节推敲能力。",
    value: "作为空间之外的单体设计补充，有助于展示尺度把控和细节推敲能力。",
    featured: false,
  },
];

export const portfolioMap = Object.fromEntries(
  portfolioItems.map((item) => [item.slug, item])
) as Record<string, PortfolioItem>;

export const featuredItems = portfolioItems.filter((item) => item.featured);

export const awardItems = [
  {
    title: "全国大学生数字媒体科技作品及创意竞赛",
    level: "国赛三等奖",
    project: "燃梦立方",
    href: "/projects/ran-meng-li-fang",
    time: "阶段成果",
    description: "体现项目在概念表达、视觉完成度与展示组织方面已具备较完整的成果支撑。",
    note: "证明项目具备完整概念表达与可展示成果质量。",
    certificateImage: "/awards/national-third-prize.webp",
  },
  {
    title: "东方设计奖全国高校创新设计大赛",
    level: "国赛三等奖",
    project: "作品集方向综合成果",
    href: "/projects",
    time: "阶段成果",
    description: "说明作品表达和方案完成度已经通过更正式的竞赛评价体系检验。",
    note: "后续将在独立简历页继续补充赛事时间、证书与参赛项目。",
    certificateImage: "/awards/certificate-1.webp",
  },
  {
    title: "「华夏奖」文化艺术设计大赛",
    level: "优秀奖",
    project: "文化主题表达方向",
    href: "/projects",
    time: "阶段成果",
    description: "补充文化设计与图像表达方向上的成果证明，增强求职展示的整体可信度。",
    note: "作为首页可信度支撑，后续承接完整荣誉信息与图片材料。",
    certificateImage: "/awards/certificate-2.webp",
  },
];
