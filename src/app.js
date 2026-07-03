export default async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=XCE7XQTSCCAK4KAKF2LBZ7DZY&contentType=json`,
  );
  const weatherData = await response.json();
  //console.log(weatherData);
  return weatherData;
}
