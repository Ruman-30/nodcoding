function navbarAnimation() {
  let body = document.querySelector("body");

  body.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to("nav", {
        duration: 1,
        transform: " translateX(-50%) translateY(-280%)",
      });
    } else {
      gsap.to("nav", {
        duration: 1,
        transform: " translateX(-50%) translateY(0%)",
      });
    }
  });
}
// navbarAnimation();

function movingAnimation() {
  gsap.to(".slider", {
    duration: 10,
    transform: "translateX(-100%)",
    repeat: -1,
    ease: "none",
  });
}
// movingAnimation();

function codingAnimation(){
  let letters = document.querySelectorAll(".letter");


letters.forEach(function (letter) {
  let movingSpeed = 0;
  let stemSpeed = 0;
  let currentStemPath = letter.childNodes[3].childNodes[1].childNodes[1].getAttribute('d')
  let currentFlower = letter.childNodes[1];
  let currentStem = letter.childNodes[3]
 
  currentFlower.addEventListener("mousemove", function (dets) {
    movingSpeed = dets.movementX / 3  ;
    stemSpeed = (dets.movementX/2)+63 ;
    currentStemPath =
  `M 61.5 194.4 Q 61.5 81  ${stemSpeed} 0.013139669004663013 m -4.958734614473596 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`;
    gsap.to(currentFlower, {
      transform: `translateX(${movingSpeed}%) rotate(${movingSpeed}deg)`,
    });
    gsap.to(currentStem.childNodes[1].childNodes[1],{
     attr:{d:currentStemPath}
    })
  });
});

let stemPath =
  "M 61.5 194.4 Q 61.5 81 63.56326927632017 0.013139669004663013 m -4.958734614473596 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0";
let valueA = 63;
let targetUp = 75;
let targetDown = 50;
let direction = 1;
setInterval(function () {
  stemPath = `M 61.5 194.4 Q 61.5 81 ${valueA} 0.013139669004663013 m -4.958734614473596 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`;
  valueA += direction;
  if (valueA >= targetUp) {
    direction = -1;
  } else if (valueA <= targetDown) {
    direction = 1;
  }
  gsap.to(".stem path", {
    attr: { d: stemPath },
  });
  gsap.to(".flower", {
    transform: `translateX(${(valueA - 63) / 2}%) rotate(${
      (valueA - 63) / 2
    }deg)`,
  });
}, 100);
}
// codingAnimation()

function eyeAnimation(){
  let eyeBall = document.querySelector(".eye-ball")
  document.querySelector("body").addEventListener("mousemove", function(dets){ 
  let seeX = (dets.x - eyeBall.getBoundingClientRect().x)/25
  let seeY = (dets.y - eyeBall.getBoundingClientRect().y)/30
  
  gsap.to(".pupil",{
    transform: `translate(${seeX}%, ${seeY}%)`
  })
  })
  let move = 0
  document.querySelector(".eye-ball").addEventListener("mouseenter", function(){
    if(move == 0){
      gsap.to("#pupil1",{
        marginTop: '-110px',
        duration: 0.7
      })
     move =1
    }else{
      gsap.to("#pupil1",{
       marginTop: '-20px',
        duration: 0.7
      })
      move = 0
    }
  })
}
// eyeAnimation()

function videoAnimation(){
  let videoDiv = document.querySelector(".video-div")
let video = document.querySelector(".video-div video")
let playBtn = document.querySelector(".video-div i")
let click = 0
videoDiv.addEventListener("click", function(){
 if(click == 0){
    playBtn.style.display = "none"
    click = 1
    video.play()
 }
 else{
  playBtn.style.display ="flex"
  click = 0
  video.pause()
 }
})
}
// videoAnimation()
var int
let num = 0
function userRating(){
  int = setInterval(function(){
     if(num < 49){
      num += 1
      document.querySelector("#user-review1 .rating h2 span").innerHTML = num/10
      document.querySelector("#user-review3 .rating h2 span").innerHTML = num/10
      if(num < 49){
        document.querySelector("#user-review2 .rating h2 span").innerHTML = num/10
      }
     }else{
      clearInterval(int)
     }
  }, 25)
}

gsap.from(".user-review",{
  transform: `translateX(-30%)`,
  stagger:{
    amount: 0.5
  },
  onStart:function(){
    userRating()
  },
  scrollTrigger:{
    trigger: ".all-reviews",
    start: "top 60%",
    markers: true
  },
  duration: 0.7,
  ease: "expoScale(0.5,7,none)",

})
