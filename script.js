async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city");
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('temp-div').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('weather-info').textContent = `Weather: ${data.weather[0].description}`;

        // You can also fetch hourly forecast data if available
        // and populate the #hourly-forecast div
    } catch (error) {
        alert(error.message);
    }
}
