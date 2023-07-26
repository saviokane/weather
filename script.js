const key = "f17c22d357122b4cb199256c16b169ef";

function button_click(){
    const city = document.querySelector(".input-city").value
    searchCity(city);
}

async function searchCity(city){
    // Encontra cidade no servidor e me retorna como .json, caso ela não exista retorna página como cidade invalida
    const date = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then((response) => {
        if (!response.ok) {
          
          document.querySelector('.city').innerHTML = 'Cidade Inválida';
          throw new Error('Cidade não encontrada');
        }
        return response.json();
      })
    console.log(date);
    date_in_screen(date);
}

function date_in_screen(date){
    if(date.name == "undefined"){
        document.querySelector(".city").innerHTML = "Cidade Invalida";
    }else{
        document.querySelector(".city").innerHTML = "Tempo em "+date.name;
    }
    document.querySelector(".temp").innerHTML = Math.floor(date.main.temp)+"°C";
    document.querySelector(".text-temp").innerHTML = date.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade: "+date.main.humidity+"%";
    document.querySelector(".img-temp").style = "width: 40px;";
    document.querySelector(".humidity").style = "margin-top: 20px;";
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`;
    
}

function checkEnter(event) {
    if (event.keyCode === 13) {

      button_click();
    }
  }

  

