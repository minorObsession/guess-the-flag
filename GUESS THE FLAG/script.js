"use strict";

// SELECTIONS
const btn = document.querySelector(".btn-generate");
const input = document.querySelector(".input-country");
const form = document.querySelector(".form");
const flagImg = document.querySelector(".country-flag");
const countryEl = document.querySelector(".country");

let country, countryName, randomCountryFlag;
//

// FUNCTIONS

const autoFocus = () => input.focus();

const randomValue = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const findCountry = async function () {
  // get all country' names into an array
  const allCountriesPromise = await fetch("https://restcountries.com/v3.1/all");
  const allCountries = await allCountriesPromise.json();

  // names in 1 array
  const allCountryNames = allCountries.map((country) => country.name.common);

  const promise = await fetch(
    ` https://restcountries.com/v3.1/name/${randomValue(allCountryNames)}`
  );
  const [country] = await promise.json();
  randomCountryFlag = country.flags.png;

  countryName = country.name.common;
};

// EVENT LISTENERS

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  countryEl.classList.remove("hidden");
  await findCountry();
  autoFocus();
  flagImg.src = randomCountryFlag;
  console.log(countryName);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // guard clause
  if (input.value !== countryName) return;

  // successful guess
  alert("BRAVO CARE");
});

// implement timer

// implement score

// implement players
