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
  { href: "buildings.html", text: "Шедеври" },
  { href: "moon.html", text: "Місяць" },
  { href: "brewery.html", text: "Броварня" },
  { href: "commands.html", text: "Довідник" }
];

let navHTML = "<ul>\n";
navItems.forEach(item => {
  const isActive = (currentPath === item.href) ? 'class="active"' : '';
  navHTML += `  <li><a href="${item.href}" ${isActive}>${item.text}</a></li>\n`;
});
navHTML += "</ul>";

document.write(navHTML);