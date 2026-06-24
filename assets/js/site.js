const STORAGE_KEYS = {
  theme: "litao-theme",
  lang: "litao-lang",
};

const translations = {
  en: {
    nav: {
      about: "About",
      news: "News",
      presentations: "Presentations",
      service: "Service",
      publications: "Publications",
      projects: "Projects",
      teaching: "Teaching",
    },
    hero: {
      lede: "I build learning-based robotic systems that connect perception, language, and action for real-world manipulation.",
      ctaPublications: "View publications",
      ctaContact: "Contact me",
    },
    profile: {
      role: "Ph.D. Student, Computer Science",
      school: '<a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">Rutgers University-New Brunswick</a>',
    },
    sections: {
      aboutEyebrow: "Profile",
      aboutTitle: "About Me",
      newsEyebrow: "Timeline",
      newsTitle: "Recent News",
      newsNote: "Selected academic updates",
      presentationsEyebrow: "Academic",
      presentationsTitle: "Presentations",
      presentationsNote: "Oral presentations and posters",
      serviceEyebrow: "Academic",
      serviceTitle: "Academic Service",
      serviceNote: "Peer review and community service",
      pubEyebrow: "Selected work",
      pubTitle: "Publications",
      projectEyebrow: "Built systems",
      projectTitle: "Projects",
      teachingEyebrow: "Teaching",
      teachingTitle: "Teaching Experience",
    },
    about: {
      p1: 'I am a first-year Ph.D. student in the <a href="https://www.cs.rutgers.edu/" target="_blank" rel="noreferrer">Department of Computer Science</a> at <a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">Rutgers University-New Brunswick</a>, advised by Prof. <a href="https://arc-l.github.io/" target="_blank" rel="noreferrer">Jingjin Yu</a>. My research sits at the intersection of artificial intelligence and robotics, with a focus on robot learning, robotic manipulation, reinforcement learning, and vision-language-action models.',
      p2: 'I received my Bachelor of Engineering from <a href="https://en.scu.edu.cn/" target="_blank" rel="noreferrer">Sichuan University</a> in 2023. As a first-generation college student, I learned to navigate research through uncertainty and persistence. I was fortunate to work with mentors whose guidance shaped both my technical taste and my appreciation for rigorous teaching.',
      p3: 'Before starting my Ph.D., I co-founded <a href="assets/docs/other/toworld.pdf" target="_blank" rel="noreferrer">ToWorld</a>, a graduate admissions consulting company that helps students, especially those from traditionally underrepresented backgrounds, reduce information barriers and pursue graduate education abroad.',
      p4: 'I am open to related research collaborations. Please feel free to contact me at <a class="highlight-email" href="mailto:litao.liu@rutgers.edu">litao.liu@rutgers.edu</a>.',
      p5: 'I am also actively open to robotics, robot learning, and embodied AI internship opportunities.',
      focusLabel: "Current focus",
      focusText: "Foresight-augmented policies, real-world reinforcement learning, and embodied foundation models for robotic manipulation.",
    },
    presentations: {
      talkLabel: "Oral / Invited Talk",
      posterLabel: "Poster",
      a2aTalk: '<a href="https://jingjinyu.com/a2a/" target="_blank" rel="noreferrer">Affordance2Action (A2A): Task-Conditioned Scene-level Affordance Grounding for Real-Time Manipulation</a>. AiXM Group, ZJU (Online). (Jun. 2026)',
      foamOral: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation</a>. AAAI 2026 Oral Presentation. Singapore EXPO Convention & Exhibition Centre. (Jan. 2026)',
      foamPoster: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation</a>. AAAI 2026 Poster. Singapore EXPO Convention & Exhibition Centre. (Jan. 2026)',
    },
    service: {
      peerReviewerLabel: "Peer Reviewer",
      fullPaperReviewer: '<strong>Conference Full-Paper Reviewer</strong> (14 reviews): <a href="https://www.corl.org/" target="_blank" rel="noreferrer">CoRL 2026</a> (3 reviews), <a href="https://icml.cc/Conferences/2026" target="_blank" rel="noreferrer">ICML 2026</a> (6 reviews, Golden Reviewer), <a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank" rel="noreferrer">AAAI 2026</a> (4 reviews), <a href="https://iros25.org/" target="_blank" rel="noreferrer">IROS 2025</a> (1 review)',
    },
    footer: {
      credit: "Designed and maintained by Litao Liu.",
      backTop: "Back to top",
    },
    ui: {
      allYears: "All",
      abstract: "Abstract",
      bibtex: "BibTeX",
      close: "Close",
      pdf: "PDF",
      arxiv: "arXiv",
      code: "Code",
      homepage: "Homepage",
      video: "Video",
      publisher: "Publisher",
      copiedEmail: "Email copied",
      copyFailed: "Could not copy. Email: litao.liu@rutgers.edu",
    },
  },
  zh: {
    nav: {
      about: "简介",
      news: "动态",
      presentations: "展示",
      service: "服务",
      publications: "论文",
      projects: "项目",
      teaching: "教学",
    },
    hero: {
      lede: "我关注连接感知、语言与动作的学习型机器人系统，并推动其在真实操控任务中的可靠应用。",
      ctaPublications: "查看论文",
      ctaContact: "联系我",
    },
    profile: {
      role: "计算机科学博士生",
      school: '<a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">罗格斯大学新布朗斯维克校区</a>',
    },
    sections: {
      aboutEyebrow: "个人简介",
      aboutTitle: "关于我",
      newsEyebrow: "时间线",
      newsTitle: "近期动态",
      newsNote: "精选学术更新",
      presentationsEyebrow: "学术展示",
      presentationsTitle: "Presentations",
      presentationsNote: "口头报告与海报展示",
      serviceEyebrow: "学术服务",
      serviceTitle: "Academic Service",
      serviceNote: "同行评审与学术共同体服务",
      pubEyebrow: "代表工作",
      pubTitle: "论文发表",
      projectEyebrow: "系统实践",
      projectTitle: "项目经历",
      teachingEyebrow: "教学",
      teachingTitle: "教学经历",
    },
    about: {
      p1: '我目前是<a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">罗格斯大学新布朗斯维克校区</a><a href="https://www.cs.rutgers.edu/" target="_blank" rel="noreferrer">计算机科学系</a>一年级博士生，导师是 <a href="https://arc-l.github.io/" target="_blank" rel="noreferrer">Jingjin Yu</a> 教授。我的研究兴趣位于人工智能与机器人学的交叉领域，主要关注机器人学习、机器人操作、强化学习以及视觉-语言-动作模型。',
      p2: '我于 2023 年获得<a href="https://en.scu.edu.cn/" target="_blank" rel="noreferrer">四川大学</a>工学学士学位。作为第一代大学生，我的学术道路充满探索与不确定性，也因此更加珍惜多位导师在关键阶段给予的指导。他们帮助我建立了对深入研究和认真教学的理解。',
      p3: '本科毕业后，我曾共同创办留学申请咨询公司 <a href="assets/docs/other/toworld.pdf" target="_blank" rel="noreferrer">ToWorld</a>，致力于帮助大学生，尤其是来自信息资源相对不足背景的学生，降低信息差并追求海外研究生教育机会。',
      p4: '我欢迎相关研究合作机会。欢迎通过 <a class="highlight-email" href="mailto:litao.liu@rutgers.edu">litao.liu@rutgers.edu</a> 联系我。',
      p5: '我也正在积极寻找机器人、机器人学习与具身智能方向的实习机会。',
      focusLabel: "当前关注",
      focusText: "面向机器人操作的预见增强策略、真实世界强化学习，以及具身基础模型。",
    },
    presentations: {
      talkLabel: "口头报告 / 受邀报告",
      posterLabel: "海报",
      a2aTalk: '<a href="https://jingjinyu.com/a2a/" target="_blank" rel="noreferrer">Affordance2Action (A2A): Task-Conditioned Scene-level Affordance Grounding for Real-Time Manipulation</a>. AiXM Group, ZJU (Online). (2026 年 6 月)',
      foamOral: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation</a>. AAAI 2026 Oral Presentation. Singapore EXPO Convention & Exhibition Centre. (2026 年 1 月)',
      foamPoster: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation</a>. AAAI 2026 Poster. Singapore EXPO Convention & Exhibition Centre. (2026 年 1 月)',
    },
    service: {
      peerReviewerLabel: "审稿人",
      fullPaperReviewer: '<strong>会议全文审稿人</strong>（14 篇评审）：<a href="https://www.corl.org/" target="_blank" rel="noreferrer">CoRL 2026</a>（3 篇），<a href="https://icml.cc/Conferences/2026" target="_blank" rel="noreferrer">ICML 2026</a>（6 篇，Golden Reviewer），<a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank" rel="noreferrer">AAAI 2026</a>（4 篇），<a href="https://iros25.org/" target="_blank" rel="noreferrer">IROS 2025</a>（1 篇）',
    },
    footer: {
      credit: "由 Litao Liu 设计并维护。",
      backTop: "回到顶部",
    },
    ui: {
      allYears: "全部",
      abstract: "摘要",
      bibtex: "BibTeX",
      close: "收起",
      pdf: "PDF",
      arxiv: "arXiv",
      code: "代码",
      homepage: "主页",
      video: "视频",
      publisher: "出版社",
      copiedEmail: "邮箱已复制",
      copyFailed: "复制失败：litao.liu@rutgers.edu",
    },
  },
};

