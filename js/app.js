const searchBox = () => {
  const searchBox = document.getElementById("search-box").value;
  const url = `https://restcountries.com/v3.1/name/${searchBox}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShow(data));
  document.getElementById("search-box").value = "";
};

const displayShow = (data) => {
  document.getElementById("search-result").innerHTML = "";
  data.forEach((object) => {
    const searchResult = document.getElementById("search-result");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card h-100">
            <img src="${object.flags.png}" class="card-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">Country: ${object.name.official}</h5>
              <p class="card-text">Capital: ${object.capital[0]}</p>
              <p class="card-text">Continents: ${object.continents[0]}</p>
              <p class="card-text">Population: ${object.population}</p>
              <button onclick="loadMealDetail()" class="details-btn">See Details</button>
            </div>
          </div>`;
    searchResult.appendChild(div);
  });
};
