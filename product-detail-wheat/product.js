/* ===========================
   MASTER PAGE DATA (CMS READY)
=========================== */

const vmPage = {
  hero: {
    eyebrow: "Rice & Flour Milling Project",
    title: "Next-Gen Grain Processing Excellence",
    desc:
      "An advanced rice and flour milling ecosystem delivering purity, aroma retention, export compliance, and scalable industrial performance.",
    image: "../assets/classic-basmati-rice.png",
    stats: [
      { value: "250+", label: "TPD Capacity" },
      { value: "40+", label: "Export Markets" },
      { value: "99.9%", label: "Grain Purity" }
    ]
  },

  overview: {
    text:
      "This facility transforms farm-fresh grains into export-grade products using multi-stage cleaning, automation, and hygienic packaging systems.",
    points: [
      "Fully automated milling lines",
      "Zero-contamination handling",
      "Export-ready packaging",
      "Energy-efficient operations"
    ]
  },

  process: {
    eyebrow: "Manufacturing Flow",
    title: "Crafted Through Precision Engineering",
    desc:
      "Every production stage is optimized for hygiene, consistency, and operational efficiency.",
    steps: [
      {
        title: "Cleaning & De-Stoning",
        desc: "Advanced separators remove stones, dust, and foreign particles.",
        img:
          "https://img.freepik.com/premium-photo/whole-grain-bowl-can-tho-vietnam_250132-28427.jpg"
      },
      {
        title: "Husking & Whitening",
        desc:
          "Low-friction huskers preserve grain length, whiteness, and aroma.",
        img:
          "https://img.freepik.com/premium-photo/close-up-person-preparing-food_51764-12348.jpg"
      },
      {
        title: "Sorting & Polishing",
        desc:
          "AI optical sorters grade rice by size, color, and texture.",
        img:
          "https://img.freepik.com/premium-photo/quotadvanced-rice-processing-plant-with-modern-equipmentquot_1324785-3408.jpg"
      },
      {
        title: "Packaging & Dispatch",
        desc:
          "Moisture-sealed packaging ensures aroma retention and long shelf life.",
        img:
          "https://img.freepik.com/premium-photo/packaging-process-rice-where-milled-grains-are-weighed-bagged-sealed_1271419-8440.jpg"
      }
    ]
  },

  uses: {
    eyebrow: "Best For",
    title: "Perfect for Every Rice Preparation",
    cards: [
      {
        title: "Indian Cuisine",
        desc: "Dal Rice, Lemon Rice, Curd Rice, Steamed Rice",
        img:
          "https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg"
      },
      {
        title: "Daily Home Cooking",
        desc: "Soft, fluffy grains for everyday meals",
        img:
          "https://img.freepik.com/premium-photo/intimate-labh-pancham-activities-celebrations_1198884-24295.jpg"
      },
      {
        title: "Asian Cuisine",
        desc: "Fried Rice, Sushi Rice, Rice Bowls, Noodles",
        img:
          "https://img.freepik.com/premium-photo/closeup-person39s-hand-eating-thai-food-with-chopsticks-table-against-black-backdrop_220770-9630.jpg"
      },
      {
        title: "Festive Dishes",
        desc: "Biryani, Pulao, Khichdi, Sweet Rice Preparations",
        img:
          "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182445.jpg"
      }
    ]
  },

  riceTypes: {
    eyebrow: "Our Varieties",
    title: "Two Rice Grades. Every Market Need.",
    types: [
      {
        title: "Premium Rice",
        tag: "Aromatic",
        highlight: true,
        desc:
          "Premium Rice features long, slender grains with exceptional elongation, aroma retention, and non-sticky texture — ideal for biryanis and fine cuisine.",
        points: [
          "Long grain consistency",
          "Excellent aroma retention",
          "High elongation after cooking",
          "Non-sticky texture"
        ]
      },
      {
        title: "Regular Rice",
        tag: "Daily Use",
        highlight: false,
        desc:
          "Regular Rice offers soft texture, balanced nutrition, and cost efficiency — perfect for everyday household meals and bulk catering.",
        points: [
          "Soft cooked texture",
          "Light on digestion",
          "Balanced grain size",
          "Cost-effective supply"
        ]
      }
    ]
  },

  testimonials: {
    eyebrow: "Customer Love",
    title: "What Our Clients Say",
    cards: [
      {
        name: "Anjali Mehta",
        role: "Restaurant Owner",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text:
          "The rice quality is unmatched — every grain cooks perfectly. Our customers instantly noticed the difference in aroma and texture.",
        stars: 5
      },
      {
        name: "Rohit Verma",
        role: "Wholesale Distributor",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text:
          "Reliable supply, consistent quality, and excellent packaging. This mill has become our long-term sourcing partner.",
        stars: 5,
        highlight: true
      },
      {
        name: "Neha Kapoor",
        role: "Home Chef",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        text:
          "Soft, fluffy rice every time — perfect for daily meals and special dishes like biryani. Truly premium quality.",
        stars: 5
      }
    ]
  }
};

