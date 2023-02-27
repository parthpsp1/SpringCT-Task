document.getElementById("firstName").innerHTML =
  localStorage.getItem("firstName");

document.getElementById("firstName-card").innerHTML =
  localStorage.getItem("firstName");

document.getElementById("lastName").innerHTML =
  localStorage.getItem("lastName");

document.getElementById("lastName-card").innerHTML =
  localStorage.getItem("lastName");

document.getElementById("city").innerHTML = localStorage.getItem("city");
document.getElementById("city-card").innerHTML = localStorage.getItem("city");

if (localStorage.getItem("male") == "true") {
  document.getElementById("gender").innerHTML = "Male";
  document.getElementById("gender-card").innerHTML = "Male";
} else if (localStorage.getItem("female") == "true") {
  document.getElementById("gender").innerHTML = "Female";
  document.getElementById("gender-card").innerHTML = "Female";
}

if (localStorage.getItem("HTML") == "true") {
  document.getElementById("HTML").innerHTML = "HTML";
  document.getElementById("HTML-card").innerHTML = "HTML";
} else {
  document.getElementById("HTML").innerHTML = "";
  document.getElementById("HTML-card").innerHTML = "";
}
if (localStorage.getItem("CSS") == "true") {
  document.getElementById("CSS").innerHTML = "CSS";
  document.getElementById("CSS-card").innerHTML = "CSS";
} else {
  document.getElementById("CSS").innerHTML = "";
  document.getElementById("CSS-card").innerHTML = "";
}
if (localStorage.getItem("JS") == "true") {
  document.getElementById("JS").innerHTML = "JS";
  document.getElementById("JS-card").innerHTML = "JS";
} else {
  document.getElementById("JS").innerHTML = "";
  document.getElementById("JS-card").innerHTML = "";
}

console.log(localStorage);
