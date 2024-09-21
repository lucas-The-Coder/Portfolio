// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('back-to-top');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});