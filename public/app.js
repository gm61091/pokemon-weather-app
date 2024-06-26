
async function weatherFunction() {
    const weatherContainer = document.getElementById('weather');
    const pokemonH5 = document.getElementById('pokemonH5');
    pokemonH5.innerText = 'Potential pokemon in your area';
    weatherContainer.innerHTML = '';
  
    const data = await weatherApiCall();
  
    let weatherResult = document.createElement('ul');
    weatherResult.classList.add('weather-result');
    
    function convertKelvin(kelvin) {
      return Math.floor(kelvin - 273.15) * 9/5 + 32;
    }


    weatherResult.innerHTML = `
      <li class='weather-name'>${data.name}</li>
      <div class="result-container">
        <div class="result-group">
          <li><span class="label">Description:</span> ${data.weather[0].description}</li>
          <li><span class="label">Temperature:</span> ${convertKelvin(data.main.temp)} Degrees</li>
          <li><span class="label">Weather:</span> ${data.weather[0].main}</li>
        </div>
        <div class="result-group">
          <li><span class="label">Humidity:</span> ${data.main.humidity} %</li>
          <li><span class="label">Wind Speed:</span> ${data.wind.speed} MPH</li>
          <li><span class="label">Clouds:</span> ${data.clouds.all} % coverage</li>
        </div>
      </div>
    `;
    
    weatherContainer.appendChild(weatherResult);
  }
  
async function weatherApiCall() {
    const weatherApi = '885df44cffe885e5718d2bd8f918b530';
    const city                = document.getElementById('city').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

    const response     = await fetch(weatherUrl);
    const data         = await response.json();

    return data;
}

async function getAll() {
        const pokemonContainer = document.getElementById('pokemonContainer');
        pokemonContainer.innerHTML = '';
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

async function pokemonType(typeOfPokemon) {

    const response2 = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data2 = await response2.json();
    console.log(data2);

    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeOfPokemon}`);
    const data = await response.json();
    console.log(data);

    function pickSix() {
        let results = [];
        for (let i = 0; i < 9
            ; i++) {
            const randomPokemon = Math.floor(Math.random() * 50);
            results.push(randomPokemon);
        }
        return results;
    }
    const randomPokemonIds = pickSix();

     // this iterates over the random Pokémon IDs
    for (const randomPokemonId of randomPokemonIds) {
        const pokemonUrl = data.pokemon[randomPokemonId].pokemon.url;
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonData = await pokemonResponse.json();

        const spriteUrl = pokemonData.sprites.other.showdown.front_default;

        const pokemonContainer = document.getElementById('pokemonContainer');
        const pokemonSprite = document.createElement('img');
        pokemonSprite.setAttribute('src', spriteUrl);
        pokemonSprite.classList.add('pokemon-sprite');
        pokemonContainer.appendChild(pokemonSprite);

        
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");

    const span = document.getElementsByClassName("close")[0];

    pokemonSprite.addEventListener('click', () => {
    modal.style.display = "block"; 

    modalImage.src = spriteUrl;
    modalName.innerText = pokemonData.name;
    });

    span.onclick = function() {
  modal.style.display = "none";
}

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
    // const leftImage3 = document.getElementById('leftImage3');
    const rightImage1 = document.getElementById('rightImage1');
    const rightImage2 = document.getElementById('rightImage2');
    // const rightImage3 = document.getElementById('rightImage3');
    const leftImageUrl1 = await fetchRandomPokemonImage();
    const leftImageUrl2 = await fetchRandomPokemonImage();
    //const leftImageUrl3 = await fetchRandomPokemonImage();
    const rightImageUrl1 = await fetchRandomPokemonImage();
    const rightImageUrl2 = await fetchRandomPokemonImage();
    const rightImageUrl3 = await fetchRandomPokemonImage();
    leftImage1.src = leftImageUrl1;
    leftImage2.src = leftImageUrl2;
    // leftImage3.src = leftImageUrl3;
    rightImage1.src = rightImageUrl1;
    rightImage2.src = rightImageUrl2;
    // rightImage3.src = rightImageUrl3;
}

displayRandomPokemonImages();