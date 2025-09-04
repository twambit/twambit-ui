import '@testing-library/jest-dom';

// src/setupTests.js or src/jest.setup.js
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
// This file is automatically picked up by Create React App
// For other projects, you need to configure Jest manually.
