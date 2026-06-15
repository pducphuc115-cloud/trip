const spots = [
  {
    id: "forbidden-city",
    name: "北京故宫",
    city: "北京",
    location: "北京市东城区",
    region: "华北",
    themes: ["历史文化", "亲子游", "摄影"],
    season: ["春季", "秋季"],
    days: "半天到 1 天",
    dayGroup: "1",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 100,
    weekend: 96,
    image: "assets/forbidden-city.jpg",
    summary: "中国古代宫廷建筑代表，适合了解明清历史、宫廷空间和古建美学。",
    reason: "建筑规模、历史密度和展陈内容都足够丰富，是第一次到北京最值得安排的文化景点。",
    ticket: "建议提前预约，珍宝馆等展馆可能需单独购票。开放时间以官方公告为准。",
    transport: "地铁到天安门东或天安门西站后步行，旺季建议预留安检时间。",
    route: "午门入场 - 太和殿广场 - 中轴三大殿 - 乾清宫 - 珍宝馆 - 神武门出。",
    highlights: ["太和殿", "中和殿", "保和殿", "珍宝馆", "角楼"],
    food: "可到景山、王府井或前门一带用餐，选择更多。",
    stay: "优先选择东城区或地铁 1、2、5、8 号线附近。",
    photo: "角楼日落、太和殿广场、红墙门洞、景山俯拍故宫全景。",
    tips: ["提前预约门票", "周一通常闭馆", "旺季建议早到", "不要从天安门区域逆向规划太紧"],
    audience: "历史文化爱好者、亲子研学、摄影用户",
    nearby: ["景山公园", "天安门广场", "王府井"]
  },
  {
    id: "west-lake",
    name: "杭州西湖",
    city: "杭州",
    location: "浙江省杭州市",
    region: "华东",
    themes: ["城市观光", "自然风光", "情侣游"],
    season: ["春季", "秋季"],
    days: "1 到 2 天",
    dayGroup: "2-3",
    budget: "低预算",
    budgetRank: 1,
    popularity: 98,
    weekend: 97,
    image: "assets/west-lake.png",
    summary: "城市、湖景、园林和人文故事结合紧密，适合慢走、骑行和轻松观光。",
    reason: "不依赖复杂行程也能有完整体验，适合第一次到杭州或周末短途旅行。",
    ticket: "西湖大部分区域免费，雷峰塔、游船等项目单独收费。",
    transport: "地铁到龙翔桥站或凤起路站后步行，也适合骑行环湖。",
    route: "断桥 - 白堤 - 孤山 - 苏堤 - 雷峰塔 - 南山路夜景。",
    highlights: ["断桥残雪", "苏堤春晓", "雷峰塔", "三潭印月", "曲院风荷"],
    food: "西湖醋鱼、东坡肉、龙井虾仁，也可去湖滨或吴山夜市。",
    stay: "湖滨、武林广场、南山路周边交通和餐饮更方便。",
    photo: "断桥清晨、苏堤树影、雷峰塔夕照、湖滨城市天际线。",
    tips: ["节假日湖边人多", "早上或傍晚体验更好", "骑行注意还车点", "游船看天气"],
    audience: "情侣、城市观光用户、轻体力自由行用户",
    nearby: ["灵隐寺", "河坊街", "中国茶叶博物馆"]
  },
  {
    id: "terracotta-army",
    name: "西安兵马俑",
    city: "西安",
    location: "陕西省西安市临潼区",
    region: "西北",
    themes: ["历史文化", "研学旅行"],
    season: ["春季", "秋季"],
    days: "半天到 1 天",
    dayGroup: "1",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 94,
    weekend: 88,
    image: "assets/terracotta-army.jpg",
    summary: "秦代军阵遗址极具震撼力，适合结合讲解理解秦朝历史和考古发现。",
    reason: "一号坑的空间尺度和陶俑细节很有冲击力，是西安历史文化游的核心目的地。",
    ticket: "建议提前购票，旺季尽量避开上午团队高峰。",
    transport: "从西安市区乘坐旅游专线或自驾前往，通常可与华清宫同日安排。",
    route: "一号坑 - 三号坑 - 二号坑 - 铜车马展厅 - 文创区。",
    highlights: ["一号坑", "二号坑", "三号坑", "铜车马展厅"],
    food: "可回市区安排肉夹馍、凉皮、biangbiang 面，景区餐饮以便捷为主。",
    stay: "建议住钟楼、小寨或大雁塔附近，交通和夜游更方便。",
    photo: "一号坑俯拍视角、陶俑队列细节、展厅光影。",
    tips: ["建议请讲解", "展厅人多注意错峰", "不要把行程排得太赶", "文创消费按需选择"],
    audience: "历史文化爱好者、研学家庭、第一次到西安的游客",
    nearby: ["华清宫", "骊山", "西安城墙"]
  },
  {
    id: "li-river",
    name: "桂林漓江",
    city: "桂林",
    location: "广西壮族自治区桂林市",
    region: "华南",
    themes: ["自然风光", "摄影", "亲子游"],
    season: ["春季", "秋季"],
    days: "2 到 3 天",
    dayGroup: "2-3",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 92,
    weekend: 82,
    image: "assets/li-river.jpg",
    summary: "喀斯特山水代表，适合坐船、竹筏、骑行和阳朔慢游。",
    reason: "山水辨识度高，行程节奏可松可紧，很适合家庭和摄影用户。",
    ticket: "漓江游船、竹筏和部分景区单独收费，雨季项目可能调整。",
    transport: "从桂林出发乘船到阳朔，或先到阳朔再安排兴坪、遇龙河。",
    route: "桂林市区 - 漓江游船 - 兴坪古镇 - 阳朔西街 - 遇龙河骑行。",
    highlights: ["漓江竹筏", "兴坪古镇", "九马画山", "阳朔西街"],
    food: "桂林米粉、啤酒鱼、田螺酿、竹筒饭。",
    stay: "阳朔西街附近方便，遇龙河沿线更安静。",
    photo: "兴坪 20 元人民币背景、遇龙河晨雾、阳朔田园骑行路。",
    tips: ["雨季关注水位", "竹筏项目看天气", "阳朔夜间商业区较热闹", "摄影建议早起"],
    audience: "亲子家庭、摄影爱好者、自然风光旅行者",
    nearby: ["象鼻山", "遇龙河", "银子岩"]
  },
  {
    id: "zhangjiajie",
    name: "张家界国家森林公园",
    city: "张家界",
    location: "湖南省张家界市",
    region: "华中",
    themes: ["自然风光", "登山", "摄影"],
    season: ["春季", "秋季"],
    days: "2 到 3 天",
    dayGroup: "2-3",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 91,
    weekend: 72,
    image: "assets/zhangjiajie.jpg",
    summary: "石英砂岩峰林景观密集，路线丰富，适合多日徒步和山景摄影。",
    reason: "景区体量大、景观辨识度强，适合把自然风光旅行做成完整主题。",
    ticket: "核心景区门票通常多日有效，索道、电梯等交通另计。",
    transport: "到张家界市后前往武陵源景区入口，景区内靠环保车串联。",
    route: "袁家界 - 百龙天梯 - 天子山 - 金鞭溪 - 十里画廊。",
    highlights: ["袁家界", "天子山", "金鞭溪", "百龙天梯"],
    food: "三下锅、腊肉、葛根粉，武陵源镇选择较集中。",
    stay: "武陵源入口附近适合多日进出景区。",
    photo: "袁家界观景台、天子山云雾、金鞭溪峡谷线。",
    tips: ["景区范围大", "提前规划路线", "预留体力", "雨雾天气也可能出片"],
    audience: "自然风光用户、徒步用户、摄影用户",
    nearby: ["天门山", "黄龙洞", "宝峰湖"]
  },
  {
    id: "huangshan",
    name: "黄山风景区",
    city: "黄山",
    location: "安徽省黄山市",
    region: "华东",
    themes: ["自然风光", "登山", "摄影"],
    season: ["春季", "秋季", "冬季"],
    days: "2 天",
    dayGroup: "2-3",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 90,
    weekend: 80,
    image: "assets/huangshan.jpg",
    summary: "奇松、怪石、云海和日出构成经典山岳体验，适合两日登山。",
    reason: "景观层次稳定，山上住宿能换来日出和云海机会，是成熟的山岳旅行选择。",
    ticket: "门票、索道、山上住宿需分别预算，旺季住宿建议提前订。",
    transport: "到黄山北站后转乘景区交通到汤口，再换乘景交车进山。",
    route: "云谷寺索道 - 始信峰 - 光明顶 - 西海大峡谷 - 迎客松 - 玉屏索道。",
    highlights: ["迎客松", "光明顶", "西海大峡谷", "云海", "日出"],
    food: "毛豆腐、臭鳜鱼、黄山烧饼，山上餐饮价格较高。",
    stay: "山上住光明顶或白云宾馆周边看日出方便，山下住汤口更省预算。",
    photo: "光明顶日出、始信峰松石、西海大峡谷栈道。",
    tips: ["山上天气变化快", "准备防风外套", "穿舒适登山鞋", "不要低估台阶强度"],
    audience: "登山用户、摄影用户、自然风光爱好者",
    nearby: ["宏村", "西递", "屯溪老街"]
  },
  {
    id: "jiuzhaigou",
    name: "九寨沟风景区",
    city: "阿坝",
    location: "四川省阿坝藏族羌族自治州",
    region: "西南",
    themes: ["自然风光", "摄影", "亲子游"],
    season: ["秋季"],
    days: "1 到 2 天",
    dayGroup: "2-3",
    budget: "高预算",
    budgetRank: 3,
    popularity: 89,
    weekend: 58,
    image: "assets/jiuzhaigou.jpg",
    summary: "彩林、海子和瀑布组成高辨识度景观，秋季色彩最有代表性。",
    reason: "景区观光车组织成熟，体力压力相对可控，适合用一天集中欣赏水景。",
    ticket: "门票和观光车一般合并购票，旺季需提前预约。",
    transport: "可飞九寨黄龙机场后转车，也可从成都乘车前往。",
    route: "沟口 - 树正群海 - 诺日朗 - 五花海 - 长海 - 五彩池。",
    highlights: ["五花海", "诺日朗瀑布", "长海", "树正群海"],
    food: "牦牛肉、青稞饼、藏式火锅，景区内以简餐为主。",
    stay: "沟口酒店选择集中，便于第二天早进景区。",
    photo: "五花海高处俯拍、诺日朗瀑布、秋季彩林倒影。",
    tips: ["海拔较高", "注意高原反应", "秋季住宿紧张", "景区内按观光车路线规划"],
    audience: "摄影用户、亲子家庭、自然景观旅行者",
    nearby: ["黄龙景区", "松潘古城", "川主寺"]
  },
  {
    id: "lijiang",
    name: "丽江古城",
    city: "丽江",
    location: "云南省丽江市",
    region: "西南",
    themes: ["古城文化", "慢旅行", "情侣游"],
    season: ["春季", "秋季"],
    days: "2 到 3 天",
    dayGroup: "2-3",
    budget: "中等预算",
    budgetRank: 2,
    popularity: 86,
    weekend: 68,
    image: "assets/lijiang.jpg",
    summary: "古城街巷、纳西文化和周边雪山资源组合，适合慢旅行和情侣游。",
    reason: "行程弹性大，既能古城闲逛，也能衔接玉龙雪山、束河和白沙。",
    ticket: "古城街区通常免费，木府、玉龙雪山等项目单独收费。",
    transport: "到丽江三义机场或丽江站后打车、公交前往古城。",
    route: "大水车 - 四方街 - 木府 - 狮子山 - 束河古镇 - 白沙古镇。",
    highlights: ["四方街", "木府", "大水车", "束河古镇", "玉龙雪山周边"],
    food: "腊排骨火锅、鸡豆凉粉、纳西烤鱼、鲜花饼。",
    stay: "喜欢安静可住束河或白沙，喜欢热闹可住大研古城外围。",
    photo: "古城夜景、石板路巷口、狮子山俯拍、白沙雪山背景。",
    tips: ["商业化程度较高", "住宿提前看位置和评价", "石板路拖箱不方便", "雪山行程需看天气"],
    audience: "情侣、慢旅行用户、古城文化用户",
    nearby: ["束河古镇", "白沙古镇", "玉龙雪山"]
  },
  {
    id: "yalong-bay",
    name: "三亚亚龙湾",
    city: "三亚",
    location: "海南省三亚市",
    region: "华南",
    themes: ["海滨度假", "亲子游", "情侣游"],
    season: ["冬季", "春季"],
    days: "2 到 4 天",
    dayGroup: "4+",
    budget: "高预算",
    budgetRank: 3,
    popularity: 88,
    weekend: 74,
    image: "assets/yalong-bay.jpg",
    summary: "成熟海滨度假区，沙滩、酒店和海上项目集中，适合放松型行程。",
    reason: "度假配套成熟，亲子和情侣都能找到低门槛玩法。",
    ticket: "沙滩公共区域相对开放，海上项目和森林公园另计。",
    transport: "从三亚凤凰机场乘车前往亚龙湾，市内打车和租车都方便。",
    route: "酒店沙滩 - 亚龙湾热带天堂森林公园 - 海上项目 - 太阳湾公路。",
    highlights: ["亚龙湾沙滩", "热带天堂森林公园", "海上项目", "度假酒店"],
    food: "海南粉、椰子鸡、清补凉、海鲜加工。",
    stay: "亚龙湾一线酒店适合度假，市区住宿更省预算。",
    photo: "清晨沙滩、酒店泳池、太阳湾公路、森林公园观景台。",
    tips: ["旺季酒店价格高", "海上项目注意安全", "关注台风和降雨", "防晒要充分"],
    audience: "亲子家庭、情侣、海滨度假用户",
    nearby: ["太阳湾", "蜈支洲岛", "三亚湾"]
  },
  {
    id: "bund",
    name: "上海外滩",
    city: "上海",
    location: "上海市黄浦区",
    region: "华东",
    themes: ["城市观光", "夜景", "摄影"],
    season: ["全年", "春季", "秋季"],
    days: "半天",
    dayGroup: "1",
    budget: "低预算",
    budgetRank: 1,
    popularity: 93,
    weekend: 95,
    image: "assets/bund.jpg",
    summary: "黄浦江两岸城市天际线和万国建筑群，是上海夜景和城市观光核心。",
    reason: "交通方便、时间成本低，适合和南京东路、豫园、陆家嘴串联。",
    ticket: "外滩公共步道免费，观光隧道、游船、观景台单独收费。",
    transport: "地铁到南京东路站后步行，夜间人流较大。",
    route: "南京东路 - 外滩万国建筑群 - 外白渡桥 - 黄浦江游船 - 陆家嘴夜景。",
    highlights: ["万国建筑群", "黄浦江夜景", "陆家嘴天际线", "南京东路"],
    food: "本帮菜、生煎、小笼包，南京东路和人民广场选择多。",
    stay: "人民广场、南京东路、陆家嘴附近都方便，但核心区价格较高。",
    photo: "外滩平台拍陆家嘴、外白渡桥、蓝调时刻城市天际线。",
    tips: ["夜景时段人多", "注意保管随身物品", "节假日限流可能调整", "拍照建议避开正晚高峰"],
    audience: "城市观光用户、摄影用户、短停游客",
    nearby: ["南京东路", "豫园", "陆家嘴"]
  }
];

