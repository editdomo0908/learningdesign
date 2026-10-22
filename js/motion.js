/* Scroll-reveal enhancement. */

(() => {
  // Find reveal targets and respect reduced-motion preferences.
  const elements = document.querySelectorAll('[data-reveal]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!elements.length || reducedMotion.matches || !('IntersectionObserver' in window)) return;

  // Reveal each element once as it enters the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -24px 0px' },
  );

  // Enable progressive enhancement and start observing.
  elements.forEach((element) => {
    element.classList.add('scroll-reveal');
    observer.observe(element);
  });

  // Immediately reveal everything if reduced motion is enabled.
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    elements.forEach((element) => element.classList.remove('scroll-reveal'));
  });
})();
