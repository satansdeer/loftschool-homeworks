import { Form } from './UseStateHook';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

afterEach(cleanup);

describe('Form', () => {
  describe('on submit', () => {
    describe('with inputs filled in', () => {
      it('displays success message', () => {
        const { getByTestId } = render(<Form/>)

        fireEvent.change(getByTestId('email-input'), {
            target: {
              value: "test@email.com"
            },
          })

        expect(queryByTestId).toBe(1);
      });
    });
    describe('with empty inputs', () => {
      it('does nothing', () => {

      });
    });
  });
});
