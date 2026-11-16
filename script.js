// Находим кнопку на странице
const button = document.querySelector('.btn');

// Вешаем на неё "слушатель" — что делать при клике
button.addEventListener('click', function (event) {
  event.preventDefault(); // не переходить по ссылке #contact сразу

  // Плавно прокручиваем к секции контактов
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });

  // И показываем сообщение
  alert('Привет! Напиши мне в Telegram: @твой_ник');
});