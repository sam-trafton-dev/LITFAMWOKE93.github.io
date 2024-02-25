var whyRawText = "Although the web development industry no longer uses the basic layers of HTML/CSS/JS to build web applications, I think it is important as a developer to learn from the lowest layer of abstraction that causes the least amount of pain to your brain. This helps with understanding why tools, UI libraries, or component systems like React or TailwindCSS were built, by developing with the same frustrations that those tools solved.";
var heinleinText ="A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects."

setDataText('why-raw-vis', whyRawText);
setDataText('heinlein-quote-vis', heinleinText);
// Pull favicon from DOM, read each pixels color values and use this to determine a binary converison
function readFaviconPixels(faviconURL, callback) {
    var img = new Image();

    img.crossOrigin = 'Anonymous'
    img.onload = function() {

    }
}

// Allow time between event firing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}




// Select any hoverable item and set it's text to contain the data-text attribute values to display in the overlay
document.querySelectorAll('.hoverable').forEach(item => {
  const debouncedMouseEnter = debounce(function() {
    const text = item.getAttribute('data-text');
    document.getElementById('overlay-text').textContent = text;
    document.getElementById('overlay').classList.remove('hidden'); // Use remove and add for clarity
  }, 250); // Adjust timing as needed

  const debouncedMouseLeave = debounce(function() {
    document.getElementById('overlay').classList.add('hidden');
  }, 250); // Adjust timing as needed

  item.addEventListener('mouseenter', debouncedMouseEnter);
  item.addEventListener('mouseleave', debouncedMouseLeave);
});

  

  /** Setting text for the overlay element
   * 
   * @param {string} elementId The DOM element ID
   * @param {string} text The string value to display on the overlay reveal. 
   */
function setDataText(elementId, text) {
  var element = document.getElementById(elementId);

  if (element) {
    element.setAttribute('data-text', text);
  } else {
    console.warn('Element ' + elementId + 'not found.');
  }

}


