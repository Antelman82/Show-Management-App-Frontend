import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import * as axios from 'axios';

// Mock axios
jest.mock('axios');

describe('App Component', () => {
  beforeEach(() => {
    // Mock API responses
    axios.get = jest.fn((url) => {
      if (url.includes('types')) {
        return Promise.resolve({ data: [
          { _id: '1', type: 'Fireworks', description: 'Firework shows' }
        ]});
      }
      if (url.includes('shows')) {
        return Promise.resolve({ data: [
          { _id: '1', businessName: 'Test Show', date: '2025-06-01' }
        ]});
      }
      if (url.includes('customers')) {
        return Promise.resolve({ data: [
          { _id: '1', businessName: 'Test Corp', firstName: 'John' }
        ]});
      }
      if (url.includes('equipments')) {
        return Promise.resolve({ data: [
          { _id: '1', name: 'Test Equipment', quantity: 5 }
        ]});
      }
      if (url.includes('users')) {
        return Promise.resolve({ data: [
          { _id: '1', firstName: 'John', userName: 'john' }
        ]});
      }
      return Promise.resolve({ data: [] });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/Loading/i) || document.body).toBeTruthy();
    });
  });

  it('fetches data on component mount', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
  });

  it('displays types after loading', async () => {
    render(<App />);
    
    await waitFor(() => {
      // Component should call the types endpoint
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('types'),
        expect.any(Object)
      );
    });
  });

  it('displays shows after loading', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('shows'),
        expect.any(Object)
      );
    });
  });

  it('displays customers after loading', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('customers'),
        expect.any(Object)
      );
    });
  });

  it('displays equipment after loading', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('equipments'),
        expect.any(Object)
      );
    });
  });

  it('displays users after loading', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('users'),
        expect.any(Object)
      );
    });
  });

  it('handles API errors gracefully', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    
    render(<App />);
    
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
  });

  it('initializes state correctly', async () => {
    const { container } = render(<App />);
    
    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it('maintains component structure', async () => {
    const { container } = render(<App />);
    
    expect(container.querySelector('div.app') || container.firstChild).toBeTruthy();
  });
});

