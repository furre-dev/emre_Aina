const container = document.querySelector(".container");

async function getData() {
	const resp = await fetch("https://polisen.se/api/events");
	const data = await resp.json();
	console.log(data);

	//Change "50" to desired amount. This affects how many articles are shown.
	for (let i = 0; i < 50; i++) {
		container.innerHTML += `
    <a target="_blank" href="https://polisen.se${data[i].url}" class="card">
    <h3 class="type">${data[i].type}</h3>
    <h4 class="time">${data[i].name}</h4>
    <p class="summary">${data[i].summary}</p>
    <p class="darkGray">Sist uppdaterad : ${data[i].datetime}</p>
  </a>`;
	}

	//This will create an article for EVERY single object we get from the API.
	/* data.forEach((element) => {
		container.innerHTML += `
    <a href=${element.url} class="card">
    <h3 class="type">${element.type}</h3>
    <h4 class="location">${element.location.name}</h4>
    <h4 class="time">${element.datetime}</h4>
    <p class="summary">${element.summary}</p>
  </a>`;
	});*/
}

getData();
