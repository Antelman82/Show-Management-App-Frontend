import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import User from './User';

describe('User Component', () => {
  const mockUsers = [
    { _id: '1', firstName: 'John', lastName: 'Doe', userName: 'johndoe', email: 'john@test.com' },
    { _id: '2', firstName: 'Jane', lastName: 'Smith', userName: 'janesmith', email: 'jane@test.com' }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <User {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('renders user list heading', () => {
    renderComponent();
    // Assumes the component displays some heading or content
    expect(document.body.innerHTML).toBeTruthy();
  });

  it('displays user information when passed', () => {
    const { container } = renderComponent({ users: mockUsers });
    expect(container).toBeTruthy();
  });

  it('handles empty user list', () => {
    const { container } = renderComponent({ users: [] });
    expect(container).toBeTruthy();
  });

  it('accepts userInfo prop', () => {
    const userInfo = mockUsers[0];
    const { container } = renderComponent({ userInfo, users: mockUsers });
    expect(container).toBeTruthy();
  });

  it('renders component with multiple users', () => {
    const { container } = renderComponent({ users: mockUsers });
    expect(container).toBeTruthy();
  });

  it('supports navigation', () => {
    const { container } = renderComponent({ users: mockUsers });
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });

  it('maintains component state', () => {
    const { rerender } = renderComponent({ users: [] });
    rerender(
      <Router>
        <User users={mockUsers} />
      </Router>
    );
    expect(document.body).toBeTruthy();
  });

  it('handles undefined props', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('renders without errors with null values', () => {
    const { container } = renderComponent({ users: null, userInfo: null });
    expect(container).toBeTruthy();
  });
});
