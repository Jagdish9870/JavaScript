const btnEl= document.querySelector(".btn");
const jokeEl= document.querySelector(".joke");

var URL= "https://v2.jokeapi.dev/joke/Any?type=single&amount=1";
//  var URL = " https://hindi-jokes-api.onrender.com/jokes/2?api_key=f61a239c1fa7edad3adb351bf0c2";
 btnEl.addEventListener("click",getMethod);
  async function getMethod()
  {
    jokeEl.classList.remove("fade");
    const data =await fetch(URL).then((e)=> e.json());
    if(data){
        console.log(data);
        jokeEl.innerHTML=data.joke;
        jokeEl.classList.add("fade");
    
    }
  }