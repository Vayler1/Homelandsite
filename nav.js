let currentPath = window.location.pathname.split("/").pop();
if (currentPath === "") currentPath = "index.html";

// Сторінки всередині меню "Механіки"
const mechanicsItems = [
  { href: "towns.html", icon: "fa-city", text: "Міста та Заводи" },
  { href: "warfare.html", icon: "fa-crosshairs", text: "Війни Націй" },
  { href: "defence.html", icon: "fa-shield-virus", text: "ППО & Блекаути" },
  { href: "bloodnight.html", icon: "fa-droplet", text: "Кривава Ніч" },
  { href: "bosses.html", icon: "fa-skull", text: "Міфічні Боси" },
  { href: "buildings.html", icon: "fa-building-columns", text: "Великі Будівлі" },
  { href: "moon.html", icon: "fa-moon", text: "Зона «Місяць»" },
  { href: "brewery.html", icon: "fa-wine-bottle", text: "Броварня" }
];

const isMechanicActive = mechanicsItems.some(item => item.href === currentPath);

let navHTML = `
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Відкрити меню">
    <i class="fa-solid fa-bars"></i>
  </button>
  <ul id="navMenu">
    <li><a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}"><i class="fa-solid fa-house"></i> Головна</a></li>
    
    <!-- ІНФО (у єдиному форматі) -->
    <li><a href="info.html" class="nav-link nav-info ${currentPath === 'info.html' ? 'active' : ''}"><i class="fa-solid fa-circle-info"></i> Інфо</a></li>
    
    <!-- ГОЛОСУВАННЯ -->
    <li><a href="vote.html" class="nav-link ${currentPath === 'vote.html' ? 'active' : ''}"><i class="fa-solid fa-check-to-slot"></i> Голосування</a></li>

    <!-- ГАЙД -->
    <li><a href="guide.html" class="nav-link ${currentPath === 'guide.html' ? 'active' : ''}"><i class="fa-solid fa-book-open"></i> Гайд</a></li>

    <!-- МЕХАНІКИ (Dropdown) -->
    <li class="nav-dropdown ${isMechanicActive ? 'active' : ''}">
      <a href="javascript:void(0)" class="nav-link dropdown-trigger" onclick="toggleDropdown(event)">
        <i class="fa-solid fa-cubes"></i> Механіки <i class="fa-solid fa-chevron-down caret-icon"></i>
      </a>
      <ul class="dropdown-menu">
`;

mechanicsItems.forEach(item => {
  const isActive = (currentPath === item.href) ? 'active' : '';
  navHTML += `        <li><a href="${item.href}" class="${isActive}"><i class="fa-solid ${item.icon}"></i> ${item.text}</a></li>\n`;
});

navHTML += `
      </ul>
    </li>

    <!-- ДОВІДНИК -->
    <li><a href="commands.html" class="nav-link ${currentPath === 'commands.html' ? 'active' : ''}"><i class="fa-solid fa-terminal"></i> Довідник</a></li>
  </ul>
`;

document.write(navHTML);

// Автоматично додає кнопку "Донат" перед Discord у єдиному стандарті
document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelector(".nav-btns");
  if (navBtns && !document.querySelector(".btn-donate")) {
    const donateBtn = document.createElement("a");
    donateBtn.href = "https://donate.homeland.pp.ua/";
    donateBtn.target = "_blank";
    donateBtn.className = "btn-donate";
    donateBtn.innerHTML = '<i class="fa-solid fa-gem"></i> Донат';
    navBtns.insertBefore(donateBtn, navBtns.firstChild);
  }
});

// Клік для мобільних пристроїв
window.toggleDropdown = function(e) {
  e.preventDefault();
  const dropdown = e.currentTarget.closest(".nav-dropdown");
  if (dropdown) dropdown.classList.toggle("open");
};

// Бургер-меню мобілок
window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMenu');
  const icon = document.querySelector('.mobile-menu-btn i');
  if (!menu) return;

  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
    document.body.style.overflow = 'hidden';
  } else {
    if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    document.body.style.overflow = 'auto';
  }
};