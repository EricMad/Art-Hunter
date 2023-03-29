// import React, { useSyncExternalStore } from "react";
// import { subscribe, snapshot, calculatedFrame } from "../../services/frameSize";
import ScoreShoot from "./ScoreShoot";

function ValidatorShoot({ hasPhoto, photoRef, photoValidationStatus }) {
  // const widthScreen = useSyncExternalStore(subscribe, snapshot);
  // // const { heightFrame, widthFrame } = calculatedFrame(heightScreen);
  // const { heightFrame, widthFrame } = calculatedFrame(widthScreen);

  return (
    <div className="validatorWrapper" hidden={!hasPhoto}>
      <canvas
        // height={heightFrame}
        // width={widthFrame}
        width="693"
        height="924"
        className="picture"
        ref={photoRef}
      />
      <ScoreShoot photoValidationStatus={photoValidationStatus} />
    </div>
  );
}

export default ValidatorShoot;
