// This eventually will be used to help mock API calls but is
// currently commented out as to not be in use.
/*
import { server } from './mocks/server.ts';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
*/