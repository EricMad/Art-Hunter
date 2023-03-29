import axios from "axios";

// import { useRef, useState, useContext, useSyncExternalStore } from "react";
import { useRef, useState, useContext } from "react";

import FrameShoot from "./FrameShoot";
import SubmitShoot from "./SubmitShoot";
import ValidatorShoot from "./ValidatorShoot";

// import { subscribe, snapshot, calculatedFrame } from "../../services/frameSize";
import { authContext } from "../../contexts/AuthContextProvider";

function CameraShoot() {
  const { userToken } = useContext(authContext);

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoValidationStatus, setPhotoValidationStatus] = useState();

  const config = {
    headers: {
      accessToken: userToken(),
    },
  };

  // const heightScreen = useSyncExternalStore(subscribe, snapshot);
  // const { heightFrame, widthFrame } = calculatedFrame(heightScreen);

  const takePhoto = () => {
    const width = 693;
    const height = 924;

    const video = videoRef.current;
    const photo = photoRef.current;

    // photo.width = widthFrame;
    // photo.height = heightFrame;

    const ctx = photo.getContext("2d");

    // ctx.drawImage(video, 0, 0, widthFrame, heightFrame);
    ctx.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
    const imageDataUrl = photo.toDataURL("image/jpeg").slice(23);

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/photo/submit`,
        {
          photoBase64: imageDataUrl,
        },
        config
      )
      .then((res) => {
        setPhotoValidationStatus(res.data);
      })
      .catch(() => {
        setPhotoValidationStatus(false);
      });
  };

  const handleButtonShoot = () => {
    if (hasPhoto) {
      setHasPhoto(false);
    } else {
      setPhotoValidationStatus();
      takePhoto();
    }
  };

  return (
    <>
      <FrameShoot videoRef={videoRef} photoRef={photoRef} hasPhoto={hasPhoto} />
      <ValidatorShoot
        photoRef={photoRef}
        hasPhoto={hasPhoto}
        photoValidationStatus={photoValidationStatus}
      />
      <SubmitShoot
        hasPhoto={hasPhoto}
        takePhoto={takePhoto}
        handleButtonShoot={handleButtonShoot}
      />
    </>
  );
}

export default CameraShoot;
