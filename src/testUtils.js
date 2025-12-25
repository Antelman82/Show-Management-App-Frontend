import axios from 'axios';

// Mock axios methods
jest.mock('axios');

export const mockApiCalls = () => {
  axios.get = jest.fn((url) => {
    if (url.includes('users')) {
      return Promise.resolve({
        data: [
          { _id: '1', firstName: 'John', userName: 'john', email: 'john@test.com' }
        ]
      });
    }
    if (url.includes('shows')) {
      return Promise.resolve({
        data: [
          { _id: '1', businessName: 'Test Show', date: '2025-06-01' }
        ]
      });
    }
    if (url.includes('customers')) {
      return Promise.resolve({
        data: [
          { _id: '1', businessName: 'Test Corp', firstName: 'John' }
        ]
      });
    }
    if (url.includes('equipments')) {
      return Promise.resolve({
        data: [
          { _id: '1', name: 'Test Equipment', quantity: 5 }
        ]
      });
    }
    if (url.includes('types')) {
      return Promise.resolve({
        data: [
          { _id: '1', type: 'Fireworks', description: 'Firework shows' }
        ]
      });
    }
    return Promise.resolve({ data: [] });
  });

  axios.post = jest.fn(() => Promise.resolve({ data: { _id: 'new', success: true } }));
  axios.put = jest.fn(() => Promise.resolve({ data: { _id: '1', success: true } }));
  axios.delete = jest.fn(() => Promise.resolve({ data: { _id: '1', success: true } }));
};

export const mockApiError = () => {
  axios.get = jest.fn(() => Promise.reject(new Error('API Error')));
  axios.post = jest.fn(() => Promise.reject(new Error('API Error')));
  axios.put = jest.fn(() => Promise.reject(new Error('API Error')));
  axios.delete = jest.fn(() => Promise.reject(new Error('API Error')));
};

export const mockClearApis = () => {
  jest.clearAllMocks();
};
