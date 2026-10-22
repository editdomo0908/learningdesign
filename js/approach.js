/* Approach illustration animations. */

(() => {
  // Find capability illustrations and check browser support.
  const skills = document.querySelectorAll('.skill');
  if (!skills.length || !('IntersectionObserver' in window)) return;
  // Animate each illustration once when it enters the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 },
  );
  // Start observing the capability illustrations.
  skills.forEach((skill) => observer.observe(skill));
})();
