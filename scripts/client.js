// This function toggles the sidebar to hamburger menu
function toggleFunction() {
  let x = document.getElementById("toprow");
  if (x.className === "row") {
    x.className += " responsive";
  } else {
    x.className = "row";
  }
}

