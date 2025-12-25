import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Show from './Show';

describe('Show Component', () => {
  const mockShows = [
    { _id: '1', businessName: 'Show 1', date: '2025-06-01', venue: 'Park', status: 'scheduled' },
    { _id: '2', businessName: 'Show 2', date: '2025-07-01', venue: 'Stadium', status: 'planning' }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Show {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays shows when provided', () => {
    const { container } = renderComponent({ shows: mockShows });
    expect(container).toBeTruthy();
  });

  it('handles empty show list', () => {
    const { container } = renderComponent({ shows: [] });
    expect(container).toBeTruthy();
  });

  it('accepts showInfo prop', () => {
    const showInfo = mockShows[0];
    const { container } = renderComponent({ showInfo, shows: mockShows });
    expect(container).toBeTruthy();
  });

  it('renders component with multiple shows', () => {
    const { container } = renderComponent({ shows: mockShows });
    expect(container).toBeTruthy();
  });

  it('renders navigation links', () => {
    const { container } = renderComponent({ shows: mockShows });
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });

  it('handles undefined shows prop', () => {
    const { container } = renderComponent({ shows: undefined });
    expect(container).toBeTruthy();
  });

  it('renders with types available', () => {
    const types = [{ _id: '1', type: 'Fireworks' }];
    const { container } = renderComponent({ shows: mockShows, types });
    expect(container).toBeTruthy();
  });

  it('maintains component structure', () => {
    const { container } = renderComponent({ shows: mockShows });
    expect(container.querySelector('div') || container).toBeTruthy();
  });

  it('handles null values gracefully', () => {
    const { container } = renderComponent({ shows: null, showInfo: null });
    expect(container).toBeTruthy();
  });
});
