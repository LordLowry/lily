// Shared nav and styles injected into every day page
document.addEventListener('DOMContentLoaded', function() {
  // Inject back nav
  const nav = document.querySelector('.top-nav');
  if (nav) {
    nav.innerHTML = `<a href="index.html" class="back-btn">‹ Trip Overview</a>`;
  }
});
