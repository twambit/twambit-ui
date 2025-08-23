import React, { useEffect, useRef } from 'react';
import useWebRTC from '../hooks/useWebRTC';

const VideoChat = () => {
    const { localStream, remoteStream, startCall, endCall } = useWebRTC();
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        if (localVideoRef.current && localStream) {
            localVideoRef.current.srcObject = localStream;
        }
        if (remoteVideoRef.current && remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
        }
    }, [localStream, remoteStream]);

    return (
        <div>
            <h2>Video Chat</h2>
            <div>
                <video ref={localVideoRef} autoPlay muted />
                <video ref={remoteVideoRef} autoPlay />
            </div>
            <button onClick={startCall}>Start Call</button>
            <button onClick={endCall}>End Call</button>
        </div>
    );
};

export default VideoChat;