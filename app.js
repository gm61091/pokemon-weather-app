
//weathercapi call

async function weatherFunction() {

const data = await weatherApiCall();

        let weatherResult = document.createElement('li'); 
        
        function convertKelvin(kelvin) {
            return Math.floor(kelvin - 273.15) * 9/5 + 32;
        }
        weatherResult.innerHTML = `
            <li>City: ${data.name}</li>
            <li>Description: ${data.weather[0].description}</li>
            <li>Temperature: ${convertKelvin(data.main.temp)} Degrees</li>
            <li>Weather: ${data.weather[0].main}</li>
            <li>Time: ${data.dt}</li>
            <li>Humidity: ${data.main.humidity} %</li>
            <li>Wind Speed: ${data.wind.speed} MPH</li>
            <li>Clouds ${data.clouds.all} % coverage</li>
        `;
        weather.appendChild(weatherResult)
    
    };


async function weatherApiCall() {
    const weatherApi = '885df44cffe885e5718d2bd8f918b530';
    const city                = document.getElementById('city').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

    const response     = await fetch(weatherUrl);
    const data         = await response.json();

    return data;
}

//function to call both apis
async function getAll() {
    await weatherFunction();
    await weatherMain();
    await weatherHumidity();
    await weatherWind();
    await weatherClouds();
    await weatherTemp();
    
}

async function weatherTemp() {

    const weatherData = await weatherApiCall();

    function convertKelvin(kelvin) {
        return Math.floor(kelvin - 273.15) * 9/5 + 32;
    }
    const temperature = convertKelvin(weatherData.main.temp);

    if (temperature < 0 && temperature <= 25) {

        await pokemonType('ice')
    }
    else if (temperature > 25 && temperature <= 50) {

        await pokemonType('psychic')
    }
    else if (temperature > 50 && temperature <= 75) {

        await pokemonType('bug')
    }
    else if (temperature > 75 && temperature <= 100) {

        await pokemonType('dragon')
    }
    else if (temperature > 100) {

        await pokemonType('fire')
    }
}

async function weatherClouds() {
    const weatherData = await weatherApiCall();
    const cloudPercent = await weatherData.clouds.all;

    if (cloudPercent >= 0 && cloudPercent <= 25) {

        await pokemonType('grass')
    }
    else if (cloudPercent > 25 && cloudPercent <= 50) {

        await pokemonType('ghost')
    }
    else if (cloudPercent > 50 && cloudPercent <= 75) {

        await pokemonType('electric')
    }
    else if (cloudPercent > 75 && cloudPercent <= 100) {

        await pokemonType('water')
    }
}

async function weatherHumidity() {
    const weatherData = await weatherApiCall();
    const humidityPercent = await weatherData.main.humidity;

    if (humidityPercent >= 0 && humidityPercent <= 25) {

        await pokemonType('fire')
    }
    else if (humidityPercent > 25 && humidityPercent <= 50) {

        await pokemonType('ghost')
    }
    else if (humidityPercent > 50 && humidityPercent <= 75) {

        await pokemonType('grass')
    }
    else if (humidityPercent > 75 && humidityPercent <= 100) {

        await pokemonType('water')
    }
}

async function weatherWind() {
    const weatherData = await weatherApiCall();
    const windSpeed = await weatherData.wind.speed;

    if (windSpeed >= 0 && windSpeed <= 5) {

      const pokemonData = await pokemonType('bug')

    }
    else if (windSpeed > 5 && windSpeed <= 10) {

        const pokemonData = await pokemonType('psychic')
    }

    else if (windSpeed > 10) {

        const pokemonData = await pokemonType('flying')
    }
    

}



