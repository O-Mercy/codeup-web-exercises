
//  initialize map
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 10,
    center: [-96.78792154711002, 32.77983061621019]
});


const forecastContainer = document.querySelector("#forecast-container");
const currentCity = document.querySelector("#current-weather");

//  initialize marker
const marker = new mapboxgl.Marker()
    .setLngLat([-96.78792154711002, 32.77983061621019])
    .setPopup(new mapboxgl.Popup().setHTML("Marker Popup"))
    .setDraggable(true)// allows the marker to be draggable
    .addTo(map);


document.getElementById('sub').addEventListener('click', function(e) {
    e.preventDefault();
    searchLocation();
});

function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data.features[0].center;
        });
}

function updateWeather(locationName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${locationName[1]}&lon=${locationName[0]}` + // Use the obtained coordinates
        `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            console.log(result);


            // Clear previous forecast
            forecastContainer.innerHTML = '';

            const day = result.list;
            console.log(day);
            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i];
                const date = new Date(weather.dt * 1000);
                console.log(date);

                const card = document.createElement("div");
                card.classList.add("card", "weather-card");

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const time = document.createElement("p");
                const temp = document.createElement("p");
                const icon = document.createElement('img')
                const description = document.createElement("p");
                const humidity = document.createElement("p");
                const wind = document.createElement("p");
                const pressure = document.createElement("p");

                time.innerText = date.toLocaleDateString();
                temp.innerText = `Temperature: ${weather.main.temp} °F`;
                icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                humidity.innerText = `Humidity: ${weather.main.humidity}%`;
                wind.innerText = `Wind: ${weather.wind.speed} mph`;
                pressure.innerText = `Pressure: ${weather.main.pressure} hPa`;

                cardBody.appendChild(time);
                cardBody.appendChild(temp);
                cardBody.appendChild(icon)
                cardBody.appendChild(description);
                cardBody.appendChild(humidity);
                cardBody.appendChild(wind);
                cardBody.appendChild(pressure);

                card.appendChild(cardBody);

                forecastContainer.appendChild(card);
            }

            // Set current city using api
            currentCity.innerText = `Current city: ${result.city.name}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle error, e.g., display an error message to the user
        });
}


// default location
updateWeather([-96.78792154711002, 32.77983061621019])


// updates weather when marker is dragged
marker.on('dragend', function (event) {
    // console.log(event)
    const lngLat = marker.getLngLat();
    updateWeather([lngLat.lng, lngLat.lat]);
});

// Updates weather when user searches for a location
function searchLocation() {
    const locationName = geocode(document.getElementById('search').value, MAPBOX_API);
    locationName.then(result => {
        console.log(result);
        map.setCenter(result);// sets the map's center
        marker.setLngLat(result); // update marker position

        updateWeather(result); // Call the function to update weather based on new location
    });
}





