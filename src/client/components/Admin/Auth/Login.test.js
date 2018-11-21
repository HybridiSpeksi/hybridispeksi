import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  const loginWrapper = mount(<Login />);
  it('should render withouth crashing', () => {
    expect(loginWrapper.exists(<form name="login" />)).toBe(true);
  });

  describe('State change', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      loginWrapper
        .find('#emailInput')
        .simulate('change', { target: { name: 'email', value: 'asdf@asdf.fi' } });

      loginWrapper
        .find('#passwordInput')
        .simulate('change', { target: { name: 'password', value: 'password' } });

      expect(loginWrapper.state('email')).toEqual('asdf@asdf.fi');
      expect(loginWrapper.state('password')).toEqual('password');
    });

    it('should change form when selecting Hae tunnusta', () => {
      loginWrapper.find('#haeTunnustaButton').simulate('click');

      expect(loginWrapper.exists(<form name="signup" />)).toBe(true);
    });
  });
});
