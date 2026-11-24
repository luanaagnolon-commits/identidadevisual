for (const card of document.querySelectorAll('.project-card')) {
  const gallery = document.getElementById(card.getAttribute('aria-controls'));
  const close = gallery.querySelector('.modal-close');

  card.addEventListener('click', () => {
    gallery.showModal();
    gallery.scrollTop = 0;
  });
  close.addEventListener('click', () => gallery.close());
}
