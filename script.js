const key = "f17c22d357122b4cb199256c16b169ef";


function button_click(){
    const city = document.querySelector(".input-city").value
    searchCity(city);
}

async function searchCity(city){
    // Encontra cidade no servidor e me retorna como .json
    const date = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response =>response.json())
    console.log(date);
    date_in_screen(date);
}

function date_in_screen(date){
    document.querySelector(".city").innerHTML = "Tempo em "+date.name;
    document.querySelector(".temp").innerHTML = Math.floor(date.main.temp)+"°C";
    document.querySelector(".text-temp").innerHTML = date.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade: "+date.main.humidity+"%";
    document.querySelector(".img-temp").style = "width: 40px;";
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`;
}

