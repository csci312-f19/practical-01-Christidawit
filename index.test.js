/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  // Setting up the date to make changes
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  // /The tests
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(Date.now())).toBe(0);
  });

  test('Returns 0 if birthday is today-(bithdate set manually)', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday is slightly a year after', () => {
    expect(birthday.howOld(new Date('31 Dec 2016'))).toBe(1);
  });

  test('Returns 1 if today(Date) is exactly a year after', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 0 if birthday is slightly a year before', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });

  test('Returns -1 if birthday is set a year in the future', () => {
    expect(birthday.howOld(new Date('01 Jan 2019'))).toBe(-1);
  });
});
