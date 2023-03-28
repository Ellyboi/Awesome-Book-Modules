const Navigation = () => {
  document.querySelector('#book-list-menu').addEventListener('click', () => {
    document.querySelector('.books-container').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
  });

  document.querySelector('#add-new-book-menu').addEventListener('click', () => {
    document.querySelector('.form').classList.remove('hide');
    document.querySelector('.books-container').classList.add('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
  });

  document.querySelector('#contact-menu').addEventListener('click', () => {
    document.querySelector('.section-contact-info').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.books-container').classList.add('hide');
  });
};

export default Navigation;