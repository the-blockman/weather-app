import getWeather from "./app.js";
import { addToStorage } from "./storage.js";
const city = document.getElementById("city");
const btn = document.getElementById("btn");
const currentContainer = document.getElementById("current-weather");

export async function renderWeather(place) {
  currentContainer.textContent = "loading...";

  try {
    const weather = await getWeather(place);
    const iconModule = await import(
      `./icons/${weather.currentConditions.icon}.svg`
    );
    const iconUrl = iconModule.default;

    currentContainer.innerHTML = "";
    const cityName = document.createElement("p");
    const weatherIcon = document.createElement("img");

    const temperature = document.createElement("h2");

    cityName.textContent = weather.resolvedAddress;
    weatherIcon.src = iconUrl;

    temperature.textContent = `${weather.currentConditions.temp}\u00B0C`;

    const conditions = document.createElement("P");
    conditions.textContent = weather.currentConditions.conditions;

    const feelsLike = document.createElement("P");
    feelsLike.textContent = `feels like ${weather.currentConditions.feelslike}\u00B0C`;

    currentContainer.appendChild(cityName);
    currentContainer.appendChild(weatherIcon);
    currentContainer.appendChild(temperature);
    currentContainer.appendChild(conditions);
    currentContainer.appendChild(feelsLike);
  } catch (error) {
    console.error(error);
    currentContainer.textContent = "enter a valid city";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  renderWeather(city.value);
  addToStorage(city.value);
});
