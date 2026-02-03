gsap.registerPlugin(ScrollTrigger);

// Mobile menu
const mobileToggle = document.getElementById("mobileToggle");
const nav = document.querySelector(".nav");

mobileToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Hero animation
gsap.from(".hero-content h1", {
  opacity: 1,
  y: 60,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  opacity: 1,
  y: 40,
  delay: 0.3,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content .btn-primary", {
  opacity: 1,
  y: 30,
  delay: 0.6,
  duration: 0.8,
  ease: "power3.out"
});

// Intro section
gsap.from(".intro h2", {
  scrollTrigger: ".intro",
  opacity: 1,
  y: 50,
  duration: 0.9,
  ease: "power3.out"
});

gsap.from(".intro p", {
  scrollTrigger: ".intro",
  opacity: 1,
  y: 30,
  delay: 0.2,
  duration: 0.9,
  ease: "power3.out"
});

// Wheat products
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".products",
    start: "top 70%"
  },
  opacity: 1,
  y: 60,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});

// Rice products
gsap.from(".rice-card", {
  scrollTrigger: {
    trigger: ".rice-products",
    start: "top 70%"
  },
  opacity: 1,
  y: 60,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});

// Process cards
gsap.from(".process-card", {
  scrollTrigger: {
    trigger: ".process",
    start: "top 70%"
  },
  opacity: 1,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

// Billing section
gsap.from(".billing-content", {
  scrollTrigger: ".billing",
  opacity: 1,
  x: -80,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".billing-image", {
  scrollTrigger: ".billing",
  opacity: 1,
  x: 80,
  duration: 1,
  ease: "power3.out"
});

// Delivery cards
gsap.from(".delivery-card", {
  scrollTrigger: {
    trigger: ".delivery",
    start: "top 70%"
  },
  opacity: 1,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

// Footer
gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%"
  },
  opacity: 1,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});
