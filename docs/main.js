var whyRawText = "Although the web development industry no longer uses the basic layers of HTML/CSS/JS to build web applications, I think it is important as a developer to learn from the lowest layer of abstraction that causes the least amount of pain to your brain. This helps with understanding why tools, UI libraries, or component systems like React or TailwindCSS were built, by developing with the same frustrations that those tools solved.";


setDataText('why-raw-vis', whyRawText);
// Pull favicon from DOM, read each pixels color values and use this to determine a binary converison
function readFaviconPixels(faviconURL, callback) {
    var img = new Image();

    img.crossOrigin = 'Anonymous'
    img.onload = function() {

    }
}




// Select any hoverable item and set it's text to contain the data-text attribute values to display in the overlay
  document.querySelectorAll('.hoverable').forEach(item => {

    item.addEventListener('mouseenter', function() {
      const text = this.getAttribute('data-text');

      document.getElementById('overlay-text').textContent = text;
      document.getElementById('overlay').classList.remove('hidden');

    });

    item.addEventListener('mouseleave', function() {
      document.getElementById('overlay').classList.add('hidden');
    });
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


