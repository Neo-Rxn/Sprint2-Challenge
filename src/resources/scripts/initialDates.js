
export const initialDates = () =>{

const convertToISO = (timebit) =>{
	timebit.setHours(0, -timebit.getTimezoneOffset(), 0, 0);
	// remove GMT offset
	let isodate = timebit.toISOString().slice(0,10);
	// format convert and take first 10 characters of result
	return isodate;
	}


let checkIn = document.getElementById('checkIn');
let checkOut = document.getElementById('checkOut');
let currentdate = new Date()
// console.log(typeof(currentdate)  + " dia actual");
checkIn.min = convertToISO(currentdate);
checkIn.placeholder = checkIn.min;
// currentdate = currentdate.setDate(1);
// console.log(typeof(currentdate) + " dia despues");
checkOut.min = convertToISO(currentdate);
}