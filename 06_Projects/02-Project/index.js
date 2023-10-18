const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hieght = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  console.log(results);
  console.log(hieght);
  console.log(weight);

  if (hieght === "" || hieght < 0 || isNaN(hieght)) {
    results.innerHTML = `Please Give valid Hieght ${hieght}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((hieght * hieght) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
