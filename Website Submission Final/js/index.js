//javascript for image slider

//Selecting variables from html
const slides = document.querySelectorAll('.slide'); //Select ALL slide class
const next = document.querySelector('#next'); //Select next button id
const prev = document.querySelector('#prev'); //Select prev button id
const auto = true; // Set to true to enable auto scrolling
const intervalTime = 7000; //Interval duration between slides
let slideInterval;

//js for next slide button
const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide existing
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to first slide when when no more next slides exist to ensure repeat
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//js for prev slide button
const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide existing
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last slide when no more prev slides exist to ensure repeat
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events

//when mouse click, call function nextSlide() to show next slide
next.addEventListener('click', e => {
  nextSlide();
  //reset interval timer so interval does not overlap
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//when mouse click, call function prevSlide() to show prev slide
prev.addEventListener('click', e => {
  prevSlide();
  //reset interval timer so interval does not overlap
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slider
if (auto) {
  // Run the next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}