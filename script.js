
    const prince = document.getElementById('character')
    //con queste 3 variabili disabilito il poter saltare o andare a destra se ho già premuto
    let isJumping = false
    let isGoingRight = false
    let isGoingLeft = false
    //
    let jumpHeight = 0;
    let gravity = 0.9
    let left = 0
    let leftTimerId
    let rightTimerId

    function jump() {
    if (isJumping) return
    
    let upTimerId = setInterval(function () {
        //jump down
        if (jumpHeight > 250) {
        clearInterval(upTimerId)
        let downTimerId = setInterval(function () {
            if (jumpHeight < 0 ) {
            clearInterval(downTimerId)
            //vuol dire che il salto è finito
            isJumping = false
            }
            jumpHeight -= 5
            jumpHeight = jumpHeight * gravity
            prince.style.bottom = jumpHeight + 'px'
        },20)
        }
        //jump up
        isJumping = true
        jumpHeight +=30
        jumpHeight = jumpHeight * gravity
        prince.style.bottom = jumpHeight + 'px'
    },20)
    }

    function slideLeft() {
        prince.classList.remove('character')
        prince.classList.add('character-sliding')
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(function () {
            console.log('going left')
            left -=5
            prince.style.left = left + 'px'
        },20)
    }

    function slideRight() {
        prince.classList.remove('character')
        prince.classList.add('character-sliding')
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval(function () {
            console.log('going right')
            left +=5
            prince.style.left = left + 'px'
        },20)
    }


    //document.addEventListener('keyup',(e) =>console.log("questo è il tasto" + e.key))
    

    // //tasti direzionali
    function control(e) {
        if(e.key === "ArrowRight") {
            slideRight() //if we press the right arrow on our keyboard
        } else if (e.key === "ArrowUp") {
            jump() // if we press the up arrow
        } else if (e.key === "ArrowLeft") {
            slideLeft() // if we press the up arrow
        }
    }
    document.addEventListener('keydown', control)
