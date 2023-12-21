const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
// const toggle = document.querySelector(".toggle");


async function getCountry() {
    try {
        const url = await fetch("https://restcountries.com/v2/all");
        const res = await url.json();
        console.log(res);
        res.forEach(element => {
            showCountry(element);
        });
    } catch (error) {
        console.error("Error fetching country data:", error);
    }
}

getCountry();

function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `
        <div class="country-img">
            <img src="${data.flag}" alt="">
        </div>
        <div class="country-info">
            <h5 class="countryName"><b>${data.name}</b></h5>
            <p><strong>Population: </strong>${data.population}</p>
            <p class="regionName"><strong>Region: </strong>${data.region}</p>
            <p><strong>Capital: </strong>${data.capital}</p>
            <button class="moreDetails">More Details</button>
        </div>
    `;
    countriesElem.appendChild(country);
    country.addEventListener("click", () => {
        showCountryDetail(data)
    })
}

dropDown.addEventListener("click", () => {
    dropElem.classList.toggle("showDropDown")
})
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");


region.forEach(element => {
    element.addEventListener("click", () => {
        Array.from(regionName).forEach(elem => {
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid"
            }
            else {
                elem.parentElement.parentElement.style.display = "none"

            }
        })

    })
})
search.addEventListener("input", () => {
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid"
        }
        else {
            elem.parentElement.parentElement.style.display = "none"

        }
    })

})

const countryModal = document.querySelector(".countryModal");

function showCountryDetail(data) {
    countryModal.classList.toggle("show");
    // const weatherData = getWeatherInfo(data.alpha2Code);
    countryModal.innerHTML = ` <button class="back">Back</button>
    <div class="modal">
      <div class="leftModal">
        <img src="${data.flag}" alt="">
      </div>
      <div class="rightModal">
        <h1>${data.name}</h1>
        <div class="modalInfo">
          <div class="innerLeft">
            <p><strong>Native Name: </strong>${data.nativeName}</p>
            <p ><strong>Population: </strong>${data.population}</p>
            <p><strong>Region: </strong>${data.region}</p>
            <p><strong>Sub-Region: </strong>${data.subregion}</p>
          </div>

          <div class="innerRight">
          <p><strong>Capital: </strong>${data.capital}</p>
            <p><strong>Demonym: </strong>${data.demonym}</p>
            <p><strong>Currencies: </strong>${data.currencies.map(elem=>elem.name)}</p>
            <p><strong>Languages: </strong>${data.languages.map(elem=>elem.name)}</p>
          </div>
        </div>
      </div>
    </div>
    `;
    setTimeout(() => {
        // Select the back button after toggling the modal
        const back = document.querySelector(".back");
        if (back) {
            back.addEventListener("click", () => {
                countryModal.classList.toggle("show");
            });
        }
    }, 0);

}

    // const back = countryModal.querySelector(".back");
    // back.addEventListener("click", () => {
    //     countryModal.classList.toggle("show")
    // })


    