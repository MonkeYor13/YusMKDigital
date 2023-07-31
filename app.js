gsap.to('.menu-home',{
  duration:5,
  opacity: 1,
  });


  let tl = gsap.timeline({
    repeat: Infinity,
    yoyo: true,
    delay:5,
    });
    
  tl.to('.menu-titulo',{
    duration:2,
    x:10, 
    });
   

