import {showCard} from "./card.js"
import { requestHotelApi } from "./request.js"

export const clearData = async () => {
    const country = document.getElementById("countries");
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");
    const price = document.getElementById("price");
    const rooms = document.getElementById("rooms");

    console.log(typeof (checkIn.value))
    let fechaInicio = new Date(checkIn.value);
    console.log(fechaInicio.getTime())

    country.value = "all";
    price.value = "all";
    rooms.value = "all";
    checkIn.value = "";
    checkOut.value = "";

    const hotelData = await requestHotelApi();
    showCard(hotelData);
}