const images = document.querySelectorAll('.right img');

var index = 0;

setInterval(() => {
    if (index >= images.length) {
        index = 0;
    }

    for (let i = 0; i < images.length; i++) {
        if (i == images.length){
            i = 0;
        }
         images[i].style.display = 'none';   
    }
    images[index].style.display = 'block';
    index += 1;

}, 700);