const news = [
  {
    date: "2026-05",
    en: 'Three papers were accepted by ICML 2026. Congratulations to all co-authors. I was also honored with the ICML 2026 Gold Reviewer Award.',
    zh: "三篇论文被 ICML 2026 接收。祝贺所有合作者。我也获得了 ICML 2026 Gold Reviewer Award。",
  },
  {
    date: "2025-11-07",
    en: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">One paper</a> was accepted by AAAI 2026 as an oral presentation.',
    zh: '<a href="https://projfoam.github.io/" target="_blank" rel="noreferrer">一篇论文</a>被 AAAI 2026 接收为口头报告。',
  },
  {
    date: "2025-09-22",
    en: 'Released <a href="https://vlac.intern-ai.org.cn/" target="_blank" rel="noreferrer">VLAC</a>, a project supporting real-world reinforcement learning for large VLA models.',
    zh: '发布 <a href="https://vlac.intern-ai.org.cn/" target="_blank" rel="noreferrer">VLAC</a>，支持大规模 VLA 模型的真实世界强化学习。',
  },
  {
    date: "2025-08-24",
    en: 'Started my Ph.D. journey at the <a href="https://arc-l.github.io/" target="_blank" rel="noreferrer">ARC Lab</a>, advised by Prof. Jingjin Yu at Rutgers University-New Brunswick.',
    zh: '加入罗格斯大学新布朗斯维克校区 <a href="https://arc-l.github.io/" target="_blank" rel="noreferrer">ARC Lab</a>，在 Jingjin Yu 教授指导下开始博士学习。',
  },
  {
    date: "2025-03",
    en: 'Started an internship at <a href="https://www.shlab.org.cn/" target="_blank" rel="noreferrer">Shanghai AI Lab</a>, working on large-scale embodied AI models.',
    zh: '加入<a href="https://www.shlab.org.cn/" target="_blank" rel="noreferrer">上海人工智能实验室</a>实习，从事大规模具身智能模型研究。',
  },
  {
    date: "2024-05",
    en: 'Started an internship at <a href="https://gobi.vc/companies/corenetic-ai/" target="_blank" rel="noreferrer">Corenetic AI</a>, developing dual-arm robotic manipulation policies.',
    zh: '加入 <a href="https://gobi.vc/companies/corenetic-ai/" target="_blank" rel="noreferrer">Corenetic AI</a> 实习，开发双臂机器人操作策略。',
  },
  {
    date: "2024-02-28",
    en: 'Founded <a href="assets/docs/other/toworld.pdf" target="_blank" rel="noreferrer">ToWorld</a>, a graduate study consulting company.',
    zh: '创办留学申请咨询公司 <a href="assets/docs/other/toworld.pdf" target="_blank" rel="noreferrer">ToWorld</a>。',
  },
  {
    date: "2024-01",
    en: 'Started my robotics research journey with Prof. <a href="https://lianwenzhao.github.io/" target="_blank" rel="noreferrer">Wenzhao Lian</a>.',
    zh: '在 <a href="https://lianwenzhao.github.io/" target="_blank" rel="noreferrer">Wenzhao Lian</a> 教授指导下开始机器人研究。',
  },
  {
    date: "2023-06-20",
    en: 'Graduated from <a href="https://scupi.scu.edu.cn/en/" target="_blank" rel="noreferrer">SCUPI</a> with a B.S. in Engineering and the Innovation Class of <a href="https://idmr.scu.edu.cn/en/" target="_blank" rel="noreferrer">IDMR</a>.',
    zh: '本科毕业于<a href="https://scupi.scu.edu.cn/en/" target="_blank" rel="noreferrer">四川大学匹兹堡学院</a>，并完成<a href="https://idmr.scu.edu.cn/en/" target="_blank" rel="noreferrer">灾后重建与管理学院</a>创新班培养。',
  },
  { date: "2023-06", en: "Awarded Outstanding Graduate, Sichuan Province.", zh: "获评四川省优秀毕业生。" },
  { date: "2022-12", en: "Awarded the National Scholarship for the 2021-2022 academic year.", zh: "获得 2021-2022 学年国家奖学金。" },
  { date: "2022-10", en: "Awarded Outstanding Graduate, Sichuan University.", zh: "获评四川大学优秀毕业生。" },
  { date: "2022-09-27", en: "Awarded Dean's List at SCUPI for the 2021-2022 academic year.", zh: "入选四川大学匹兹堡学院 2021-2022 学年院长名单。" },
  {
    date: "2020-09",
    en: 'Joined the International Disaster Reduction and Emergency Management Innovation Class at Sichuan University and The Hong Kong Polytechnic University Institute for Disaster Management and Reconstruction.',
    zh: "加入四川大学-香港理工大学灾后重建与管理学院国际防灾减灾与应急管理创新班。",
  },
  { date: "2019-09", en: "Started undergraduate study at Sichuan University-Pittsburgh Institute.", zh: "进入四川大学匹兹堡学院开始本科学习。" },
];

