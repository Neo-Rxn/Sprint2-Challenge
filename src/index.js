import { showCard } from "./resources/scripts/card.js";
import { requestHotelApi } from "./resources/scripts/request.js";
import { priceNumber } from "./resources/scripts/priceNumber.js";
import { roomSize } from "./resources/scripts/roomSize.js";

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

const countryFilter = () => {
    return hotelData.filter(
        (element) => country.value != "all" ? element.country === country.value : element
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

// testing area

// let timestamp = 1653349250121;
// let d = new Date(timestamp);
// console.log(d)