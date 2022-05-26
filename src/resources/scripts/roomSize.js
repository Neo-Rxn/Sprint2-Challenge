export const roomSize = (hotelSize) => {

   if (hotelSize <= 10){
       return "small"
   } else if (hotelSize > 10 && hotelSize <= 20){
       return "medium"
   }else {
       return "large"
   }
}

