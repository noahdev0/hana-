//nav
// Function to change the background color of the navbar on scroll 
function handleScroll() {
  const navbar = document.querySelector('#old-menu');
  const scrollY = window.scrollY;

  // You can set a threshold value for when the background color changes
  // For example, change color when scrolled down by 100 pixels
  if (scrollY >= 100) {
      navbar.style.backgroundColor = 'white';

    
      //for transition nav
      navbar.style.transition= 'background-color 0.5s ease-in-out';
    
  
  } else {
      navbar.style.backgroundColor = 'transparent';
  
  }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);




let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

