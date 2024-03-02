const modoBtn = document.getElementById('modo-btn');

modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('modo-claro');
  document.body.classList.toggle('modo-escuro');

  if (document.body.classList.contains('modo-claro')) {
    modoBtn.textContent = 'Modo Escuro';
  } else {
    modoBtn.textContent = 'Modo Claro';
  }
});
