import { requestHotelApi } from "./request.js";
import { selectedFlags } from "./flags.js";
import { hotelsPrices } from "./price.js";

const container = document.getElementById("main")

export const showCard = async () => {
    const hotelData = await requestHotelApi();

    hotelData.forEach(element => {
        container.innerHTML += ` 
        <div id="card" class="card">
       
          <div id="card__contents" class="card__contents">
            <div class="card__more">
              <span>&nbsp; + &nbsp;</span>
    
            </div>
            <div id="lowerText">
              <h2>${element.name}</h2>
              <img src="${selectedFlags(element.country)}" > <span>${element.country}</span>
              <p>${element.rooms} Habitaciones - ${hotelsPrices(element.price)}</p>
            </div>
            <div class="card__Bookit">
              <p>Book it!</p>
            </div>
          </div>
        </div>
      `
    //   document.getElementById("card").style.backgroundImage = "https://i.ibb.co/b57KX1g/sainte-jeanne.jpg";

    });

}
