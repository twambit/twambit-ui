import { useEffect, useRef, useState } from 'react';

const useWebRTC = (roomId: any) => {
    const [localStream, setLocalStream] = useState<any>(null);
    const [remoteStream, setRemoteStreams] = useState<any>(null);
    const peerConnections = useRef<any>({});
    const localVideoRef = useRef<any>(null);
    const remoteVideoRefs = useRef<any>({});

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
            localStream?.getTracks().forEach((track: any) => track.stop());
            Object.values<any>(peerConnections.current).forEach(pc => pc.close());
        };
    }, [roomId]);

    const addRemoteStream = (stream: any, peerId: any) => {
        setRemoteStreams((prevStreams: any) => [...prevStreams, { stream, peerId }]);
        remoteVideoRefs.current[peerId].srcObject = stream;
    };

    const startCall = (peerId: any) => {
        const pc = new RTCPeerConnection();
        peerConnections.current[peerId] = pc;

        localStream.getTracks().forEach((track: any) => pc.addTrack(track, localStream));

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

        const endCall = (peerId: any) => {
        const pc = new RTCPeerConnection();
        peerConnections.current[peerId] = pc;

        localStream.getTracks().forEach((track: any) => pc.addTrack(track, localStream));

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
        remoteStream,
        localVideoRef,
        remoteVideoRefs,
        startCall,
        endCall
    };
};

export default useWebRTC;