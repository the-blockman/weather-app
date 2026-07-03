import "./styles.css";
import { renderWeather } from "./ui.js";
import { getFromStorage } from "./storage.js";

const savedCity = getFromStorage();
savedCity === null ? renderWeather("lagos") : renderWeather(savedCity);
