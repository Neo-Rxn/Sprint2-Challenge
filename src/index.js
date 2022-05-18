import { showCard } from "./resources/scripts/card.js";
import { requestHotelApi } from "./resources/scripts/request.js";

const hotelData = await requestHotelApi();
showCard(hotelData);

const country = document.getElementById("countries");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const price = document.getElementById("price");
const rooms = document.getElementById("rooms");

checkIn.addEventListener("change", function () {
    let input = this.value;
    let dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

checkOut.addEventListener("change", function () {
    let input = this.value;
    let dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

// console.log(checkIn.value)
// console.log(checkOut.value)
// console.log(price.value);
// console.log(rooms.value);

const countryFilter = (changedCountry) => {
    const filteredCountries = hotelData.filter(
        (element) => element.country === changedCountry
    );
    if (filteredCountries.length != 0) {
        showCard(filteredCountries);
    } else {
        showCard(hotelData);
    }
};

country.addEventListener("change", () => countryFilter(country.value));

const filtros = document.getElementsByClassName("filter");
// console.log(filtros)

filtros[0].addEventListener("change", () => console.log(filtros[3].value));
