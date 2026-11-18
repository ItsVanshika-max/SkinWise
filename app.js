const PRODUCTS = [
  {
    id: "retinol-serum",
    name: "Resurfacing Retinol Serum",
    brand: "CeraVe",
    category: "Serum",
    actives: ["retinol", "ceramides", "niacinamide"],
    time: "PM",
    price: 18.99,
    rating: "4.6",
    art: "retinol",
    description: "A retinol serum with barrier-supporting ingredients."
  },
  {
    id: "glycolic-toner",
    name: "Glycolic Acid 7% Toning Solution",
    brand: "The Ordinary",
    category: "Toner",
    actives: ["glycolic acid"],
    time: "PM",
    price: 13,
    rating: "4.4",
    art: "glycolic",
    description: "An exfoliating toner with glycolic acid."
  },
  {
    id: "hyaluronic-serum",
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    category: "Serum",
    actives: ["hyaluronic acid"],
    time: "Both",
    price: 9.9,
    rating: "4.7",
    art: "hydration",
    description: "A lightweight hydration serum with hyaluronic acid."
  },
  {
    id: "bha-liquid",
    name: "Skin Perfecting 2% BHA Liquid",
    brand: "Paula's Choice",
    category: "Toner",
    actives: ["salicylic acid"],
    time: "PM",
    price: 35,
    rating: "4.8",
    art: "salicylic",
    description: "A leave-on salicylic acid exfoliant for pore care."
  },
  {
    id: "acne-treatment",
    name: "Effaclar Duo Treatment",
    brand: "La Roche-Posay",
    category: "Treatment",
    actives: ["benzoyl peroxide"],
    time: "AM",
    price: 22.99,
    rating: "4.5",
    art: "benzoyl",
    description: "A targeted treatment featuring benzoyl peroxide."
  },
  {
    id: "vitamin-c",
    name: "C E Ferulic Antioxidant Serum",
    brand: "SkinCeuticals",
    category: "Serum",
    actives: ["vitamin c"],
    time: "AM",
    price: 182,
    rating: "4.9",
    art: "vitamin",
    description: "A daytime antioxidant serum with vitamin C."
  },
  {
    id: "spf",
    name: "UV Clear Broad-Spectrum SPF 46",
    brand: "EltaMD",
    category: "Sunscreen",
    actives: ["sunscreen", "niacinamide", "hyaluronic acid"],
    time: "AM",
    price: 43,
    rating: "4.8",
    art: "sunscreen",
    description: "A lightweight sunscreen for daily sun protection."
  },
  {
    id: "barrier-cream",
    name: "Daily Moisturizing Cream",
    brand: "CeraVe",
    category: "Moisturizer",
    actives: ["ceramides", "hyaluronic acid"],
    time: "Both",
    price: 16.99,
    rating: "4.8",
    art: "cream",
    description: "A moisturizing cream with ceramides and hyaluronic acid."
  }
];

const CONFLICTS = [
  {
    ingredients: ["retinol", "glycolic acid"],
    risk: "Medium",
    message: "Using retinol and glycolic acid in the same routine may increase dryness or irritation for some people.",
    recommendation: "Consider using them on separate evenings and introduce each gradually."
  },
  {
    ingredients: ["retinol", "salicylic acid"],
    risk: "Medium",
    message: "Combining retinol and salicylic acid may feel drying or irritating, especially when starting out.",
    recommendation: "Try alternating evenings instead of layering both at once."
  },
  {
    ingredients: ["benzoyl peroxide", "retinol"],
    risk: "Caution",
    message: "Compatibility can depend on the exact retinoid and product formulation.",
    recommendation: "Check the product directions or ask a dermatologist before layering."
  },
  {
    ingredients: ["vitamin c", "retinol"],
    risk: "Medium",
    message: "Layering these potent actives may be irritating for some skin types.",
    recommendation: "A common approach is vitamin C in the morning and retinol in the evening."
  },
  {
    ingredients: ["glycolic acid", "salicylic acid"],
    risk: "Medium",
    message: "Using two exfoliating acids together can be too much for some skin barriers.",
    recommendation: "Consider choosing one exfoliant per routine or alternating days."
  },
  {
    ingredients: ["benzoyl peroxide", "vitamin c"],
    risk: "Caution",
    message: "Benzoyl peroxide may affect some vitamin C formulas when applied together.",
    recommendation: "Consider separating them by time of day and follow product-specific guidance."
  },
  {
    ingredients: ["peptides", "glycolic acid"],
    risk: "Caution",
    message: "Low-pH exfoliating products may not pair well with every peptide formula.",
    recommendation: "Check both product labels or use them at different times."
  }
];

