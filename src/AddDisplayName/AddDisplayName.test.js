import { withDisplayName } from './AddDisplayName';

describe('addLoggedInUser', () => {
  it('add HOC prefix to component displayName', () => {
    const MockComponent = jest.fn(() => null);
    MockComponent.displayName = 'MockComponent';
    const MockComponentWithDisplayName = withDisplayName(MockComponent);
    expect(MockComponentWithDisplayName.displayName).toEqual(
      'HOCMockComponent'
    );
  });

  it('falls back to HOCComponent', () => {
    const MockComponent = jest.fn(() => null);
    const MockComponentWithDisplayName = withDisplayName(MockComponent);
    expect(MockComponentWithDisplayName.displayName).toEqual('HOCComponent');
  });
});
