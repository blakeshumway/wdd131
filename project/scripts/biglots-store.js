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

const furniture = [

	{
		name: "Draycoll Pewter Chair",
		brand: "Ashley",
		stock: "0",
		imageUrl:
		"images/chair-1.webp"
	  },
	  {
		name: "Grilhill Gray Chair",
		brand: "Broyhill",
		stock: "2",
		imageUrl:
		"images/chair-2.webp"
	  },
	  {
		name: "Madison Recliner",
		brand: "Real Living",
		stock: "2",
		imageUrl:
		"images/chair-3.webp"
	  },
	  {
		name: "Brookham Chair",
		brand: "Real Living",
		stock: "3",
		imageUrl:
		"images/chair-4.webp"
	  },
	  {
		name: "Raditech Computer Chair",
		brand: "Broyhill",
		stock: "1",
		imageUrl:
		"images/chair-5.webp"
	  },
	  {
		name: "Vanderhill Cushon Seat",
		brand: "Broyhill",
		stock: "1",
		imageUrl:
		"images/chair-6.webp"
	  },
	  {
		name: "Bradford White Seat",
		brand: "Ashley",
		stock: "0",
		imageUrl:
		"images/chair-7.webp"
	  },
	  {
		name: "Grilhill Black Chair",
		brand: "Broyhill",
		stock: "3",
		imageUrl:
		"images/chair-8.webp"
	  },
	  {
		name: "Edward Brown Cushon Seat",
		brand: "Ashley",
		stock: "1",
		imageUrl:
		"images/chair-9.webp"
	  },


  ];

  function createTempleCards(array) 
  {
	const imagesSection = document.querySelector('.images');
	imagesSection.innerHTML = ''; 
	array.forEach(furniture => {
		const templeCard = document.createElement('section');
		templeCard.classList.add('temple-card');

		templeCard.innerHTML = 
		`
		<h3>${furniture.name}</h3>
		<p>Brand: ${furniture.brand}<p>
		
		<p>${furniture.stock} in stock </p>

		<img src="${furniture.imageUrl}" alt="${furniture.templeName}" loading="lazy">
	  	`;
  
	  imagesSection.appendChild(templeCard);
	});
  }

var filter = furniture;


const broyhillButton = document.querySelector("#broyhill")
broyhillButton.addEventListener('click', () => {
	const isBroyhill = furniture.filter(furniture => {
		const brand = furniture.brand == "Broyhill";
		return brand;
	});
	filter = isBroyhill;
	createTempleCards(filter);
})


const ashleyButton = document.querySelector("#ashley")
ashleyButton.addEventListener('click', () => {
	const isAshley = furniture.filter(furniture => {
		const brand = furniture.brand == "Ashley";
		return brand;
	});
	filter = isAshley;
	createTempleCards(filter);
})

const realLivingButton = document.querySelector("#real-living")
realLivingButton.addEventListener('click', () => {
	const isRealLiving = furniture.filter(furniture => {
		const brand = furniture.brand == "Real Living";
		return brand;
	});
	filter = isRealLiving;
	createTempleCards(filter);
})

const allButton = document.querySelector("#all")
allButton.addEventListener('click', () => {

	filter = furniture;
	createTempleCards(filter);
})

createTempleCards(filter);