const SYNERGIES = [
  {
    ingredients: ["retinol", "hyaluronic acid"],
    name: "Hydration support",
    message: "Hyaluronic acid can add hydration alongside a retinol routine."
  },
  {
    ingredients: ["retinol", "ceramides"],
    name: "Barrier care",
    message: "A moisturizer with ceramides can support the skin barrier in a retinol routine."
  },
  {
    ingredients: ["vitamin c", "sunscreen"],
    name: "Daytime duo",
    message: "Vitamin C and broad-spectrum sunscreen are commonly used in morning routines."
  },
  {
    ingredients: ["niacinamide", "salicylic acid"],
    name: "Balanced blemish care",
    message: "These ingredients are often found together in routines for blemish-prone skin."
  },
  {
    ingredients: ["niacinamide", "hyaluronic acid"],
    name: "Everyday hydration",
    message: "Both ingredients are commonly included in hydrating, comfortable routines."
  }
];

const COMMON_ACTIVES = [
  "retinol", "glycolic acid", "salicylic acid", "benzoyl peroxide",
  "hyaluronic acid", "vitamin c", "niacinamide", "ceramides",
  "lactic acid", "peptides", "sunscreen"
];
const CATEGORIES = ["All", "Serum", "Toner", "Treatment", "Moisturizer", "Sunscreen"];
const CONCERNS = ["Acne", "Dryness", "Texture", "Redness", "Dark spots", "Dehydration", "Fine lines"];
const SKIN_TYPES = ["Dry", "Oily", "Combination", "Normal", "Sensitive"];
const SENSITIVITY_LEVELS = ["Low", "Medium", "High"];
const STORAGE_KEY = "skinwise-static-v1";

function defaultState() {
  return {
    activePage: "home",
    activeTab: "conflicts",
    category: "All",
    search: "",
    actives: ["retinol", "glycolic acid", "hyaluronic acid"],
    productIds: ["retinol-serum", "glycolic-toner", "hyaluronic-serum"],
    profile: { name: "", skinType: "Combination", sensitivity: "Medium", concerns: ["Acne", "Texture"] }
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    const parsed = JSON.parse(saved);
    const fallback = defaultState();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
    const savedProfile = parsed.profile && typeof parsed.profile === "object" && !Array.isArray(parsed.profile)
      ? parsed.profile
      : {};
    const profile = { ...fallback.profile, ...savedProfile };
    profile.name = typeof profile.name === "string" ? profile.name.slice(0, 60) : "";
    profile.skinType = SKIN_TYPES.includes(profile.skinType) ? profile.skinType : fallback.profile.skinType;
    profile.sensitivity = SENSITIVITY_LEVELS.includes(profile.sensitivity) ? profile.sensitivity : fallback.profile.sensitivity;
    profile.concerns = Array.isArray(profile.concerns)
      ? profile.concerns.filter(concern => CONCERNS.includes(concern))
      : fallback.profile.concerns;
    return {
      ...fallback,
      ...parsed,
      activePage: ["home", "routine", "dashboard", "profile"].includes(parsed.activePage) ? parsed.activePage : fallback.activePage,
      activeTab: ["conflicts", "synergies", "schedule"].includes(parsed.activeTab) ? parsed.activeTab : fallback.activeTab,
      category: CATEGORIES.includes(parsed.category) ? parsed.category : fallback.category,
      search: typeof parsed.search === "string" ? parsed.search : fallback.search,
      actives: Array.isArray(parsed.actives) ? parsed.actives.filter(item => typeof item === "string") : fallback.actives,
      productIds: Array.isArray(parsed.productIds) ? parsed.productIds.filter(id => PRODUCTS.some(product => product.id === id)) : fallback.productIds,
      profile
    };
  } catch (error) {
    console.warn("SkinWise could not read saved browser data; starting with the sample routine.", error);
    return defaultState();
  }
}

