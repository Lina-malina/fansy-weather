function initializeMap(latitude, longitude) {
  ymaps.ready(init);
  function init() {
    map = new ymaps.Map('map', {
      center: [latitude, longitude],
      zoom: 10,
      controls: ['smallMapDefaultSet'],
    });
  }
}
export { initializeMap };
