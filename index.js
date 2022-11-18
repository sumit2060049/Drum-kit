var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    //alert("i got clicked");
   // var audio=new Audio("tom-1.mp3");
    //audio.play();
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    buttonAnimation(buttonhtml);

    
    
});

}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
    
        default:
            console.log(button.InnerHTML);
            break;
    }
}

function buttonAnimation(currentkey){
var activebutton=document.querySelector("."+currentkey);
activebutton.classList.add("pressed");

setTimeout(function(){
    activebutton.classList.remove("pressed");
},100)
}