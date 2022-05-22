
const imgs = document.querySelector('.carousel--container');

const img = document.querySelectorAll('.carousel--container img');
const leftBtn = document.querySelector('.left--button');
const rightBtn = document.querySelector('.right--button');

let idx =0;

function nextImg() {
    idx++;
    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

    // setTimeout(run, 2000);
}

function prevImg() {
    idx--;
    if(idx < 0) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

leftBtn.addEventListener('click', prevImg);
rightBtn.addEventListener('click', nextImg);