function validateForm() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let city = document.getElementById("city");
  let cbHTML = document.querySelector(".HTML").checked;
  let cbCSS = document.querySelector(".CSS").checked;
  let cbJS = document.querySelector(".JS").checked;
  let male = document.querySelector(".male").checked;
  let skills = document.getElementsByName("skills");

  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);
  localStorage.setItem("city", city.value);
  localStorage.setItem("gender", male == true ? "Male" : "Female");
  localStorage.setItem("HTML", cbHTML == true ? "HTML" : "");
  localStorage.setItem("CSS", cbCSS == true ? "CSS" : "");
  localStorage.setItem("JS", cbJS == true ? "JS" : "");

  console.log(localStorage);

  var allRecords = localStorage.getItem("allRecords");
  let storedGender = localStorage.getItem("gender");
  let storedHTMLSkil = localStorage.getItem("HTML");
  let storedCSSSkill = localStorage.getItem("CSS");
  let storedJSSkill = storedJSSkill;

  if (!allRecords) {
    localStorage.setItem(
      "allRecords",
      JSON.stringify([
        {
          firstName: firstName.value,
          lastName: lastName.value,
          city: city.value,
          gender: storedGender,
          skills:
            storedHTMLSkil +
            (storedCSSSkill == "CSS" ? ", " : "") +
            storedCSSSkill +
            (storedJSSkill == "JS" ? ", " : "") +
            storedJSSkill,
        },
      ])
    );
  } else {
    var prevValue = JSON.parse(localStorage.getItem("allRecords"));
    console.log("Prev Value: ", prevValue);
    prevValue.push({
      firstName: firstName.value,
      lastName: lastName.value,
      city: city.value,
      gender: storedGender,
      skills:
        storedHTMLSkil +
        (storedCSSSkill == "CSS" ? ", " : "") +
        storedCSSSkill +
        (storedJSSkill == "JS" ? ", " : "") +
        storedJSSkill,
    });
    localStorage.setItem("allRecords", JSON.stringify(prevValue));
  }

  let isValid = false;
  let firstNameError;
  let lastNameError;
  let cityDropdown = document.getElementById("city");
  let selectedCity = cityDropdown.options[cityDropdown.selectedIndex].value;
  let cityError;
  let genderError;

  if (firstName.value === "" || firstName.value == null) {
    firstNameError = "First Name cannot be empty";
    isValid = false;
    document.getElementById("firstNameError").innerHTML = firstNameError;
  } else {
    document.getElementById("firstNameError").innerHTML = "Good";
  }

  if (lastName.value === "" || lastName.value == null) {
    lastNameError = "Last Name cannot be empty";
    document.getElementById("lastNameError").innerHTML = lastNameError;
  } else {
    document.getElementById("firstNameError").innerHTML = "Good";
  }

  if (selectedCity === "Select City") {
    cityError = "Please select a city from drop down";
    document.getElementById("cityError").innerHTML = cityError;
  } else {
    document.getElementById("cityError").innerHTML = "Good";
  }

  // if (!(gender[0].checked || gender[1].checked)) {
  //   genderError = "Please select a gender";
  //   document.getElementById("genderError").innerHTML = genderError;
  // } else {
  //   document.getElementById("genderError").innerHTML = "Good";
  // }

  if (!(skills[0].checked || skills[1].checked || skills[2].checked)) {
    genderError = "Please select at least 1 skill";
    document.getElementById("skillError").innerHTML = genderError;
  } else {
    document.getElementById("skillError").innerHTML = "Good";
  }
}
