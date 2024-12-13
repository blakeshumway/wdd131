
//get current date
const date = new Date();
//get the year
const year = date.getFullYear();

//store last date modification
const lastModifiedDate = document.lastModified;

document.getElementById("currentYear").innerHTML = ` ${year}`;
document.getElementById("lastModified").innerHTML = `Last Modified ${lastModifiedDate}`;
