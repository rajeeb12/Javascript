const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  let bmi = 0;
  if (
    height === "" ||
    weight === "" ||
    height < 0 ||
    weight < 0 ||
    isNaN(height) ||
    isNaN(weight)
  ) {
    results.innerHTML = "Please give valid input";
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      const h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode("Under weight"));
      results.appendChild(h3);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const h3 = document.createElement("h3");
      h3.innerText = `Normal Range`;
      results.appendChild(h3);
    } else {
      const h3 = document.createElement("h3");
      h3.innerText = `Over weight`;
      console.log(h3);
      results.appendChild(h3);
    }
  }
});
