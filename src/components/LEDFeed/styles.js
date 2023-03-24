import styled from "styled-components";
import Webcam from "react-webcam";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const CameraCanvasWrapper = styled.div`
  position: relative;
  background-color: red;

  width: 640px;
  height: 480px;

  border-radius: 20px;
  overflow: hidden;
`;

export const StyledWebcam = styled(Webcam)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

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
`;
