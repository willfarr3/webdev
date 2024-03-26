const theJoke = document.querySelector(".output")
const temp = document.querySelector(".temp")
const headers = document.querySelector(".header")
currentTemp = document.querySelector(".temp")
const geoKey = '2328c9ca79f34a98a61969796f0345b3'
const currentCondition = document.querySelector(".type")


let geoUrl = 'myprojects.geoapify.com/api/geoKey/keys'
async function getIp() {
	try{
		const geoResponse = await fetch(geoUrl)
		const geoData = await geoResponse.json()
		console.log(geoData,geoResponse)

	}catch (error) {
		console.error(error)
	}
}
getIp()
console.log(geoResponse)

"900b4b96ca474c8b59bd9bb846c16ba7"

// const jokeButton = document.querySelector(".joke-button")
// const dadUrl = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '83aa7e4915msha45fa05c01ec122p187bfajsn2e1e98827135',
// 		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };



let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={"2328c9ca79f34a98a61969796f0345b3"}`
let img 

async function getWeather() {
	const la = coords[0]
	const lo = coords[1]
	const clouds = ['few clouds','scattered clouds','broken clouds','overcast clouds']
	const rain = ['shower rain','rain','mist','light rain','moderate rain']
	try{
		const response = await fetch(url)
		const data = await response.json()
		currentTemp.textContent = Math.round(data.main.temp)
		let condition = data.wheather[0].description 
		console.log(condition)
		currentCondition.textContent = condition 

		if (clouds.includes(condition)) {
				img = 'partly-cloudy.png'
		}
		else if (rain.includes(condition)) {
			img = 'rain.png'
		}
		else if (condition == 'thunderstorm') {
			img = 'rain-storm.png'
		}
		else if (condition == 'snow') {
			img = 'snow.png'
		}
		else if (condition == 'clear sky') {
			img = 'sunny.png'
		}

		wxImg.src = '../imgs/wx-imgs/${img}'
	}catch (error) {
		console.error(error)
	}
}

getWeather()


async function getLocation() {
	const geoUrl = `https://myprojects.geoapify.com/api/YmbNoZ88RgcaEI9GAxjm/keys =${geoKey}` 
	try {
		const geoResponse = await fetch(geoUrl)
		const geoData = await geoResponse.json()
		const lat = geoData.location.latitude
		const lon = geoData.location.longitude
		const coords = [lat,lon]
		console.log(coords)
		return coords
	} catch (error) {
		console.error(error)
	}
}



async function getTime(coords) {
	const la = coords[0]
	const lo = coords[1]
	const timeUrl = 'https://api-ninjas.com/profile'
	const options = {
		method: 'GET'
		headers: {
			'fN6sgSNJqEgZk/SQ99UwdQ==AZJGtfALV9nodRAj'
		}
	}
}



const DateTime = new Date()
const month = DateTime.getMonth()
const date = DateTime.getDate()
const year = DateTime.getFullYear()
const hour = DateTime.getHours()
let minutes = DateTime.getMinutes()
console.log(month,date,year,hour,minutes)
let amPm = 'am'

if (minutes < 10) {
	minutes = '0' +minutes.toString
}

if (hour > 12) {
	hour = '1' + hour 
	amPm = 'pm'
	hour = hour -12
}

if (hour >= 12) {

}


let time = `${hour}:${minutes}${amPm}`
DateTime.textcontent = time
async function getJoke() {
    

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const joke = result[0].joke;
    theJoke.textContent = joke
} catch (error) {
    joke.textContent = "erm actually..."
	console.error(error);
}
}

jokeButton.addEventListener('click', () =>{
    getJoke()
})


// https:api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
getLocation()
.then(c => getTime(c))

getLocation()
	.then(c => getWeather(c))
