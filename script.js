
    const prince = document.getElementById('character')
    let isJumping = false
    let isGoingRight = false
    let isGoingLeft = false
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

    //document.addEventListener('keyup',(e) =>console.log("questo è il tasto" + e.key))
    

    // //tasti direzionali
    function control(e) {
        if(e.key === "ArrowRight") {
            slideRight() //if we press the right arrow on our keyboard
        } else if (e.key === "ArrowUp") {
            jump() // if we press the up arrow
        } 
    }
    document.addEventListener('keydown', control)
