const DrawerInitiator = {
  init({
    button, drawer, content, navbar,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, navbar);
    });
  },

  _toggleDrawer(event, drawer, navbar) {
    event.stopPropagation();
    console.log('sss');
    drawer.classList.toggle('open');
    // eslint-disable-next-line no-param-reassign
    navbar.style.display = 'block';
  },

  _closeDrawer(event, drawer, navbar) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    if (window.innerWidth < 690) {
      // eslint-disable-next-line no-param-reassign
      navbar.style.display = 'none';
    }
  },
};

export default DrawerInitiator;
