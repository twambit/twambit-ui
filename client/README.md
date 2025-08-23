# WebRTC Video Chat Application

This project is a simple peer-to-peer video chat application built using React for the client-side and Node.js for the server-side. It utilizes WebRTC technology to enable real-time video communication between users.

## Client Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Navigate to the client directory:

   ```bash
   cd webrtc-video-chat/client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Client

To start the client application, run:

```bash
npm start
```

This will start the React application and open it in your default web browser.

## Usage

Once the client is running, you can initiate a video chat by following these steps:

1. Open the application in multiple browser tabs or windows.
2. Use the provided interface to connect with another peer.
3. Allow camera and microphone access when prompted.

## Server Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Navigate to the server directory:

   ```bash
   cd webrtc-video-chat/server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

To start the server, run:

```bash
npm start
```

This will start the Node.js server, which handles signaling for WebRTC connections.

## Project Structure

- **client/src/App.jsx**: Main component that integrates the video chat interface.
- **client/src/components/VideoChat.jsx**: Handles the video chat UI and logic.
- **client/src/hooks/useWebRTC.js**: Custom hook for managing WebRTC connections.
- **server/src/index.js**: Entry point for the Node.js server handling signaling.
- **README.md**: Documentation for both client and server setups.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.