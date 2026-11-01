// --- NAV.JS: 4 МОВИ (UK, EN, PL, DE) + ПОВНА СИНХРОНІЗАЦІЯ З СSS VATRAMC ---

const path = window.location.pathname;
let lang = "uk";
if (path.includes("/en/")) lang = "en";
else if (path.includes("/pl/")) lang = "pl";
else if (path.includes("/de/")) lang = "de";

let currentFile = path.split("/").pop();
if (!currentFile || currentFile === "" || currentFile === "en" || currentFile === "pl" || currentFile === "de") {
  currentFile = "index.html";
}

const flagSVG = {
  uk: `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" style="border-radius:2px; flex-shrink:0; vertical-align:middle;"><rect width="18" height="6.5" fill="#0057B7"/><rect y="6.5" width="18" height="6.5" fill="#FFD700"/></svg>`,
  en: `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" style="border-radius:2px; flex-shrink:0; vertical-align:middle;"><rect width="18" height="13" fill="#B22234"/><path d="M0 2h18M0 4h18M0 6h18M0 8h18M0 10h18M0 12h18" stroke="#fff" stroke-width="1"/><rect width="8" height="7" fill="#3C3B6E"/><circle cx="2" cy="2" r="0.6" fill="#fff"/><circle cx="4" cy="2" r="0.6" fill="#fff"/><circle cx="6" cy="2" r="0.6" fill="#fff"/><circle cx="3" cy="3.5" r="0.6" fill="#fff"/><circle cx="5" cy="3.5" r="0.6" fill="#fff"/><circle cx="2" cy="5" r="0.6" fill="#fff"/><circle cx="4" cy="5" r="0.6" fill="#fff"/><circle cx="6" cy="5" r="0.6" fill="#fff"/></svg>`,
  pl: `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" style="border-radius:2px; flex-shrink:0; vertical-align:middle; box-shadow: 0 0 1px rgba(255,255,255,0.3);"><rect width="18" height="6.5" fill="#FFFFFF"/><rect y="6.5" width="18" height="6.5" fill="#DC143C"/></svg>`,
  de: `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" style="border-radius:2px; flex-shrink:0; vertical-align:middle;"><rect width="18" height="4.33" fill="#000000"/><rect y="4.33" width="18" height="4.33" fill="#DD0000"/><rect y="8.66" width="18" height="4.34" fill="#FFCE00"/></svg>`
};

const langLabels = {
  uk: "УКР",
  en: "ENG",
  pl: "POL",
  de: "DEU"
};

