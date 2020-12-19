//Selecting Element
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})

//Selecting Element
const body = document.querySelector('body');
const container = document.querySelector('div.container')
const li = document.getElementsByTagName('li');
const red = li[0]
const blue = li[1]
const green = li[2]


//creating new div
const div = document.createElement("div");
body.appendChild(div);

const boxMenu = body.getElementsByTagName('div')[11];
boxMenu.setAttribute('class', 'box-menu');

function myFunction(menu) {
    menu.classList.toggle("change");
    boxMenu.classList.toggle("display");
}

// red.addEventListener('click', (e) => {
//     // console.log(e.target);
//     body.style.backgroundColor = 'red';
// })
// blue.addEventListener('click', changeBlue);
// green.addEventListener('click', changeGreen);
// function changeBlue(){
//     body.style.backgroundColor = 'blue';
// }
// function changeGreen(){
//     body.style.backgroundColor = 'green';
// }

for (let i = 0; i < li.length; i++) {

    li[i].addEventListener('click', changeColor);

    function changeColor() {
        if (li[i] === red) {
            body.style.backgroundColor = 'maroon';
        } else if (li[i] === blue) {
            body.style.backgroundColor = 'darkblue';
        } else if (li[i] === green) {
            body.style.backgroundColor = 'darkgreen';
        }
    }
}

//selecting button
const button = document.getElementsByTagName('button');
const music = document.getElementsByTagName('audio')[0]
const play = button[0]
const pause = button[1]

//addEventListener
play.addEventListener('click', playMusic) 
pause.addEventListener('click', pauseMusic)

//function
function playMusic() {
    music.play()
}
function pauseMusic() {
    music.pause()
}