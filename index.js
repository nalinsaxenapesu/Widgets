const btnUp=document.querySelector(".top");
const btnDown=document.querySelector(".down");

btnUp.addEventListener("click",function(){
    window.scrollTo(0, 0);});

btnDown.addEventListener("click",function(){
        window.scrollTo(0, 2366);});

document.addEventListener('scroll', function()  {
      if(window.scrollY>500)
      {
        btnUp.classList.add("show");
        btnDown.classList.add("hide");
      }
      else{
        btnUp.classList.remove("show");
        btnDown.classList.remove("hide");
      }

    }
    );
