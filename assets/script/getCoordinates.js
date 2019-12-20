import { searchInput } from './buttons.js';

function getCurrentPosition() {
  return new Promise(((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords);
    });
  }));
}
function getCoordinatesFromInput() {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://geocode-maps.yandex.ru/1.x';
  const id = '?apikey=b63dd171-e30b-45e0-b2d8-5c2a93eb0ac9';
  const geocode = `&geocode=${searchInput().value}`;
  const format = '&format=json';
  const url = baseUrl + id + format + geocode;

  return fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => response.json())
    .then((data) => data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
}
function getLocation(latitude, longitude) {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://geocode-maps.yandex.ru/1.x';
  const id = '?apikey=b63dd171-e30b-45e0-b2d8-5c2a93eb0ac9';
  const geocode = '&geocode=';
  const format = '&format=json';
  const lang = '&lang=en_Ru';
  const url = `${baseUrl + id + format + geocode + longitude},${latitude}${lang}`;

  return fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => response.json())
    .then((data) => data.response.GeoObjectCollection.featureMember[0].GeoObject.description);
}
export { getCurrentPosition, getCoordinatesFromInput, getLocation };
