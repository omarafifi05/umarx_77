// html elements
const background = document.querySelector("body")
const text = document.querySelectorAll(".lktaba")
const navba = document.querySelectorAll(".kaka")
const botona = document.querySelector(".dark")
const cv = document.querySelector(".botona")
const cv2 = document.querySelector(".kany")
const moon = document.querySelector(".moon")
// dark mode logic



let darkMode = false

function switchDarkMode(){
   
    if(darkMode == true){
        darkMode = false
       background.style.backgroundColor = "black"

      botona.style.backgroundColor = "black"
      botona.style.color = "white"
       

      cv.style.backgroundColor = "white"
      cv2.style.color = "black"
    
    



moon.src="sun.png";
for(let i=0; i<navba.length; i++){
    navba[i].style.color = "#3498db"
    }












       for(let i=0; i<navba.length; i++){
        navba[i].style.color = "white"
   }


       for(let i=0; i<text.length; i++){
            text[i].style.color = "white"
       }


    } else{
        darkMode = true
        background.style.backgroundColor = "white"
        botona.style.backgroundColor = "white"
        botona.style.color = "black"
      

        cv.style.backgroundColor = "black"
      cv2.style.color = "white"


      moon.src="moon.png";
      for(let i=0; i<navba.length; i++){
          navba[i].style.color = "#3498db"
      }
      


        for(let i=0; i<text.length; i++){
            text[i].style.color = "black"
       }


       for(let i=0; i<navba.length; i++){
        navba[i].style.color = "black"
   }

    }
    console.log(darkMode)
}

switchDarkMode()


