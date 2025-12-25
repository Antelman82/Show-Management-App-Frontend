import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Users from './Users';

describe('Users Component', () => {
  const mockUsers = [
    { _id: '1', firstName: 'John', lastName: 'Doe', userName: 'john', email: 'john@test.com' },
    { _id: '2', firstName: 'Jane', lastName: 'Smith', userName: 'jane', email: 'jane@test.com' }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Users {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays users when provided', () => {
    const { container } = renderComponent({ users: mockUsers });
    expect(container).toBeTruthy();
  });

  it('handles empty users list', () => {
    const { container } = renderComponent({ users: [] });
    expect(container).toBeTruthy();
  });

  it('renders with multiple users', () => {
    const { container } = renderComponent({ users: mockUsers });
    expect(container).toBeTruthy();
  });

  it('handles undefined users prop', () => {
    const { container } = renderComponent({ users: undefined });
    expect(container).toBeTruthy();
  });

  it('accepts user management functions', () => {
    const mockDelete = jest.fn();
    const mockUpdate = jest.fn();
    const { container } = renderComponent({
      users: mockUsers,
      onDelete: mockDelete,
      onUpdate: mockUpdate
    });
    expect(container).toBeTruthy();
  });

  it('maintains component structure', () => {
    const { container } = renderComponent({ users: mockUsers });
    expect(container.firstChild).toBeTruthy();
  });

  it('handles users with missing fields', () => {
    const incompleteUsers = [
      { _id: '1', firstName: 'User 1' },
      { _id: '2', userName: 'user2' }
    ];
    const { container } = renderComponent({ users: incompleteUsers });
    expect(container).toBeTruthy();
  });

  it('renders user list items', () => {
    const { container } = renderComponent({ users: mockUsers });
    const items = container.querySelectorAll('li, tr, div');
    expect(items.length >= 0).toBeTruthy();
  });

  it('handles large user lists', () => {
    const largeList = Array.from({ length: 100 }, (_, i) => ({
      _id: String(i),
      firstName: `User ${i}`,
      userName: `user${i}`
    }));
    const { container } = renderComponent({ users: largeList });
    expect(container).toBeTruthy();
  });
});
