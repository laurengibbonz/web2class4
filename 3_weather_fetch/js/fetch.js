const lat = '40.7128',
    long = '74.0060',
    api = '2ba2238d2526ee83ae3e8b5bb83f2c78',
    unit = 'imperial',
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api}&units=${unit}`;

console.log(url);

function updateUI(data) {
    console.log(data);
}

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    return updateUI(data);
})
.catch(function(error) {
    console.log(error);
});