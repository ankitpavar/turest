/* eslint-disable */
const dbutton = document.getElementById('dpanel-btn');
const popup = document.querySelector('.popup-wrapper');
const popclose = document.querySelector('.popup-close');

dbutton.addEventListener(click, () => {
    popup.style.display = 'block';
});
popclose.addEventListener(click, () => {
    popup.style.display = 'none';
});
popup.addEventListener(click, () => {
    popup.style.display = 'none';
});