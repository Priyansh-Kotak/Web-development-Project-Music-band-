    // Method 1 of adding an event listner

var lengthh = document.querySelectorAll(".mid button").length;


for(var i=0 ; i < lengthh ; i++)
{
    document.querySelectorAll(".mid button")[i].addEventListener("click",function(){
        var buttonhtml = this.innerHTML;

        // makesound(buttonhtml);

        makeSound(buttonhtml);

    });

    document.addEventListener('keypress',function(event){

        makeSound(event.key);
        

    });
}




function makeSound(key) 
{

    switch (key) 
    {
        case "w":
            var tom1 = new Audio('kick-bass.mp3');
            tom1.play();
            break;

        case "a":
            var tom2=new Audio('snare.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('tom-1.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('tom-2.mp3');
            tom4.play();
            break;

        case "j":
            var tom5= new Audio('tom-3.mp3');
            tom5.play();
            break;

        case "k":
            var tom6 = new Audio('tom-4.mp3');
            tom6.play();
            break;
        
        case "l":
            var tom7 = new Audio('crash.mp3');
            tom7.play();
            break;
  
    }
}














 


       // Method 2 of adding an event listner

// alert("hello");
// document.querySelectorAll(".mid button")[0].style.backgroundColor = "red";

// var length = document.querySelectorAll(".mid button").length;

// for (var i = 0; i < length; i++) {
//     if(i==0) document.querySelectorAll(".mid button")[i].addEventListener("click",checking1);
//     if(i==1) document.querySelectorAll(".mid button")[i].addEventListener("click",clicking2);
//     if(i==2) document.querySelectorAll(".mid button")[i].addEventListener("click",clicking3);
//     if(i==3) document.querySelectorAll(".mid button")[i].addEventListener("click",clicking4);
//     if(i==4) document.querySelectorAll(".mid button")[i].addEventListener("click",clicking5);
//     if(i==5) document.querySelectorAll(".mid button")[i].addEventListener("click", clicking6);
//     if(i==6) document.querySelectorAll(".mid button")[i].addEventListener("click", clicking7);
//     document.querySelectorAll(".mid button")[i].addEventListener("click", function()
//     {
//         (this.style.color='white'); 
//     })
    
// }                                     







// function checking1()
// {
//     var audio = new Audio('kick-bass.mp3');
//     audio.play();
// }

// function clicking2()
// {
//     var audio =new Audio('snare.mp3');
//     audio.play();
// }

// function clicking3()
// {
//     var audio = new Audio('tom-1.mp3');
//     audio.play();
// }

// function clicking4()
// {
//     var audio = new Audio('tom-2.mp3');
//     audio.play();
// }

// function clicking5()
// {
//     var audio = new Audio('tom-3.mp3');
//     audio.play();
// }
// function clicking6()
// {
//     var audio = new Audio('tom-4.mp3');
//     audio.play();   
// }

// function clicking7() 
// {
//     var audio = new Audio('crash.mp3');
//     audio.play();
// }