const publications = [
  {
    id: "foam",
    year: "2025",
    label: "C1",
    title: "FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation",
    authors: "<strong>Litao Liu</strong>, Wentao Wang, Yifan Han, Zhuoli Xie, Pengfei Yi, Junyan Li, Yi Qin, Wenzhao Lian*",
    venue: "AAAI 2026 (Oral)",
    media: { type: "video", src: "assets/media/projects/2024-c2.mp4" },
    links: [
      ["pdf", "assets/docs/publications/2025FoAM.pdf"],
      ["video", "https://www.youtube.com/watch?v=2k12C872BxM"],
      ["homepage", "https://projfoam.github.io/"],
    ],
    abstract: "Multi-task imitation learning enables a unified policy to perform diverse robotic manipulation tasks, but reliability, task disambiguation, and generalization remain challenging. FoAM augments imitation learning with foresight by predicting visual action outcomes and integrating multimodal goals from visual and language prompts. Across more than 100 simulation and real-world tasks, FoAM improves policy success rates and releases a benchmark for multi-task manipulation training and evaluation.",
    bibtex: `@misc{liu2024foamforesightaugmentedmultitaskimitation,
  title={FoAM: Foresight-Augmented Multi-Task Imitation Policy for Robotic Manipulation},
  author={Litao Liu and Wentao Wang and Yifan Han and Zhuoli Xie and Pengfei Yi and Junyan Li and Yi Qin and Wenzhao Lian},
  year={2024},
  eprint={2409.19528},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2409.19528}
}`,
  },
  {
    id: "vlac",
    year: "2025",
    label: "TR1",
    title: "A Vision-Language-Action-Critic Model for Robotic Real-World Reinforcement Learning",
    authors: "Shaopeng Zhai, Qi Zhang, Tianyi Zhang, Fuxian Huang, Haoran Zhang, Ming Zhou, Shengzhe Zhang, <strong>Litao Liu</strong>, Sixu Lin, Jiangmiao Pang*",
    venue: "Technical Report, Shanghai AI Lab",
    links: [
      ["arxiv", "https://arxiv.org/abs/2509.15937"],
      ["code", "https://github.com/InternRobotics/VLAC"],
      ["homepage", "https://vlac.intern-ai.org.cn/"],
    ],
    abstract: "VLAC explores critic-guided vision-language-action modeling for real-world robotic reinforcement learning, aiming to make large embodied policies easier to optimize, evaluate, and deploy beyond offline demonstrations.",
    bibtex: `@misc{zhai2025visionlanguageactioncriticmodelroboticrealworld,
  title={A Vision-Language-Action-Critic Model for Robotic Real-World Reinforcement Learning},
  author={Shaopeng Zhai and Qi Zhang and Tianyi Zhang and Fuxian Huang and Haoran Zhang and Ming Zhou and Shengzhe Zhang and Litao Liu and Sixu Lin and Jiangmiao Pang},
  year={2025},
  eprint={2509.15937},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2509.15937}
}`,
  },
  {
    id: "maeselect",
    year: "2024",
    label: "C1",
    title: "Viewpoint Matters: Dynamically Optimizing Viewpoints with Masked Autoencoder for Visual Manipulation",
    authors: "Pengfei Yi, Yifan Han, Junyan Li, <strong>Litao Liu</strong>, Wenzhao Lian*",
    venue: "Under Review for ICASSP 2025",
    media: { type: "video", src: "assets/media/projects/2024-c1.mp4" },
    links: [
      ["pdf", "assets/docs/publications/2024C1.pdf"],
      ["homepage", "https://sites.google.com/view/mae-select"],
    ],
    abstract: "MAE-Select dynamically chooses informative viewpoints for single-camera robotic manipulation. By using pretrained multi-view masked autoencoder representations, it improves learning efficiency and task performance without requiring labeled viewpoint supervision.",
  },
  {
    id: "heat-exchanger",
    year: "2023",
    label: "UT1",
    title: "High Performance Heat Exchanger Design Based on Bionic Structures",
    authors: "<strong>Litao Liu</strong>, Junce Pu, Ao Qi, Xingyi Li, Minking Chyu*, Dong Liang*",
    venue: "Undergraduate Thesis",
    image: "assets/img/publications/2023-t1.webp",
    links: [["pdf", "assets/docs/publications/2023T1.pdf"]],
    abstract: "This thesis studies additively manufactured heat exchangers based on TPMS structures, with a focus on the F-RD topology. Numerical simulations and experiments examine flow mechanisms, heat transfer, pressure drop, and hybrid structure modeling for flexible high-performance design.",
  },
  {
    id: "adrc",
    year: "2022",
    label: "J1",
    title: "Comprehensive Engineering Frequency Domain Analysis and Vibration Suppression of Flexible Aircraft Based on Active Disturbance Rejection Controller",
    authors: "<strong>Litao Liu</strong>, Bingwei Tian*",
    venue: "Sensors",
    image: "assets/img/publications/2022-j1.webp",
    links: [
      ["pdf", "assets/docs/publications/2022J1.pdf"],
      ["publisher", "https://doi.org/10.3390/s22166207"],
    ],
    abstract: "This paper designs an active disturbance rejection controller for suppressing aeroelastic vibrations of flexible aircraft, analyzes closed-loop frequency-domain behavior, and verifies robustness through Monte Carlo simulation.",
    bibtex: `@article{liu2022comprehensive,
  title={Comprehensive Engineering Frequency Domain Analysis and Vibration Suppression of Flexible Aircraft Based on Active Disturbance Rejection Controller},
  author={Liu, Litao and Tian, Bingwei},
  journal={Sensors},
  volume={22},
  number={16},
  pages={6207},
  year={2022},
  publisher={MDPI}
}`,
  },
  {
    id: "arima",
    year: "2022",
    label: "C3",
    title: "Stock Investment and Trading Strategy Model Based on Autoregressive Integrated Moving Average",
    authors: "<strong>Litao Liu*</strong>",
    venue: "2022 IEEE Conference on Telecommunications, Optics and Computer Science (TOCS 2022)",
    image: "assets/img/publications/2022-c3.png",
    links: [
      ["pdf", "assets/docs/publications/2022C3.pdf"],
      ["publisher", "https://doi.org/10.1109/TOCS56154.2022.10015924"],
    ],
    abstract: "This work builds a trading decision model using ARIMA-based time-series forecasting with bull and bear market signals, then evaluates portfolio decisions for gold, Bitcoin, and cash positions.",
    bibtex: `@inproceedings{liu2022stock,
  title={Stock Investment and Trading Strategy Model Based on Autoregressive Integrated Moving Average},
  author={Liu, Litao},
  booktitle={2022 IEEE Conference on Telecommunications, Optics and Computer Science (TOCS)},
  pages={732--736},
  year={2022},
  organization={IEEE}
}`,
  },
  {
    id: "ecological",
    year: "2022",
    label: "C2",
    title: "Research on Ecological Evaluation Model Based on Principal Component Analysis",
    authors: "<strong>Litao Liu*</strong>, Lei Li, Haozhou Mo",
    venue: "Proceedings of the 3rd International Conference on Green Energy, Environment and Sustainable Development (GEESD 2022)",
    image: "assets/img/publications/2022-c2.png",
    links: [
      ["pdf", "assets/docs/publications/2022C2.pdf"],
      ["publisher", "https://doi.org/10.3233/ATDE220312"],
    ],
    abstract: "This paper develops an environmental assessment model for Saihanba using principal component analysis and evaluates how ecological restoration influences nearby urban environmental quality.",
    bibtex: `@inproceedings{liu2022research,
  title={Research on Ecological Evaluation Model Based on Principal Component Analysis},
  author={LIU, Litao and LI, Lei and MO, Haozhou},
  booktitle={Proceedings of the 3rd International Conference on Green Energy, Environment and Sustainable Development (GEESD2022)},
  volume={23},
  pages={429},
  year={2022},
  organization={IOS Press}
}`,
  },
  {
    id: "scrubber",
    year: "2022",
    label: "C1",
    title: "Post-disaster air purification system based on bionic lung design",
    authors: "Yonggang Liang*, Yuewei Ling, Yujie Li, <strong>Litao Liu</strong>, Nuo Xu",
    venue: "International Conference on Automation Control, Algorithm, and Intelligent Bionics (ACAIB 2022)",
    image: "assets/img/publications/2022-c1.png",
    links: [
      ["pdf", "assets/docs/publications/2022C1.pdf"],
      ["publisher", "https://doi.org/10.1117/12.2639442"],
    ],
    abstract: "This work presents a post-disaster air purification system inspired by mammalian respiratory filtration, using two-stage particulate purification for emergency rescue environments.",
    bibtex: `@inproceedings{liang2022post,
  title={Post-disaster air purification system based on bionic lung design},
  author={Liang, Yonggang and Ling, Yuewei and Li, Yujie and Liu, Litao and Xu, Nuo},
  booktitle={International Conference on Automation Control, Algorithm, and Intelligent Bionics (ACAIB 2022)},
  volume={12253},
  pages={462--467},
  year={2022},
  organization={SPIE}
}`,
  },
];

