function addToStorage(city) {
  localStorage.setItem("city", city);
}

function getFromStorage() {
  const savedCity = localStorage.getItem("city");
  return savedCity;
}

export { addToStorage, getFromStorage };
