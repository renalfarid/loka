import React from "react";
import Lottie from "react-lottie";
import animationData from "../../src/data/LokaAnimation.json";

function LokaHome() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie options={defaultOptions} height={500} width={700} />;
  }
  
  export default LokaHome;