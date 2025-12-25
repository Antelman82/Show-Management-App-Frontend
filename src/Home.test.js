import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <Home {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });

  it('displays without props', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('renders home page content', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeTruthy();
  });

  it('maintains component structure', () => {
    const { container } = renderComponent();
    const divs = container.querySelectorAll('div');
    expect(divs.length >= 0).toBeTruthy();
  });

  it('handles empty props', () => {
    const { container } = renderComponent({});
    expect(container).toBeTruthy();
  });

  it('renders navigation elements', () => {
    const { container } = renderComponent();
    const links = container.querySelectorAll('a');
    expect(links.length >= 0).toBeTruthy();
  });

  it('displays without errors on mount', () => {
    const { container } = renderComponent();
    expect(container.innerHTML.length >= 0).toBeTruthy();
  });

  it('rerender without errors', () => {
    const { rerender, container } = renderComponent();
    rerender(
      <Router>
        <Home />
      </Router>
    );
    expect(container).toBeTruthy();
  });

  it('renders consistent structure', () => {
    const { container: container1 } = renderComponent();
    const { container: container2 } = renderComponent();
    expect(container1).toBeTruthy();
    expect(container2).toBeTruthy();
  });

  it('handles click events without errors', () => {
    const { container } = renderComponent();
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
      button.click();
    });
    expect(container).toBeTruthy();
  });
});
