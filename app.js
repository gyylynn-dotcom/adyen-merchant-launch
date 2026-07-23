(function () {
  const config = window.MERCHANT_ONBOARDING;
  const state = { country: config.countries[0].id, walkthrough: config.walkthroughs[0].id };
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function list(items) {
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function setActiveSection(sectionId) {
    $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.section === sectionId));
    $$(".section").forEach((section) => section.classList.toggle("active", section.id === sectionId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCards(target, items, label = "") {
    $(target).innerHTML = items
      .map(
        (item) => `
          <article class="card">
            ${label ? `<span>${label}</span>` : item.label ? `<span>${item.label}</span>` : ""}
            <h3>${item.title}</h3>
            <p>${item.detail || item.text}</p>
          </article>
        `
      )
      .join("");
  }

  function renderChecks(target, items) {
    $(target).innerHTML = items.map((item) => `<label><input type="checkbox" /> <span>${item}</span></label>`).join("");
  }

  function renderLaunchSteps() {
    $("#launchSteps").innerHTML = config.launchSteps
      .map(
        (step) => `
          <button class="launch-step" type="button" data-jump="${step.section}">
            <span>${step.number}</span>
            <strong>${step.title}</strong>
            <small>${step.detail}</small>
          </button>
        `
      )
      .join("");
  }

  function renderCountryTabs() {
    $("#countryTabs").innerHTML = config.countries
      .map((country) => `<button class="${country.id === state.country ? "active" : ""}" type="button" data-country="${country.id}">${country.label}</button>`)
      .join("");
    $$("#countryTabs button").forEach((button) => {
      button.addEventListener("click", () => {
        state.country = button.dataset.country;
        renderCountryTabs();
        renderCountryPanel();
      });
    });
  }

  function renderCountryPanel() {
    const country = config.countries.find((item) => item.id === state.country);
    $("#countryPanel").innerHTML = `
      <div class="country-hero">
        <span>${country.flag}</span>
        <div>
          <h3>${country.heading}</h3>
          <p>${country.registration}</p>
        </div>
        <button id="copyCountryMaterials" class="copy-btn" type="button">复制当前主体材料</button>
      </div>
      <div class="country-columns">
        <article><h4>常见公司类型</h4>${list(country.entityTypes)}</article>
        <article><h4>特有注册文件</h4>${list(country.registrationDocuments)}</article>
        <article><h4>注册号/登记信息</h4><p>${country.registrationNumber}</p></article>
      </div>
      <article class="shared-materials">
        <h4>共用所需信息</h4>
        ${list(config.sharedKycMaterials)}
      </article>
      <p class="strong-note"><strong>重要：</strong>身份文件建议用手机直接拍照上传，确保四角完整、彩色清晰、无遮挡、不反光。</p>
      <p class="mini-note">${country.note}</p>
    `;
  }

  function getCountryMaterialText() {
    const country = config.countries.find((item) => item.id === state.country);
    const lines = [
      country.heading,
      "",
      country.registration,
      "",
      "常见公司类型：",
      ...country.entityTypes.map((item) => `- ${item}`),
      "",
      "该国家/地区特有注册文件：",
      ...country.registrationDocuments.map((item) => `- ${item}`),
      "",
      "注册号/登记信息：",
      country.registrationNumber,
      "",
      "共用所需信息：",
      ...config.sharedKycMaterials.map((item) => `- ${item}`),
      "",
      "上传提醒：身份文件建议用手机直接拍照上传，确保四角完整、彩色清晰、无遮挡、不反光。",
      country.note
    ];
    return lines.join("\n");
  }

  function renderScreen(target, screen) {
    $(target).innerHTML = `
      <div class="mock-screen">
        <div class="window-bar"><span></span><span></span><span></span></div>
        <aside>
          <b>Adyen</b>
          ${screen.menu.map((item, index) => `<em class="${index === screen.active ? "selected" : ""}">${item}</em>`).join("")}
        </aside>
        <main>
          <h3>${screen.title}</h3>
          <div class="screen-search"></div>
          <div class="screen-table">${Array.from({ length: 9 }, () => "<span></span>").join("")}</div>
        </main>
      </div>
      <article class="screen-copy">
        <h3>${screen.caption}</h3>
        ${list(screen.steps)}
      </article>
    `;
  }

  function renderAgreementFlow() {
    $("#agreementFlow").innerHTML = config.agreementFlow
      .map((item, index) => `<article><span>${index + 1}</span><p>${item}</p></article>`)
      .join("");
  }

  function renderWalkthroughTabs() {
    $("#walkthroughTabs").innerHTML = config.walkthroughs
      .map((item) => `<button class="${item.id === state.walkthrough ? "active" : ""}" type="button" data-walkthrough="${item.id}">${item.label}</button>`)
      .join("");
    $$("#walkthroughTabs button").forEach((button) => {
      button.addEventListener("click", () => {
        state.walkthrough = button.dataset.walkthrough;
        renderWalkthroughTabs();
        renderWalkthroughPanel();
      });
    });
  }

  function renderWalkthroughPanel() {
    renderScreen("#walkthroughPanel", config.walkthroughs.find((item) => item.id === state.walkthrough));
  }

  function wireClicks() {
    document.addEventListener("click", (event) => {
      const jump = event.target.closest("[data-jump]");
      if (jump) setActiveSection(jump.dataset.jump);
      const countryCopy = event.target.closest("#copyCountryMaterials");
      if (countryCopy) {
        navigator.clipboard.writeText(getCountryMaterialText());
        countryCopy.textContent = "已复制";
        setTimeout(() => (countryCopy.textContent = "复制当前主体材料"), 1600);
      }
    });
    $$(".nav-item").forEach((button) => button.addEventListener("click", () => setActiveSection(button.dataset.section)));
    $("#copyChecklist").addEventListener("click", async () => {
      const text = config.readinessChecklist.map((item) => `- [ ] ${item}`).join("\n");
      await navigator.clipboard.writeText(text);
      $("#copyChecklist").textContent = "已复制";
      setTimeout(() => ($("#copyChecklist").textContent = "复制检查清单"), 1600);
    });
  }

  function init() {
    renderLaunchSteps();
    renderChecks("#readiness", config.readinessChecklist);
    renderCards("#testSteps", config.testSteps, "Test setup");
    renderScreen("#testScreen", config.testScreen);
    renderCountryTabs();
    renderCountryPanel();
    renderChecks("#kycReview", config.kycReviewChecklist);
    renderScreen("#kycScreen", config.kycScreen);
    renderAgreementFlow();
    renderCards("#agreementDocs", config.agreementDocuments);
    renderCards("#saqaCards", config.saqaCards);
    $("#saqaLinks").innerHTML = config.saqaLinks.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.title}</a>`).join("");
    renderWalkthroughTabs();
    renderWalkthroughPanel();
    renderChecks("#productionChecklist", config.productionChecklist);
    renderCards("#sourceCards", config.sources, "Official docs");
    wireClicks();
  }

  init();
})();
