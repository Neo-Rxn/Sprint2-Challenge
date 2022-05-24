import {showCard} from "./card.js"
import { requestHotelApi } from "./request.js"

export const clearData = async () => {
    const country = document.getElementById("countries");
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");
    const price = document.getElementById("price");
    const rooms = document.getElementById("rooms");
    // let fechaInicio = new Date(checkIn.value);


    country.value = "all";
    price.value = "all";
    rooms.value = "all";
    checkIn.value = "";
    checkOut.value = "";

    const hotelData = await requestHotelApi();
    showCard(hotelData);
}