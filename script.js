// Smooth scroll for nav links
document.querySelectorAll('nav .nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const navLink = document.querySelector(`nav .nav-links a[href="#${section.id}"]`);
    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
});

// Contact Form Submission (no backend, just user feedback)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedback = document.createElement('div');
  feedback.className = 'form-feedback';
  form.appendChild(feedback);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = 'Thank you! Your message has been sent.';
    feedback.style.display = 'block';
    form.reset();
    submitBtn.disabled = true;
    setTimeout(() => {
      feedback.textContent = '';
      feedback.style.display = 'none';
      submitBtn.disabled = false;
    }, 2500);
  });
});
