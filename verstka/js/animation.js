let title = document.querySelector('.hero__title'),
    descr = document.querySelector('.hero__descr'),
    btn = document.querySelector('.hero__btn'),
    author = document.querySelector('.photos__author'),
    photoWrapper = document.querySelector('.photos-wrap'),
    timeLine = gsap.timeline();

timeLine.from(title, 1.5, {opacity: 0, y: 100, ease: "expo.out"}, "+=0.2")
        .from(btn, 1, {opacity: 0, y: 100, ease: "expo.out"}, "-=1.5")
        .from(descr, 1, {opacity: 0, ease: "power2.out"}, "-=0.6")
        .from(photoWrapper.querySelector('img:first-child'), 0.8, {opacity: 0, scale: 0, ease: "power3.out"}, "-=0.9")
        .from(photoWrapper.querySelector('img:nth-child(2)'), 0.7, {opacity: 0, scale: 0, ease: "power3.out"}, "-=0.6")
        .from(photoWrapper.querySelector('img:last-child'), 0.6, {opacity: 0, scale: 0, ease: "power3.out"}, "-=0.35")
        .from(author, 2, {opacity: 0, ease: "power1.out"}, "-=0.4")


