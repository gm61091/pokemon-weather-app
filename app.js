//weclome for page
//description of what it does
//a couple of permanent images for landing page
//search bar
//result box for weather results
//potential pokemon list based off weather result.
//may add a database they can click and keep pokemon like the game 


const pokemonList = document.getElementById('pokemonList')

//function to call both apis
async function getBoth() {
    await weatherFunction();
    await pokemonFunction();
}


//weathercapi call
async function weatherFunction() {

    const weatherApi = '885df44cffe885e5718d2bd8f918b530';
    const city = 'atlanta';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))};



//pokemon api call
async function pokemonFunction() {

    const pokemonType = 'fire';
    const pokemonUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`;

    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))};
  
    //   let title = document.createElement('h3')
    //   title.innerText = data.articles[0].title
    //   news.appendChild(title)
    //   })
