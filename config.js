window.MERCHANT_ONBOARDING = {
  diagnostics: [
    { title: "首屏问题：", detail: "原版本一打开就是大视觉图，商户需要先滚动或点导航才能看到真正要做的事情。" },
    { title: "素材问题：", detail: "真实后台截图缺失时，不应让页面空着；本版先用可维护的示意界面补齐路径和检查点。" },
    { title: "使用问题：", detail: "商户最需要的是负责人、材料、后台路径和提交前复查，而不是只有概念描述。" }
  ],
  readinessChecklist: [
    "已拿到测试环境账号，并完成 MFA 登录",
    "技术团队已获取 API key、client key 和 webhook signing secret",
    "KYC 注册文件、股东/签字人身份文件、联系人和业务链接已准备",
    "Sales 已提供正式协议、报价文件和电子签入口",
    "SAQ A 电子签已完成或已确认由谁负责",
    "生产环境管理员、财务、客服、技术用户清单已确认"
  ],
  launchSteps: [
    { section: "test", number: "01", title: "获取测试环境账号", detail: "先完成测试后台登录、用户创建和沙盒凭证领取。" },
    { section: "kyc", number: "02", title: "提交 KYC 材料", detail: "按实体注册地准备注册文件、身份文件、联系人和业务链接。" },
    { section: "agreements", number: "03", title: "完成合作框架协议电子签", detail: "由已提交身份文件的签字人完成电子签。" },
    { section: "saqa", number: "04", title: "完成 SAQ A 电子签", detail: "完成 PCI DSS / SAQ A 相关确认。" },
    { section: "production", number: "05", title: "获取生产环境账号", detail: "前四步完成后进入生产环境账号开通和权限配置。" }
  ],
  testSteps: [
    { title: "创建测试用户", text: "在测试 Customer Area 中为技术、产品、运营同事创建用户，并按最小权限原则分配角色。" },
    { title: "领取测试凭证", text: "准备 API key、client key、webhook signing secret，用于 Checkout、API、Webhook 和报表测试。" },
    { title: "跑通沙盒验证", text: "测试支付成功、支付失败、退款、Webhook 接收、报表生成与下载路径。" }
  ],
  testScreen: {
    title: "Customer Area > Developers > API credentials",
    caption: "测试环境建议先验证这三件事",
    menu: ["Payments", "Reports", "Settings", "Developers"],
    active: 3,
    steps: ["创建 API credential", "复制 client key", "配置 webhook endpoint", "做一笔成功支付和一笔失败支付", "验证 webhook 和退款事件"]
  },
  countries: [
    {
      id: "hk",
      label: "香港实体",
      flag: "🇭🇰",
      entityTypes: ["Private company limited by shares (Ltd)", "Public unlimited company with share capital", "Private unlimited company with share capital"],
      heading: "香港主体开户材料如下：",
      registration: "使用香港主体与 Adyen 合作，合规审核过程需要提供以下材料。",
      registrationDocuments: ["公司注册文件 (Company Registration)", "最新商业登记文件 (Business Registration)", "最新周年申报表，例如 NAR1、NNC1"],
      registrationNumber: "香港公司注册号和商业登记信息请以公司注册文件及商业登记文件为准。",
      note: "香港公司办公室租赁合同、香港员工情况说明，通常在后续人工审核介入时需要准备。"
    },
    {
      id: "sg",
      label: "新加坡实体",
      flag: "🇸🇬",
      entityTypes: ["Private limited company (Pte Ltd)", "Exempt private company (EPC)", "Public Limited Company"],
      heading: "新加坡主体开户材料如下：",
      registration: "使用新加坡主体与 Adyen 合作，合规审核过程需要提供以下材料。",
      registrationDocuments: ["公司的 BizFile", "UEN / ACRA 相关注册信息"],
      registrationNumber: "新加坡主体通常需要提供 UEN / ACRA 相关注册信息。",
      note: "建议提前确认公司名称、UEN、注册地址、签字人和股东信息是否与 BizFile 一致。"
    },
    {
      id: "us",
      label: "美国实体",
      flag: "🇺🇸",
      entityTypes: ["LLC", "Corporation / Corp.", "Inc.", "C-Corp", "S-Corp", "Benefit corporation"],
      heading: "美国主体开户材料如下：",
      registration: "使用美国主体与 Adyen 合作，通常需要提供公司注册文件和税务注册信息。",
      registrationDocuments: ["Articles of Organization / Articles of Incorporation", "EIN / 税务信息"],
      registrationNumber: "Adyen 文档列出美国 EIN 为 9 位数字。",
      note: "美国实体通常要特别确认 EIN、注册州和实际经营地址。"
    },
    {
      id: "nl",
      label: "荷兰实体",
      flag: "🇳🇱",
      entityTypes: ["Besloten vennootschap (BV)", "Naamloze vennootschap (NV)"],
      heading: "荷兰主体开户材料如下：",
      registration: "使用荷兰主体与 Adyen 合作，通常需要提供 KvK 注册文件和税务/VAT 信息。",
      registrationDocuments: ["KvK 注册文件", "VAT 或税务信息"],
      registrationNumber: "Adyen 文档列出 Netherlands KvK number 为 8 位数字。",
      note: "如果是 BV/NV，legal entity name 需要和注册文件一致。"
    },
    {
      id: "de",
      label: "德国实体",
      flag: "🇩🇪",
      entityTypes: ["Gesellschaft mit beschraenkter Haftung (GmbH)", "Unternehmergesellschaft (UG)", "Aktiengesellschaft (AG)"],
      heading: "德国主体开户材料如下：",
      registration: "使用德国主体与 Adyen 合作，通常需要提供 Handelsregister 注册文件和税务/VAT 信息。",
      registrationDocuments: ["Handelsregister 注册文件", "税务/VAT 信息"],
      registrationNumber: "Adyen 文档列出德国 Handelsregisternummer 格式为字母与数字组合，例如 HRB 100484。",
      note: "德国实体请确认公司名称、注册号和授权签字信息一致。"
    }
  ],
  sharedKycMaterials: [
    "所有直接/间接持股超过 25% 的个人股东身份文件",
    "合同签字人身份文件；如果签字人不是超过 25% 股东，也需要单独提供",
    "公司注册地址和办公地址",
    "财务、技术、客服对接人的姓名、邮箱、手机号",
    "APP 链接或官网充值主页面，以及用户协议和隐私条款",
    "如后续人工审核介入，可能需要办公室租赁合同和员工情况说明"
  ],
  kycReviewChecklist: [
    "公司名称、注册号、注册地址与注册文件一致",
    "股东和签字人的身份证明为彩色清晰照片",
    "财务、技术、客服对接角色已确认，后续可接收对应通知",
    "官网/APP、用户协议、隐私条款链接可以公开访问",
    "文件命名清楚，能看出国家、主体、材料类型和日期"
  ],
  kycScreen: {
    title: "Customer Area > Compliance > Business details",
    caption: "KYC 表单填写顺序",
    menu: ["Business", "Owners", "Signatories", "Review"],
    active: 0,
    steps: ["填写 legal entity 信息", "上传注册文件", "填写股东和签字人", "上传身份文件", "提交前复查业务链接"]
  },
  agreementFlow: [
    "Sales 提供 Merchant Agreement、Pricing Agreement 和正式报价文件。",
    "确认签字人是 KYC 阶段已经提交过身份文件的人。",
    "商户先完成电子签，再由 Adyen 董事会签署。",
    "双方签署完毕后，保存完整签署版本留档。"
  ],
  agreementDocuments: [
    { label: "Sales required", title: "Merchant Agreement", detail: "确认服务范围、责任、合规要求、终止条款和双方签署主体。" },
    { label: "Commercial", title: "Pricing Agreement", detail: "确认费率、结算安排、币种、账单联系人和特殊商业条款。" },
    { label: "Internal owner", title: "签字人确认", detail: "签字人姓名、邮箱、职位和身份证明需要与 KYC 信息保持一致。" }
  ],
  saqaCards: [
    { title: "SAQ A 是什么？", detail: "SAQ A 是 PCI DSS Self-Assessment Questionnaire 的一种类型，用于商户自评对应范围内的卡数据安全控制。" },
    { title: "为什么和 Adyen 接入有关？", detail: "如果商户使用由 Adyen 托管或加密处理的支付页面/组件，通常可以降低商户系统处理敏感卡数据的范围。" },
    { title: "谁来负责？", detail: "建议由技术负责人、合规负责人和签字人共同确认；如果商户有 PCI 顾问，也应同步材料。" }
  ],
  saqaLinks: [
    { title: "Adyen PCI DSS compliance guide", url: "https://docs.adyen.com/online-payments/pci-dss-compliance-guide/" },
    { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }
  ],
  walkthroughs: [
    {
      id: "users",
      label: "创建用户",
      title: "Customer Area > Settings > Users",
      caption: "生产环境用户建议按职责拆分",
      menu: ["Payments", "Reports", "Settings", "Developers"],
      active: 2,
      steps: ["进入 Settings", "选择 Users", "Invite user", "选择角色和账号范围", "发送邀请并确认 MFA"]
    },
    {
      id: "reports",
      label: "下载报表",
      title: "Customer Area > Reports > Report overview",
      caption: "财务报表下载路径",
      menu: ["Payments", "Reports", "Settings", "Developers"],
      active: 1,
      steps: ["进入 Reports", "搜索 report", "Manage report", "Manual generate once", "Generated reports 下载"]
    },
    {
      id: "transactions",
      label: "查找交易",
      title: "Customer Area > Transactions / Payments",
      caption: "客服查单和运营排查路径",
      menu: ["Payments", "Reports", "Settings", "Developers"],
      active: 0,
      steps: ["输入订单号或 PSP reference", "筛选日期和状态", "打开交易详情", "查看退款/拒付/事件", "同步给客服或财务"]
    }
  ],
  productionChecklist: [
    "管理员账号可以登录 CA-LIVE.ADYEN.COM",
    "财务、客服、运营、技术用户已按角色创建",
    "生产 API credential 和 webhook endpoint 已由技术团队保存",
    "报表下载权限已给财务负责人",
    "客服查单路径和升级联系人已确认",
    "第一笔真实交易前，已完成小额支付和退款验证"
  ],
  sources: [
    { title: "Live account application requirements", url: "https://docs.adyen.com/get-started-with-adyen/application-requirements", detail: "KYC 通用材料、公司注册文件、税务信息、身份/地址证明、国家公司类型和注册号说明。" },
    { title: "Online payments integration checklist", url: "https://docs.adyen.com/online-payments/integration-checklist", detail: "测试账号、API credentials、webhooks、测试集成和 go-live 说明。" },
    { title: "PCI DSS and SAQ A", url: "https://docs.adyen.com/online-payments/pci-dss-compliance-guide/", detail: "PCI DSS、SAQ A 和卡数据安全责任说明。" },
    { title: "Generate and download reports manually", url: "https://docs.adyen.com/reporting/manually-get-reports", detail: "Customer Area 中 Reports 路径和手动生成/下载报表步骤。" }
  ]
};
