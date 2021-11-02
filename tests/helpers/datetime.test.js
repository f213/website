import { fromNow } from '~/helpers/datetime';

describe('fromNow helper', () => {
  it('Actualy works', () => {
    expect(fromNow('1999-10-01T12:30:00.000Z')).toMatch(/лет|год/);
  });
  it('Does not contain NaN', () => {
    expect(fromNow('1999-10-01T12:30:00.000Z')).not.toContain('NaN');
  });
});
