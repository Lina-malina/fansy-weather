function getImage(timezone, weather) {
  const baseUrl = 'https://api.unsplash.com/photos/random';
  const id = '&client_id=f4025f725beadc3a2aac1ddb432b65adad4f4b4c49de94030565c93785cb5dac';
  const month = new Date().getMonth();
  let season;
  if (month >= 8 && month <= 10) {
    season = 'winter';
  } else if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else {
    season = 'winter';
  }

  const hour = Number(new Date().toLocaleString('en-GB', { timeZone: timezone, hour: 'numeric' }));
  let time;
  if (hour >= 5 && hour <= 11) {
    time = 'morning';
  } else if (hour >= 12 && hour <= 16) {
    time = 'day';
  } else if (hour >= 17 && hour <= 21) {
    time = 'evening';
  } else {
    time = 'night';
  }
  const query = `?query=${season},${time},${weather}`;
  const url = baseUrl + query + id;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const image = new Image();
      image.onload = function setBackgroundImage() {
        document.getElementById('wrapper').style.backgroundImage = `url(${image.src})`;
      };
      image.src = data.urls.full;
    });
}
export { getImage };
