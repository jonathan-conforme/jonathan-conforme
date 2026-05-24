function initAOS() {
  const isMobile = window.innerWidth < 768;

  AOS.init({
    duration: isMobile ? 400 : 800,
    easing: "ease-out-cubic",
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAOS();

  window.addEventListener("resize", () => {
    AOS.refresh();
  });

  const logoContainer = document.getElementById("logo-container");

  const logos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      alt: "Laravel",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://raw.githubusercontent.com/agungksidik/public-assets/master/logo/inertiajs-logo.png",
      alt: "Inertia.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      alt: "Vite",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
      extraClass: "invert",
    },
    {
      src: "https://www.navicat.com/images/05.AboutUs_00_milestone_2021_Navicat.svg",
      alt: "Navicat",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      alt: "PostgreSQL",
    },

  ];

  const fragment = document.createDocumentFragment();

  logos.forEach((logo) => {
    const wrapper = document.createElement("div");

    wrapper.className =
      "flex items-center justify-center transition duration-300 hover:scale-110";

    wrapper.innerHTML = `
      <img
        src="${logo.src}"
        alt="${logo.alt}"
        class="w-10 md:w-12 opacity-80 hover:opacity-100 transition duration-300 ${logo.extraClass || ""
      }"
        loading="lazy"
      />
    `;

    fragment.appendChild(wrapper);
  });

  logoContainer.appendChild(fragment);
});