function searchCountry() {
    const countryInput = document.getElementById("countryInput").value;
    const countryResults = document.getElementById("countryResults");

    // Clear previous search results
    countryResults.innerHTML = "";

    // Fetch country data
    fetch(`https://restcountries.com/v3.1/name/${countryInput}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const card = document.createElement("div");
                card.classList.add("col-md-4");

                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">Population: ${country.population}</p>
                            <p class="card-text">Capital: ${country.capital}</p>
                            <button class="btn btn-info" onclick="showWeather('${country.name.common}')">More Details</button>
                        </div>
                    </div>
                `;

                countryResults.appendChild(card);
            });
        })
        .catch(error => console.error(error));
}

function showWeather(countryName) {
    // Implement logic to fetch and display weather data for the given country
    alert(`Weather data for ${countryName}`);
}
