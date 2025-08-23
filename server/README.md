# WebRTC Video Chat Server

This README provides instructions for setting up and running the server-side application for the WebRTC video chat project.

## Overview

The server is built using Node.js and Express, and it facilitates signaling between peers using WebSockets. It is responsible for establishing connections between clients and managing the signaling process required for WebRTC.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation

1. Navigate to the server directory:

   ```bash
   cd webrtc-video-chat/server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command:

```bash
npm start
```

The server will start on the default port (usually 3000). You can change the port in the `src/index.js` file if needed.

## WebSocket Signaling

The server uses WebSocket for signaling. Ensure that your client-side application is configured to connect to the correct WebSocket URL provided by the server.

## Usage

Once the server is running, you can connect to it from the client-side application. Follow the instructions in the client-side README for setting up and running the client.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.