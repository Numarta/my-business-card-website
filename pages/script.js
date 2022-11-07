let popup = document.querySelector('.pop-up');

let popupButtons = document.querySelectorAll('.button');
for (let i = 0; i < popupButtons.length; i++) {
  popupButtons[i].addEventListener('click', function () {
    popup.style.visibility = 'visible';
  });
}
let popupYes = document.querySelector('.pop-up__button_state_yes');
let popupNo = document.querySelector('.pop-up__button_state_no');
popupYes.addEventListener('click', function () {
  window.location.href = 'https://webappmaster.ru';
  popup.style.visibility = 'hidden';
});
popupNo.addEventListener('click', function () {
  popup.style.visibility = 'hidden';
});
