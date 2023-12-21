// const countriesElem = document.querySelector(".countries");

// async function getCountry(){
//     const url = await fetch("https://restcountries.com/v2/all")
//     const res= await url.json();
//     console.log(res);
//     res.forEach(element => {
//         showCountry(element)  
//     });
// }

// getCountry()
// function showCountry(data){
//     const country = document.createElement("div")
//     country.classList.add("country")
//     country.innerHTML = ` <div class="country-img">
//     <img src="$(data.flag)" alt="">
// </div>
// <div class="country-info">
//   <h5><b>$(data.name)</b></h5>
//   <p><strong>Population: </strong>$(data.population)</p>
//   <p><strong>Region: </strong>$(data.region)</p>
//   <p><strong>Capital: </strong>$(data.capital)</p>
// </div>
//     `;
//     countriesElem.appendChild(country)
// }


const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");

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
    country.addEventListener("click", ()=>{
        showCountryDetail()
    })
}

dropDown.addEventListener("click", ()=>{
    dropElem.classList.toggle("showDropDown")
})
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");


region.forEach(element =>{
    element.addEventListener("click", ()=>{
        Array.from(regionName).forEach(elem =>{
            if(elem.innerText.includes(element.innerText) || element.innerText=="All"){
                elem.parentElement.parentElement.style.display= "grid"
            }
            else{
                elem.parentElement.parentElement.style.display= "none"

            }
        })

    })
})
search.addEventListener("input", () =>{
    Array.from(countryName).forEach(elem =>{
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            elem.parentElement.parentElement.style.display= "grid"
        }
        else{
            elem.parentElement.parentElement.style.display= "none"

        }
    })

})

const back= document.querySelector(".back")
const countryModal= document.querySelector(".countryModal");

back.addEventListener("click", ()=>{
    countryModal.classList.toggle("show")
})
function showCountryDetail(){
    countryModal.classList.toggle("show") 
}
 
// const back = document.querySelector(".back");
// const countryModal = document.querySelector(".countryModal");

// back.addEventListener("click", () => {
//     toggleCountryModal();
// });

// function toggleCountryModal() {
//     countryModal.classList.toggle("show");
// }

// function showCountryDetail() {
//     toggleCountryModal();
// }
