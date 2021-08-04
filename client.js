
function myFunction() {
  var x = document.getElementById("toprow");
  if (x.className === "row") {
    x.className += " responsive";
  } else {
    x.className = "row";
  }
}