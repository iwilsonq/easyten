const ATHLETES = [
	'TOM BRADY',
	'LEBRON JAMES',
	'ELIUD KIPCHOGE',
	'USAIN BOLT',
	'CONNOR MCGREGOR'
];

const getRandomAthlete = () => {
	const index = Math.floor(Math.random() * ATHLETES.length);
	return ATHLETES[index];
};

const PHRASES = [
	'GET TO WORK.',
	'ARE WE RUNNING TODAY?',
	'FIRE IT UP!',
	'NO TIME TO SLEEP.',
	`WHAT WOULD ${getRandomAthlete()} DO?`,
	'LETS GO.'
];

const getRandomMotivation = () => {
	const index = Math.floor(Math.random() * PHRASES.length);
	return PHRASES[index];
};

export { getRandomMotivation };
