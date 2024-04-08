/* ------ HOME ------  */
gsap.registerPlugin(ScrollTrigger);
gsap.to(".move-1", {
  xPercent: 600,
  opacity: 1,
  scrollTrigger: {
    trigger: ".move-1",
    start: "top 60%",
    end: "top 45%",
    scrub: true,
    //markers: true,
    id: "scrub"
  },
});
gsap.to(".move-2", {
  xPercent: 450,
  opacity: 1,
  scrollTrigger: {
    trigger: ".move-2",
    start: "top 55%",
    end: "top 40%",
    scrub: true,
    //markers: true,
    id: "scrub"
  },
});
gsap.to(".move-3", {
  xPercent: 300,
  opacity: 1,
  scrollTrigger: {
    trigger: ".move-3",
    start: "top 50%",
    end: "top 35%",
    scrub: true,
    //markers: true,
    id: "scrub"
  },
});
gsap.to(".move-4", {
  xPercent: 150,
  opacity: 1,
  scrollTrigger: {
    trigger: ".move-4",
    start: "top 45%",
    end: "top 30%",
    scrub: true,
    //markers: true,
    id: "scrub"
  },
});
gsap.to(".move-5", {
  xPercent: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".move-5",
    start: "top 40%",
    end: "top 25%",
    scrub: true,
    //markers: true,
    id: "scrub"
  },
});