import { requestHotelApi } from "./request.js";
import { selectedFlags } from "./flags.js";
import { hotelsPrices } from "./price.js";

const container = document.getElementById("main")

export const showCard = async (hoteles) => {
    // const hotelData = await requestHotelApi();
    container.innerHTML =""
    hoteles.forEach(element => {
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
      let bg =document.getElementsByClassName("card")
      // console.log(bg[hotelData.indexOf(element)])
  
      bg[hoteles.indexOf(element)].style.backgroundImage = `url(${element.photo})`
      // bg.style.backgroundImage = `url(${element.photo})`

    });

}
