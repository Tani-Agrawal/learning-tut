const textE1 = document.getElementById('text')
const speedE1 = document.getElementById('speed')
const text = 'W e love programing!'
let idx = 1
let speed = 300 / speedE1.value 

writeText()

function writeText(){
    textE1.innerText = text.slice(0,idx)

    id++

    if(idx > text.length) {
        idx = 1 
    }

    setTimeout(writeText, speed)
}


speedE1.addEventListener('input', (e) => speed = 300 / e.target.value)