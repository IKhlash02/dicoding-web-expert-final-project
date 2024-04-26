import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, navbar, skipLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;
    this._skipLink = skipLink;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navbar: this._navbar,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    this._skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      this._content.scrollIntoView({ behavior: 'smooth' });
      this._skipLink.blur();
    });
  }
}

export default App;
