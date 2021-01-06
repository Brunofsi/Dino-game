const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false;
//ljk
function handlekeyup(event) {
    if (event.keyCode === 32) {
        if(!isjumping){
            jump();
        }
    }
}

function jump() {
    let position = 0;

    isjumping = true;

    let upInterval = setInterval(() => {

        if(position >= 150){
            clearInterval(upInterval);

            //DESCENDO
            let downInterval = setInterval(()=> {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isjumping = false;
                }
                else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            },25);
        }
        else {
        //SUBINDO
        position += 20;
        dino.style.bottom = position + 'px';
        }
    },20);
}


function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;    

    cactus.classList.add('cactus');    
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);    

    let leftInterval = setInterval(()=>{
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handlekeyup);

//l j k