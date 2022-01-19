describe('package', () => {
  test('should be able to be imported', () => {
    expect(async () => await import('@package-name/index')).not.toThrow();
  });
});
