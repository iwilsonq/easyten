const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

const formatDate = (dateUnix = Date.now()) => {
	const dateISOString = new Date(dateUnix);
	const month = MONTHS[dateISOString.getMonth()];
	const day = DAYS[dateISOString.getDay()];
	const date = dateISOString.getDate();
	const year = dateISOString.getFullYear();
	return `${day}, ${month} ${date}, ${year}`;
};

const getDay = dateISOString => DAYS[dateISOString.getDay() - 1];
const getDate = dateISOString => {
	const monthNumber = dateISOString.getMonth() + 1;
	const year = `${dateISOString.getFullYear()}`.slice(-2);
	return `${monthNumber}/${dateISOString.getDate()}/${year}`;
};

const getDaysAgo = dateISOString => {
	const d = new Date();
	const currentDate = d.getDate();
	const givenDate = dateISOString.getDate();
	return currentDate - givenDate;
};

const formatWorkoutDate = created => {
	const date = new Date(created);
	const daysAgo = getDaysAgo(date);

	return daysAgo === 0 ? 'Today' : daysAgo < 7 ? getDay(date) : getDate(date);
};

export { formatWorkoutDate, formatDate };
