
    const prince = document.getElementById('character')
    let isJumping = false
    let isGoingRight = false
    let isGoingLeft = false
    let princeHigh = 0;
    let gravity = 0.9
    let left = 0
    let leftTimerId
    let rightTimerId

    function jump(){
        
        let timerUpId = setInterval(function (){

            if (princeHigh > 250) {
            clearInterval(timerUpId);
            let timerDownId = setInterval(function(){

                if (princeHigh < 0) {
                    clearInterval(timerDownId);
                }
                princeHigh -= 5;
                prince.style.bottom = princeHigh + "px";
            },20)
            }
            princeHigh += 20;
            princeHigh * gravity;
            prince.style.bottom = princeHigh + "px";
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
