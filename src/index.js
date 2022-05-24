import { showCard } from "./resources/scripts/card.js";
import { requestHotelApi } from "./resources/scripts/request.js";
import { priceNumber } from "./resources/scripts/priceNumber.js";
import { roomSize } from "./resources/scripts/roomSize.js";
import { initialDates } from "./resources/scripts/initialDates.js";
import { clearData } from "./resources/scripts/clear.js";
import { filterDates } from "./resources/scripts/filterDates.js";

const country = document.getElementById("countries");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const price = document.getElementById("price");
const rooms = document.getElementById("rooms");
const clear = document.getElementById("clear");


initialDates();
// clearData();
const hotelData = await requestHotelApi();
showCard(hotelData);


const countryFilter = () => {
    return hotelData.filter(
        (element) => country.value != "all" ? element.country === country.value : element
    );
};

const dateFilter = () => {
    return hotelData.filter(
        (element) => checkOut.value != "" ? (element.availabilityFrom >= filterDates(checkIn.value)  && element.availabilityTo <= filterDates(checkOut.value))  : element
    );
};


const priceFilter = () => {
    return hotelData.filter(
        (element) => price.value != "all" ? element.price === priceNumber(price.value) : element
    );
};

const roomsFilter = () => {
    return hotelData.filter(
        (element) => rooms.value != "all" ? roomSize(element.rooms) === rooms.value : element
    );
};

country.addEventListener("change", () => showCard(countryFilter()));
price.addEventListener("change", () => showCard(priceFilter()));
rooms.addEventListener("change", () => showCard(roomsFilter()));
checkOut.addEventListener("change", () => showCard(dateFilter()));
clear.addEventListener("click", () => clearData());