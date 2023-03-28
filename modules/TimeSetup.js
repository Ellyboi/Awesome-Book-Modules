import Navigation from './modules/navigation.js';
import './modules/bookset.js';
import getTime from './modules/timeSetup.js';

document.addEventListener('DOMContentLoaded', () => {
  Navigation();
  getTime();
});