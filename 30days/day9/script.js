const body = document.querySelector("body");
const search = document.querySelector(".search");
const content = document.querySelector(".content");
const city = document.querySelector(".city-name");
const country = document.querySelector(".city-country");
const time = document.querySelector(".time");
const temperatureValue = document.querySelector(".temperature-value");
const shortDesc = document.querySelector(".short-description");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const humid = document.querySelector(".humid span");

async function changeWeather() {
  let token = search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${token}&appid=d4cc3b886d6f90f620e06de3993cbf11`;
  let data = await fetch(apiURL).then((res) => res.json());
  console.log(data);

  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    humid.innerText = data.main.humidity + "%";

    let tempVal = Math.round(data.main.temp - 273.15);
    temperatureValue.innerText = tempVal + ""; //đổi độ K sang độ C
    shortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString("vi");

    if (tempVal < 10) {
      //cold
      body.setAttribute("class", "cold");
    } else if (tempVal >= 10 && tempVal < 20) {
      //cool
      body.setAttribute("class", "cool");
    } else if (tempVal >= 20 && tempVal < 30) {
      //warm
      body.setAttribute("class", "warm");
    } else {
      //hot
      body.setAttribute("class", "hot");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    changeWeather();
  }
});
