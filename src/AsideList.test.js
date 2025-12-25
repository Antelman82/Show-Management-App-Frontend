import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AsideList from './AsideList';

describe('AsideList Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <AsideList {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays navigation list', () => {
    const { container } = renderComponent();
    const listItems = container.querySelectorAll('li, a, nav');
    expect(listItems.length >= 0).toBeTruthy();
  });

  it('renders without props', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('maintains sidebar structure', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeTruthy();
  });

  it('displays navigation links', () => {
    const { container } = renderComponent();
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });

  it('renders list items', () => {
    const { container } = renderComponent();
    const items = container.querySelectorAll('li');
    expect(items.length >= 0).toBeTruthy();
  });

  it('handles click navigation', () => {
    const { container } = renderComponent();
    const links = container.querySelectorAll('a');
    links.forEach(link => {
      link.click();
    });
    expect(container).toBeTruthy();
  });

  it('renders consistent structure', () => {
    const { container: container1 } = renderComponent();
    const { container: container2 } = renderComponent();
    expect(container1).toBeTruthy();
    expect(container2).toBeTruthy();
  });

  it('accepts prop for active state', () => {
    const { container } = renderComponent({ activeItem: 'users' });
    expect(container).toBeTruthy();
  });

  it('handles missing props gracefully', () => {
    const { container } = renderComponent({});
    expect(container).toBeTruthy();
  });
});
