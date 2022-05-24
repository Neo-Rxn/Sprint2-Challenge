const requestHotelApi = async () =>{
    const response = await fetch("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels");
    const data = await response.json();
    // console.log(data);
    return data;
}

requestHotelApi();
export {requestHotelApi}