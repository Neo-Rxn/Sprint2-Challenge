export const filterDates = (date) => {
    // const checkIn = document.getElementById("checkIn");
    // const checkOut = document.getElementById("checkOut");

   
    let strDate = new Date(date);
    return strDate.getTime();

}