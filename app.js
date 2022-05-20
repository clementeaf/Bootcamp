let colors = ['rgb(0, 0, 255)','rgb(255, 255, 0)','rgb(0, 128, 0)','rgb(255, 0, 0)','rgb(255, 255, 255)','rgb(255, 165, 0)',]

let cuadrados = document.querySelectorAll('.square')
let colorDisp = document.getElementById('colorDisplay')
let message = document.getElementById('message')
let title = document.getElementById('title')

const random = Math.floor(Math.random() * colors.length);
let pickedColor = colors[random];

function reload() {
    window.location.reload();
}

const shuffledArray = colors.sort((a, b) => 0.5 - Math.random());
for(i=0;i <= shuffledArray.length;i++){
    if(i === 6){
        break
    }
    console.log(shuffledArray[i])
    cuadrados.forEach(el => {
        el.style.background = shuffledArray[i++]
    });
}
    cuadrados.forEach(el => {
        el.style.background = shuffledArray
    });




function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  



function clickedColor(elem){
    if(elem.style.background != pickedColor){
        alert('Intentalo nuevamente')
        elem.style.background = '#232323'
    } else {
        title.style.color = elem.style.background
        cuadrados.forEach(el => {
            el.style.background = elem.style.background
            message.innerHTML = '¡Correcto!'
        });
    }
}

 
colorDisp.innerHTML = " " + pickedColor + " "

function easy(){
    for(i=0;i <= colors.length;i++){
        if(i === 3){
            cuadrados.forEach(el => {
                el.style.background = colors[i++]
            });
            break
        }
        cuadrados.forEach(el => {
            el.style.background = '#232323'
        });

    }

}

function hard(){
    for(i=0;i <= colors.length;i++){
        if(i === 6){
            break
        }
        console.log(colors[i])
        cuadrados.forEach(el => {
            el.style.background = colors[i++]
        });
    }
}
