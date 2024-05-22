// Hide preloader and show content after 1 second
setTimeout(function () {
  document.querySelector('.preloader').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 1000);

// Select the header element
const header = document.querySelector('.header');

// Function to handle scroll events
function handleScroll() {
  // Check the scroll position
  const scrollPosition = window.scrollY;

  // Add or remove the 'scrolled' class based on the scroll position
  if (scrollPosition > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);
