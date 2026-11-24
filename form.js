const dialog = document.querySelector('#briefing-modal');
const form = document.querySelector('#briefing');

document.querySelector('#abrir-briefing').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const details = [
    'Briefing de identidade visual | William Borella',
    '',
    'Nome: ' + data.get('nome'),
    'Empresa: ' + data.get('empresa'),
    'E-mail: ' + data.get('email'),
    'WhatsApp: ' + (data.get('telefone') || 'Não informado'),
    '',
    'Sobre o projeto:',
    data.get('projeto')
  ];
  const file = new Blob([details.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'briefing-identidade-visual.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#status').textContent = 'Download solicitado. Você pode compartilhar o arquivo com o William.';
});
