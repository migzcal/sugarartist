const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight * 0.7; // Adjust the percentage as desired
const speed = 100; // Adjust the speed value as desired

const images = document.querySelectorAll(".image");

images.forEach((image) => {
  const initialX = gsap.utils.random(-containerWidth, 0);
  const initialY = gsap.utils.random(0, containerHeight);

  gsap.set(image, { x: initialX, y: initialY });

  const duration = containerWidth / speed;
  const delay = Math.abs(initialX) / speed;

  gsap.to(image, {
    x: containerWidth,
    duration: duration,
    delay: delay,
    ease: "linear",
    repeat: -1,
    onComplete: () => {
      gsap.set(image, { x: -image.offsetWidth });
    }
  });
});


//about image zooming in
gsap.registerPlugin(ScrollTrigger);
gsap.set(".image-reveal", { scale: 0.75 });

gsap.to(".image-reveal", {
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-about",
    scrub: 1,
    pin: true,
    end: "+=1000",
  },
});



