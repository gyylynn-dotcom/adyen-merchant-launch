window.MERCHANT_ONBOARDING = {
  launchSteps: [
    {
      section: "test",
      number: "01",
      title: "获取测试环境账号",
      detail: "先获取测试后台和测试凭证，技术团队可以开始沙盒验证。"
    },
    {
      section: "kyc",
      number: "02",
      title: "提交 KYC 材料",
      detail: "按实体注册地提交公司注册文件、共用材料、联系人信息和业务链接。"
    },
    {
      section: "agreements",
      number: "03",
      title: "完成合作框架协议电子签",
      detail: "联系 Sales 获取正式文件，由 KYC 阶段提交过身份文件的签字人电子签。"
    },
    {
      section: "saqa",
      number: "04",
      title: "完成 SAQ A 电子签",
      detail: "完成 PCI DSS / SAQ A 相关电子签署。"
    },
    {
      section: "production",
      number: "05",
      title: "获取生产环境账号",
      detail: "前四步完成后，即可进入生产环境账号开通流程。"
    }
  ],
  stages: [
    {
      id: "kyc",
      number: "01",
      title: "提交 KYC 材料",
      status: "商户准备",
      detail: "确认实体注册地、公司类型、注册号、税务信息、银行账户、授权签字人和业务模式。",
      next: "先选择国家/地区，查看对应 KYC 清单。"
    },
    {
      id: "kycq",
      number: "02",
      title: "签署 KYCQ",
      status: "商户确认",
      detail: "KYCQ 用于补充确认业务模式、交易场景、风险控制、退款/拒付流程和合规声明。",
      next: "由熟悉业务与风控流程的负责人签署。"
    },
    {
      id: "agreement",
      number: "03",
      title: "签署 Merchant Agreement",
      status: "双方签署",
      detail: "正式协议确认服务范围、费用、结算安排、双方责任、合规要求和终止条款。",
      next: "协议与 pricing agreement 请联系 Sales 获取正式版本。"
    },
    {
      id: "portal",
      number: "04",
      title: "开通正式 Customer Area",
      status: "完成后开通",
      detail: "前三项完成后，开通正式后台。测试后台与测试凭证可以在此之前先使用。",
      next: "确认管理员、角色权限和报表下载需求。"
    }
  ],
  resources: [
    { section: "kyc", title: "KYC 国家清单", label: "HK / SG / US / NL / DE", detail: "按实体注册地查看材料重点。" },
    { section: "saqa", title: "SAQ A 卡安全说明", label: "PCI DSS", detail: "给技术和合规团队看的卡数据安全说明。" },
    { section: "agreements", title: "协议与报价", label: "Sales required", detail: "Merchant Agreement 和 Pricing Agreement 说明。" },
    { section: "test", title: "测试后台", label: "Test credentials", detail: "先创建测试用户并完成沙盒验证。" },
    { section: "customer-area", title: "后台视觉指南", label: "Reports / Users", detail: "用模拟截图展示后台路径。" },
    { section: "sources", title: "官方文档来源", label: "Adyen Docs", detail: "查看页面内容依据。" }
  ],
  countries: [
    {
      id: "hk",
      label: "香港实体",
      flag: "HK",
      entityTypes: ["Private company limited by shares (Ltd)", "Public unlimited company with share capital", "Private unlimited company with share capital"],
      heading: "香港主体开户材料如下：",
      registration: "使用香港主体与 Adyen 合作，合规审核过程需要提供以下材料。",
      registrationDocuments: [
        "公司注册文件 (Company Registration) 以及最新的商业登记条例/商业登记文件（Business Registration Ordinance / Business Registration）",
        "公司最新的周年申报表，例如 NAR1、NNC1"
      ],
      registrationNumber: "香港公司注册号和商业登记信息请以公司注册文件及商业登记文件为准。",
      note: "香港公司办公室租赁合同、香港员工情况说明，通常在后续人工审核介入时需要准备。"
    },
    {
      id: "sg",
      label: "新加坡实体",
      flag: "SG",
      entityTypes: ["Private limited company (Pte Ltd)", "Exempt private company (EPC)", "Public Limited Company"],
      heading: "新加坡主体开户材料如下：",
      registration: "使用新加坡主体与 Adyen 合作，合规审核过程需要提供以下材料。",
      registrationDocuments: ["公司的 BizFile"],
      registrationNumber: "新加坡主体通常需要提供 UEN / ACRA 相关注册信息。",
      note: "重要：身份文件建议用手机直接拍照上传，不建议提供扫描件、黑白件、压缩模糊件或带反光遮挡的图片。"
    },
    {
      id: "us",
      label: "美国实体",
      flag: "US",
      entityTypes: ["LLC", "Corporation / Corp.", "Inc.", "C-Corp", "S-Corp", "Benefit corporation"],
      heading: "美国主体开户材料如下：",
      registration: "使用美国主体与 Adyen 合作，通常需要提供公司注册文件和税务注册信息。",
      registrationDocuments: ["公司注册文件 / Articles of Organization / Articles of Incorporation", "EIN / 税务信息"],
      registrationNumber: "Adyen 文档列出美国 EIN 为 9 位数字。",
      note: "美国实体通常要特别确认 EIN、注册州和实际经营地址。"
    },
    {
      id: "nl",
      label: "荷兰实体",
      flag: "NL",
      entityTypes: ["Besloten vennootschap (BV)", "Naamloze vennootschap (NV)"],
      heading: "荷兰主体开户材料如下：",
      registration: "使用荷兰主体与 Adyen 合作，通常需要提供 KvK 注册文件和税务/VAT 信息。",
      registrationDocuments: ["KvK 注册文件", "VAT 或税务信息"],
      registrationNumber: "Adyen 文档列出 Netherlands KvK number 为 8 位数字。",
      note: "如果是 BV/NV，注意 legal entity name 需要和注册文件一致。"
    },
    {
      id: "de",
      label: "德国实体",
      flag: "DE",
      entityTypes: ["Gesellschaft mit beschränkter Haftung (GmbH)", "Unternehmergesellschaft (UG)", "Aktiengesellschaft (AG)"],
      heading: "德国主体开户材料如下：",
      registration: "使用德国主体与 Adyen 合作，通常需要提供 Handelsregister 注册文件和税务/VAT 信息。",
      registrationDocuments: ["Handelsregister 注册文件", "税务/VAT 信息"],
      registrationNumber: "Adyen 文档列出德国 Handelsregisternummer 格式为字母与数字组合，例如 HRB 100484。",
      note: "德国实体请确认公司名称、注册号和授权签字信息一致。"
    }
  ],
  sharedKycMaterials: [
    "所有直接/间接持股超过 25% 的个人股东的身份文件：护照信息页彩色拍照件，或者身份证正反面彩色文件（建议手机直接拍照）",
    "如果合同签字人非占股超过 25% 的股东，请提供合同签字人的身份文件：护照信息页彩色拍照件，或者身份证正反面彩色文件",
    "公司注册地址和办公地址",
    "办公室租赁合同、员工情况说明（如后续人工审核介入需要）",
    "财务对接人的姓名、邮箱、手机号",
    "技术对接人的姓名、邮箱、手机号",
    "客服对接人的邮箱、手机号",
    "APP 链接或者官网充值主网页，以及用户协议和隐私条款"
  ],
  saqaCards: [
    {
      title: "SAQ A 是什么？",
      detail: "SAQ A 是 PCI DSS Self-Assessment Questionnaire 的一种类型。它用于商户自评自己的卡数据安全控制是否符合对应范围的 PCI 要求。"
    },
    {
      title: "为什么和 Adyen 接入有关？",
      detail: "如果商户使用由 Adyen 托管或加密处理的支付页面/组件，并且商户系统不直接处理完整卡号等敏感卡数据，通常可以降低 PCI DSS 合规范围。"
    },
    {
      title: "额外参考",
      detail: "商户可阅读 Adyen PCI DSS 相关说明和 PCI Security Standards Council 的 SAQ 资料，进一步了解卡数据安全责任。"
    }
  ],
  saqaLinks: [
    {
      title: "Adyen PCI DSS compliance guide",
      url: "https://docs.adyen.com/online-payments/pci-dss-compliance-guide/"
    },
    {
      title: "PCI Security Standards Council",
      url: "https://www.pcisecuritystandards.org/"
    }
  ],
  agreementFlow: [
    "请联系 Sales 获取正式协议版本、Merchant Agreement、Pricing Agreement 和报价文件。",
    "Adyen 需要的签字人，应是前面 KYC 阶段已经提交过个人身份文件的签字人。",
    "协议走电子签流程：商户先行签署，然后由 Adyen 董事会签署。",
    "双方签署完毕后，会把完整签署版本返回给商户留档。"
  ],
  testSteps: [
    {
      title: "创建测试用户",
      text: "在测试 Customer Area 中为技术、产品、运营同事创建用户，并分配对应测试权限。",
      visual: "users"
    },
    {
      title: "获取测试凭证",
      text: "领取 API key、client key、webhook signing secret，用于 Checkout、API、Webhook 和报表测试。",
      visual: "keys"
    },
    {
      title: "完成沙盒验证",
      text: "测试支付成功、支付失败、退款、Webhook 接收、报表生成与下载路径。",
      visual: "flow"
    }
  ],
  kycUploadSteps: [
    {
      title: "进入测试环境表单",
      text: "在 test environment 的商户资料/合规审核区域打开 ready-made KYC form。"
    },
    {
      title: "填写公司和联系人信息",
      text: "填写 BizFile 信息、对接人姓名、邮箱、手机号、充值网址、用户协议和隐私条款链接。"
    },
    {
      title: "上传身份证明照片",
      text: "股东和签字人的护照/身份证请用手机直接拍彩色照片后上传，确保四角完整、清晰无遮挡。"
    },
    {
      title: "提交前复查",
      text: "确认文件主体一致、联系人可接收邮件、网站链接可打开、用户协议和隐私条款可访问。"
    }
  ],
  walkthroughs: [
    {
      id: "users",
      label: "创建用户",
      title: "Customer Area > Settings > Users",
      caption: "管理员进入用户管理，邀请财务、运营、风控、客服、技术团队成员，并按最小权限原则分配角色。",
      steps: ["进入 Settings", "选择 Users", "Invite user", "选择角色和账号范围", "发送邀请"]
    },
    {
      id: "reports",
      label: "下载报表",
      title: "Customer Area > Reports > Report overview",
      caption: "根据 Adyen 文档，手动生成报表时进入 Reports，选择报表，Manage report，Manual generate once，等待生成后下载。",
      steps: ["进入 Reports", "搜索 report", "Manage report", "Manual generate once", "Generated reports 下载"]
    },
    {
      id: "transactions",
      label: "查找交易",
      title: "Customer Area > Transactions / Payments",
      caption: "按订单号、PSP reference、日期、金额、状态筛选交易，便于客服查单和运营排查。",
      steps: ["进入 Payments", "输入订单号或 reference", "筛选日期和状态", "打开交易详情", "查看退款/拒付/事件"]
    }
  ],
  sources: [
    {
      title: "Live account application requirements",
      url: "https://docs.adyen.com/get-started-with-adyen/application-requirements",
      detail: "用于 KYC 通用材料、公司注册文件、税务信息、身份/地址证明、国家公司类型和注册号说明。"
    },
    {
      title: "Online payments integration checklist",
      url: "https://docs.adyen.com/online-payments/integration-checklist",
      detail: "用于测试账号、创建用户、API credentials、webhooks、测试集成和 go-live 说明。"
    },
    {
      title: "PCI DSS and SAQ A",
      url: "https://docs.adyen.com/online-payments/pci-dss-compliance-guide/",
      detail: "用于 Adyen PCI DSS、SAQ A 和卡数据安全责任的中文说明。"
    },
    {
      title: "Generate and download reports manually",
      url: "https://docs.adyen.com/reporting/manually-get-reports",
      detail: "用于 Customer Area 中 Reports 路径和手动生成/下载报表步骤。"
    },
    {
      title: "Get reports automatically",
      url: "https://docs.adyen.com/reporting/automatically-get-reports",
      detail: "用于自动报表、REPORT_AVAILABLE webhook 和 Report user API credential 说明。"
    }
  ]
};
