let img1 = document.getElementById('img1');
let images = ['man.JPG', 'street.JPG', 'pantheon.JPG', 'colosseum.JPG','tower.JPG'];
let index = 0;

setInterval(function () {
    img1.src = images[index]; 
    index = (index + 1) % images.length; 
}, 2000);

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector('.popup');
    const submitButton = document.querySelector('.form button[type="submit"]');
    const okButton = document.querySelector('.popup button');
    const form = document.querySelector('.form'); 

    function showPopup(event) {
        event.preventDefault(); 
        popup.style.display = 'block';

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.value = ''); 
    }
    function hidePopup() {
        popup.style.display = 'none'; 
    }
    submitButton.addEventListener('click', showPopup);
    okButton.addEventListener('click', hidePopup);
})