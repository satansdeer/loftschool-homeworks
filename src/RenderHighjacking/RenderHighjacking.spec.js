import React, {Component} from 'react';
import { withRedBackground } from './RenderHighjacking';
import {
  render,
  cleanup
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

//Уберите .skip чтобы начать выполнять тест

describe.skip('withRedBackground', () => {
  it('overrides user prop', () => {
    class MockClassComponent extends Component {
        render() {
            return <button>With red background</button>
        }
    }
    const MockComponentWihtHOC = withRedBackground(MockClassComponent)
    const {container} = render(<MockComponentWihtHOC />)
    expect(container.firstChild).toHaveStyle('background: red')
  });
});