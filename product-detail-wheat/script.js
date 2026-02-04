window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const vmReveals = document.querySelectorAll(".vm-reveal");

const vmObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-active");
      } else {
        entry.target.classList.remove("vm-active");
      }
    });
  },
  { threshold: 0.2 },
);

vmReveals.forEach((el) => vmObserver.observe(el));
/* ================= REVEAL ENGINE ================= */
const revealItems = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.12}s`;
        entry.target.classList.add("reveal-active");
        // revealObserver.unobserve(entry.target);
      } else {
        entry.target.classList.remove("reveal-active");
      }
    });
  },
  { threshold: 0.18 },
);

revealItems.forEach((el) => revealObserver.observe(el));

/* ================= HERO COUNTER ================= */
const counters = document.querySelectorAll(".vm-counter");
let counterPlayed = false;

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !counterPlayed) {
        counterPlayed = true;
        animateCounters();
      }
    });
  },
  { threshold: 0.4 },
);

counters.forEach((el) => counterObserver.observe(el));

function animateCounters() {
  counters.forEach((counter) => {
    const target = parseFloat(counter.dataset.target);
    const suffix = counter.innerText.replace(/[0-9.]/g, "");
    const duration = 1600;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = target * eased;

      counter.innerText =
        target % 1 !== 0
          ? value.toFixed(1) + suffix
          : Math.floor(value) + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}


