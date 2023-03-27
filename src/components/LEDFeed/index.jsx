import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { drawRect } from "../../utils/canvas";
import {
  ContentWrapper,
  CameraCanvasWrapper,
  StyledWebcam,
  StyledCanvas,
  StyledButton,
  MainHeader,
  CameraHeader,
  WebcamDescription,
} from "./styles";

const LEDFeed = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);

  function handleClick() {
    setIsCameraOn((curState) => !curState);
  }

  useEffect(() => {
    (async () => {
      let machineLearningModel = await tf.loadGraphModel(
        "https://odtapp.s3.amazonaws.com/tfjsexport/model.json"
      );
      setInterval(async () => {
        detectObjectsInView(machineLearningModel);
        // Because we define time periods in milliseconds, we need to multiply the time by 1000 to get the correct time period.
      }, 5000);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detectObjectsInView = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current !== null
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      const boxes = await obj[0].array();
      const classes = await obj[2].array();
      const scores = await obj[5].array();

      // Draw mesh

      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.9,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  return (
    <ContentWrapper>
      <MainHeader>Vadim Mitko — Computer Science Coursework “LED pin detecting camera”</MainHeader>
      <CameraHeader>The LED pin detection camera</CameraHeader>
        <div>
        {isCameraOn ? (
          <CameraCanvasWrapper>
            <StyledWebcam ref={webcamRef} muted={true} audio={false} />
            <StyledCanvas ref={canvasRef} />
          </CameraCanvasWrapper>
        ) : <CameraCanvasWrapper></CameraCanvasWrapper>}
          <WebcamDescription>The microscope feed</WebcamDescription>
        </div>
      <StyledButton onClick={handleClick}>
        {isCameraOn ? "Close Detection" : "Open Detection"}
      </StyledButton>
    </ContentWrapper>
  );
};

export default LEDFeed;
