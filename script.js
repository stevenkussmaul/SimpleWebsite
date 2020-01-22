let button1;
let button2;
let button3;
let box;

window.onload = () => {
    button1 = document.getElementById('button-1');
    button2 = document.getElementById('button-2');
    button3 = document.getElementById('button-3');
    // box = document.getElementsByClassName('box');
    box = document.getElementById('box');

    console.log(box);

    button1.onclick = function () {
        console.log('1 clicked!');
    }
    button2.onclick = function () {
        console.log('2 clicked!');
    }
    button3.onclick = function () {
        console.log('3 clicked!');
    }
    button1.addEventListener('click', (event) => {

        style = window.getComputedStyle(button1),
        color = style.getPropertyValue('background-color');
        box.style.backgroundColor = color;
    });
    button2.addEventListener('click', (event) => {
        style = window.getComputedStyle(button2),
        color = style.getPropertyValue('background-color');
        box.style.backgroundColor = color;
    });
    button3.addEventListener('click', (event) => {
        style = window.getComputedStyle(button3),
        color = style.getPropertyValue('background-color');
        box.style.backgroundColor = color;
    });

}
