const limit = '8',
	url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

const urlInit = {
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': 'a29d4998-73b2-476d-9f07-defd0544afae',
	},
};

function handleErrors(response) {
	console.log(response);
	if(!response.ok) {
		throw (`${response.status}: ${response.statusText}`);
	}
	return response.json();
}

function updateUI(data) {
	console.log(data);
	data.forEach(function(elem, index) {
		console.log(elem.url);
		document.querySelector('#content').innerHTML = `<img src="${elem.url}"/>`;
	});
}

function failUI(error) {
	console.log(error);
}

fetch(url, urlInit)
.then(function(response) {
   return handleErrors(response);
})
.then(function(data) {
   return updateUI(data);
})
.catch(function(error) {
   return failUI(error);
});
