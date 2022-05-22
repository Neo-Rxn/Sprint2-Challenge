
export const initialDates = () =>{

const convertToISO = (timebit) =>{
	timebit.setHours(0, -timebit.getTimezoneOffset(), 0, 0);
	// remove GMT offset
	let isodate = timebit.toISOString().slice(0,10);
	// format convert and take first 10 characters of result
	return isodate;
}

const sumarDias = (fecha,dia) => {
	fecha.setDate(fecha.getDate() + dia);
	return fecha
}

let checkIn = document.getElementById('checkIn');
let checkOut = document.getElementById('checkOut');
let currentdate = new Date()
// console.log(checkIn,checkOut)
// console.log(currentdate)
// console.log(convertToISO(currentdate))
// console.log(convertToISO(sumarDias(currentdate,+2)) )
// console.log(typeof(currentdate)  + " dia actual");
checkIn.min = convertToISO(currentdate);
checkIn.placeholder = checkIn.min;
// checkOut.min =convertToISO(sumarDias(date,+1));
// checkOut.placeholder = checkOut.min;
const checkOutDate = (date) => {
	checkOut.min =convertToISO(sumarDias(date,+2));
	checkOut.placeholder = checkOut.min;
}
// currentdate = currentdate.setDate(1);
// console.log(typeof(currentdate) + " dia despues");

checkIn.addEventListener("change",(e)=>checkOutDate(new Date(e.target.value)))
}