let tl = gsap.timeline({defaults:{ease: "SlowMo.easeIn"}});
    tl.to(".logoarea",{opacity:'100%',duration:3, stagger:0});

    let tp = gsap.timeline({defaults:{ease: "easeIn"}});
    tp.to("#logo img",{opacity:'100%',duration:4, stagger:0});
