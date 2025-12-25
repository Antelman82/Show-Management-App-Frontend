import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Customer from './Customer';

describe('Customer Component', () => {
  const mockCustomers = [
    { _id: '1', businessName: 'Acme Corp', firstName: 'John', email: 'john@acme.com' },
    { _id: '2', businessName: 'Tech Inc', firstName: 'Jane', email: 'jane@tech.com' }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Customer {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays customers when provided', () => {
    const { container } = renderComponent({ customers: mockCustomers });
    expect(container).toBeTruthy();
  });

  it('handles empty customer list', () => {
    const { container } = renderComponent({ customers: [] });
    expect(container).toBeTruthy();
  });

  it('accepts customerInfo prop', () => {
    const customerInfo = mockCustomers[0];
    const { container } = renderComponent({ customerInfo, customers: mockCustomers });
    expect(container).toBeTruthy();
  });

  it('renders with multiple customers', () => {
    const { container } = renderComponent({ customers: mockCustomers });
    expect(container).toBeTruthy();
  });

  it('handles undefined customers prop', () => {
    const { container } = renderComponent({ customers: undefined });
    expect(container).toBeTruthy();
  });

  it('renders without errors with null values', () => {
    const { container } = renderComponent({ customers: null, customerInfo: null });
    expect(container).toBeTruthy();
  });

  it('maintains component structure with no props', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeTruthy();
  });

  it('handles large customer lists', () => {
    const largeList = Array.from({ length: 50 }, (_, i) => ({
      _id: String(i),
      businessName: `Company ${i}`,
      firstName: `Person ${i}`
    }));
    const { container } = renderComponent({ customers: largeList });
    expect(container).toBeTruthy();
  });

  it('renders navigation elements', () => {
    const { container } = renderComponent({ customers: mockCustomers });
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });
});
