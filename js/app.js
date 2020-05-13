var button = document.querySelector(".submit");
var inputValue = document.querySelector(".inputValue");
var city = document.querySelector(".city");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=b57cd0757ad66bd57f30cc0919d04a90&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      var cityValue = data.name;
      var descValue = capitalizeFirstLetter(data.weather[0].description);
      var tempValue = data.main.temp;
      city.innerHTML = cityValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue + "&deg;C";
    })
    .catch((err) => alert("Enter Valid City Name"));
});
