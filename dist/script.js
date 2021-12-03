//progress box variables
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const boxes = document.querySelectorAll('.box')
let currentActive = 1

//loading text variables
const textLoader = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const blurContainer = document.querySelector('.blurry-container')
let load = 0
let int = setInterval(blurring,30)

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring(){
    load++

    if(load >99)
    {
        clearInterval(int)
        blurContainer.remove()
    }

    textLoader.innerText = `${load}%`
    textLoader.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0,100, 15,0)})px`

}



next.addEventListener('click', () => {
    currentActive++

    if (currentActive > boxes.length) {
        currentActive = boxes.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update(){
    boxes.forEach((box, index)=>{
        if(index<currentActive)
        {
            box.classList.add('active')
        }
        else{
            box.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (boxes.length - 1)*100) + '%'

    if(currentActive === 1)
    {
        prev.disabled = true;
    }
    else if(currentActive === boxes.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

