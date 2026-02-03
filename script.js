gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-title", {
  //   opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero p", {
  //   opacity: 0,
  y: 30,
  delay: 0.3,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".hero-btn", {
  //   opacity: 0,
  y: 20,
  delay: 0.6,
  duration: 0.8,
  ease: "power3.out",
});

/* STORY BLOCK */
gsap.from(".story-text > *", {
  scrollTrigger: {
    trigger: ".story-block",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".story-visual img", {
  scrollTrigger: {
    trigger: ".story-block",
    start: "top 75%",
  },
  scale: 1.15,
  //   opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

/* PROCESS STEPS */
gsap.from(".process-step", {
  scrollTrigger: {
    trigger: ".process",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

/* HORIZONTAL PRODUCT STORY */
document.querySelectorAll(".product-story").forEach((section) => {
  const track = section.querySelector(".product-track");
  const slides = section.querySelectorAll(".product-slide");

  if (window.innerWidth > 900) {
    const totalWidth = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start:"top 5%",
        pin: true,
        scrub: 2,
        end: () => "+=" + totalWidth,
      },
    });

    slides.forEach((slide) => {
      const img = slide.querySelector(".product-image img");
      const text = slide.querySelector(".product-info");

      gsap.from(img, {
        scale: 1.25,
        scrollTrigger: {
          trigger: slide,
          containerAnimation: tween,
          start: "left center",
        },
      });

      gsap.from(text.children, {
        y: 40,
        stagger: 0.12,
        scrollTrigger: {
          trigger: slide,
          containerAnimation: tween,
          start: "left center",
        },
      });
    });
  }
});

/* BENEFITS */
gsap.from(".benefit-card", {
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

/* FLAVOR */
gsap.from(".flavor-card", {
  scrollTrigger: {
    trigger: ".flavor",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

/* QUALITY */
gsap.from(".quality-text > *", {
  scrollTrigger: {
    trigger: ".quality",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".quality-visual img", {
  scrollTrigger: {
    trigger: ".quality",
    start: "top 75%",
  },
  scale: 1.2,
  //   opacity: 0,
  duration: 1.1,
  ease: "power3.out",
});

/* TRUST */
gsap.from(".trust-box", {
  scrollTrigger: {
    trigger: ".trust",
    start: "top 75%",
  },
  y: 40,
  //   opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

/* CTA */
gsap.from(".cta-glass", {
  scrollTrigger: {
    trigger: ".cta-experience",
    start: "top 75%",
  },
  scale: 0.9,
  //   opacity: 0,
  duration: 1,
  ease: "power3.out",
});




