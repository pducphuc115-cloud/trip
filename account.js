const accountSpots = [
  { id: "forbidden-city", name: "北京故宫", city: "北京", days: "半天到 1 天", budget: "中等预算", themes: ["历史文化", "亲子游", "摄影"], image: "assets/forbidden-city.jpg" },
  { id: "west-lake", name: "杭州西湖", city: "杭州", days: "1 到 2 天", budget: "低预算", themes: ["城市观光", "自然风光", "情侣游"], image: "assets/west-lake.png" },
  { id: "terracotta-army", name: "西安兵马俑", city: "西安", days: "半天到 1 天", budget: "中等预算", themes: ["历史文化", "研学旅行"], image: "assets/terracotta-army.jpg" },
  { id: "li-river", name: "桂林漓江", city: "桂林", days: "2 到 3 天", budget: "中等预算", themes: ["自然风光", "摄影", "亲子游"], image: "assets/li-river.jpg" },
  { id: "zhangjiajie", name: "张家界国家森林公园", city: "张家界", days: "2 到 3 天", budget: "中等预算", themes: ["自然风光", "登山", "摄影"], image: "assets/zhangjiajie.jpg" },
  { id: "huangshan", name: "黄山风景区", city: "黄山", days: "2 天", budget: "中等预算", themes: ["自然风光", "登山", "摄影"], image: "assets/huangshan.jpg" },
  { id: "jiuzhaigou", name: "九寨沟风景区", city: "阿坝", days: "1 到 2 天", budget: "高预算", themes: ["自然风光", "摄影", "亲子游"], image: "assets/jiuzhaigou.jpg" },
  { id: "lijiang", name: "丽江古城", city: "丽江", days: "2 到 3 天", budget: "中等预算", themes: ["古城文化", "慢旅行", "情侣游"], image: "assets/lijiang.jpg" },
  { id: "yalong-bay", name: "三亚亚龙湾", city: "三亚", days: "2 到 4 天", budget: "高预算", themes: ["海滨度假", "亲子游", "情侣游"], image: "assets/yalong-bay.jpg" },
  { id: "bund", name: "上海外滩", city: "上海", days: "半天", budget: "低预算", themes: ["城市观光", "夜景", "摄影"], image: "assets/bund.jpg" }
];

const accountElements = {
  navToggle: document.querySelector("#navToggle"),
  mainNav: document.querySelector("#mainNav"),
  loginForm: document.querySelector("#loginForm"),
  loginMessage: document.querySelector("#loginMessage"),
  profileContent: document.querySelector("#profileContent"),
  logoutButton: document.querySelector("#logoutButton"),
  accountNavLink: document.querySelector("#accountNavLink")
};

function readUser() {
  return JSON.parse(localStorage.getItem("tripUser") || "null");
}

function readFavorites() {
  return new Set(JSON.parse(localStorage.getItem("tripFavorites") || "[]"));
}

function writeUser(user) {
  localStorage.setItem("tripUser", JSON.stringify(user));
}

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  accountElements.navToggle?.setAttribute("aria-expanded", "false");
}

function setupNav() {
  accountElements.navToggle?.addEventListener("click", () => {
    const nextOpen = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", nextOpen);
    accountElements.navToggle.setAttribute("aria-expanded", String(nextOpen));
  });

  accountElements.mainNav?.addEventListener("click", (event) => {
    if (event.target.matches("a")) closeMobileNav();
  });

  const user = readUser();
  if (user && accountElements.accountNavLink) {
    accountElements.accountNavLink.textContent = user.name;
    accountElements.accountNavLink.href = "profile.html";
  }
}

function setupLoginPage() {
  if (!accountElements.loginForm) return;

  const user = readUser();
  if (user) {
    accountElements.loginForm.elements.name.value = user.name || "";
    accountElements.loginForm.elements.email.value = user.email || "";
    accountElements.loginForm.elements.city.value = user.city || "";
    accountElements.loginForm.elements.style.value = user.style || "自然风光";
  }

  accountElements.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(accountElements.loginForm);
    const newUser = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      city: formData.get("city").trim(),
      style: formData.get("style"),
      createdAt: user?.createdAt || new Date().toLocaleDateString("zh-CN")
    };

    writeUser(newUser);
    accountElements.loginMessage.textContent = "登录成功，正在跳转个人主页。";
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 350);
  });
}

function setupProfilePage() {
  if (!accountElements.profileContent) return;

  const user = readUser();
  if (!user) {
    accountElements.logoutButton.hidden = true;
    accountElements.profileContent.innerHTML = `
      <div class="login-required">
        <p class="eyebrow">需要登录</p>
        <h2>登录后查看个人旅行档案</h2>
        <p>个人主页会展示你的收藏景点、旅行偏好和本地账号信息。当前项目使用浏览器本地存储模拟登录。</p>
        <a class="primary-action inline-action" href="login.html">去登录</a>
      </div>
    `;
    return;
  }

  accountElements.logoutButton.hidden = false;
  accountElements.logoutButton.addEventListener("click", () => {
    localStorage.removeItem("tripUser");
    window.location.href = "login.html";
  });

  const favorites = readFavorites();
  const favoriteSpots = accountSpots.filter((spot) => favorites.has(spot.id));
  const preferredSpots = accountSpots.filter((spot) => spot.themes.includes(user.style));
  const initial = user.name.slice(0, 1).toUpperCase();

  accountElements.profileContent.innerHTML = `
    <article class="profile-card">
      <div class="profile-cover"></div>
      <div class="profile-main">
        <div class="avatar">${initial}</div>
        <div>
          <h2>${user.name}</h2>
          <p>${user.email}</p>
        </div>
        <div class="profile-stats">
          <div><strong>${favoriteSpots.length}</strong><span>收藏景点</span></div>
          <div><strong>${preferredSpots.length}</strong><span>${user.style}推荐</span></div>
          <div><strong>${user.city || "未填"}</strong><span>常住城市</span></div>
        </div>
        <div class="tag-list">
          <span class="theme-tag">偏好：${user.style}</span>
          <span class="theme-tag">加入：${user.createdAt}</span>
        </div>
      </div>
    </article>
    <article class="profile-panel">
      <div>
        <p class="eyebrow">我的收藏</p>
        <h2>已收藏攻略</h2>
      </div>
      ${favoriteSpots.length ? `
        <div class="favorite-list">
          ${favoriteSpots.map(renderFavoriteItem).join("")}
        </div>
      ` : `
        <div class="profile-empty">
          还没有收藏景点。回到首页景点攻略列表，点击卡片右上角的“藏”即可加入这里。
        </div>
      `}
      <div>
        <p class="eyebrow">偏好推荐</p>
        <h2>${user.style}目的地</h2>
      </div>
      <div class="tag-list">
        ${preferredSpots.slice(0, 6).map((spot) => `<a class="text-link" href="index.html#spots">${spot.name}</a>`).join("")}
      </div>
    </article>
  `;
}

function renderFavoriteItem(spot) {
  return `
    <div class="favorite-item">
      <img src="${spot.image}" alt="${spot.name}" loading="lazy" />
      <div>
        <h3>${spot.name}</h3>
        <p>${spot.city} / ${spot.days} / ${spot.budget}</p>
      </div>
      <a class="text-link" href="index.html#spots">查看攻略</a>
    </div>
  `;
}

setupNav();
setupLoginPage();
setupProfilePage();
