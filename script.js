const apikey= "3c4a9a399a0f258086234783bb21301b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".searchbar input");
const searchbtn = document.querySelector(".searchbar button");
async function checkweather(city) {
    const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".weather").style.display="none";
        document.querySelector("#error").style.display="block";
    } else { document.querySelector("#error").style.display="none";}
    
    let data = await response.json();
    console.log(data);
    const weatherImg = document.querySelector(".weather-icon");
    if(data.weather[0].main==="Fog"){
        weatherImg.setAttribute("src","images/mist.png")
    } 
    if(data.weather[0].main==="Clear"){
        weatherImg.setAttribute("src","images/clear.png")
    } 
    if(data.weather[0].main==="Rain"){
        weatherImg.setAttribute("src","images/rain.png")
    } 
    if(data.weather[0].main==="Drizzle"){
        weatherImg.setAttribute("src","images/drizzle.png")
    } 
    if(data.weather[0].main==="Snow"){
        weatherImg.setAttribute("src","images/snow.png")
    } 
    if(data.weather[0].main==="Clouds"){
        weatherImg.setAttribute("src","images/clouds.png")
    } 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})





