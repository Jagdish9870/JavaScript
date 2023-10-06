const getcolor=()=> {
    //16777215 is for converting any number into hexa value
    const randomNumber= Math.floor(Math.random()*16777215);

   const randomcode="#"+randomNumber.toString(16);
   console.log(randomNumber,randomcode);
   document.body.style.background=randomcode;

   //to display colorcode
   document.getElementById("color-code").innerText=randomcode;

   //to copy code in clip board
   navigator.clipboard.writeText(randomcode);

}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial color
getcolor();