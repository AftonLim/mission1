console.log("Connected");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Controls Image slider
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slideshow");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Index/counts for background changes
let bgColorIndex = 0;
let fontColorIndex = 0;
let buttonBgColorIndex = 0;
let buttonColorIndex = 0;

//Dark Mode Activation
function toggleDarkmode(){
  const bgColor = ["black", "white"];
  const fontColor = ["white", "black"];
  const buttonBgColor = ["black", "white"];
  const buttonColor = ["white", "black"];

  let changeColor = document.getElementById('main');
  let changeButton = document.querySelector('.dark');
  let changePrev = document.querySelector(".prev");
  let changeNext = document.querySelector(".next");

  changeColor.style.backgroundColor = bgColor[bgColorIndex];
  changeColor.style.color = fontColor[fontColorIndex];

  changeButton.style.backgroundColor = buttonBgColor[buttonBgColorIndex];
  changeButton.style.color = buttonColor[buttonColorIndex]
  changePrev.style.color = buttonColor[buttonColorIndex]
  changeNext.style.color = buttonColor[buttonColorIndex]
  console.log("Changed colour");

  //Text and Background
  if(bgColorIndex === bgColor.length - 1) {
    bgColorIndex = 0;
  } else {
    bgColorIndex++; 
  }

  if(fontColorIndex === fontColor.length - 1) {
    fontColorIndex = 0;
  } else {
    fontColorIndex++; 
  }

  //Button (Temp Fix)
  if(buttonBgColorIndex === buttonBgColor.length - 1) {
    buttonBgColorIndex = 0;
  } else {
    buttonBgColorIndex++; 
  }

  if(buttonColorIndex === buttonColor.length - 1) {
    buttonColorIndex = 0;
  } else {
    buttonColorIndex++; 
  }


}
