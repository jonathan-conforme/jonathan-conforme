

function initAOS() {
    const isMobile = window.innerWidth < 768;

    AOS.init({
      duration: isMobile ? 400 : 900,
      easing: 'ease-out-cubic',
      once: true
    });
  }

  initAOS();
  window.addEventListener('resize', initAOS);
  document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.getElementById('logo-container');   const logos = [
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" class="mx-14 w-8" alt="Laravel">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" class="mx-14 w-8" alt="Bootstrap">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="mx-14 w-8" alt="HTML">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="mx-14 w-8" alt="CSS">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="mx-14 w-8" alt="JavaScript">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="mx-14 w-8" alt="MySQL">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="mx-14 w-8" alt="PHP">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="mx-14 w-8" alt="Git">`,
    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="mx-14 w-8 invert" alt="GitHub">`,
    `<img src="https://www.navicat.com/images/05.AboutUs_00_milestone_2021_Navicat.svg" class="mx-14 w-8" alt="Navicat">`,
    `<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" class="mx-14 w-8" alt="PostgreSQL">`
    ];

   

    [...logos, ...logos].forEach((logo) => {
        logoContainer.innerHTML += logo;
    });
    });
