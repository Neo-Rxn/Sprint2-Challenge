export const hotelsPrices = (hotelPrice) => {
    switch (hotelPrice){
        case 1 :
            return "$";
            break;
        case 2 :
            return "$$";
            break;
        case 3 :
            return "$$$";
            break;
        case 4 :
            return "$$$$";
            break;
    }
} 