
//get current date
const date = new Date();
//get the year
const year = date.getFullYear();

//store last date modification
const lastModifiedDate = document.lastModified;

document.getElementById("currentYear").innerHTML = ` ${year}`;
document.getElementById("lastModified").innerHTML = `Last Modified ${lastModifiedDate}`;


let temp = 57;

let wind = 11;

let chill;

function calculateWindChill(t, w)
{
    chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow (w, 0.16)) + (0.4275 * (t * Math.pow(w, 0.16)));
    return chill.toFixed(2);
}

let windChill = calculateWindChill(temp, wind);

document.getElementById("temperature").innerHTML = `${temp}`;
document.getElementById("wind").innerHTML = `${wind}`;

if (temp >= 50 || wind < 3)
{
    document.getElementById("wind-chill").innerHTML = `N/A`;
}

else
{
    document.getElementById("wind-chill").innerHTML = `${windChill}°F`;
}

