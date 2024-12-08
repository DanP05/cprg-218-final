let img1 = document.getElementById('img1');
let images = ['man.JPG', 'street.JPG', 'pantheon.JPG', 'colosseum.JPG','tower.JPG'];
let index = 0;

setInterval(function () {
    img1.src = images[index]; 
    index = (index + 1) % images.length; 
}, 2000);
