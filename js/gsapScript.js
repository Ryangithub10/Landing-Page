gsap.from("nav", { duration: 1.5, y: "-100%", opacity: 0, ease: "power3" });

gsap.from("header h1", {
  duration: 1.2,
  x: -100,
  opacity: 0,
  ease: "power4",
  delay: 1,
});

gsap.from("header p", {
  duration: 1.2,
  x: -100,
  opacity: 0,
  ease: "power4",
  delay: 1.5,
});
