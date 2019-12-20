function getWeather(latitude, longitude) {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
  const id = '20affb8ac7b22ea6ce0abda4e4bebbdf/';
  const units = 'units=si';
  const exclude = 'exclude=minutely, hourly, alerts, flags';
  const url = `${baseUrl + id + latitude},${longitude}?${units}&${exclude}`;

  return fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
}
export { getWeather };