const i18n = {
  uk: {
    home: "Головна", info: "Інфо", vote: "Голосування", guide: "Гайд", mechanics: "Механіки", commands: "Довідник", donate: "Донат",
    towns: "Міста та Заводи", warfare: "Війни Націй", defence: "ППО & Блекаути", bloodnight: "Кривава Ніч",
    bosses: "Міфічні Боси", buildings: "Великі Будівлі", moon: "Зона «Місяць»", brewery: "Броварня",
    vatramcBadge: "🔥 Моніторинг нового покоління",
    partnerTag: "Офіційний партнер Homeland",
    vatramcTitle: "Знайди свій світ у вогнищі Minecraft разом з VatraMC",
    vatramcDesc: "Відкривай найкращі українські Minecraft сервери, відстежуй ігровий час, отримуй унікальні ачівки та підтримуй щоденний стрік.",
    vatramcBtn: "Перейти на VatraMC",
    featTime: "Час у грі", featTimeSub: "Точний облік онлайн-годин",
    featAchieve: "Система ачівок", featAchieveSub: "Унікальні нагороди сервера",
    featStreak: "Щоденні стріки", featStreakSub: "Множники за активність"
  },
  en: {
    home: "Home", info: "Info", vote: "Vote & Streaks", guide: "Guide", mechanics: "Mechanics", commands: "Commands", donate: "Store",
    towns: "Towns & Industry", warfare: "Nation Wars", defence: "Air Defense & Blackouts", bloodnight: "Blood Night",
    bosses: "Mythic Bosses", buildings: "Grand Landmarks", moon: "Moon Anarchy", brewery: "Brewery",
    vatramcBadge: "🔥 Next-Gen Server List",
    partnerTag: "Official Homeland Partner",
    vatramcTitle: "Find Your World in the Fire of Minecraft with VatraMC",
    vatramcDesc: "Discover top Ukrainian Minecraft servers, track in-game playtime stats, earn exclusive achievements, and level up your daily streaks.",
    vatramcBtn: "Explore VatraMC",
    featTime: "Playtime Stats", featTimeSub: "Accurate time tracking",
    featAchieve: "Server Badges", featAchieveSub: "Unlock rare achievements",
    featStreak: "Daily Streaks", featStreakSub: "Activity reward multipliers"
  },
  pl: {
    home: "Główna", info: "Info", vote: "Głosowanie", guide: "Poradnik", mechanics: "Mechaniki", commands: "Komendy", donate: "Sklep",
    towns: "Miasta i Fabryki", warfare: "Wojny Nacji", defence: "Obrona Plot i Blackouty", bloodnight: "Krwawa Noc",
    bosses: "Mityczni Bossowie", buildings: "Wielkie Budowle", moon: "Strefa Księżyc", brewery: "Browar",
    vatramcBadge: "🔥 Monitoring nowej generacji",
    partnerTag: "Oficjalny partner Homeland",
    vatramcTitle: "Odkryj swój świat w płomieniach Minecrafta z VatraMC",
    vatramcDesc: "Odkrywaj ukraińskie serwery Minecraft, sprawdzaj czas spędzony w grze, zdobywaj odznaki i powiększaj swój codzienny streak.",
    vatramcBtn: "Odwiedź VatraMC",
    featTime: "Czas w grze", featTimeSub: "Precyzyjne statystyki",
    featAchieve: "Osiągnięcia", featAchieveSub: "Unikalne nagrody serwerowe",
    featStreak: "Codzienne streaki", featStreakSub: "Mnożniki nagród za głosy"
  },
  de: {
    home: "Startseite", info: "Info", vote: "Voten", guide: "Guide", mechanics: "Mechaniken", commands: "Befehle", donate: "Shop",
    towns: "Städte & Fabriken", warfare: "Nationenkriege", defence: "Flugabwehr & Blackouts", bloodnight: "Blutnacht",
    bosses: "Mythische Bosse", buildings: "Monumentale Bauten", moon: "Zone Mond", brewery: "Brauerei",
    vatramcBadge: "🔥 Serverliste der nächsten Gen",
    partnerTag: "Offizieller Homeland Partner",
    vatramcTitle: "Finde deine Welt im Feuer von Minecraft mit VatraMC",
    vatramcDesc: "Entdecke ukrainische Minecraft-Server, verfolge deine Spielzeit, schalte Ingame-Erfolge frei und halte tägliche Streaks aktiv.",
    vatramcBtn: "Zu VatraMC",
    featTime: "Spielzeit-Stats", featTimeSub: "Präzise Zeiterfassung",
    featAchieve: "Server-Erfolge", featAchieveSub: "Seltene Auszeichnungen",
    featStreak: "Tägliche Streaks", featStreakSub: "Belohnungsmultiplikatoren"
  }
};

const t = i18n[lang];
const prefix = lang === "uk" ? "" : `../${lang}/`;
const baseRoot = lang === "uk" ? "" : "../";

const mechanicsPages = ["towns.html", "warfare.html", "defence.html", "bloodnight.html", "bosses.html", "buildings.html", "moon.html", "brewery.html"];
const isMechanicActive = mechanicsPages.includes(currentFile);

