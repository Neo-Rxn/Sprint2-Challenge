export const initialDates = () => {
	const convertToISO = (timebit) => {
		timebit.setHours(0, -timebit.getTimezoneOffset(), 0, 0);
		// remove GMT offset
		let isodate = timebit.toISOString().slice(0, 10);
		// format convert and take first 10 characters of result
		return isodate;
	};

	const addDay = (selectedDate, day) => {
		selectedDate.setDate(selectedDate.getDate() + day);
		return selectedDate;
	};

	let checkIn = document.getElementById("checkIn");
	let checkOut = document.getElementById("checkOut");
	let currentdate = new Date();

	checkIn.min = convertToISO(currentdate);
	checkIn.placeholder = checkIn.min;

	const checkOutDate = (date) => {
		checkOut.min = convertToISO(addDay(date, +2));
		checkOut.placeholder = checkOut.min;
	};

	checkIn.addEventListener("change", (e) =>
		checkOutDate(new Date(e.target.value))
	);
};
