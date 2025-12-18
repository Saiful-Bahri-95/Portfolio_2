const params = new URLSearchParams(window.location.search);
const theme = params.get("theme") || "website"; // default theme

document.body.classList.add(theme);

// Project data by theme
const projectsByTheme = {
  website: [
    {
      title: "e-Learning",
      description: "Elearning is a education website template built with Bootstrap 5. It is a clean, modern, and free eLearning HTML template with a beautiful design and unique & awesome features. This free bootstrap template is 100% responsive.",
      image: "image/elearning.jpg",
      link: "./project/website/elearning/index.html"
    },
    {
      title: "Finance Business",
      description: "Finance HTML Template can be used as one-page or multiple pages depending on your business needs. It has a full-page image slider and green-yellow color theme. Total 4 HTML pages included contact form and Google Maps.",
      image: "image/finance.jpg",
      link: "./project/website/finance/index.html"
    },
    {
      title: "Start Up",
      description: "StartupBusiness is a Bootstrap HTML5 business website template. It is the best site skin for startups, small businesses, and other similar kinds. If you want to make a striking website quickly, then StartupBusiness is the right choice.",
      image: "image/startup.jpg",
      link: "./project/website/startup/index.html"
    },
  ],
  portofolio: [
    {
      title: "Kelly",
      description: "Kelly is a portfolio template with a modern and exclusive design. It is a template that enhances user engagement with an intuitive layout. The developer-friendly theme offers smooth customization with a clean codebase.",
      image: "image/kelly.jpg",
      link: "./project/portofolio/kelly/index.html"
    },
    {
      title: "Johnson",
      description: "MyResume is a responsive portfolio template for creative professionals. This is a free theme with a clean codebase. So it tweaks your branding effortlessly. The developer-friendly theme has optimized page speed ",
      image: "image/johnson.jpg",
      link: "./project/portofolio/johnson/index.html"
    },
    {
      title: "Reflux",
      description: "Reflux is one-page scrolling template with a sticky left side bar. This is a Bootstrap 4 CSS layout suitable for personal portfolio or gallery website. Main menu has red color background and white color highlight.",
      image: "image/reflux.jpg",
      link: "./project/portofolio/reflux/index.html"
    },
    {
      title: "Stimulus",
      description: "Stimulus HTML resume template is a personal website layout with metro style blocks of contents. This theme is great for your portfolio page with your background information. You can quickly customize it to fit your needs.",
      image: "image/stimulus.jpg",
      link: "./project/portofolio/stimulus/index.html"
    }
  ],
  ecommerce: [
    {
      title: "Hexa Shopp",
      description: "HexaShop is an ecommerce HTML CSS template for your online stores. This layout is based on Bootstrap v4.5.2 CSS framework.",
      image: "image/hexa.jpg",
      link: "./project/ecommerce/hexa/index.html"
    },
    {
      title: "Food Mart",
      description: "Foodmart is an eCommerce website template for any grocery store, It is suitable for any eCommerce store, online shopping website.",
      image: "image/foodmart.jpg",
      link: "./project/ecommerce/foodmart/index.html"
    },
    {
      title: "Furry",
      description: "Furry is a HTML Bootstrap 5 website template for pet-related e-commerce stores. It is mainly specially designed for pet stores. ",
      image: "image/furry.jpg",
      link: "./project/ecommerce/furry/index.html"
   },
   {
      title: "Stylish",
      description: "Stylish is a free eCommerce shoe Store HTML template It is suitable for any eCommerce store, online shopping website, tech store.",
      image: "image/stylish.jpg",
      link: "./project/ecommerce/stylish/index.html"
   }
  ],
  branding: [
    {
      title: "Barber Shop",
      description: "Gentlemen's Barber Shop is free Bootstrap Bootstrap v5.2.2 HTML CSS template for your business. This one-page layout has a sidebar navigation menu.",
      image: "image/barber-shop.jpg",
      link: "./project/branding/barber-shop/index.html"
    },
    {
      title: "Highway",
      description: "Highway HTML Template has a full-page video banner and a grid image gallery. About page and blog page included. Main menu and contact form are sliding full-screen overlay.",
      image: "image/highway.jpg",
      link: "./project/branding/highway/index.html"
    },
    {
      title: "Polygon",
      description: ".Polygon HTML5 theme features image gallery, about page, services with hexagon icon boxes, contact form and maps. This one is a responsive Bootstrap layout.",
      image: "image/polygon.jpg",
      link: "./project/branding/polygon/index.html"
    },
  ]
};

const projects = projectsByTheme[theme] || [];
const container = document.getElementById("project-container");

projects.forEach((project, index) => {
  const delay = index * 0.2; // Delay for animation effect
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${delay}s`;
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-description">${project.description}</p>
      <a href="${project.link}" class="card-button" target="_blank">Live Preview</a>
    </div>
  `;
  container.appendChild(card);
});
