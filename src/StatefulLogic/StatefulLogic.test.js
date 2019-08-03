import React from 'react';
import { WithTooltip } from './StatefulLogic';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

/*
  Рекомендую уделить внимание чтению документации об использованных
  здесь методах: https://testing-library.com/docs/dom-testing-library/api-queries
*/

describe('WithTooltip', () => {
  it('shows and hides tooltip on click', () => {
    const MockComponentWithTooltip = () => (
      <WithTooltip>
        {onClick => <button onClick={onClick}>I must have tooltip</button>}
      </WithTooltip>
    );
    const { getByTestId, getByText, queryByTestId } = render(<MockComponentWithTooltip />);
    fireEvent.click(getByText('I must have tooltip'));
    expect(getByTestId('tooltip').textContent).toBe("Hello, i'm Tooltip")
    fireEvent.click(getByText('I must have tooltip'));
    expect(queryByTestId('tooltip')).toBeFalsy()
  });
});
