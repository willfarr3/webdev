const stockPrice = document.querySelector(".output")
const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83aa7e4915msha45fa05c01ec122p187bfajsn2e1e98827135',
		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
	}
};


async function getPrice() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.symbol);
    } catch (error) {
        console.error(error);
    }
}

getPrice()