const projects = [
  {
    title: {
      en: "Exploration of Multi-Task Imitation Learning Policy",
      zh: "多任务模仿学习策略探索",
    },
    media: { type: "video", src: "assets/media/projects/foam.mp4" },
    points: {
      en: [
        "Integrated a vision-language model into FoAM so the agent can use language prompts and initial visual observations as multi-goal conditions.",
        "Proposed a foresight-augmented module that predicts action consequences and improves task activation in multi-task learning.",
      ],
      zh: [
        "将视觉语言模型融入 FoAM，使机器人能够结合语言提示和初始视觉观测获得多目标条件。",
        "提出预见增强模块，预测动作后果并提升多任务学习中的任务激活成功率。",
      ],
    },
  },
  {
    title: {
      en: "High-Performance Heat Exchanger with Bionic Porous Structures",
      zh: "仿生多孔结构高性能换热器",
    },
    media: { type: "video", src: "assets/media/projects/heat-exchanger.mp4", poster: "assets/img/projects/heat-exchanger.webp" },
    points: {
      en: [
        "Designed an F-RD porous heat exchanger and used ANSYS ICEM/CFX to study flow and heat-transfer mechanisms.",
        "Showed that F-RD structures can combine competitive heat-transfer performance with stronger mechanical properties.",
        "Explored hybrid bionic structures to improve design flexibility and performance control.",
      ],
      zh: [
        "设计 F-RD 多孔换热器，并使用 ANSYS ICEM/CFX 分析内部流动和换热机理。",
        "验证 F-RD 结构在保持较好换热性能的同时具备更优机械性能。",
        "探索混合仿生结构，提高换热器设计灵活性和性能调控能力。",
      ],
    },
  },
  {
    title: {
      en: "Post-Disaster Air Management",
      zh: "灾后空气管理系统",
    },
    media: { type: "image", src: "assets/img/projects/scrubber.png" },
    points: {
      en: [
        "Designed a portable air scrubber inspired by mammalian purification mechanisms for post-disaster rescue scenarios.",
        "Contributed to policy research, technical documentation, patent application, data measurement, and product evaluation.",
        "Built a partnership with an urban emergency equipment company in Sichuan province.",
      ],
      zh: [
        "设计面向灾后救援场景的便携式仿生空气净化装置。",
        "参与政策调研、技术文档、专利申请、实验数据测量和产品性能评估。",
        "与四川省一家城市应急装备公司建立合作，推动真实场景应用。",
      ],
    },
  },
];

