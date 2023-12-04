const weatherOutput = document.querySelector("#forecast")

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then( data => data.json())
    .then(result => {
        console.log(result)
        result.list.forEach(weather =>{
            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());

            const time = document.createElement("p")
            const temp = document.createElement("p")

            time.innerText = date;
            temp.innerText = weather.main.temp;

            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)
        })

        const day = result.list;
        for (let i = 0; i < day.length; i += 8) {
            const weather = day [i]

            const date = new Date(weather.dt * 1000);
                console.log(date.toLocaleDateString());

                const time = document.createElement("p")
                const temp = document.createElement("p")

                time.innerText = date;
                temp.innerText = weather.main.temp;

                weatherOutput.appendChild(time)
                weatherOutput.appendChild(temp)
        }

    })