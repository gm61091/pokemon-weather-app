// weclome for page $$
// description of what it does $$
// a couple of permanent images for landing page
// search bar $$
// result box for weather results
// potential pokemon list based off weather result.
// may add a database they can click and keep pokemon like the game 

// pulling from pokemon types function -
//id
//type
//name

//pulling from pokemon image function -
//default_sprite

//pokeomn type [
    //water
    //electric
    //posion
    //dark
    //ghost
    //normal
    //bug
    //fire
    //psychic
    //fighting
    //ground
    //rock
    //gragon
    //grass
    //steel
    //flying
    //fairy
    //ice
//]

//function for time
// if day ? bug && ground
// if night ? ghost && psychic

// function for tempuratre
//if temp < 30 ? ice && fairy
//if temp > 30 && < 60 ? ground && rock pokemon
//if temp > 60 && < 90 ? bug && grass pokemon
//if temp > 90 ? fire && Dragon pokemon

//function for weather.main
//if weather = haze ? ghost && dragon
//if weather = fog ? ghost && psychic
//if weather = smoke ? fire && poison
//if weather = mist ? water && ghost
//if weather = snow ? ice && fairy
//if weather = rain ? water && grass 
//if weather = drizzle ? water && grass
//if weather = thunderstorm ? water && electric 
//if weather = clear ? fire && normal

//fucntion for clouds
//if clouds > 0 && < 25 ? grass and flying pokemon
//if clouds > 25 && < 50 ? ground && bug
//if clouds > 50 && < 84 ? rock && electric
//if clouds > 84 && < 100 ? ghost && water

//function for humidity
//if humidtiy > 0 && < 25 ? rock && fire
//if humidity > 25 && < 50 ? ground && steel
//if humidity > 50 && < 75 ? grass && bug
//if humidity > 75 && < 100 ? water && grass

//function for wind
//if wind > 0 && < 5 ? ground && bug
//if wind > 5 && < 10 ? grass && rock
//if wind > 10 && < 15 ? rock && flying
//if wind > 15 ? flying && dragon






//function to call both apis
async function getBoth() {
    await weatherFunction();
    await pokemonFunction();
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

        let weatherResult = document.createElement('ul');  //chats version
        
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
    await pokemonFunction();
    await pokemonImage();
}
//pokemon api call
async function pokemonFunction() {

    const pokemonType = 'water';
    const pokemonUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`;

    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))};
  

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

        // const pokemonSprite = data.sprites.front_default;
        // const imgElement = document.getElementById('pokemonSprite')

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

