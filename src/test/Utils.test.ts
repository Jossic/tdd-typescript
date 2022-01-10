import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
	// beforeEach(() => {
	// 	console.log('beforeEach');
	// });

	// beforeAll(() => {
	// 	console.log('beforeAll');
	// });

	it('first test', () => {
		const result = Utils.toUpperCase('abc');
		expect(result).toBe('ABC');
	});

	it('parse simple URL', () => {
		const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
		// console.log(`parsedUrl =>`, parsedUrl);
		expect(parsedUrl.href).toBe('http://localhost:8080/login');
		expect(parsedUrl.port).toBe('8080');
		expect(parsedUrl.protocol).toBe('http:');
		expect(parsedUrl.query).toEqual({});
	});

	it('parse Url with query', () => {
		const parsedUrl = Utils.parseUrl(
			'http://localhost:8080/login?user=user&password=pass'
		);
		const expectedQuery = {
			user: 'user',
			password: 'pass',
		};

		expect(parsedUrl.query).toEqual(expectedQuery);
		expect(expectedQuery).toBe(expectedQuery);
	});

	it('test invalid url', () => {
		const expertError = () => {
			Utils.parseUrl('');
		};

		expect(expertError).toThrowError('Empty url !');
	});

	it('test invalid url with arrow function', () => {
		expect(() => {
			Utils.parseUrl('');
		}).toThrowError('Empty url !');
	});

	it('test invalid url with try catch', () => {
		try {
			Utils.parseUrl('');
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toHaveProperty('message', 'Empty url !');
		}
	});
});
