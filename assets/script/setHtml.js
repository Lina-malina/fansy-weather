function initializeHtml() {
  document.body.innerHTML = `
    <div id="wrapper">
        <div class="col">
            <section class="controls row">
                <div class="controls_buttons col-sm">
                    <button type="button" class="btn btn-sm btn-secondary icon-btn" id="refresh_btn">
                        <i class="fas fa-sync"></i>
                    </button>
                    <select class="btn btn-sm btn-secondary" id="sel1">
                        <option>En</option>
                        <option>Ru</option>
                        <option>By</option>
                    </select>
                    <select class="btn btn-sm btn-secondary" id="sel1">
                        <option>&deg;C</option>
                        <option>&deg;F</option>
                    </select>
                </div>
                <div class="controls_input input-group input-group-sm col-sm">
                    <input type="text" class="form-control" placeholder="Search city" aria-label="Search city"
                        aria-describedby="button-addon2" id="searchInput">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary btn-sm" type="button" id="search_btn">Search</button>
                    </div>
                </div>
            </section>
        </div>
        <div class="row no-gutters backdrop">
            <div class="col-sm-7">
                <section class="weather text_style">
                    <div class="weather--location" id="location"></div>
                    <div class="weather--time" id="time"></div>
                    <div class="weather--current_weather d-flex flex-row">
                        <div class="left_column d-flex flex-row mr-3">
                            <div class="weather--current_weather--temperature mr-3" id="temp"></div>
                            <div class="weather--current_weather--icon" id="icon"></div>
                        </div>
                        <div class="right_column d-flex flex-column justify-content-end">
                            <div class="weather--current_weather--summary" id="summary"></div>
                            <div class="weather--current_weather--apparent" id="apparent"></div>
                            <div class="weather--current_weather--speed" id="speed"></div>
                            <div class="weather--current_weather--humidity" id="humidity"></div>
                        </div>
                    </div>
                </section>
                <section class="forecast">
                    <div class="row mx-0">
                        <div class="forecast--time col text_style">
                            <div class="forecast--day" id="tomorrow"></div>
                            <div class="line d-flex flex-row justify-content-center">
                                <div class="forecast--weather mr-2" id="tomorrowTemp"></div>
                                <div class="forecast--icon" id="tomorrowIcon"></div>
                            </div>
                        </div>
                        <div class="forecast--time col text_style">
                            <div class="forecast--day" id="dayAfter"></div>
                            <div class="line d-flex flex-row justify-content-center">
                                <div class="forecast--weather mr-2" id="dayAfterTemp"></div>
                                <div class="forecast--icon" id="dayAfterIcon"></div>
                            </div>
                        </div>
                        <div class="forecast--time col text_style">
                            <div class="forecast--day" id="twoDaysAfter"></div>
                            <div class="line d-flex flex-row justify-content-center">
                                <div class="forecast--weather mr-2" id="twoDaysAfterTemp"></div>
                                <div class="forecast--icon" id="twoDaysAfterIcon"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-sm-5 d-flex justify-content-sm-center justify-content-start align-items-center p-2">
                <div class="location d-flex flex-sm-column">
                    <div class="location--map" id="map"></div>
                    <div class="location--latitude text_style" id="latitude"></div>
                    <div class="location--longitude text_style" id="longitude"></div>
                </div>
            </div>
        </div>
    </div> 
`;
}
export { initializeHtml };
