const api = {
    key: "b8c8523bcc9f276a729ffb59deb4e31b",
    baseurl: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchBox=document.querySelector('.search-box')

  searchBox.addEventListener("keypress",setQuery)

  function setQuery(e){
    if(e.keyCode==13){
        getResult(searchBox.value)
    }
  }

  function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(data=>data.json())
    .then(displayResults)
  }

function displayResults(weather){
  console.log(weather.weather[0].icon);
    
    let city=document.querySelector('.location .city')
   city.textContent=`${weather.name}, ${weather.sys.country}`

   let now=new Date();

   let date = document.querySelector('.location .date')
   date.innerHTML = dateBuilder(now)

   let temp= document.querySelector('.current .temp')
   temp.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`

   let icon=document.querySelector('.icon')
   icon.innerHTML=`<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png">`

   let weather_el=document.querySelector('.current .weather')
   weather_el.textContent=`${weather.weather[0].main}`
   
    let hilow=document.querySelector('.hi-low')
    hilow.textContent=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
    
}

function dateBuilder(d){
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]

    let day =days[d.getDay()]
    let date= d.getDate()
    let month=months[d.getMonth()]
    let year= d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}