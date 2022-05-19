export const priceNumber = (hotelPrice) => {
    switch (hotelPrice){
        case "$" :
            return 1;
            break;
        case "$$" :
            return 2;
            break;
        case "$$$" :
            return 3;
            break;
        case "$$$$" :
            return 4;
            break;
    }
} 