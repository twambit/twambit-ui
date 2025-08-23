import { useEffect, useRef, useState } from 'react';

const useWebRTC = (roomId) => {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStreams, setRemoteStreams] = useState([]);
    const peerConnections = useRef({});
    const localVideoRef = useRef();
    const remoteVideoRefs = useRef({});

    useEffect(() => {
        const initLocalStream = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }
        };

        initLocalStream();

        // WebSocket signaling logic here

        return () => {
            // Cleanup logic
            localStream?.getTracks().forEach(track => track.stop());
            Object.values(peerConnections.current).forEach(pc => pc.close());
        };
    }, [roomId]);

    const addRemoteStream = (stream, peerId) => {
        setRemoteStreams(prevStreams => [...prevStreams, { stream, peerId }]);
        remoteVideoRefs.current[peerId].srcObject = stream;
    };

    const startCall = (peerId) => {
        const pc = new RTCPeerConnection();
        peerConnections.current[peerId] = pc;

        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                // Send candidate to the other peer
            }
        };

        pc.ontrack = (event) => {
            addRemoteStream(event.streams[0], peerId);
        };

        pc.createOffer().then(offer => {
            return pc.setLocalDescription(offer);
        }).then(() => {
            // Send offer to the other peer
        });
    };

    return {
        localStream,
        remoteStreams,
        localVideoRef,
        remoteVideoRefs,
        startCall,
    };
};

export default useWebRTC;