const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



//get current date
const date = new Date();
//get the year
const year = date.getFullYear();

//store last date modification
const lastModifiedDate = document.lastModified;

document.getElementById("currentYear").innerHTML = ` ${year}`;
document.getElementById("lastModified").innerHTML = `Last Modified ${lastModifiedDate}`;