import React from 'react';
import Header from './index';
import { mount } from 'enzyme';
import { AuthProvider } from '../../../../containers/Auth/index';
import { WithAuth } from './../../../../containers/WithAuth/index';

describe("Хедер c контекстом { isAuthorized: true, email: 'test@test.ru' }", () => {
  const context = { isAuthorized: true, email: 'test@test.ru' };
  const wrapper = mount(<Header {...context} />);

  it('p.t-header-email содержит: test@test.ru', () => {
    expect(wrapper.find('p.t-header-email').text()).toBe('test@test.ru');
  });

  it('Хедер содержит button.t-logout', () => {
    expect(wrapper.find('button.t-logout').length).toBe(1);
  });
});
