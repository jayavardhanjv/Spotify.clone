// Splash screen animation 

var splashScreenTime = 4000;


console.log("Script.js is running!!!")

function pageLoaded(){
  console.log("Script.js is running!!!")

  setTimeout(() => 
  {
      localStorage.setItem("email","true")
  }, 4000);
  if (localStorage.getItem("email") == null) 
  {
    console.log("Animatinggggg");
    bodymovin.loadAnimation({
      // container : document.getElementById('animate'),
      container : document.getElementById("animate"),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'data.json'
    })
    // console.log("Animate Function called");  
    const element = document.getElementById("animate");
    setTimeout(() => {
      element.remove();
      console.log("Removed animate tag");
    }, splashScreenTime);
  }else{  
    // console.log(localStorage.getItem("email"));
    // Do nothing
  }
}

// window.addEventListener("beforeunload",()=>localStorage.removeItem('email'));



