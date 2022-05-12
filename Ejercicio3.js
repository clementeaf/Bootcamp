let text = document.getElementById('text')
let btn = document.getElementById('btn')

let url = 'https://api.chucknorris.io/jokes/random'

const joke = async() => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const datos = await res.json();
        let dat = datos.value
        text.innerHTML = dat
    } catch (error){
        console.log(error);
    }    
}
joke()

btn.addEventListener('click', joke)
window.onload = joke()