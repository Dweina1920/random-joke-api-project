// Tu códgigo aquí Dina 
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');


button.addEventListener('click', function(){
    getRandomJoke();
})

async function getRandomJoke(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    console.log('response:', response)
  
    const datos = await response.json();
    console.log('response en objeto:', datos)
    jokeDIV.textContent = datos.value;
}

