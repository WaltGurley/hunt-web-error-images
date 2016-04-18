//Add global event listener to check for js errors or load errors
window.addEventListener("error", function(e) {
  //check if event is 'ErrorEvent' (thrown in js?)
  if (e.error) {
    //log stack reference
    console.log(e.error.stack);
  } else console.log(e.target);

  //clear anything from body
  document.body.innerHTML = "";
  //check which wall this is by reading size of display
  var width = window.innerWidth;
  var wall = width === 6816 ? "immersion" :
    width === 5760 ? "art" :
    width === 3840 ? "vis" :
    "commons";

  console.log(wall);
  document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/WaltGurley/hunt-web-error-images/master/img/" +
    wall +
    "-wall.jpg)";
}, true);
