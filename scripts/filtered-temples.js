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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Oklahoma City Oklahoma",
		location: "Oklahoma City, Oklahoma",
		dedicated: "2000, July, 30",
		area: 10890,
		imageUrl:
		"images/oklahoma-city-oklahoma-temple.webp"
	  },
	  {
		templeName: "Birmingham Alabama",
		location: "Birmingham, Alabama",
		dedicated: "2000, September, 3",
		area: 10700,
		imageUrl:
		"images/birmingham-alabama-temple.webp"
	  },
	  {
		templeName: "Boise Idaho",
		location: "Boise, Idaho",
		dedicated: "1984, May, 30",
		area: 35868,
		imageUrl:
		"images/boise-idaho-temple.webp"
	  },






  ];

  function createTempleCards(array) 
  {
	const imagesSection = document.querySelector('.images');
	imagesSection.innerHTML = ''; 
	array.forEach(temple => {
		const templeCard = document.createElement('section');
		templeCard.classList.add('temple-card');

		templeCard.innerHTML = 
		`
		<h3>${temple.templeName}</h3>
		<p>Location: ${temple.location}</p>

		<p>Dedicated: ${temple.dedicated}</p>

		<p>Area: ${temple.area} sq ft</p>

		<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
	  	`;
  
	  imagesSection.appendChild(templeCard);
	});
  }

var filter = temples;

//small
const smallButton = document.querySelector("#small")
smallButton.addEventListener('click', () => {
	const smallTemples = temples.filter(temple => {
		const size = temple.area < 10000;
		return size;
	});
	filter = smallTemples;
	createTempleCards(filter);
})

//large
const largeButton = document.querySelector("#large")
largeButton.addEventListener('click', () => {
	const largeTemples = temples.filter(temple => {
		const size = temple.area > 90000;
		return size;
	});
	filter = largeTemples;
	createTempleCards(filter);
})

//home
const homeButton = document.querySelector("#home")
homeButton.addEventListener('click', () => {
	
	filter = temples;
	createTempleCards(filter);
})


//old
const oldButton = document.querySelector("#old")
oldButton.addEventListener('click', () => {
	const oldTemples = temples.filter(temple => {
		const date = temple.dedicated.slice(0, 4);
		const dedicated = parseInt(date);
		return dedicated < 1900;
	});
	filter = oldTemples;
	createTempleCards(filter);
})

//new
const newButton = document.querySelector("#new")
newButton.addEventListener('click', () => {
	const newTemples = temples.filter(temple => {
		const date = temple.dedicated.slice(0, 4);
		const dedicated = parseInt(date);
		return dedicated > 1999;
	});
	filter = newTemples;
	createTempleCards(filter);
})



createTempleCards(filter);












  