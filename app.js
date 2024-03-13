

async function weatherApiCall() {
    const weatherApi = '885df44cffe885e5718d2bd8f918b530';
    const city                = document.getElementById('city').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

    const response     = await fetch(weatherUrl);
    const data         = await response.json();

    return data;
}




async function weatherTemp() {
    
    const weatherData = await weatherApiCall();

    function convertKelvin(kelvin) {
        return Math.floor(kelvin - 273.15) * 9/5 + 32;
    }
    const temperature = convertKelvin(weatherData.main.temp);

    console.log(weatherData);
    

    if (temperature < 0 && temperature <= 25) {

        

        const pokemonData = await pokemonType('ice')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (temperature > 25 && temperature <= 50) {

        const pokemonData = await pokemonType('bug')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (temperature > 50 && temperature <= 75) {

        const pokemonData = await pokemonType('ground')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (temperature > 75 && temperature <= 100) {

        const pokemonData = await pokemonType('bug')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
    }
    else if (temperature > 100) {

        const pokemonData = await pokemonType('fire')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
    }



}

async function weatherClouds() {
    const weatherData = await weatherApiCall();
    console.log(weatherData)
    const cloudPercent = await weatherData.clouds.all;

    if (cloudPercent >= 0 && cloudPercent <= 25) {

        const pokemonData = await pokemonType('grass')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (cloudPercent > 25 && cloudPercent <= 50) {

        const pokemonData = await pokemonType('bug')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (cloudPercent > 50 && cloudPercent <= 75) {

        const pokemonData = await pokemonType('flying')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (cloudPercent > 75 && cloudPercent <= 100) {

        const pokemonData = await pokemonType('water')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
    }



}

async function weatherHumidity() {
    const weatherData = await weatherApiCall();
    const humidityPercent = await weatherData.main.humidity;

    if (humidityPercent >= 0 && humidityPercent <= 25) {

        const pokemonData = await pokemonType('ground')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (humidityPercent > 25 && humidityPercent <= 50) {

        const pokemonData = await pokemonType('rock')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (humidityPercent > 50 && humidityPercent <= 75) {

        const pokemonData = await pokemonType('grass')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)

    }
    else if (humidityPercent > 75 && humidityPercent <= 100) {

        const pokemonData = await pokemonType('water')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
    }
}

async function weatherWind() {
    const weatherData = await weatherApiCall();
    const windSpeed = await weatherData.wind.speed;

    if (windSpeed >= 0 && windSpeed <= 5) {

      const pokemonData = await pokemonType('ground')

      let pTag = document.createElement('p')
      pTag.innerText = pokemonData.pokemon[0].pokemon.name
      let weather3 = document.getElementById('weather3')
      weather3.appendChild(pTag)

    }
    else if (windSpeed > 5 && windSpeed <= 10) {

        const pokemonData = await pokemonType('fairy')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
        }

    else if (windSpeed > 10) {

        const pokemonData = await pokemonType('flying')

        let pTag = document.createElement('p')
        pTag.innerText = pokemonData.pokemon[0].pokemon.name
        let weather3 = document.getElementById('weather3')
        weather3.appendChild(pTag)
    }
    

}



async function weatherMain() {
    const weatherData = await weatherApiCall();
    const weatherCondition = await weatherData.weather[0].main;
    

    if (weatherCondition === 'Clouds') {

        const pokemonData = await pokemonType('dragon')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Dust') {

        const pokemonData = await pokemonType('rock')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Sand') {

        const pokemonData = await pokemonType('ground')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Ash') {

        const pokemonData = await pokemonType('fire')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Squall') {

        const pokemonData = await pokemonType('psychic')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Tornado') {

        const pokemonData = await pokemonType('flying')


       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Haze') {

        const pokemonData = await pokemonType('poison')


       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Fog') {

        const pokemonData = await pokemonType('ghost')


       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Smoke') {

        const pokemonData = await pokemonType('fire')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Mist') {

        const pokemonData = await pokemonType('water')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Snow') {

        const pokemonData = await pokemonType('ice')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Rain') {

        const pokemonData = await pokemonType('water')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Drizzle') {

        const pokemonData = await pokemonType('water')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Thunderstorm') {

        const pokemonData = await pokemonType('electric')
        

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

    if (weatherCondition === 'Clear') {

        const pokemonData = await pokemonType('grass')

       let pTag = document.createElement('p')
       pTag.innerText = pokemonData.pokemon[0].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
         
    }

}


//function to call both apis
async function getBoth() {
    await weatherFunction();
    await weatherMain();
    await weatherHumidity();
    await weatherWind();
    await weatherClouds();
    await weatherTemp();
}


//weathercapi call
async function weatherFunction() {

    const weatherApi = '885df44cffe885e5718d2bd8f918b530';
    const city = document.getElementById('city').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        
        console.log(data)

        let weatherResult = document.createElement('ul'); 
        
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
        })
    
    .catch(error => console.error('Error:', error))};


//pulling both pokemon apis
async function bothPokemon() {
    await pokemonType('water');
    await pokemonImage();
}
//pokemon api call
async function pokemonType(typeOfPokemon) {

   // const type = 'water';
   // const pokemonUrl = `https://pokeapi.co/api/v2/type/${typeOfPokemon}`;

    const response     = await fetch(`https://pokeapi.co/api/v2/type/${typeOfPokemon}`);
    const data         = await response.json();

    return data;
}

//pokemon image api call

async function pokemonImage() {

    const pokemon = document.getElementById('pokemon');
    const pokemon2= document.getElementById('pokemon2');
    const pokemonValue = pokemon.value;
    const imageUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonValue}`;
    let pokemonResult = document.createElement('ul');

    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {


        console.log(data)

        
        pokemonResult.innerHTML = `
        <li>Pokemon: ${data.name}</li>
        <li>ID: ${data.id}</li>
        <li>Type: ${data.types[0].type.name}</li>
        `;
        let imgElement = document.getElementById('pokemonSprite')
        imgElement.setAttribute('src', data.sprites.front_default)
        pokemon2.appendChild(pokemonResult)
    })
    .catch(error => console.error('Error:', error))};

