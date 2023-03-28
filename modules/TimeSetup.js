import Navigation from './modules/Navigation.js';
import './modules/Bookset.js';
import getTime from './modules/TimeSetup.js';

document.addEventListener('DOMContentLoaded', () => {
  Navigation();
  getTime();
});