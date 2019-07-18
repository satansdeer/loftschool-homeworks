import React from 'react';
import { withGivenProps } from './HOCParams';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('withGivenProps', () => {
  it('provides specified props', () => {
    const MockComponent = jest.fn(() => null);
    const MockComponentWihtHOC = withGivenProps({ data: 'Expected value' })(
      MockComponent
    );
    render(<MockComponentWihtHOC />);
    expect(MockComponent).toBeCalledWith({ data: 'Expected value' }, {});
  });
});