const state = loadState();
let toastTimer;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("SkinWise could not save data in this browser.", error);
    showToast("Your browser couldn't save this change.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function titleCase(value) {
  return value.replace(/\b[a-z]/g, character => character.toUpperCase());
}

function currentProducts() {
  return state.productIds.map(id => PRODUCTS.find(product => product.id === id)).filter(Boolean);
}

function analyzeRoutine() {
  const ingredients = state.actives.map(active => active.toLowerCase().trim()).filter(Boolean);
  const has = ingredient => ingredients.some(active => active.includes(ingredient));
  const conflicts = CONFLICTS.filter(rule => rule.ingredients.every(has));
  const synergies = SYNERGIES.filter(rule => rule.ingredients.every(has));
  const score = Math.max(20, 100 - conflicts.reduce((total, item) => {
    if (item.risk === "High") return total + 40;
    if (item.risk === "Medium") return total + 25;
    return total + 15;
  }, 0));
  const schedule = { morning: [], treatment: [], exfoliation: [], recovery: [] };

  ingredients.forEach(ingredient => {
    if (/hyaluronic|ceramide|niacinamide|sunscreen|spf/.test(ingredient)) {
      schedule.recovery.push(ingredient);
    } else if (/vitamin c|benzoyl/.test(ingredient)) {
      schedule.morning.push(ingredient);
    } else if (/retinol|retinoid/.test(ingredient)) {
      schedule.treatment.push(ingredient);
    } else if (/glycolic|salicylic|lactic|mandelic|exfoliat|acid/.test(ingredient)) {
      schedule.exfoliation.push(ingredient);
    } else {
      schedule.recovery.push(ingredient);
    }
  });

  Object.keys(schedule).forEach(key => {
    schedule[key] = [...new Set(schedule[key])];
  });
  return { ingredients, conflicts, synergies, score, schedule };
}