let navHTML = `
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Open menu">
    <i class="fa-solid fa-bars"></i>
  </button>
  <ul id="navMenu">
    <li><a href="${prefix}index.html" class="nav-link ${currentFile === 'index.html' ? 'active' : ''}"><i class="fa-solid fa-house"></i> ${t.home}</a></li>
    <li><a href="${prefix}info.html" class="nav-link ${currentFile === 'info.html' ? 'active' : ''}"><i class="fa-solid fa-circle-info"></i> ${t.info}</a></li>
    <li><a href="${prefix}vote.html" class="nav-link ${currentFile === 'vote.html' ? 'active' : ''}"><i class="fa-solid fa-check-to-slot"></i> ${t.vote}</a></li>
    <li><a href="${prefix}guide.html" class="nav-link ${currentFile === 'guide.html' ? 'active' : ''}"><i class="fa-solid fa-book-open"></i> ${t.guide}</a></li>

    <!-- DROPDOWN МЕХАНІКИ -->
    <li class="nav-dropdown ${isMechanicActive ? 'active' : ''}">
      <a href="javascript:void(0)" class="nav-link dropdown-trigger" onclick="toggleDropdown(event)">
        <i class="fa-solid fa-cubes"></i> ${t.mechanics} <i class="fa-solid fa-chevron-down caret-icon"></i>
      </a>
      <ul class="dropdown-menu">
        <li><a href="${prefix}towns.html" class="${currentFile === 'towns.html' ? 'active' : ''}"><i class="fa-solid fa-city"></i> ${t.towns}</a></li>
        <li><a href="${prefix}warfare.html" class="${currentFile === 'warfare.html' ? 'active' : ''}"><i class="fa-solid fa-crosshairs"></i> ${t.warfare}</a></li>
        <li><a href="${prefix}defence.html" class="${currentFile === 'defence.html' ? 'active' : ''}"><i class="fa-solid fa-shield-virus"></i> ${t.defence}</a></li>
        <li><a href="${prefix}bloodnight.html" class="${currentFile === 'bloodnight.html' ? 'active' : ''}"><i class="fa-solid fa-droplet"></i> ${t.bloodnight}</a></li>
        <li><a href="${prefix}bosses.html" class="${currentFile === 'bosses.html' ? 'active' : ''}"><i class="fa-solid fa-skull"></i> ${t.bosses}</a></li>
        <li><a href="${prefix}buildings.html" class="${currentFile === 'buildings.html' ? 'active' : ''}"><i class="fa-solid fa-building-columns"></i> ${t.buildings}</a></li>
        <li><a href="${prefix}moon.html" class="${currentFile === 'moon.html' ? 'active' : ''}"><i class="fa-solid fa-moon"></i> ${t.moon}</a></li>
        <li><a href="${prefix}brewery.html" class="${currentFile === 'brewery.html' ? 'active' : ''}"><i class="fa-solid fa-wine-bottle"></i> ${t.brewery}</a></li>
      </ul>
    </li>

    <li><a href="${prefix}commands.html" class="nav-link ${currentFile === 'commands.html' ? 'active' : ''}"><i class="fa-solid fa-terminal"></i> ${t.commands}</a></li>

    <!-- ПЕРЕМИКАЧ МОВ -->
    <li class="nav-dropdown lang-switch-dropdown">
      <a href="javascript:void(0)" class="nav-link lang-btn dropdown-trigger" onclick="toggleDropdown(event)">
        ${flagSVG[lang]} <span>${langLabels[lang]}</span> <i class="fa-solid fa-chevron-down caret-icon"></i>
      </a>
      <ul class="dropdown-menu lang-menu">
        <li><a href="${baseRoot}${currentFile}" class="${lang === 'uk' ? 'active' : ''}">${flagSVG.uk} <span>Українська</span></a></li>
        <li><a href="${baseRoot}en/${currentFile}" class="${lang === 'en' ? 'active' : ''}">${flagSVG.en} <span>English</span></a></li>
        <li><a href="${baseRoot}pl/${currentFile}" class="${lang === 'pl' ? 'active' : ''}">${flagSVG.pl} <span>Polski</span></a></li>
        <li><a href="${baseRoot}de/${currentFile}" class="${lang === 'de' ? 'active' : ''}">${flagSVG.de} <span>Deutsch</span></a></li>
      </ul>
    </li>
  </ul>
`;

document.write(navHTML);