const routes = [
  {
    id: "weekend-culture",
    title: "3 日历史文化线",
    days: "3 天",
    budget: "中等预算",
    audience: "第一次城市文化游",
    spots: ["北京故宫", "西安兵马俑", "上海外滩"],
    copy: "适合把城市地标和历史内容放在一起比较，节奏紧凑但信息密度高。"
  },
  {
    id: "nature-five",
    title: "5 日山水摄影线",
    days: "5 天",
    budget: "中等预算",
    audience: "摄影和自然风光",
    spots: ["桂林漓江", "张家界国家森林公园", "黄山风景区"],
    copy: "用山水、峰林和云海串联，适合愿意早起、看天气安排机位的旅行者。"
  },
  {
    id: "slow-seven",
    title: "7 日慢旅行度假线",
    days: "7 天",
    budget: "高预算",
    audience: "情侣和亲子放松",
    spots: ["丽江古城", "九寨沟风景区", "三亚亚龙湾"],
    copy: "把古城慢逛、自然水景和海滨休息组合起来，更适合长假和低压行程。"
  }
];

const state = {
  query: "",
  region: "",
  theme: "",
  days: "",
  budget: "",
  sort: "popular",
  favorites: new Set(JSON.parse(localStorage.getItem("tripFavorites") || "[]"))
};

