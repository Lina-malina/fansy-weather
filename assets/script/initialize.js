import { initializeHtml } from './setHtml.js';
import { searchBtn, refreshBtn } from './buttons.js';
import { getCurrentPosition, getCoordinatesFromInput, getLocation } from './getCoordinates.js';
import { getWeather } from './getWeather.js';
import { icons } from './icons.js';
import { initializeMap } from './getMap.js';
import { options, getDate } from './getTime.js';
import { getImage } from './getImage.js';

initializeHtml();

// Auxiliary functions
function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}
function setElementHtml(id, content) {
  document.getElementById(id).innerHTML = content;
}
async function setData(latitude, longitude) {
  const location = await getLocation(latitude, longitude);
  const data = await getWeather(latitude, longitude);
  const currentData = data.currently;
  const forecastData = data.daily.data;
  setElementText('latitude', `Latitude: ${latitude.replace('.', '°')}'`);
  setElementText('longitude', `Longitude: ${longitude.replace('.', '°')}'`);
  setElementText('location', location);
  setElementText('temp', `${Math.round(currentData.temperature)}°C`);
  setElementHtml('icon', icons[currentData.icon]);
  setElementText('summary', currentData.summary);
  setElementText('apparent', `Feels like: ${Math.round(currentData.apparentTemperature)} °C`);
  setElementText('speed', `Wind: ${Math.round(currentData.windSpeed)} m/s`);
  setElementText('humidity', `Humidity: ${currentData.humidity * 100}%`);
  function forecast(n) {
    return Math.round((forecastData[n].temperatureMax + forecastData[n].temperatureMin) / 2);
  }
  setElementText('tomorrowTemp', `${forecast(1)}°C`);
  setElementHtml('tomorrowIcon', icons[forecastData[1].icon]);
  setElementText('dayAfterTemp', `${forecast(2)}°C`);
  setElementHtml('dayAfterIcon', icons[forecastData[2].icon]);
  setElementText('twoDaysAfterTemp', `${forecast(3)}°C`);
  setElementHtml('twoDaysAfterIcon', icons[forecastData[3].icon]);
  setElementText('tomorrow', getDate(forecastData[1].time).toLocaleString('en-Gb', { weekday: 'long' }));
  setElementText('dayAfter', getDate(forecastData[2].time).toLocaleString('en-Gb', { weekday: 'long' }));
  setElementText('twoDaysAfter', getDate(forecastData[3].time).toLocaleString('en-Gb', { weekday: 'long' }));
  options.timeZone = data.timezone;
  setElementText('time', new Date().toLocaleString('en-Gb', options).replace(/,/g, ''));
  icon = currentData.icon;
  getImage(options.timeZone, icon);
}
async function initialize() {
  const userCoords = await getCurrentPosition();
  const userLatitude = userCoords.latitude.toFixed(2);
  const userLongitude = userCoords.longitude.toFixed(2);
  initializeMap(userLatitude, userLongitude);
  await setData(userLatitude, userLongitude);
  setInterval(() => {
    setElementText('time', new Date().toLocaleString('en-Gb', options).replace(/,/g, ''));
  }, 10000);
  refreshBtn().addEventListener('click', () => getImage(options.timeZone, icon));
}
initialize();
searchBtn().addEventListener('click', async () => {
  const inputCoords = await getCoordinatesFromInput();
  const inputLatitude = Number(inputCoords[1]).toFixed(2);
  const inputLongitude = Number(inputCoords[0]).toFixed(2);
  map.setCenter([inputLatitude, inputLongitude]);
  await setData(inputLatitude, inputLongitude);
});
