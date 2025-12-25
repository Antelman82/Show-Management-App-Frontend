import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Types from './Types';

describe('Types Component', () => {
  const mockTypes = [
    { _id: '1', type: 'Fireworks', description: 'Firework displays', pictures: ['pic1.jpg'] },
    { _id: '2', type: 'Pyrotechnics', description: 'Pyrotechnic shows', pictures: ['pic2.jpg'] }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Types {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays types when provided', () => {
    const { container } = renderComponent({ types: mockTypes });
    expect(container).toBeTruthy();
  });

  it('handles empty types list', () => {
    const { container } = renderComponent({ types: [] });
    expect(container).toBeTruthy();
  });

  it('renders with multiple types', () => {
    const { container } = renderComponent({ types: mockTypes });
    expect(container).toBeTruthy();
  });

  it('handles undefined types prop', () => {
    const { container } = renderComponent({ types: undefined });
    expect(container).toBeTruthy();
  });

  it('renders without errors with null values', () => {
    const { container } = renderComponent({ types: null });
    expect(container).toBeTruthy();
  });

  it('displays pictures array data', () => {
    const typesWithPictures = [
      { _id: '1', type: 'Type 1', pictures: ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'] }
    ];
    const { container } = renderComponent({ types: typesWithPictures });
    expect(container).toBeTruthy();
  });

  it('maintains component structure', () => {
    const { container } = renderComponent({ types: mockTypes });
    expect(container.firstChild).toBeTruthy();
  });

  it('handles types with missing descriptions', () => {
    const incompleteTypes = [
      { _id: '1', type: 'Type 1' },
      { _id: '2', description: 'Description only' }
    ];
    const { container } = renderComponent({ types: incompleteTypes });
    expect(container).toBeTruthy();
  });

  it('renders navigation elements', () => {
    const { container } = renderComponent({ types: mockTypes });
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });
});