const elements = {
  navToggle: document.querySelector("#navToggle"),
  mainNav: document.querySelector("#mainNav"),
  searchInput: document.querySelector("#searchInput"),
  heroSearch: document.querySelector("#heroSearch"),
  regionFilter: document.querySelector("#regionFilter"),
  themeFilter: document.querySelector("#themeFilter"),
  daysFilter: document.querySelector("#daysFilter"),
  budgetFilter: document.querySelector("#budgetFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  clearFilters: document.querySelector("#clearFilters"),
  spotGrid: document.querySelector("#spotGrid"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  detailSection: document.querySelector("#detailSection"),
  detailTitle: document.querySelector("#detailTitle"),
  detailLayout: document.querySelector("#detailLayout"),
  backToList: document.querySelector("#backToList"),
  routeGrid: document.querySelector("#routeGrid")
};

function saveFavorites() {
  localStorage.setItem("tripFavorites", JSON.stringify([...state.favorites]));
}

function matchesQuery(spot) {
  if (!state.query) return true;
  const text = [
    spot.name,
    spot.city,
    spot.location,
    spot.region,
    spot.summary,
    spot.themes.join(" "),
    spot.highlights.join(" "),
    spot.audience
  ].join(" ");
  return text.toLowerCase().includes(state.query.toLowerCase());
}

function getFilteredSpots() {
  const filtered = spots.filter((spot) => {
    const regionMatch = !state.region || spot.region === state.region;
    const themeMatch = !state.theme || spot.themes.includes(state.theme);
    const daysMatch = !state.days || spot.dayGroup === state.days;
    const budgetMatch = !state.budget || spot.budget === state.budget;
    return regionMatch && themeMatch && daysMatch && budgetMatch && matchesQuery(spot);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "weekend") return b.weekend - a.weekend;
    if (state.sort === "budget") return a.budgetRank - b.budgetRank || b.popularity - a.popularity;
    return b.popularity - a.popularity;
  });
}

function renderSpots() {
  const filtered = getFilteredSpots();
  elements.resultCount.textContent = `共找到 ${filtered.length} 个景点攻略`;
  elements.emptyState.hidden = filtered.length > 0;
  elements.spotGrid.innerHTML = filtered.map(renderSpotCard).join("");
}

function renderSpotCard(spot) {
  const active = state.favorites.has(spot.id);
  return `
    <article class="spot-card">
      <figure>
        <img src="${spot.image}" alt="${spot.name}" loading="lazy" />
        <div class="badge-row">
          <span class="badge">${spot.region}</span>
          <span class="badge">${spot.days}</span>
        </div>
      </figure>
      <div class="spot-body">
        <div class="spot-title-row">
          <div>
            <h3>${spot.name}</h3>
            <div class="spot-summary">${spot.location}</div>
          </div>
          <button class="favorite-btn ${active ? "active" : ""}" type="button" data-favorite="${spot.id}" aria-label="${active ? "取消收藏" : "收藏"}${spot.name}">
            ${active ? "已" : "藏"}
          </button>
        </div>
        <p class="spot-summary">${spot.summary}</p>
        <div class="meta-row">
          <span>季节：${spot.season.join("、")}</span>
          <span>预算：${spot.budget}</span>
        </div>
        <div class="tag-list">
          ${spot.themes.map((theme) => `<span class="theme-tag">${theme}</span>`).join("")}
        </div>
        <div class="card-actions">
          <button class="card-action" type="button" data-detail="${spot.id}">查看攻略</button>
          <button class="text-link" type="button" data-route-from="${spot.id}">路线</button>
        </div>
      </div>
    </article>
  `;
}

function renderDetail(spotId) {
  const spot = spots.find((item) => item.id === spotId);
  if (!spot) return;

  elements.detailTitle.textContent = spot.name;
  elements.detailLayout.innerHTML = `
    <div class="detail-hero">
      <img src="${spot.image}" alt="${spot.name}" />
      <div class="detail-summary">
        <div>
          <p class="eyebrow">${spot.region} / ${spot.city}</p>
          <h3>${spot.name}</h3>
        </div>
        <p>${spot.reason}</p>
        <div class="tag-list">
          ${spot.themes.map((theme) => `<span class="theme-tag">${theme}</span>`).join("")}
        </div>
        <div class="detail-facts">
          <div><strong>建议天数</strong>${spot.days}</div>
          <div><strong>最佳季节</strong>${spot.season.join("、")}</div>
          <div><strong>预算区间</strong>${spot.budget}</div>
          <div><strong>适合人群</strong>${spot.audience}</div>
        </div>
      </div>
    </div>
    <div class="detail-grid">
      ${detailCard("门票和开放", spot.ticket)}
      ${detailCard("交通方式", spot.transport)}
      ${detailCard("推荐路线", spot.route)}
      ${detailList("必看亮点", spot.highlights)}
      ${detailCard("美食推荐", spot.food)}
      ${detailCard("住宿建议", spot.stay)}
      ${detailCard("拍照机位", spot.photo)}
      ${detailList("避坑提醒", spot.tips)}
      ${detailList("周边推荐", spot.nearby)}
    </div>
  `;
  elements.detailSection.hidden = false;
  elements.detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function detailCard(title, copy) {
  return `<section class="detail-card"><h4>${title}</h4><p>${copy}</p></section>`;
}

function detailList(title, items) {
  return `
    <section class="detail-card">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderRoutes() {
  elements.routeGrid.innerHTML = routes.map((route) => `
    <article class="route-card">
      <div>
        <p class="eyebrow">${route.days} / ${route.budget}</p>
        <h3>${route.title}</h3>
      </div>
      <p>${route.copy}</p>
      <div class="route-meta">
        <span>${route.audience}</span>
        ${route.spots.map((spot) => `<span>${spot}</span>`).join("")}
      </div>
      <button type="button" data-route="${route.id}">查看包含景点</button>
    </article>
  `).join("");
}

function applySearch(value) {
  state.query = value.trim();
  elements.searchInput.value = state.query;
  renderSpots();
  document.querySelector("#spots").scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearFilters() {
  state.query = "";
  state.region = "";
  state.theme = "";
  state.days = "";
  state.budget = "";
  state.sort = "popular";
  elements.searchInput.value = "";
  elements.regionFilter.value = "";
  elements.themeFilter.value = "";
  elements.daysFilter.value = "";
  elements.budgetFilter.value = "";
  elements.sortFilter.value = "popular";
  renderSpots();
}

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  elements.navToggle.setAttribute("aria-expanded", "false");
}

function scrollToCurrentHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => target.scrollIntoView({ behavior: "auto", block: "start" }), 80);
  }
}

elements.navToggle.addEventListener("click", () => {
  const nextOpen = !document.body.classList.contains("nav-open");
  document.body.classList.toggle("nav-open", nextOpen);
  elements.navToggle.setAttribute("aria-expanded", String(nextOpen));
});

elements.mainNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMobileNav();
});

elements.heroSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  applySearch(elements.searchInput.value);
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderSpots();
});

elements.regionFilter.addEventListener("change", (event) => {
  state.region = event.target.value;
  renderSpots();
});

elements.themeFilter.addEventListener("change", (event) => {
  state.theme = event.target.value;
  renderSpots();
});

elements.daysFilter.addEventListener("change", (event) => {
  state.days = event.target.value;
  renderSpots();
});

elements.budgetFilter.addEventListener("change", (event) => {
  state.budget = event.target.value;
  renderSpots();
});

elements.sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderSpots();
});

elements.clearFilters.addEventListener("click", clearFilters);

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  const quickButton = event.target.closest("[data-quick]");
  const themeButton = event.target.closest("[data-theme-jump]");
  const routeButton = event.target.closest("[data-route]");
  const routeFromButton = event.target.closest("[data-route-from]");

  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    saveFavorites();
    renderSpots();
  }

  if (detailButton) {
    renderDetail(detailButton.dataset.detail);
  }

  if (quickButton) {
    applySearch(quickButton.dataset.quick);
  }

  if (themeButton) {
    state.theme = themeButton.dataset.themeJump;
    elements.themeFilter.value = state.theme;
    renderSpots();
    document.querySelector("#spots").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (routeButton) {
    const route = routes.find((item) => item.id === routeButton.dataset.route);
    if (!route) return;
    state.query = "";
    state.theme = "";
    elements.searchInput.value = "";
    elements.themeFilter.value = "";
    const ids = route.spots.map((name) => spots.find((spot) => spot.name === name)?.id).filter(Boolean);
    elements.spotGrid.innerHTML = spots.filter((spot) => ids.includes(spot.id)).map(renderSpotCard).join("");
    elements.resultCount.textContent = `${route.title} 包含 ${ids.length} 个景点`;
    elements.emptyState.hidden = true;
    document.querySelector("#spots").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (routeFromButton) {
    const spot = spots.find((item) => item.id === routeFromButton.dataset.routeFrom);
    if (!spot) return;
    state.theme = spot.themes[0];
    elements.themeFilter.value = state.theme;
    renderSpots();
    document.querySelector("#spots").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

elements.backToList.addEventListener("click", () => {
  elements.detailSection.hidden = true;
  document.querySelector("#spots").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderSpots();
renderRoutes();
scrollToCurrentHash();
