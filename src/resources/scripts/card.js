// import { requestHotelApi } from "./request.js";
import { selectedFlags } from "./flags.js";
import { hotelsPrices } from "./price.js";

const container = document.getElementById("main")

export const showCard = async (hoteles) => {
    container.innerHTML =""
    if (hoteles.length != 0){
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
              <p class="description">${element.description}</p>
            </div>
            <div class="card__Bookit">
              <p>Book it!</p>
            </div>
          </div>
        </div>
      `
      let bg =document.getElementsByClassName("card")
      bg[hoteles.indexOf(element)].style.backgroundImage = `url(${element.photo})`
    });
  }else{
    container.innerHTML = ` 
    <div class="noResult"
      <p> <i class="fas fa-exclamation-triangle">&nbsp;&nbsp;</i>
        Sorry we couldn't find any hotel. Try changing your Search Filters </p>
    </div>`
    
  }
}
