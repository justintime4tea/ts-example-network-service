import { TYPES } from '@package-name/ioc';
import { Main } from '@package-name/main';

describe('Main', () => {
  it('should load dependencies via the supplied container', async () => {
    const mockDeps = 'mock-deps';
    const mockContainer = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loadAsync: jest.fn() as any,
      get: jest.fn().mockImplementation((type) => {
        switch (type) {
          case TYPES.Logger: {
            return;
          }
        }
      }),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await Main.run(mockContainer as any, mockDeps as any);

    expect(mockContainer.loadAsync).toBeCalledWith(mockDeps);
  });
});
