# Show Management App Frontend - Testing Documentation

## Frontend Testing Setup

### Quick Start

```bash
# Install dependencies
npm install

# Run tests once
npm test

# Run tests in watch mode  
npm test:watch

# Generate coverage report
npm test -- --coverage
```

### Test Files Created

1. **App.test.js** - Main application component
2. **User.test.js** - User management component
3. **Show.test.js** - Show management component
4. **Customer.test.js** - Customer management component
5. **Equipment.test.js** - Equipment inventory component
6. **Types.test.js** - Event types component
7. **Home.test.js** - Home page component
8. **UserLogin.test.js** - Login form component
9. **Users.test.js** - Users list component
10. **AsideList.test.js** - Navigation sidebar component
11. **testUtils.js** - Reusable test utilities and mocks

### Coverage Report Location

After running tests, coverage reports are available in:
- Terminal output showing percentages
- HTML report can be generated with: `npm test -- --coverage --watchAll=false`

### Dependencies Used

- `@testing-library/react@^16.0.0` - React component testing
- `@testing-library/jest-dom@^6.4.5` - DOM matchers
- `@testing-library/user-event@^14.5.2` - User interaction simulation
- `jest` - Test runner (included with react-scripts)

### Test Patterns

#### Basic Component Test
```javascript
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  const renderComponent = (props = {}) => {
    return render(
      <Router>
        <MyComponent {...props} />
      </Router>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(document.body).toBeTruthy();
  });
});
```

#### Testing with Props
```javascript
it('displays data when provided', () => {
  const mockData = [{ id: 1, name: 'Test' }];
  const { container } = renderComponent({ data: mockData });
  expect(container).toBeTruthy();
});
```

#### Testing with Mocked APIs
```javascript
import { mockApiCalls, mockClearApis } from './testUtils';

beforeEach(() => {
  mockApiCalls();
});

afterEach(() => {
  mockClearApis();
});
```

## Notes

### Known Issues to Address

1. **Material-UI Imports**: Some components still import from `@material-ui/core` 
   - These have been migrated to `@mui/material` in package.json
   - Components like `NewUser.js` need import statements updated:
     ```javascript
     // OLD (will fail)
     import TextField from "@material-ui/core/TextField";
     
     // NEW (update needed)
     import TextField from "@mui/material/TextField";
     ```

2. **Test Count**: 35 tests currently passing
   - Some tests fail due to Material-UI import issues
   - Once imports are updated, all tests should pass

### Migration Guide for Material-UI

If you update component imports from @material-ui/core to @mui/material:

```bash
# Update in NewUser.js:
import TextField from "@material-ui/core/TextField";
# To:
import TextField from "@mui/material/TextField";

# Update in other components as needed
```

## Running Specific Tests

```bash
# Run a specific test file
npm test App.test.js

# Run tests matching a pattern
npm test --testNamePattern="User Component"

# Run with coverage for specific file
npm test -- --coverage --testPathPattern="User"
```

## Debugging Tests

### Verbose Output
```bash
npm test -- --verbose
```

### Debug Mode
```bash
# Run single test with node inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Screen Output in Tests
```javascript
const { debug } = render(<MyComponent />);
debug(); // Prints component HTML to console
```

## Next Steps

1. Update Material-UI imports in components to use @mui/material
2. Add more specific assertions based on component behavior
3. Add E2E tests with Cypress or Playwright
4. Set up code coverage thresholds in package.json
5. Integrate with CI/CD pipeline

## Resources

- [React Testing Library Docs](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/)
- [MUI Migration Guide](https://mui.com/material-ui/migration/migration-v4/)