function getMorningSteps(schedule) {
  const steps = [...new Set([...schedule.morning, ...schedule.recovery])];
  if (!steps.some(ingredient => /sunscreen|spf/.test(ingredient))) steps.push("sunscreen");
  return steps;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function productCard(product) {
  const selected = state.productIds.includes(product.id);
  const visual = product.category === "Moisturizer" || product.category === "Sunscreen" ? "art-tube" : "art-bottle";
  return `
    <article class="product-card">
      <div class="product-art art-${escapeHtml(product.art)}">
        <span class="art-usage">${escapeHtml(product.time)}</span>
        <span class="art-label">skinwise</span>
        <span class="${visual}"></span>
      </div>
      <div class="product-info">
        <span class="product-brand">${escapeHtml(product.brand)}</span>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <div class="product-actives">${product.actives.map(active => `<span class="product-active">${escapeHtml(active)}</span>`).join("")}</div>
        <p class="product-description">${escapeHtml(product.description)}</p>
        <div class="product-meta"><span class="product-price">$${product.price.toFixed(2)}</span><span class="product-rating">★ ${escapeHtml(product.rating)}</span></div>
        <button class="product-add${selected ? " is-added" : ""}" type="button" data-action="product" data-product-id="${escapeHtml(product.id)}" aria-pressed="${selected}">${selected ? "✓ Added to routine" : "+ Add to routine"}</button>
      </div>
    </article>`;
}

function renderHome() {
  const analysis = analyzeRoutine();
  document.getElementById("home-stats").innerHTML = `
    <div class="quick-stat"><span class="stat-icon">◉</span><span><strong>${analysis.score}%</strong><small>ROUTINE CHECK-IN</small></span></div>
    <div class="quick-stat"><span class="stat-icon">✳</span><span><strong>${state.actives.length}</strong><small>INGREDIENTS IN YOUR ROUTINE</small></span></div>
    <div class="quick-stat"><span class="stat-icon">♡</span><span><strong>${analysis.conflicts.length}</strong><small>PAIRINGS TO REVIEW</small></span></div>`;
  document.getElementById("home-products").innerHTML = PRODUCTS.slice(0, 4).map(productCard).join("");
}

function renderActives() {
  document.getElementById("active-count").textContent = `(${state.actives.length})`;
  document.getElementById("selected-actives").innerHTML = state.actives.length
    ? state.actives.map((active, index) => `<span class="active-pill">${escapeHtml(titleCase(active))}<button class="pill-remove" type="button" data-action="remove-active" data-index="${index}" aria-label="Remove ${escapeHtml(active)}">&times;</button></span>`).join("")
    : '<span class="empty-hint">Add an ingredient or product to begin.</span>';
  document.getElementById("quick-actives").innerHTML = COMMON_ACTIVES.map(active => {
    const added = state.actives.some(item => item.toLowerCase() === active);
    return `<button class="quick-chip${added ? " is-added" : ""}" type="button" data-action="quick-active" data-active="${escapeHtml(active)}">${added ? "✓" : "+"} ${escapeHtml(titleCase(active))}</button>`;
  }).join("");
  document.getElementById("selected-products").innerHTML = currentProducts().map(product => `
    <div class="selected-product-row"><span><strong>${escapeHtml(product.brand)}</strong> · ${escapeHtml(product.name)}</span><button class="remove-product" type="button" data-action="product" data-product-id="${escapeHtml(product.id)}" aria-label="Remove ${escapeHtml(product.name)}">&times;</button></div>
  `).join("");
}

function renderHeader() {
  const analysis = analyzeRoutine();
  const header = document.getElementById("header-status");
  const text = document.getElementById("header-status-text");
  header.classList.remove("has-warning", "has-danger");
  if (analysis.conflicts.length > 1 || analysis.score < 60) {
    header.classList.add("has-danger");
    text.textContent = `${analysis.conflicts.length} pairings to review`;
  } else if (analysis.conflicts.length) {
    header.classList.add("has-warning");
    text.textContent = `${analysis.conflicts.length} pairing to review`;
  } else {
    text.textContent = "Routine looks balanced";
  }
}

function renderAnalysis() {
  const { conflicts, synergies, score, schedule } = analyzeRoutine();
  const ring = document.getElementById("score-ring");
  ring.classList.remove("is-warning", "is-danger");
  ring.style.setProperty("--score", `${score}%`);
  if (score < 60) ring.classList.add("is-danger");
  else if (score < 85) ring.classList.add("is-warning");
  document.getElementById("safety-score").textContent = String(score);
  document.getElementById("conflict-count").textContent = String(conflicts.length);
  document.getElementById("synergy-count").textContent = String(synergies.length);

  const label = document.getElementById("score-label");
  const title = document.getElementById("analysis-title");
  const summary = document.getElementById("analysis-summary");
  if (conflicts.length > 1) {
    label.textContent = "Take it one step at a time";
    title.textContent = "A few pairings to space out.";
    summary.textContent = "Consider simplifying or alternating some products, especially when trying something new.";
  } else if (conflicts.length) {
    label.textContent = "A pairing to keep in mind";
    title.textContent = "One combination to review.";
    summary.textContent = "Some people find these ingredients more comfortable when used at different times.";
  } else if (state.actives.length) {
    label.textContent = "A gentle balance";
    title.textContent = "No common pairings flagged.";
    summary.textContent = "Keep an eye on how your skin feels as you introduce or change products.";
  } else {
    label.textContent = "Your blank canvas";
    title.textContent = "Start with what you use.";
    summary.textContent = "Add ingredients or products to see a few common pairings and routine ideas.";
  }

  document.querySelectorAll(".analysis-tab").forEach(tab => {
    const selected = tab.dataset.tab === state.activeTab;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });

  const results = document.getElementById("analysis-results");
  if (state.activeTab === "conflicts") {
    results.innerHTML = conflicts.length
      ? conflicts.map(item => `<article class="interaction-card${item.risk === "High" ? " is-danger" : ""}"><div class="interaction-top"><span class="interaction-pair">${item.ingredients.map(escapeHtml).join(" + ")}</span><span class="risk-tag${item.risk === "High" ? " is-danger" : ""}">${escapeHtml(item.risk)} · review</span></div><p>${escapeHtml(item.message)}</p><p class="recommendation"><strong>Something to consider:</strong> ${escapeHtml(item.recommendation)}</p></article>`).join("")
      : `<div class="empty-analysis"><span>✳</span><strong>Nothing to flag right now</strong><p>${state.actives.length ? "No common pairings from our guide were found." : "Your routine notes will show up here."}</p></div>`;
  } else if (state.activeTab === "synergies") {
    results.innerHTML = synergies.length
      ? synergies.map(item => `<article class="synergy-card"><div class="interaction-top"><span class="interaction-pair">${item.ingredients.map(escapeHtml).join(" + ")}</span><span class="risk-tag">A common pairing</span></div><p><strong>${escapeHtml(item.name)}.</strong> ${escapeHtml(item.message)}</p></article>`).join("")
      : '<div class="empty-analysis"><span>♡</span><strong>No pairings to show yet</strong><p>Try adding familiar ingredients like ceramides or hyaluronic acid.</p></div>';
  } else {
    const show = (items, fallback) => items.length ? items.map(escapeHtml).join(" · ") : fallback;
    results.innerHTML = `
      <p class="schedule-intro">A flexible example, not a prescription. Keep recovery evenings in your rotation.</p>
      <div class="schedule-row"><strong>☀ Morning</strong><span>${show(getMorningSteps(schedule), "Gentle cleanse · moisturizer · sunscreen")}</span></div>
      <div class="schedule-row"><strong>☾ Treatment evening</strong><span>${show(schedule.treatment.concat(schedule.recovery), "Hydration and barrier care")}</span></div>
      <div class="schedule-row"><strong>☾ Exfoliation evening</strong><span>${show(schedule.exfoliation.concat(schedule.recovery), "Hydration and barrier care")}</span></div>`;
  }
}

function renderCatalog() {
  document.getElementById("product-filters").innerHTML = CATEGORIES.map(category => `
    <button class="filter-chip${state.category === category ? " is-active" : ""}" type="button" data-action="category" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}">${escapeHtml(category)}</button>
  `).join("");
  const query = state.search.toLowerCase().trim();
  const products = PRODUCTS.filter(product => {
    const inCategory = state.category === "All" || product.category === state.category;
    const searchable = `${product.name} ${product.brand} ${product.actives.join(" ")}`.toLowerCase();
    return inCategory && (!query || searchable.includes(query));
  });
  document.getElementById("routine-products").innerHTML = products.length
    ? products.map(productCard).join("")
    : '<p class="no-products">No products match that search. Try another name or ingredient.</p>';
}

function renderDashboard() {
  const analysis = analyzeRoutine();
  const profileName = state.profile.name.trim();
  document.getElementById("dashboard-greeting").textContent = profileName
    ? `Welcome back, ${profileName}. Here's a gentle snapshot of your routine.`
    : "Your routine, your pace. Here's where things stand today.";
  document.getElementById("dashboard-stats").innerHTML = `
    <article class="dashboard-stat"><div class="dashboard-stat-top"><span>Routine check-in</span><span class="dashboard-stat-icon">◉</span></div><strong>${analysis.score}%</strong><small>${analysis.conflicts.length ? `${analysis.conflicts.length} pairing${analysis.conflicts.length === 1 ? "" : "s"} to review` : "No common pairings flagged"}</small></article>
    <article class="dashboard-stat"><div class="dashboard-stat-top"><span>Ingredients</span><span class="dashboard-stat-icon">✳</span></div><strong>${state.actives.length}</strong><small>In your routine right now</small></article>
    <article class="dashboard-stat"><div class="dashboard-stat-top"><span>Good company</span><span class="dashboard-stat-icon">♡</span></div><strong>${analysis.synergies.length}</strong><small>Common ingredient pairings</small></article>
    <article class="dashboard-stat"><div class="dashboard-stat-top"><span>Skin profile</span><span class="dashboard-stat-icon">⌁</span></div><strong style="font-size:20px">${escapeHtml(state.profile.skinType || "Not set")}</strong><small>${escapeHtml(state.profile.sensitivity || "Medium")} sensitivity</small></article>`;

  const morning = getMorningSteps(analysis.schedule);
  const treatment = analysis.schedule.treatment;
  const exfoliation = analysis.schedule.exfoliation;
  const days = [
    { day: "Mon", evening: treatment, label: "Treatment evening" },
    { day: "Tue", evening: [], label: "Recovery evening" },
    { day: "Wed", evening: exfoliation, label: "Exfoliation evening" },
    { day: "Thu", evening: [], label: "Recovery evening" },
    { day: "Fri", evening: treatment, label: "Treatment evening" },
    { day: "Sat", evening: [], label: "Recovery evening" },
    { day: "Sun", evening: [], label: "Rest & reset" }
  ];
  document.getElementById("week-list").innerHTML = days.map(item => {
    const evening = item.evening.length ? `${item.label}: ${item.evening.map(titleCase).join(" · ")}` : item.label;
    return `<div class="week-row"><strong class="week-day">${item.day}</strong><span class="week-am">☀ ${escapeHtml(morning.length ? `Morning: ${morning.map(titleCase).join(" · ")}` : "Gentle care + SPF")}</span><span class="week-pm${item.evening.length ? " is-treatment" : ""}">☾ ${escapeHtml(evening)}</span></div>`;
  }).join("");

  const products = currentProducts();
  document.getElementById("dashboard-products").innerHTML = products.length
    ? products.map(product => `<div class="dashboard-product-row"><span class="mini-art">✳</span><span><strong>${escapeHtml(product.brand)} · ${escapeHtml(product.name)}</strong><small>${escapeHtml(product.actives.join(" · "))}</small></span></div>`).join("")
    : '<p class="empty-list">Your product shelf is empty. Add a product in the routine analyzer.</p>';
  document.getElementById("dashboard-actives").innerHTML = state.actives.length
    ? state.actives.map(active => `<span class="active-pill">${escapeHtml(titleCase(active))}</span>`).join("")
    : '<span class="empty-hint">No ingredients added yet.</span>';
}

function renderProfile() {
  document.getElementById("profile-name").value = state.profile.name || "";
  document.getElementById("profile-avatar").textContent = (state.profile.name.trim()[0] || "S").toUpperCase();
  document.getElementById("skin-type-options").innerHTML = SKIN_TYPES.map(type => `
    <button class="choice-chip${state.profile.skinType === type ? " is-selected" : ""}" type="button" data-action="profile-choice" data-field="skinType" data-value="${escapeHtml(type)}" aria-pressed="${state.profile.skinType === type}">${escapeHtml(type)}</button>
  `).join("");
  document.getElementById("sensitivity-options").innerHTML = SENSITIVITY_LEVELS.map(level => `
    <button class="choice-chip${state.profile.sensitivity === level ? " is-selected" : ""}" type="button" data-action="profile-choice" data-field="sensitivity" data-value="${escapeHtml(level)}" aria-pressed="${state.profile.sensitivity === level}">${escapeHtml(level)}</button>
  `).join("");
  document.getElementById("concern-options").innerHTML = CONCERNS.map(concern => {
    const selected = state.profile.concerns.includes(concern);
    return `<button class="concern-chip${selected ? " is-selected" : ""}" type="button" data-action="concern" data-value="${escapeHtml(concern)}" aria-pressed="${selected}">${selected ? "✓ " : "+ "}${escapeHtml(concern)}</button>`;
  }).join("");
}

function setPage(page) {
  const knownPages = ["home", "routine", "dashboard", "profile"];
  state.activePage = knownPages.includes(page) ? page : "home";
  document.querySelectorAll(".page").forEach(section => {
    const active = section.id === `page-${state.activePage}`;
    section.hidden = !active;
    section.classList.toggle("is-active", active);
  });
  document.querySelectorAll(".nav-item").forEach(button => {
    const active = button.dataset.page === state.activePage;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  const labels = { home: "Overview", routine: "Routine analyzer", dashboard: "My dashboard", profile: "Skin profile" };
  document.getElementById("current-section").textContent = labels[state.activePage];
  saveState();
}

function render() {
  renderHeader();
  renderHome();
  renderActives();
  renderAnalysis();
  renderCatalog();
  renderDashboard();
  renderProfile();
  setPage(state.activePage);
}

function updateRoutine(actives, productIds = state.productIds) {
  state.actives = [...new Set(actives.map(item => item.toLowerCase().trim()).filter(Boolean))];
  state.productIds = [...new Set(productIds)];
  saveState();
  render();
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    setPage(pageButton.dataset.page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const button = event.target.closest("[data-action], [data-preset], [data-tab]");
  if (!button) return;

  if (button.dataset.preset) {
    const presets = {
      sample: { actives: ["retinol", "glycolic acid", "hyaluronic acid"], products: ["retinol-serum", "glycolic-toner", "hyaluronic-serum"] },
      acne: { actives: ["retinol", "salicylic acid", "benzoyl peroxide"], products: ["retinol-serum", "bha-liquid", "acne-treatment"] },
      barrier: { actives: ["hyaluronic acid", "ceramides", "niacinamide", "peptides"], products: ["hyaluronic-serum", "barrier-cream"] },
      morning: { actives: ["vitamin c", "hyaluronic acid", "sunscreen"], products: ["hyaluronic-serum", "vitamin-c", "spf"] }
    };
    const preset = presets[button.dataset.preset];
    if (preset) updateRoutine(preset.actives, preset.products);
    return;
  }

  if (button.dataset.tab) {
    state.activeTab = button.dataset.tab;
    renderAnalysis();
    saveState();
    return;
  }

  switch (button.dataset.action) {
    case "quick-active": {
      const active = button.dataset.active;
      const exists = state.actives.some(item => item.toLowerCase() === active);
      updateRoutine(exists ? state.actives.filter(item => item.toLowerCase() !== active) : [...state.actives, active]);
      break;
    }
    case "remove-active": {
      const index = Number(button.dataset.index);
      if (Number.isInteger(index)) updateRoutine(state.actives.filter((_, itemIndex) => itemIndex !== index));
      break;
    }
    case "product": {
      const product = PRODUCTS.find(item => item.id === button.dataset.productId);
      if (!product) break;
      if (state.productIds.includes(product.id)) {
        const remaining = state.productIds.filter(id => id !== product.id);
        const productActives = currentProducts().filter(item => item.id !== product.id).flatMap(item => item.actives);
        updateRoutine(state.actives.filter(active => !product.actives.includes(active) || productActives.includes(active)), remaining);
      } else {
        updateRoutine([...state.actives, ...product.actives], [...state.productIds, product.id]);
      }
      showToast(state.productIds.includes(product.id) ? "Product added to your routine." : "Product removed from your routine.");
      break;
    }
    case "clear":
      updateRoutine([], []);
      showToast("Your routine has been cleared.");
      break;
    case "category":
      state.category = button.dataset.category;
      saveState();
      renderCatalog();
      break;
    case "profile-choice":
      state.profile[button.dataset.field] = button.dataset.value;
      saveState();
      renderProfile();
      renderDashboard();
      break;
    case "concern": {
      const concern = button.dataset.value;
      state.profile.concerns = state.profile.concerns.includes(concern)
        ? state.profile.concerns.filter(item => item !== concern)
        : [...state.profile.concerns, concern];
      saveState();
      renderProfile();
      break;
    }
  }
});

document.getElementById("active-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("active-input");
  const value = input.value.trim().toLowerCase();
  if (!value) {
    input.focus();
    return;
  }
  if (state.actives.some(active => active.toLowerCase() === value)) {
    showToast("That ingredient is already in your routine.");
    return;
  }
  updateRoutine([...state.actives, value]);
  input.value = "";
  input.focus();
});

document.getElementById("product-search").addEventListener("input", event => {
  state.search = event.target.value;
  renderCatalog();
});

document.getElementById("profile-form").addEventListener("submit", event => {
  event.preventDefault();
  state.profile.name = document.getElementById("profile-name").value.trim();
  saveState();
  renderProfile();
  renderDashboard();
  document.getElementById("save-message").textContent = "Your profile is saved on this device.";
  showToast("Profile saved.");
  setTimeout(() => {
    document.getElementById("save-message").textContent = "";
  }, 2600);
});

render();
