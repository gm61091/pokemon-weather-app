
//weathercapi call

async function weatherFunction() {

const data = await weatherApiCall();

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
    
    };


async function weatherApiCall() {
    const weatherApi = '';
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

        await pokemonType('rock')
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

        await pokemonType('bug')
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

        await pokemonType('rock')
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

      const pokemonData = await pokemonType('ground')

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



//pulling both pokemon apis
async function bothPokemon() {
    await pokemonType('water');
    //await pokemonImage();
}
//pokemon api call
async function pokemonType(typeOfPokemon) {

    const response     = await fetch(`https://pokeapi.co/api/v2/type/${typeOfPokemon}`);
    const data         = await response.json();
    //console.log(data)
    const randomPokemon = Math.floor(Math.random() * 25);
    let pokemon2 = document.getElementById('pokemon2')
    let pokemonDataUrl = await data.pokemon[randomPokemon].pokemon.url 
    const pokemonData = await fetch(pokemonDataUrl)
    const pokemonReturn = await pokemonData.json()
    //const imgUrl = pokemonReturn.sprites.other[`official-artwork`].front_default
    const imgUrl = pokemonReturn.sprites.other.showdown.front_default
    const pokemonSprite = document.createElement('img')
    pokemonSprite.setAttribute('src', imgUrl)
    pokemon2.appendChild(pokemonSprite)

    let pTag = document.createElement('p')
       pTag.innerText = data.pokemon[randomPokemon].pokemon.name
       let weather2 = document.getElementById('weather2')
       weather2.appendChild(pTag)
    

    return data;
}

//pokemon image api call

// async function pokemonImage() {

//     const pokemon = document.getElementById('pokemon');
//     const pokemon2= document.getElementById('pokemon2');
//     const pokemonValue = pokemon.value;
//     const imageUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonValue}`;
//     let pokemonResult = document.createElement('ul');

//     fetch(imageUrl)
//     .then(response => response.json())
//     .then(data => {


//         console.log(data)

        
//         pokemonResult.innerHTML = `
//         <li>Pokemon: ${data.name}</li>
//         <li>ID: ${data.id}</li>
//         <li>Type: ${data.types[0].type.name}</li>
//         `;
//         let imgElement = document.getElementById('pokemonSprite')
//         imgElement.setAttribute('src', data.sprites.front_default)
//         pokemon2.appendChild(pokemonResult)
//     })
//     .catch(error => console.error('Error:', error))};

