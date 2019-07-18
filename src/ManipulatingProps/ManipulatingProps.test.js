import React from 'react';
import { addLoggedInUser, withLoading } from './ManipulatingProps';
import {
  render,
  cleanup
} from '@testing-library/react'

afterEach(cleanup)

describe('addLoggedInUser', () => {
  it('overrides user prop', () => {
    const MockComponent = jest.fn(() => null)
    const MockComponentWithUser = addLoggedInUser(MockComponent)
    const user = {name: "Petr", surname: "Petrov"}
    render(<MockComponentWithUser user={user}/>)
    expect(MockComponent).toBeCalledWith({"user": {"name": "Ivan", "surname": "Ivanov"}}, {})
  });

  it('passes other props through', () => {
    const MockComponent = jest.fn(() => null)
    const MockComponentWithUser = addLoggedInUser(MockComponent)
    render(<MockComponentWithUser testProps="foo"/>)
    expect(MockComponent).toBeCalledWith({"testProps": "foo", "user": {"name": "Ivan", "surname": "Ivanov"}}, {})
  });
});

describe('withLoading', () => {
  it('returns loader if loading prop is true', () => {
    const MockComponent = jest.fn(() => <div>Mock component</div>)
    const MockComponentWithLoading = withLoading(MockComponent)
    const {queryByText} = render(<MockComponentWithLoading loading={true}/>)
    expect(queryByText('Loading...')).toBeTruthy()
    expect(queryByText('Mock component')).toBeFalsy()
  });

  it('returns component if loading prop is false', () => {
    const MockComponent = jest.fn(() => <div>Mock component</div>)
    const MockComponentWithLoading = withLoading(MockComponent)
    const {queryByText} = render(<MockComponentWithLoading loading={false}/>)
    expect(queryByText('Loading...')).toBeFalsy()
    expect(queryByText('Mock component')).toBeTruthy()
  });

  it('passes props through', () => {
    const MockComponent = jest.fn(() => null)
    const MockComponentWithLoading = withLoading(MockComponent)
    render(<MockComponentWithLoading testProp="foo"/>)
    expect(MockComponent).toBeCalledWith({"testProp": "foo"}, {})
  });
});
