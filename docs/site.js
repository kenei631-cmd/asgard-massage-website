(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-navigation]');
  const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);

  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.classList.toggle('is-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close site menu' : 'Open site menu');
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        navigation.classList.remove('is-open');
        menuButton.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open site menu');
      }
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-protected-email]').forEach((button) => {
    button.addEventListener('click', () => {
      const localPart = window.atob('bWFzc2FnZQ==');
      const domainPart = window.atob('YXNnYXJkbWFzc2FnZS5jb20=');
      const address = `${localPart}${String.fromCharCode(64)}${domainPart}`;
      const link = document.createElement('a');
      link.className = 'protected-email revealed-email';
      link.href = ['mailto', address].join(':');
      link.textContent = address;
      link.setAttribute('aria-label', `Email Asgard Massage at ${address}`);
      button.replaceWith(link);
      link.focus();
    }, { once: true });
  });
})();
