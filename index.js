for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
        var a=this.innerHTML;
        sound(a);     
        animate(a);
    });
}

document.addEventListener("keydown",function(){
    sound(event.key);
    animate(event.key);
});

function sound(key)
{
                if(key==="w")
                    new Audio('sounds/crash.mp3').play();
                else if(key==="a")
                    new Audio('sounds/kick-bass.mp3').play();
                else if(key==="s")
                    new Audio('sounds/snare.mp3').play();
                else if(key==="d")
                    new Audio('sounds/tom-1.mp3').play();
                else if(key==="j")
                    new Audio('sounds/tom-2.mp3').play();
                else if(key==="k")
                    new Audio('sounds/tom-3.mp3').play();
                else if(key==="l")
                    new Audio('sounds/tom-4.mp3').play();
                else
                    console.log(key);
}

function animate(ckey)
{
    var k=document.querySelector("."+ckey);
    k.classList.add("pressed");
    setTimeout(function(){
        k.classList.remove("pressed");
    },100);
}