document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelector(".nav-btns");
  if (navBtns) {


    if (!document.querySelector(".btn-donate")) {
      const donateBtn = document.createElement("a");
      donateBtn.href = "https://donate.homeland.pp.ua/";
      donateBtn.target = "_blank";
      donateBtn.className = "btn-donate";
      donateBtn.innerHTML = `<i class="fa-solid fa-gem"></i> ${t.donate}`;
      navBtns.insertBefore(donateBtn, navBtns.firstChild);
    }
  }

  // АВТОМАТИЧНА ВСТАВКА БАНЕРА VATRAMC: СТРОГО В КІНЦІ КОНТЕНТУ ПЕРЕД ФУТЕРОМ
  if (!document.querySelector(".vatramc-banner-wrapper")) {
    const bannerBox = document.createElement("div");
    bannerBox.className = "vatramc-banner-wrapper";
    bannerBox.innerHTML = `
      <div class="vatramc-card">
        <div class="vatramc-glow"></div>
        <div class="vatramc-header">
          <div class="vatramc-info">
            <div class="vatramc-badge">
              <span>${t.vatramcBadge}</span>
              <span class="vatramc-badge-dot">•</span>
              <span>${t.partnerTag}</span>
            </div>
            <h3 class="vatramc-title"><i class="fa-solid fa-fire" style="color:#f97316;"></i> ${t.vatramcTitle}</h3>
            <p class="vatramc-desc">${t.vatramcDesc}</p>
          </div>
          <div class="vatramc-btn-col">
            <a href="https://vatramc.com" target="_blank" rel="noopener noreferrer" class="vatramc-btn">
              ${t.vatramcBtn} <i class="fa-solid fa-arrow-up-right-from-square vatramc-btn-arrow"></i>
            </a>
            <span class="vatramc-domain"><i class="fa-solid fa-globe"></i> vatramc.com</span>
          </div>
        </div>

        <div class="vatramc-features">
          <div class="vatramc-feat-item">
            <div class="vatramc-feat-icon" style="color: #fb923c;"><i class="fa-solid fa-stopwatch"></i></div>
            <div>
              <div class="vatramc-feat-title">${t.featTime}</div>
              <div class="vatramc-feat-sub">${t.featTimeSub}</div>
            </div>
          </div>
          <div class="vatramc-feat-item">
            <div class="vatramc-feat-icon" style="color: #fbbf24;"><i class="fa-solid fa-trophy"></i></div>
            <div>
              <div class="vatramc-feat-title">${t.featAchieve}</div>
              <div class="vatramc-feat-sub">${t.featAchieveSub}</div>
            </div>
          </div>
          <div class="vatramc-feat-item">
            <div class="vatramc-feat-icon" style="color: #f87171;"><i class="fa-solid fa-fire-flame-curved"></i></div>
            <div>
              <div class="vatramc-feat-title">${t.featStreak}</div>
              <div class="vatramc-feat-sub">${t.featStreakSub}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const footer = document.querySelector("footer");
    const mainContainer = document.querySelector("main.container") || document.querySelector(".container");

    if (footer && mainContainer && footer.parentNode === mainContainer) {
      mainContainer.insertBefore(bannerBox, footer);
    } else if (mainContainer) {
      mainContainer.appendChild(bannerBox);
    } else if (footer) {
      footer.parentNode.insertBefore(bannerBox, footer);
    }
  }

  const menu = document.getElementById('navMenu');
  if (menu) {
    menu.querySelectorAll('a:not(.dropdown-trigger)').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
          window.toggleMobileMenu();
        }
      });
    });
  }
});

window.toggleDropdown = function(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropdown = e.currentTarget.closest(".nav-dropdown");
  if (dropdown) dropdown.classList.toggle("open");
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMenu');
  const icon = document.querySelector('.mobile-menu-btn i');
  const header = document.querySelector('header');
  if (!menu) return;

  if (header) {
    const rect = header.getBoundingClientRect();
    const topOffset = Math.floor(rect.bottom);
    menu.style.top = topOffset + 'px';
    menu.style.height = `calc(100dvh - ${topOffset}px)`;
  }

  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
    document.body.style.overflow = 'hidden';
  } else {
    if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    document.body.style.overflow = '';
  }
};

window.addEventListener('resize', () => {
  if (window.innerWidth > 1150) {
    const menu = document.getElementById('navMenu');
    const icon = document.querySelector('.mobile-menu-btn i');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
      document.body.style.overflow = '';
    }
  }
});