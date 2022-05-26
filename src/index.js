import { showCard } from "./resources/scripts/card.js";
import { requestHotelApi } from "./resources/scripts/request.js";
import { priceNumber } from "./resources/scripts/priceNumber.js";
import { roomSize } from "./resources/scripts/roomSize.js";
import { initialDates } from "./resources/scripts/initialDates.js";
import { clearData } from "./resources/scripts/clear.js";
import { filterDates } from "./resources/scripts/filterDates.js";
import { dateRange } from "./resources/scripts/dateRange.js";

const country = document.getElementById("countries");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const price = document.getElementById("price");
const rooms = document.getElementById("rooms");
const clear = document.getElementById("clear");
const hotelData = await requestHotelApi();
const btn = document.querySelector(".btn-toggle")

initialDates();
showCard(hotelData);

const Filter = () => {
    return hotelData
        .filter((element) =>
            country.value != "all" ? element.country === country.value : element
        )
        .filter((element) =>
            checkOut.value != ""
                ? dateRange(element.availabilityFrom) >= filterDates(checkIn.value) &&
                dateRange(element.availabilityTo) <= filterDates(checkOut.value)
                : element
        )
        .filter((element) =>
            price.value != "all"
                ? element.price === priceNumber(price.value)
                : element
        )
        .filter((element) =>
            rooms.value != "all" ? roomSize(element.rooms) === rooms.value : element
        );
};

country.addEventListener("change", () => showCard(Filter()));
price.addEventListener("change", () => showCard(Filter()));
rooms.addEventListener("change", () => showCard(Filter()));
checkOut.addEventListener("change", () => showCard(Filter()));
clear.addEventListener("click", () => clearData());

btn.addEventListener("click", ()=>document.body.classList.toggle("dark-theme"))
