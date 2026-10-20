const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const navLinks = document.querySelectorAll('[data-menu] a');
const year = document.querySelector('[data-current-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
}

function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function toggleMenu() {
  if (!menu || !menuToggle) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('is-open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
