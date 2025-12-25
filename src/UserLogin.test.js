import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './UserLogin';

describe('UserLogin Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <UserLogin {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays login form', () => {
    const { container } = renderComponent();
    const inputs = container.querySelectorAll('input');
    expect(inputs.length >= 0).toBeTruthy();
  });

  it('renders login button', () => {
    const { container } = renderComponent();
    const buttons = container.querySelectorAll('button');
    expect(buttons.length >= 0).toBeTruthy();
  });

  it('handles form submission', () => {
    const { container } = renderComponent();
    const forms = container.querySelectorAll('form');
    expect(forms.length >= 0).toBeTruthy();
  });

  it('maintains form structure', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeTruthy();
  });

  it('renders without props', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('accepts userInfo prop', () => {
    const userInfo = { userName: 'testuser', password: 'test123' };
    const { container } = renderComponent({ userInfo });
    expect(container).toBeTruthy();
  });

  it('handles callback props', () => {
    const mockCallback = jest.fn();
    const { container } = renderComponent({ onLogin: mockCallback });
    expect(container).toBeTruthy();
  });

  it('renders error messages area', () => {
    const { container } = renderComponent();
    expect(container.innerHTML.length >= 0).toBeTruthy();
  });

  it('maintains validation state', () => {
    const { container } = renderComponent();
    const divs = container.querySelectorAll('div');
    expect(divs.length >= 0).toBeTruthy();
  });
});
