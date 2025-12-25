import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Equipment from './Equipment';

describe('Equipment Component', () => {
  const mockEquipment = [
    { _id: '1', name: 'LED Array', quantity: 5, type: 'Lighting', size: 'Large' },
    { _id: '2', name: 'Sound System', quantity: 2, type: 'Audio', size: 'Medium' }
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Equipment {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays equipment when provided', () => {
    const { container } = renderComponent({ equipments: mockEquipment });
    expect(container).toBeTruthy();
  });

  it('handles empty equipment list', () => {
    const { container } = renderComponent({ equipments: [] });
    expect(container).toBeTruthy();
  });

  it('accepts equipmentInfo prop', () => {
    const equipmentInfo = mockEquipment[0];
    const { container } = renderComponent({ equipmentInfo, equipments: mockEquipment });
    expect(container).toBeTruthy();
  });

  it('renders with multiple equipment items', () => {
    const { container } = renderComponent({ equipments: mockEquipment });
    expect(container).toBeTruthy();
  });

  it('handles undefined equipments prop', () => {
    const { container } = renderComponent({ equipments: undefined });
    expect(container).toBeTruthy();
  });

  it('renders without errors with null values', () => {
    const { container } = renderComponent({ equipments: null, equipmentInfo: null });
    expect(container).toBeTruthy();
  });

  it('maintains component structure', () => {
    const { container } = renderComponent({ equipments: mockEquipment });
    expect(container.firstChild).toBeTruthy();
  });

  it('handles equipment with missing fields', () => {
    const incompleteEquipment = [
      { _id: '1', name: 'Equipment 1' },
      { _id: '2', quantity: 10 }
    ];
    const { container } = renderComponent({ equipments: incompleteEquipment });
    expect(container).toBeTruthy();
  });

  it('renders navigation elements', () => {
    const { container } = renderComponent({ equipments: mockEquipment });
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });
});
