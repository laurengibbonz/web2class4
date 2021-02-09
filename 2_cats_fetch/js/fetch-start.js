const limit = '10',
    url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

console.log(url);

const initOptions = {
    headers: {
        'x-api-key': 'a29d4998-73b2-476d-9f07-defd0544afae'
    }
};

let output = '';

function updateUI(data) {
    console.log(data);
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].url);
        output += `<img src="${data[i].url}" />`;
    }
    document.querySelector('#content').innerHTML = output;
}

fetch(url, initOptions)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    return updateUI(data);
})
.catch(function(error) {
    console.log(error);
});