const teaching = [
  {
    term: "2025 Fall",
    courses: [
      {
        title: "Introduction to Discrete Structures",
        meta: "CS 205, Rutgers University - Department of Computer Science",
        proof: "assets/docs/teaching/ta-cs205-2025fall.png",
      },
    ],
  },
  {
    term: "2023 Spring",
    courses: [
      {
        title: "Introduction to Fluid Mechanics",
        meta: "MEMS 0031, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
    ],
  },
  {
    term: "2022 Fall",
    courses: [
      {
        title: "Statics and Mechanics of Material I",
        meta: "ENGR 0135, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
      {
        title: "Introduction to Fluid Mechanics",
        meta: "ME 0071, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
      {
        title: "Introduction to Mechanical Design",
        meta: "MEMS 0024, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
    ],
  },
  {
    term: "2022 Spring",
    courses: [
      {
        title: "Statics and Mechanics of Material II",
        meta: "ENGR 0145, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
    ],
  },
  {
    term: "2021 Fall",
    courses: [
      {
        title: "Introduction to Mechanical Design",
        meta: "MEMS 0024, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
    ],
  },
  {
    term: "2021 Spring",
    courses: [
      {
        title: "Physics for Science and Engineering I",
        meta: "PHYS 0174, Sichuan University - Pittsburgh Institute",
        proof: "assets/docs/teaching/ta-scupi.pdf",
      },
    ],
  },
];

let state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "en",
  theme: localStorage.getItem(STORAGE_KEYS.theme) || getPreferredTheme(),
  publicationYear: "all",
};

function getPreferredTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[state.lang]) || path;
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", state.theme === "dark" ? "#101412" : "#f7f2e9");
  const button = document.querySelector("#themeToggle");
  button.innerHTML = `<i class="fa-solid ${state.theme === "dark" ? "fa-sun" : "fa-moon"}"></i>`;
  button?.setAttribute("aria-label", state.theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  document.getElementById("langToggle").textContent = state.lang === "en" ? "中文" : "ENG";
  renderAll();
}

function renderNews() {
  const list = document.getElementById("newsList");
  list.innerHTML = news
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-text">${item[state.lang]}</div>
        </article>
      `,
    )
    .join("");
}

function renderPublicationFilters() {
  const years = ["all", ...new Set(publications.map((pub) => pub.year))];
  const filter = document.getElementById("publicationFilters");
  filter.innerHTML = years
    .map((year) => {
      const label = year === "all" ? t("ui.allYears") : year;
      return `<button class="filter-pill ${state.publicationYear === year ? "is-active" : ""}" type="button" data-year="${year}">${label}</button>`;
    })
    .join("");
}

function renderPublications() {
  const list = document.getElementById("publicationList");
  const filtered = state.publicationYear === "all" ? publications : publications.filter((pub) => pub.year === state.publicationYear);

  list.innerHTML = filtered
    .map((pub) => {
      const media = pub.media?.type === "video"
        ? `<div class="pub-media"><video src="${pub.media.src}" muted loop playsinline controls preload="metadata" aria-label="${pub.title} visual"></video></div>`
        : pub.image
        ? `<div class="pub-media"><img src="${pub.image}" alt="${pub.title} visual"></div>`
        : `<div class="pub-media"><div class="media-placeholder">${pub.year}</div></div>`;
      const links = pub.links
        .map(([kind, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${linkIcon(kind)} ${t(`ui.${kind}`)}</a>`)
        .join("");
      const abstract = pub.abstract
        ? `<button class="details-toggle" type="button" data-details="${pub.id}-abstract">${t("ui.abstract")}</button>`
        : "";
      const bibtex = pub.bibtex
        ? `<button class="details-toggle" type="button" data-details="${pub.id}-bibtex">${t("ui.bibtex")}</button>`
        : "";
      const abstractBlock = pub.abstract
        ? `<div class="pub-details" id="${pub.id}-abstract"><p>${pub.abstract}</p></div>`
        : "";
      const bibtexBlock = pub.bibtex
        ? `<div class="pub-details" id="${pub.id}-bibtex"><pre>${pub.bibtex}</pre></div>`
        : "";

      return `
        <article class="publication-card">
          <div>
            <div class="pub-meta">
              <span class="pub-badge">${pub.year}</span>
              <span class="pub-badge">${pub.label}</span>
            </div>
            <h3 class="pub-title">${pub.title}</h3>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-venue">${pub.venue}</p>
            <div class="pub-actions">
              ${links}
              ${abstract}
              ${bibtex}
            </div>
            ${abstractBlock}
            ${bibtexBlock}
          </div>
          ${media}
        </article>
      `;
    })
    .join("");
}

function linkIcon(kind) {
  const icons = {
    pdf: '<i class="fa-solid fa-file-pdf"></i>',
    arxiv: '<i class="fa-solid fa-file-lines"></i>',
    code: '<i class="fa-brands fa-github"></i>',
    homepage: '<i class="fa-solid fa-link"></i>',
    video: '<i class="fa-solid fa-video"></i>',
    publisher: '<i class="ai ai-doi"></i>',
  };
  return icons[kind] || '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
}

function renderProjects() {
  const list = document.getElementById("projectList");
  list.innerHTML = projects
    .map((project) => {
      const media =
        project.media.type === "video"
          ? `<video src="${project.media.src}" ${project.media.poster ? `poster="${project.media.poster}"` : ""} muted loop playsinline controls preload="metadata"></video>`
          : `<img src="${project.media.src}" alt="${project.title[state.lang]}">`;
      const points = project.points[state.lang].map((point) => `<li>${point}</li>`).join("");

      return `
        <article class="project-card">
          <div class="project-media">${media}</div>
          <div class="project-body">
            <h3>${project.title[state.lang]}</h3>
            <ul>${points}</ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTeaching() {
  const list = document.getElementById("teachingList");
  list.innerHTML = teaching
    .map(
      (term) => `
        <article class="teaching-item">
          <div class="teaching-term">${term.term}</div>
          <div class="teaching-courses">
            ${term.courses
              .map(
                (course) => `
                  <div>
                    <p class="course-title"><a href="${course.proof}" target="_blank" rel="noreferrer">${course.title}</a></p>
                    <p class="course-meta">${course.meta}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  renderNews();
  renderPublicationFilters();
  renderPublications();
  renderProjects();
  renderTeaching();
}

function initEmailCopy() {
  const buttons = document.querySelectorAll("[data-copy-email]");
  buttons.forEach((button) => {
    const feedback = document.getElementById(button.dataset.feedback);
    button.addEventListener("click", async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        if (feedback) feedback.textContent = t("ui.copiedEmail");
        button.classList.add("is-copied");
      } catch {
        if (feedback) feedback.textContent = t("ui.copyFailed");
      }

      window.setTimeout(() => {
        if (feedback) feedback.textContent = "";
        button.classList.remove("is-copied");
      }, 2200);
    });
  });
}

function bindEvents() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    applyTheme();
  });

  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    localStorage.setItem(STORAGE_KEYS.lang, state.lang);
    applyLanguage();
  });

  document.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-year]");
    if (filter) {
      state.publicationYear = filter.dataset.year;
      renderPublicationFilters();
      renderPublications();
      return;
    }

    const toggle = event.target.closest("[data-details]");
    if (toggle) {
      const detail = document.getElementById(toggle.dataset.details);
      detail?.classList.toggle("is-open");
    }
  });

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
  );
  sections.forEach((section) => observer.observe(section));
}

applyTheme();
applyLanguage();
initEmailCopy();
bindEvents();
