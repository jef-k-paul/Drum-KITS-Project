// document.querySelector("button").addEventListener("click", handleClick )

// function handleClick(){
//     alert("I got clicked.");
// }

// Now using the anonymous function method.

var ltime = document.querySelectorAll(".drum").length;


//Detecting the mouse clicks
for(var i=0; i< ltime; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonClicked = this.innerHTML;
        playtone(buttonClicked);
        buttonAnimation(buttonClicked);
        
    });
}

//Dectecting keyboard press
document.addEventListener("keypress", function (evnt){   //Checking the keypress in a whole document.
    playtone(evnt.key);
    buttonAnimation(evnt.key);
});

function playtone(key){

    switch(key){
        case ("w"):
            var drum_sound = new Audio('./sounds/tom-1.mp3');
                drum_sound.play();
        break;
        case ("a"):
            var drum_sound = new Audio('./sounds/tom-2.mp3');
                drum_sound.play();
        break;
        case ("s"):
            var drum_sound = new Audio('./sounds/tom-3.mp3');
                drum_sound.play();
        break;
        case ("d"):
            var drum_sound = new Audio('./sounds/tom-4.mp3');
                drum_sound.play();
        break;
        case ("j"):
            var drum_sound = new Audio('./sounds/snare.mp3');
                drum_sound.play();
        break;

        case ("k"):
            var drum_sound = new Audio('./sounds/crash.mp3');
                drum_sound.play();
        break;
        case ("l"):
            var drum_sound = new Audio('./sounds/kick-bass.mp3');
                drum_sound.play();
        break;
        default : ""

    }

}

function buttonAnimation(passedKey){
    document.querySelector("."+passedKey).classList.add("pressed");
    setTimeout( function (){
        document.querySelector("."+passedKey).classList.remove('pressed');
    }, 150)
}

