const menuButton = document.querySelector('.menu-btn');
const drop = document.querySelector('.drop');

menuButton.addEventListener('click', function() {
     menuButton.classList.toggle('turn');
     drop.classList.toggle('open'); 
   })


   

 //gsap animations  

gsap.registerPlugin(ScrollTrigger);

var startLoad = gsap.timeline()

let container = document.querySelector(".horizontal-scroll")

gsap.to(".scroll-text", {
  xPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    // pin: true,
    scrub: 1,
    snap:false,
    // end: () => "+=" + container.offsetWidth
  }
})
              

startLoad.to('.pink',{
                  y: '-100%',
                  ease: 'easeOut',
                  duration: 0.6,
                  delay: 0.08,
                  })
                .from('.letter',{
                    y: '100%',
                    ease: 'easeIn',
                    duration: 0.2,
                    delay: 0.5,
                    })
                .to('.load-overlay',{
                     width: '100%',
                     ease: 'easeIn',
                     duration: 0.2,
                     delay: 0.7,
                     }) 
                .to('.grey',{
                    y: '100%',
                    ease: 'easeIn',
                    duration: 0.6,
                    delay: 0.9,
                   })  
             .to('.loading',{
                    height: 0,
                    duration: 0.01,
                   }) 
                .from('.girl-image',{
                    width: 0,
                    duration: 0.5,
                   })  
                .from('#header-text',{
                    opacity: 0,
                    duration: 0.5,
                   })                                      
                  ; 
                  
startLoad.play();

gsap.to('.vect', 10, {
     rotation: "+=180", 
     repeat:-1, 
     ease: Linear.easeNone, 
     transformOrigin:"50% 50%" }
     );



 const cutImage = document.querySelector('.cut-image');
 const braidImage = document.querySelector('.braid-img');   
 const colorImage = document.querySelector('#color-img'); 

cutImage.addEventListener('mouseover', function() {

          gsap.to('.cut-image', 0.6, {
               rotation: "+=5", 
               scale: "1.1", 
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })   


  cutImage.addEventListener('mouseout', function() {

          gsap.to('.cut-image', 0.5, {
               rotation: "0", 
               scale: "1", 
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })  

        braidImage.addEventListener('mouseover', function() {

          gsap.to('.braid-img', 0.6, {
               rotation: "+=5", 
               scale: "1.1", 
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })   


  braidImage.addEventListener('mouseout', function() {

          gsap.to('.braid-img', 0.5, {
               rotation: "0", 
               scale: "1", 
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })       



        
 colorImage.addEventListener('mouseover', function() {

          gsap.to('#color-img', 0.6, {
               width: '18vw', 
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })   


  colorImage.addEventListener('mouseout', function() {

          gsap.to('#color-img', 0.5, {
               width: '13vw',
               ease: Linear.easeNone, 
               transformOrigin:"50% 50%" }
               );    

        })  


     
     
 let headerBottom = document.querySelector(".header-bottom")

        gsap.to("#header-img", {
          y: "-13vw",
          ease: "none",
          scrollTrigger: {
            trigger: headerBottom,
            // pin: true,
            scrub: 1,
            snap:false,
            // end: () => "+=" + container.offsetWidth
          }
        })

 let main = document.querySelector(".main")

        gsap.to("#main-T", {
          y: "-13vw",
          ease: "none",
          scrollTrigger: {
            trigger: main,
            // pin: true,
            scrub: 1,
            snap:false,
            // end: () => "+=" + container.offsetWidth
          }
        })      

 let appt = document.querySelector(".appointment-block")

        gsap.to("#appt-B", {
          y: "-13vw",
          ease: "none",
          scrollTrigger: {
            trigger: appt,
            // pin: true,
            scrub: 1,
            snap:false,
            // end: () => "+=" + container.offsetWidth
          }
        })  
        
        gsap.to("#appt-A", {
          y: "5vw",
          ease: "none",
          scrollTrigger: {
            trigger: appt,
            // pin: true,
            scrub: 1,
            snap:false,
            // end: () => "+=" + container.offsetWidth
          }
        }) 