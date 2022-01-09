const menuButton = document.querySelector('.menu-btn');
const drop = document.querySelector('.drop');

menuButton.addEventListener('click', function() {
     menuButton.classList.toggle('turn');
     drop.classList.toggle('open'); 
   })


   

 //gsap animations  

gsap.registerPlugin(ScrollToPlugin);

var startLoad = gsap.timeline()
// var openChallenge = gsap.timeline()
// var openSolution = gsap.timeline()
              

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
                  ; 
                  
startLoad.play();

TweenMax.to('.vect', 10, {
     rotation: "+=180", 
     repeat:-1, 
     ease: Linear.easeNone, 
     transformOrigin:"50% 50%" });