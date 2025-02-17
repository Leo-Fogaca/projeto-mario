const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
const clouds = document.getElementById('clouds')

document.addEventListener('keydown', function (e) {
    let space = e.which || e.keycode || 0;
    if (space == 32) {
        mario.classList.add('jump')
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }
})

const verification = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './src/images/game-over.png'
        mario.style.width = '70px'
        mario.style.left = '50px'
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(verification)
    }
}, 10);