/* ===========================
   RENDER ENGINE
=========================== */

/* ---------- HERO ---------- */
const hero = document.getElementById("vm-hero");
hero.innerHTML = `
  <div class="hero-pattern"></div>

  <div class="hero-left">
    <img src="${vmPage.hero.image}" alt="">
  </div>

  <div class="hero-right">
    <span class="eyebrow">${vmPage.hero.eyebrow}</span>
    <h1>${vmPage.hero.title}</h1>
    <p>${vmPage.hero.desc}</p>

    <div class="hero-stats">
      ${vmPage.hero.stats
        .map(
          (s) => `
        <div>
          <h3 class="vm-counter" data-target="${parseFloat(s.value)}">0+</h3>
          <span>${s.label}</span>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>
`;

/* ---------- OVERVIEW ---------- */
const overview = document.getElementById("vm-overview");
overview.innerHTML = `
  <div class="overview-text">
    <p>${vmPage.overview.text}</p>

    <div class="overview-points">
      ${vmPage.overview.points.map((p) => `<div>✔ ${p}</div>`).join("")}
    </div>
  </div>
`;

/* ---------- PROCESS ---------- */
const process = document.getElementById("vm-process");
process.innerHTML = `
  <div class="process-head">
    <span class="eyebrow">${vmPage.process.eyebrow}</span>
    <h2>${vmPage.process.title}</h2>
    <p>${vmPage.process.desc}</p>
  </div>

  <div class="process-grid">
    ${vmPage.process.steps
      .map(
        (step) => `
      <div class="process-card reveal">
        <div class="card-img">
          <img src="${step.img}" alt="">
        </div>
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
      </div>
    `,
      )
      .join("")}
  </div>
`;

/* ---------- QUALITY / USES + TYPES ---------- */
const quality = document.getElementById("vm-quality");
quality.innerHTML = `
  <div class="flour-pattern"></div>

  <div class="flour-wrap">

    <!-- USES -->
    <div class="flour-uses reveal">
      <span class="eyebrow">${vmPage.uses.eyebrow}</span>
      <h2>${vmPage.uses.title}</h2>

      <div class="uses-grid">
        ${vmPage.uses.cards
          .map(
            (card) => `
          <div class="use-card reveal-scale">
            <div class="use-icon">
              <img src="${card.img}" alt="${card.title}">
            </div>
            <h4>${card.title}</h4>
            <p>${card.desc}</p>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>

    <!-- TYPES -->
    <div class="flour-types reveal">
      <span class="eyebrow">${vmPage.riceTypes.eyebrow}</span>
      <h2>${vmPage.riceTypes.title}</h2>

      <div class="type-grid">
        ${vmPage.riceTypes.types
          .map(
            (type) => `
          <div class="type-card reveal-left ${type.highlight ? "highlight" : ""}">
            <div class="type-head">
              <h3>${type.title}</h3>
              <span>${type.tag}</span>
            </div>
            <p>${type.desc}</p>
            <ul>
              ${type.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>

  </div>
`;

/* ---------- TESTIMONIALS ---------- */
const testimonials = document.getElementById("vm-testimonials-section");
testimonials.innerHTML = `
  <div class="vm-testimonials-pattern"></div>

  <div class="vm-testimonials-wrap">
    <span class="eyebrow">${vmPage.testimonials.eyebrow}</span>
    <h2>${vmPage.testimonials.title}</h2>

    <div class="vm-testimonials-grid">
      ${vmPage.testimonials.cards
        .map(
          (t) => `
        <div class="vm-testimonial-card ${t.highlight ? "vm-testimonial-highlight" : ""} vm-reveal">
          <div class="vm-testimonial-head">
            <img src="${t.img}" alt="${t.name}">
            <div>
              <h4>${t.name}</h4>
              <span>${t.role}</span>
            </div>
          </div>
          <p>“${t.text}”</p>
          <div class="vm-testimonial-stars">${"★".repeat(t.stars)}</div>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>
`;