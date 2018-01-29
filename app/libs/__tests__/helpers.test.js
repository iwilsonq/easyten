import { formatDate, formatWorkoutDate } from '../helpers';

describe('helpers', () => {
	describe('formatDate', () => {
		const dateUnix = 1516251104997;
		const formattedDate = 'Thursday, January 17, 2018';
		it('formats a unix timestamp', () => {
			const actual = formatDate(dateUnix);
			expect(actual).toBe(formattedDate);
		});

		it('by default returns current date', () => {
			const actual = formatDate();
			const expected = formatDate(Date.now());
			expect(actual).toBe(expected);
		});
	});

	describe('formatWorkoutDate', () => {
		const dateUnix = 1516251104997;
		const todaysDate = new Date(2018, 0, 27);
		const recentWorkoutDate = new Date(2018, 0, 24);
		const longAgoWorkoutDate = new Date(2018, 0, 12);

		describe('if `created` time was fewer than 7 days ago', () => {
			it('outputs the specific day of the week', () => {
				const actual = formatWorkoutDate(recentWorkoutDate);
				expect(actual).toBe('Wednesday');
			});
		});

		describe('if `created` time was greater than 7 days ago', () => {
			it('outputs the full date', () => {
				const actual = formatWorkoutDate(longAgoWorkoutDate);
				expect(actual).toBe('1/12/18');
			});
		});

		describe('workout occurred today', () => {
			it('outputs `Today`', () => {
				const actual = formatWorkoutDate(todaysDate);
				expect(actual).toBe('Today');
			});
		});
	});
});
