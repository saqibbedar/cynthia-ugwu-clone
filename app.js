const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function anim1(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.15,
        ease: Expo.easeInOut
    })

    tl.to(".animation", {
        y: `0%`,
        opacity: 1,
        duration: 1.222,
        ease: Expo.easeInOut,
        stagger: .2
    })
    tl.from(".herofooter", {
        y: `0`,
        opacity: 0,
        delay: -.5,
        duration: 1.222,
        ease: Expo.easeInOut,
    })
}

var timeout;

function skewMiniCircle(){
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", (e)=>{
        clearTimeout(timeout);

        var xDiff = e.clientX - xPrev;
        var yDiff = e.clientY - yPrev;

        xScale = gsap.utils.clamp(0.8, 1.2, xDiff);
        yScale = gsap.utils.clamp(0.8, 1.2, yDiff);

        xPrev = e.clientX;
        yPrev = e.clientY;

        miniCircle(xScale, yScale)

        timeout = setTimeout(()=>{
        var circle = document.querySelector(".minicircle");
        circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
        }, 100)
    })
    }

function miniCircle(xScale, yScale){
window.addEventListener("mousemove", (e)=>{
    var circle = document.querySelector(".minicircle");
    circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale}, ${yScale})`;
})
}
skewMiniCircle()
miniCircle();
anim1();


document.querySelectorAll(".elems").forEach(function (elem) {
    var differ = 0;
    var rotate = 0;

    elem.addEventListener("mouseleave", function (det) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            duration: 0.5
        });
    });

    elem.addEventListener("mousemove", function (det) {
        var diff = det.clientY - elem.getBoundingClientRect().top;
        differ = det.clientX - rotate;
        rotate = det.clientX;

        var imgRotate = gsap.utils.clamp(-20, 20, differ * 0.2);

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power2,
            top: diff,
            left: det.clientX,
            rotate: imgRotate
        });
    });
});

