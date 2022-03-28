//parenthesis is not used in function because 
//there is immediately run this function first and
//to solve that probelm parenthesis is not used in function
//after clicking only run that problem
var num=document.querySelectorAll(".drum").length;
console.log(num);
var cv;
for(var i=0; i<num; i++)
{
    //anyonimous function
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    console.log(i);
    //console.log(this);
    //console.log(this.value);
  // btnAnimation(this.innerHTML);
    console.log(this.innerHTML);
    if(this.innerHTML=='w')
    {
        var ad1=new Audio("sound/d1.wav");
        ad1.play();
    }
    var audio;
    if(this.value ==1)
    {
         audio = new Audio("sound/d1.wav");//
        audio.play();

    }
    else if(this.value ==2)
    {
         audio = new Audio("sound/d2.wav");//
        audio.play();
    }
    else  if(this.value ==3)
    {
         audio = new Audio("sound/d3.wav");//
        audio.play();
    }
    else  if(this.value ==4)
    {
         audio = new Audio("sound/d4.wav");//
        audio.play();
    }
    else  if(this.value ==5)
    {
         audio = new Audio("sound/d5.wav");//
        audio.play();
    }
    else  if(this.value ==6)
    {
         audio = new Audio("sound/d6.wav");//
        audio.play();
    }
    else
    {
         audio = new Audio("sound/d9.wav");//
        audio.play();
    }
   /*we can like this instead of above
    var val=this.innerHTML;
    console.log(val);
    */
});
}
var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btninnerhtml=this.innerHTML;
       // console.log("val:"+val);
        makeSound(btninnerhtml);
        btnAnimation(btninnerhtml);
    });
}
//play by keyboard pressing buttons
//detecting key press 
//here addEventlistner is a higher order function
//because it has a call function
document.addEventListener("keypress", function(event) {
   // alert("key pressed:")
    makeSound(event.key);
   btnAnimation(event.key);
})
//this is for call back function of above function
   function makeSound(key){
       
    switch(key)
    {
        case "w":
         var audio1= new Audio("sound/d1.wav");
        audio1.play();
        break;
        case "a":
           var audio2 = new Audio("sound/d2.wav");
        audio2.play();
        break;
        case "s":
          var  audio3 = new Audio("sound/d3.wav");
        audio3.play();
        break;
        case "d":
          var  audio4 = new Audio("sound/d4.wav");
        audio4.play();
        break;
        case "j":
         var   audio5 = new Audio("sound/d5.wav");
        audio5.play();
        break;
        case "k":
           var audio6 = new Audio("sound/d6.wav");
        audio6.play();
        break;
        case "l":
          var  audio7 = new Audio("sound/d7.wav");
        audio7.play();
        break;
    }
}
function btnAnimation(currentkey){
    console.log(currentkey);
var activebtn=document.querySelector("."+currentkey);
activebtn.classList.add("pressed");//pressed is declared in css file
//use time out function for appear certain time only
activebtn.classList.add("color");
setTimeout(function(){
    activebtn.classList.remove("pressed");
    activebtn.classList.remove("color");
},700);
}
function btnanimat(key)
{
    var activebtn=document.querySelector(key);
    activebtn.classList.add("pressed");
//use time out function for appear certain time only
setTimeout(function(){
    activebtn.classList.remove("pressed");
},700);
}

