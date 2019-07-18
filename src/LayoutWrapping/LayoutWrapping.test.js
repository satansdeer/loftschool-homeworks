import React from 'react';
import { wrapWithAbsolutePosition } from './LayoutWrapping';
import {
  render,
  cleanup
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('wrapWithPositionAbsolute', () => {
  it('wraps with div with position: absolute', () => {
    const MockComponent = jest.fn(() => <div/>)
    const MockComponentWithBlock = wrapWithAbsolutePosition(MockComponent)
    const {container} = render(<MockComponentWithBlock />)
    expect(container.firstChild).toHaveStyle('position: absolute')
  });
});
