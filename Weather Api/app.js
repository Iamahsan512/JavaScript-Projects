'use strict';

// Variables 

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector(".weather-condition");

const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    // Fetch the Data from URL API 

    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div class="temp-icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon">
        </div>
        <div class="temp">
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

// When user enter a value 

form.addEventListener("submit",(e) => {
        getWeather(search.value);
        e.preventDefault();
        
        if( search.value === '') {
            alert('Please, Enter a Value !');
            weather.innerHTML = ''
        }

        search.value = '';
    }
)