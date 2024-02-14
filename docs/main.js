

// Pull favicon from DOM, read each pixels color values and use this to determine a binary converison
function readFaviconPixels(faviconURL, callback) {
    var img = new Image();

    img.crossOrigin = 'Anonymous'
    img.onload = function() {

    }
}



document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    var secretCode = document.getElementById('secretCode').value;
    var correctCode = "dildo"; 
  
    if (secretCode === correctCode) {
      window.location.href = 'valentine.html'; 
    } else {
      alert('Incorrect value, hint: diddo!');
    }
  });



