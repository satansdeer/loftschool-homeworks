import React from 'react';
import { WithLoggedInUser } from './ProvideData';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('WithLoggedInUser', () => {
  it('provides user', () => {
    const MockComponent = jest.fn(() => null);
    const MockComponentWithUser = () => (
      <WithLoggedInUser>
        {user => <MockComponent user={user} />}
      </WithLoggedInUser>
    );
    render(<MockComponentWithUser />);
    expect(MockComponent).toBeCalledWith(
      { user: { name: 'Ivan', surname: 'Ivanov' } },
      {}
    );
  });
});