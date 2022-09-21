const images = document.querySelectorAll("img");

let i = 0;

setInterval(function() {
    // console.log("I run every 3 seconds indefinitely");
    
    if (i == 0) {
        images[i].style.display = 'block';
    } 
    else if (i == images.length) {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
    } 
    else {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
    }

    i++;

}, 3000);
