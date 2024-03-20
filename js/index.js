const theJoke = document.querySelector(".output")
const temp = document.querySelector(".temp")

 "900b4b96ca474c8b59bd9bb846c16ba7"

const jokeButton = document.querySelector(".joke-button")
const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83aa7e4915msha45fa05c01ec122p187bfajsn2e1e98827135',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

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