async function weatherMain() {
    const weatherData = await weatherApiCall();
    const weatherCondition = await weatherData.weather[0].main;
    

    if (weatherCondition === 'Clouds') {

         await pokemonType('dragon')    
    }

    if (weatherCondition === 'Dust') {

         await pokemonType('rock') 
    }

    if (weatherCondition === 'Sand') {

         await pokemonType('ground')
    }

    if (weatherCondition === 'Ash') {

         await pokemonType('fire') 
    }

    if (weatherCondition === 'Squall') {

         await pokemonType('psychic')
    }

    if (weatherCondition === 'Tornado') {

         await pokemonType('flying') 
    }

    if (weatherCondition === 'Haze') {

         await pokemonType('poison')  
    }

    if (weatherCondition === 'Fog') {

         await pokemonType('ghost') 
    }

    if (weatherCondition === 'Smoke') {

         await pokemonType('fire')  
    }

    if (weatherCondition === 'Mist') {

         await pokemonType('fairy') 
    }

    if (weatherCondition === 'Snow') {

         await pokemonType('ice') 
    }

    if (weatherCondition === 'Rain') {

         await pokemonType('water')
    }

    if (weatherCondition === 'Drizzle') {

         await pokemonType('psychic')
    }

    if (weatherCondition === 'Thunderstorm') {

         await pokemonType('electric')   
    }

    if (weatherCondition === 'Clear') {

         await pokemonType('grass')  
    }

}


//pokemon api call

async function pokemonType(typeOfPokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeOfPokemon}`);
    const data = await response.json();

    function pickSix() {
        let results = [];
        for (let i = 0; i < 6; i++) {
            const randomPokemon = Math.floor(Math.random() * 50);
            results.push(randomPokemon);
        }
        return results;
    }


    const randomPokemonIds = pickSix();

    // Iterate over the random Pokémon IDs
    for (const randomPokemonId of randomPokemonIds) {
        const pokemonUrl = data.pokemon[randomPokemonId].pokemon.url;
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();

        //const spriteUrl = pokemonData.sprites.other['official-artwork'].front_default;
        const spriteUrl = pokemonData.sprites.other.showdown.front_default;

        const pokemonContainer = document.getElementById('pokemonContainer');
        const pokemonSprite = document.createElement('img');
        pokemonSprite.setAttribute('src', spriteUrl);
        pokemonSprite.classList.add('pokemon-sprite');
        pokemonContainer.appendChild(pokemonSprite);

        // Get the modal
    const modal = document.getElementById("myModal");

// Get the image and name elements in the modal
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal
    pokemonSprite.addEventListener('click', () => {
    modal.style.display = "block"; // Display the modal

    // Set the image source and name in the modal
    modalImage.src = spriteUrl;
    modalName.innerText = pokemonData.name;
    });

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

        

    }

    return data;
}
async function fetchRandomPokemonImage() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const pokemonName = data.results[randomIndex].name;
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await pokemonResponse.json();
    return pokemonData.sprites.other.showdown.front_default
}

async function displayRandomPokemonImages() {
    const leftImage1 = document.getElementById('leftImage1');
    const leftImage2 = document.getElementById('leftImage2');
    const leftImage3 = document.getElementById('leftImage3');
    const rightImage1 = document.getElementById('rightImage1');
    const rightImage2 = document.getElementById('rightImage2');
    const rightImage3 = document.getElementById('rightImage3');
    const leftImageUrl1 = await fetchRandomPokemonImage();
    const leftImageUrl2 = await fetchRandomPokemonImage();
    const leftImageUrl3 = await fetchRandomPokemonImage();
    const rightImageUrl1 = await fetchRandomPokemonImage();
    const rightImageUrl2 = await fetchRandomPokemonImage();
    const rightImageUrl3 = await fetchRandomPokemonImage();
    leftImage1.src = leftImageUrl1;
    leftImage2.src = leftImageUrl2;
    leftImage3.src = leftImageUrl3;
    rightImage1.src = rightImageUrl1;
    rightImage2.src = rightImageUrl2;
    rightImage3.src = rightImageUrl3;
}

displayRandomPokemonImages();
