// Import dependencies
import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import styled from 'styled-components';
// 2. TODO - Import drawing utility here
import {drawRect} from "./utilities"; 

function sayHello() {
  alert('You clicked me!');
}

const Button = styled.button`
 box-sizing: border-box;
 flex-shrink: 0;
 width: min-content; /* 438px */
 min-width: 30;
 height: 42px;
 display: grid;
 box-shadow: 0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05);
 background-color: #222222;
 overflow: visible;
 opacity: 0.98;
 position: relative;
 grid-template-columns: repeat(2, minmax(200px, 1fr));
 justify-content: center;
 grid-auto-rows: minmax(0, 1fr);
 grid-template-rows: repeat(2, minmax(0, 1fr));
 padding: 15px 15px 15px 15px;
 gap: 8;
 border-radius: 8px;
 `;

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await tf.loadGraphModel('https://odtapp.s3.amazonaws.com/tfjsexport/model.json')
    
    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
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
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
  
      const boxes = await obj[0].array()
      const classes = await obj[2].array()
      const scores = await obj[5].array()
    
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="main">
      <header className="App-header">
        <div style = {{
         border: "none",
         flexShrink: 0,
         width: "auto", /* 235px */
         height: "10%",
         whiteSpace: "pre",
         position: "relative",
         opacity: 0.38,
         fontFamily: `"Inter", sans-serif`,
         color: "#000000",
         fontSize: 16,
         letterSpacing: 0,
         lineHeight: 1.2,
         }}>
         Computer Science Coursework
        </div>
        <div className="TitleLEDCAM">The LED pin detection camera</div>
        <div className="parent-container">
          <Webcam
           ref={webcamRef}
           muted={true}
           style={{
           flexShrink: 0,
           width: 640,
           height: 480,
           display: "block",
           overflow: "hidden",
           position: "relative",
           aspectRatio: 1.7777777777777777 / 1,
           borderRadius: 20,
           }}
           videoConstraints={{
           deviceID: "1",
           }}
          />
         <div style={{ position: "absolute" }}>
           <canvas
             ref={canvasRef}
             style={{
             position: "absolute",
             marginLeft: "auto",
             marginRight: "auto",
             left: 0,
             right: 0,
             textAlign: "center",
             zIndex: 8,
             width: 640,
             height: 480,
             }}
           />
         </div>
        </div>
        <div style = {{
         border: "none",
         flexShrink: 0,
         width: "auto", /* 235px */
         height: "10%",
         whiteSpace: "pre",
         position: "relative",
         opacity: 0.38,
         fontFamily: `"Inter", sans-serif`,
         color: "#161616",
         fontSize: 16,
         letterSpacing: 0,
         lineHeight: 1.2,}}>The Microscope Feed
        </div>
        <Button onClick={sayHello()}></Button>
     </header>
      <header2 className="faq">
       <div 
         style={{
          border:"none",
          flexShrink: 0,
          width: "auto", /* 46px */
          height: "auto", /* 19px */
          whiteSpace: "pre",
          overflow: "visible",
          position: "relative",
          fontWeight: 700,
          fontStyle: "normal",
          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
          color: "#00070ee7",
          fontSize: 50,
          letterSpacing: -2.1,
          lineHeight: 1.2,
          textAlign: "left",
         }}>
          Guide
       </div> 
      </header2>
    </div>

  );
}

export default App;
