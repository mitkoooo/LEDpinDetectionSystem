import styled from "styled-components"; // Importing styled-components library
import Webcam from "react-webcam"; // Importing Webcam from react-webcam library

// A styled div container for the main content section of the application
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

// A styled div container that holds the webcam and the canvas(where the boxes are drawn)
export const CameraCanvasWrapper = styled.div`
  position: relative;
  background-color: #22223b;

  width: 640px;
  height: 480px;

  border-radius: 20px;
  overflow: hidden;

  margin-top: 25px;
  border: 5px black solid;
`;

// A styled version of the Webcam component from the react-webcam library
export const StyledWebcam = styled(Webcam)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// A styled canvas element that is used to draw the output of the tensorflow model
export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// A styled button that is used as a trigger to take activate the webcam
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 480px;

  padding: 8px 16px;
  background-color: black;

  color: white;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  box-shadow: 0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15),
    0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397),
    0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793),
    0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271),
    0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452),
    0px 30px 30px -3.75px rgba(0, 0, 0, 0.05);
  
  transition: all 0.2s ease-in-out;
  margin-top: 10px;
`;

// A styled div container for the main header section of the application
export const MainHeader = styled.div`
 font-color: gray;
`;

// A styled h2 element that serves as the header for the webcam.
export const CameraHeader = styled.h2`
 margin-top: 75px;
`;
// A styled p element that provides the title of the webcam
export const WebcamDescription = styled.p`
  font-size: 16px;
  font-weight: 600;

  color: gray;
  text-align: center;

  margin-top: 10px;
`;






