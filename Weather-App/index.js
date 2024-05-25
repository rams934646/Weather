async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'a935f1c4cf134b5ac78b7a13db256dd8';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
    document.querySelector('.weather-info ').style.display="block"
}

function displayWeather(data) {
    document.getElementById('city-name').innerText = `Weather in ${data.name}`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
