(function () {
  const config = window.MERCHANT_ONBOARDING;
  const state = { country: config.countries[0].id, walkthrough: config.walkthroughs[0].id };
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function setActiveSection(sectionId) {
    $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.section === sectionId));
    $$(".section").forEach((section) => section.classList.toggle("active", section.id === sectionId));
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <h3>${country.heading || country.label}</h3>
          <p>${country.registration}</p>
        </div>
      </div>
      <div class="country-columns three">
        <article>
          <h4>常见公司类型</h4>
          <ul>${country.entityTypes.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article>
          <h4>该国家/地区特有注册文件</h4>
          <ul>${country.registrationDocuments.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article>
          <h4>注册号/登记信息</h4>
          <p>${country.registrationNumber}</p>
        </article>
      </div>
      <div class="shared-materials">
        <h4>共用所需信息（可在 config.js 编辑）</h4>
        <ul>${config.sharedKycMaterials.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="note-band strong-note">
        <strong>重要：</strong>身份文件建议用手机直接拍照上传，不建议提供扫描件、黑白件、压缩模糊件或带反光遮挡的图片。
      </div>
      <div class="mini-note">${country.note}</div>
    `;
  }

  function renderInfoStack(target, items) {
    $(target).innerHTML = items
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderTestSteps() {
    $("#testSteps").innerHTML = config.testSteps
      .map(
        (step, index) => `
          <article class="visual-step">
            <div class="step-art ${step.visual}">
              <span>${index + 1}</span>
              <i></i><i></i><i></i>
            </div>
            <div>
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderKycUploadSteps() {
    $("#kycUploadSteps").innerHTML = config.kycUploadSteps
      .map(
        (step, index) => `
          <article class="visual-step">
            <div class="step-art form">
              <span>${index + 1}</span>
              <i></i><i></i><i></i>
            </div>
            <div>
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderAgreementFlow() {
    $("#agreementFlow").innerHTML = config.agreementFlow
      .map(
        (item, index) => `
          <article class="agreement-step">
            <span>${index + 1}</span>
            <p>${item}</p>
          </article>
        `
      )
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
    const item = config.walkthroughs.find((walkthrough) => walkthrough.id === state.walkthrough);
    $("#walkthroughPanel").innerHTML = `
      <div class="screen-shot">
        <div class="window-bar"><span></span><span></span><span></span></div>
        <aside>
          <b>Adyen</b>
          <em>Payments</em>
          <em class="selected">Reports</em>
          <em>Settings</em>
          <em>Developers</em>
        </aside>
        <main>
          <div class="screen-title">${item.title}</div>
          <div class="screen-search"></div>
          <div class="screen-table">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </main>
      </div>
      <div class="walkthrough-copy">
        <h3>${item.title}</h3>
        <p>${item.caption}</p>
        <ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </div>
    `;
  }

  function renderSources() {
    const target = $("#sourceCards");
    if (!target) return;
    target.innerHTML = config.sources
      .map(
        (source) => `
          <a class="doc-card source-card" href="${source.url}" target="_blank" rel="noreferrer">
            <span>Official docs</span>
            <h3>${source.title}</h3>
            <p>${source.detail}</p>
          </a>
        `
      )
      .join("");
  }

  function wireGlobalClicks() {
    document.addEventListener("click", (event) => {
      const jump = event.target.closest("[data-jump]");
      if (jump) setActiveSection(jump.dataset.jump);
      const section = event.target.closest("[data-section]");
      if (section && !section.classList.contains("nav-item")) setActiveSection(section.dataset.section);
    });
    $$(".nav-item").forEach((button) => button.addEventListener("click", () => setActiveSection(button.dataset.section)));
  }

  function init() {
    renderLaunchSteps();
    renderTestSteps();
    renderCountryTabs();
    renderCountryPanel();
    renderKycUploadSteps();
    renderAgreementFlow();
    renderInfoStack("#saqaCards", config.saqaCards);
    $("#saqaLinks").innerHTML = config.saqaLinks
      .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.title}</a>`)
      .join("");
    renderWalkthroughTabs();
    renderWalkthroughPanel();
    renderSources();
    wireGlobalClicks();
  }

  init();
})();
