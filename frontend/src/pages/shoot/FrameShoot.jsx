// import React, { useEffect, useSyncExternalStore } from "react";
import React, { useEffect } from "react";

// import { subscribe, snapshot, calculatedFrame } from "../../services/frameSize";

function FrameShoot({ videoRef, hasPhoto }) {
  // const heightScreen = useSyncExternalStore(subscribe, snapshot);
  // const { heightFrame, widthFrame } = calculatedFrame(heightScreen);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          // width: widthFrame,
          // height: heightFrame,
          width: 416,
          height: 312,

          facingMode: "environment",
          aspectRatio: 4 / 3,
          autoPlay: true,
          playsInline: true,
          muted: true,
        },
      })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /*   const pauseVideo = () => {
    const video = videoRef.current;
    video.pause();
    video.srcObject = null;
  }; */

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="frameWrapper">
      <video hidden={hasPhoto} playsinline="" className="frame" ref={videoRef}>
        <track kind="captions" />
      </video>
    </div>
  );
}

export default FrameShoot;
