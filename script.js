let body = document.querySelector("body")

body.addEventListener("wheel", function(dets){
   if(dets.deltaY >0){
       gsap.to("nav", {
           duration: 1,
           transform:" translateX(-50%) translateY(-280%)",
       })
   }
   else{
    gsap.to("nav", {
        duration: 1,
        transform:" translateX(-50%) translateY(0%)",
    })

   }
    
})
