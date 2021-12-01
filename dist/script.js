const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const boxes = document.querySelectorAll('.box')

let currentActive = 1

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