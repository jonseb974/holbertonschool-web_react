import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('Utils tests', () => {
	// test to check getFullYear returns correct year
	test('getFullYear returns correct year', () => {
		expect(getFullYear()).toEqual(2023);
	});
	// test to check that getFooter returns correct string
	// when arg is false
	test('getFooter returns correct string if false', () => {
		expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
	});
	
	// test to check that getFooter returns correct string
	// when arg is true
	test('getFooter returns correct string if true', () => {
		expect(getFooterCopy(true)).toEqual('Holberton School');
	});
	
	// test to check that getLatestNotification returns correct
	// html string
	test('getLatestNotification returns correct html string', () => {
		expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
	});
});