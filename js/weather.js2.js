
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 10,
    center: [-96.78792154711002, 32.77983061621019]
});

const forecastContainer = document.querySelector("#forecast-container")


const marker = new mapboxgl.Marker()
    .setLngLat([-96.78792154711002, 32.77983061621019])
    .addTo(map)
    .setPopup(new mapboxgl.Popup()
        .setHTML()
    );



document.getElementById('sub').addEventListener('click', function() {
    searchLocation();
    let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API)

    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
    })
});

function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        .then( data => {
            console.log(data);
            return data.features[0].center
        });
}
function searchLocation() {
    // const locationName = geocode(document.getElementById('search').value, MAPBOX_API);
    // console.log(locationName);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=29.426825118534886&lon=-98.48948239256946` +
        `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            console.log(result)

            forecastContainer.innerHTML = '';

            const day = result.list;
            console.log(day)
            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i]
                const date = new Date(weather.dt * 1000);
                console.log(date);

                const card = document.createElement("div");
                card.classList.add("card", "weather-card");

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const time = document.createElement("p");
                const temp = document.createElement("p");
                const description = document.createElement("p");
                const humidity = document.createElement("p");
                const wind = document.createElement("p");
                const pressure = document.createElement("p");
                const currentCity = document.querySelector("#current-weather")


                time.innerText = date.toLocaleDateString();
                temp.innerText = `Temperature: ${weather.main.temp} °F`;
                description.innerText = `Description: ${weather.weather[0].description}`;
                humidity.innerText = `Humidity: ${weather.main.humidity}%`;
                wind.innerText = `Wind: ${weather.wind.speed} mph`;
                pressure.innerText = `Pressure: ${weather.main.pressure} hPa`;
                currentCity.innerText = `Current city: ${locationName}`;


                cardBody.appendChild(time);
                cardBody.appendChild(temp);
                cardBody.appendChild(description);
                cardBody.appendChild(humidity);
                cardBody.appendChild(wind);
                cardBody.appendChild(pressure);

                card.appendChild(cardBody)

                forecastContainer.appendChild(card)

            }
        })
}