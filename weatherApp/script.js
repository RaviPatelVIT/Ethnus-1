async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "a2d3f56fa5aa54a01b8c1c886b93a092"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].main;
    const city = data.name;
    const country = data.sys.country;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    const date = now.getDate();

    document.getElementById("weatherInfo").innerHTML = `
      <div style="font-size: 48px;">${date}</div>
      <div style="font-size: 24px;">${city}, ${country}</div>
      <div>${time} ${day}</div>
      <div style="margin-top: 10px;">${weather} - ${temp}°C</div>
    `;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
  }
}
