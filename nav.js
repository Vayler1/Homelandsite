let currentPath = window.location.pathname.split("/").pop();
if (currentPath === "") currentPath = "index.html";

const navItems = [
  { href: "index.html", text: "Головна" },
  { href: "info.html", text: "Інфо" },
  { href: "guide.html", text: "Гайд" },
  { href: "defence.html", text: "ППО & Блекаути" },
  { href: "bosses.html", text: "Боси" },
  { href: "bloodnight.html", text: "Кривава Ніч" },
  { href: "warfare.html", text: "Війни" },
  { href: "towns.html", text: "Міста" },
  { href: "buildings.html", text: "Великі будівлі" },
  { href: "moon.html", text: "Місяць" },
  { href: "brewery.html", text: "Броварня" },
  { href: "commands.html", text: "Довідник" }
];

// Додаємо кнопку відкриття меню для смартфонів та контейнер меню
let navHTML = `
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Відкрити меню">
    <i class="fa-solid fa-bars"></i>
  </button>
  <ul id="navMenu">
`;

navItems.forEach(item => {
  const isActive = (currentPath === item.href) ? 'class="active"' : '';
  navHTML += `  <li><a href="${item.href}" ${isActive} onclick="closeMobileMenu()">${item.text}</a></li>\n`;
});
navHTML += "</ul>";

document.write(navHTML);

// Логіка перемикання меню (відкрити/закрити)
window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMenu');
  const icon = document.querySelector('.mobile-menu-btn i');
  if (!menu) return;

  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
    document.body.style.overflow = 'hidden'; // Блокуємо скрол фону під час відкритого меню
  } else {
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    document.body.style.overflow = 'auto';
  }
};

window.closeMobileMenu = function() {
  const menu = document.getElementById('navMenu');
  const icon = document.querySelector('.mobile-menu-btn i');
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    document.body.style.overflow = 'auto';
  }
};
