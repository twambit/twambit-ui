import '@testing-library/jest-dom';

// src/setupTests.js or src/jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

// @ts-ignore: TextEncoder is a global, but @types/node may not define it correctly
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;
// This file is automatically picked up by Create React App
// For other projects, you need to configure Jest manually.
