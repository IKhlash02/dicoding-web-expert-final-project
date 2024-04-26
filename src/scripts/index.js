import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';
// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  navbar: document.querySelector('.nav'),
  skipLink: document.querySelector('.skip-link'),
});

// Restaurant.init();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// window.addEventListener('resize', () => {
//   const navbar = document.querySelector('.nav');
//   if (window.innerWidth > 690) {
//     navbar.style.display = 'block';
//   }
// });
