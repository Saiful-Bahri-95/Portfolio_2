/* =====================================================
   PROJECT SHOWCASE — DYNAMIC LOADER
   ===================================================== */

const params = new URLSearchParams(window.location.search);
const theme = params.get("theme") || "website";

document.body.classList.add(theme);

/* ---------- Theme metadata (title, description, accent label) ---------- */
const themeMeta = {
  website: {
    num: "01",
    title: "Website",
    label: "Websites",
    desc: "Modern, responsive websites built with clean code and a focus on performance. Each one is crafted to load fast and convert visitors."
  },
  portofolio: {
    num: "02",
    title: "Portfolio",
    label: "Portfolios",
    desc: "Personal portfolio templates designed to showcase your work, your story, and your skills — without getting in the way of the content."
  },
  ecommerce: {
    num: "03",
    title: "E-Commerce",
    label: "E-Commerce",
    desc: "Online store designs built to sell. From product grids to checkout flow, every detail is shaped around the user's path to purchase."
  },
  branding: {
    num: "04",
    title: "Branding",
    label: "Branding",
    desc: "Brand-driven landing pages and one-page sites that tell a story — bold visuals, distinctive typography, and a strong sense of identity."
  }
};

const meta = themeMeta[theme] || themeMeta.website;

document.title = `${meta.title} Showcase | Saiful Bahri`;
document.getElementById("theme-num").textContent = meta.num;
document.getElementById("theme-title").textContent = `${meta.title}`;
document.getElementById("theme-desc").textContent = meta.desc;
document.getElementById("theme-label").textContent = meta.label;

/* ---------- Project data ---------- */
const projectsByTheme = {
  website: [
    {
      title: "e-Learning",
      description: "A clean, modern, and free eLearning HTML template built with Bootstrap 5. Beautiful design, responsive on every device, and full of unique features.",
      image: "image/elearning.jpg",
      link: "./project/website/elearning/index.html"
    },
    {
      title: "Finance Business",
      description: "Finance HTML template with full-page image slider and green-yellow theme. Suitable as one-page or multi-page, includes contact form and Google Maps.",
      image: "image/finance.jpg",
      link: "./project/website/finance/index.html"
    },
    {
      title: "Start Up",
      description: "A Bootstrap HTML5 business template — the best site skin for startups and small businesses that need a striking website fast.",
      image: "image/startup.jpg",
      link: "./project/website/startup/index.html"
    }
  ],
  portofolio: [
    {
      title: "Kelly",
      description: "A modern, exclusive portfolio template with intuitive layout and a developer-friendly codebase that makes customization effortless.",
      image: "image/kelly.jpg",
      link: "./project/portofolio/kelly/index.html"
    },
    {
      title: "Johnson",
      description: "A responsive portfolio template for creative professionals. Free, clean, and optimized for page speed and effortless branding.",
      image: "image/johnson.jpg",
      link: "./project/portofolio/johnson/index.html"
    },
    {
      title: "Reflux",
      description: "One-page scrolling template with a sticky left sidebar. A Bootstrap 4 layout suitable for personal portfolios or gallery websites.",
      image: "image/reflux.jpg",
      link: "./project/portofolio/reflux/index.html"
    },
    {
      title: "Stimulus",
      description: "A personal website layout with metro-style content blocks. Great for portfolio pages with background information — quick to customize.",
      image: "image/stimulus.jpg",
      link: "./project/portofolio/stimulus/index.html"
    }
  ],
  ecommerce: [
    {
      title: "Hexa Shop",
      description: "An e-commerce HTML CSS template for online stores, built on Bootstrap v4.5.2 — clean, modern, and ready to customize.",
      image: "image/hexa.jpg",
      link: "./project/ecommerce/hexa/index.html"
    },
    {
      title: "Food Mart",
      description: "An e-commerce template for grocery stores and online shopping platforms — designed to highlight products and drive conversions.",
      image: "image/foodmart.jpg",
      link: "./project/ecommerce/foodmart/index.html"
    },
    {
      title: "Furry",
      description: "Bootstrap 5 e-commerce template specially designed for pet-related stores. Warm, friendly visuals with a strong product focus.",
      image: "image/furry.jpg",
      link: "./project/ecommerce/furry/index.html"
    },
    {
      title: "Stylish",
      description: "A free e-commerce shoe-store HTML template — modern, bold, and suitable for fashion or tech online stores.",
      image: "image/stylish.jpg",
      link: "./project/ecommerce/stylish/index.html"
    }
  ],
  branding: [
    {
      title: "Barber Shop",
      description: "Free Bootstrap v5.2.2 HTML CSS template for businesses. One-page layout with a sleek sidebar navigation menu.",
      image: "image/barber-shop.jpg",
      link: "./project/branding/barber-shop/index.html"
    },
    {
      title: "Highway",
      description: "HTML template with a full-page video banner and grid image gallery. About and blog pages included, plus a sliding overlay menu.",
      image: "image/highway.jpg",
      link: "./project/branding/highway/index.html"
    },
    {
      title: "Polygon",
      description: "HTML5 theme featuring image gallery, hexagon icon boxes, contact form and maps. A responsive Bootstrap one-page layout.",
      image: "image/polygon.jpg",
      link: "./project/branding/polygon/index.html"
    }
  ]
};

const projects = projectsByTheme[theme] || [];
const container = document.getElementById("project-container");
const emptyState = document.getElementById("empty-state");

/* ---------- Render ---------- */
// Clear skeletons
container.innerHTML = "";

if (projects.length === 0) {
  container.style.display = "none";
  emptyState.hidden = false;
} else {
  projects.forEach((project, index) => {
    const num = String(index + 1).padStart(2, "0");
    const delay = index * 0.12;

    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${delay}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <span class="card-num">${num}</span>
        <img src="${project.image}" alt="${project.title} preview" loading="lazy" onerror="this.style.opacity='0.3';this.parentElement.style.background='var(--bg-1)';" />
      </div>
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <a href="${project.link}" class="card-button" target="_blank" rel="noopener">
          <span>Live Preview</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}