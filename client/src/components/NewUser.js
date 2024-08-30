import React, { useState, useRef } from 'react';
import Acknowledge from './Acknowledge';

const RecordView = () => {
  const [consentGiven, setConsentGiven] = useState(false); // State to track consent
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [status, setStatus] = useState("Idle");

  const handleConsent = () => {
    setConsentGiven(true);
    startRecording();  // Automatically start recording after consent
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        mediaRecorderRef.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/mp4' });
          setMediaBlobUrl(URL.createObjectURL(blob));
          stream.getTracks().forEach(track => track.stop()); // Stop all tracks to release the camera
        };

        mediaRecorderRef.current.start();
        setRecording(true);
        setStatus("Recording...");
      })
      .catch(error => {
        console.error("Error accessing media devices.", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      setStatus("Stopped");
    }
  };

  return (
    <div>
      {!consentGiven ? (
        <Acknowledge onConsent={handleConsent} />
      ) : (
        <div>
          <p>{status}</p>
          <button className='bg-red-500 text-white' onClick={stopRecording} disabled={!recording}>
            Stop Recording
          </button>
          <div className="mt-4">
            <video ref={videoRef} style={{ display: mediaBlobUrl ? 'none' : 'block' }} />
            {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay loop />}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordView;
