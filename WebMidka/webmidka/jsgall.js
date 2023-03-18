
let imgObject = [
  "img/Anchor.webp",
  "img/Balbo-Beard.webp",
  "img/Chevron-Mustache-with-Stubble-Beard.webp",
  "img/Circle-Beard.webp",
  "img/Goatee-Without-Mustache.webp",
  "img/Royale.webp",
  "img/The-Van-Dyke-Beard.webp",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";
  mainView.style.backgroundSize = "100% 100%";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode ===37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();


let imgObject2 = [
  "img/Combover.webp",
  "img/Crop.webp",
  "img/Fade.webp",
  "img/Pompadour.webp",
  "img/Quiff.webp",
  "img/Top_Knot.webp",
  "img/Undercut.webp",
];

let mainImg2 = 0;
let prevImg2 = imgObject2.length - 1;
let nextImg2 = 1;

function loadGallery2() {

  let mainView2 = document.getElementById("mainView2");
  mainView2.style.background = "url(" + imgObject2[mainImg2] + ")";
  mainView2.style.backgroundSize = "100% 100%";
  let leftView2 = document.getElementById("leftView2");
  leftView2.style.background = "url(" + imgObject2[prevImg2] + ")";
  
  let rightView2 = document.getElementById("rightView2");
  rightView2.style.background = "url(" + imgObject2[nextImg2] + ")";
  
  let linkTag2 = document.getElementById("linkTag2")
  linkTag2.href = imgObject2[mainImg2];

};

function scrollRight2() {
  
  prevImg2 = mainImg2;
  mainImg2 = nextImg2;
  if (nextImg2 >= (imgObject2.length -1)) {
    nextImg2 = 0;
  } else {
    nextImg2++;
  }; 
  loadGallery2();
};

function scrollLeft2() {
  nextImg2 = mainImg2
  mainImg2 = prevImg2;
   
  if (prevImg2 === 0) {
    prevImg2 = imgObject2.length - 1;
  } else {
    prevImg2--;
  };
  loadGallery2();
};

document.getElementById("navRight2").addEventListener("click", scrollRight2);
document.getElementById("navLeft2").addEventListener("click", scrollLeft2);
document.getElementById("rightView2").addEventListener("click", scrollRight2);
document.getElementById("leftView2").addEventListener("click", scrollLeft2);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft2();
  } else if(e.keyCode === 39) {
    scrollRight2();
  }
});

loadGallery2();



