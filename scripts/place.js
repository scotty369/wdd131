// Dynamic Footer Info
document.getElementById("lastModified").textContent = document.lastModified;

// Weather Data
const temperature = 18; // Example Celsius temperature
const windSpeed = 10; // Example wind speed in km/h
const conditions = "Sunny"; // Example weather conditions

document.getElementById("Temperature").textContent = temperature;
document.getElementById("WindSpeed").textContent = windSpeed;
document.getElementById("Conditions").textContent = conditions;

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill =
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    document.getElementById("WindChill").textContent = windChill.toFixed(1);
} else {
    document.getElementById("WindChill").textContent = "N/A";
}
