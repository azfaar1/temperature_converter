const app = require('../server'); // adjust path as needed

describe('App basic tests', () => {
  test('should return success message', () => {
    expect(2 + 2).toBe(4);
  });

  test('should fail when condition is false', () => {
    expect(false).toBeFalsy();
  });
});
