import React from "react"; // Importing React and styled components from "./styles", meaning from the styles file in this folder
import 
 { Wrapper,
   StyledAccordion,
   BottomBlock,
   StyledHeader
 } 
from "./styles";

// Defining a functional component Guide that renders a Wrapper component containing a StyledHeader and a StyledAccordion component.
// A StyledAccordion component is defined with three StyledAccordion.Item components, each having a unique eventKey. 
// A BottomBlock component is rendered below the StyledAccordion component
const Guide = () => {
  return (
   <Wrapper>
    <StyledHeader>Guide</StyledHeader>
    <StyledAccordion>
      <StyledAccordion.Item eventKey="0">
        <StyledAccordion.Header>What is this camera detecting?</StyledAccordion.Header>
        <StyledAccordion.Body>
        The microscope feed identifies whether the LED pin is in the image and makes a decision whether
        the LED pin is defective or not. The software then displays the result in the form of a green
        or a red box. The green box indicates that the LED pin is not defective and the red box indicates
        that the LED pin is defective.
        </StyledAccordion.Body>
      </StyledAccordion.Item>
      <StyledAccordion.Item eventKey="1">
        <StyledAccordion.Header>How does this camera work?</StyledAccordion.Header>
        <StyledAccordion.Body>
          The object-detection boxes are drawn based on my TensorFlow model that I have created using the LED sample pictures. 
          Then, the JavaScript export of the model has been imported into my AWS bucket. The model is then loaded into the React app
          and the model is used to detect the LED pins in the microscope feed.
        </StyledAccordion.Body>
      </StyledAccordion.Item>
      <StyledAccordion.Item eventKey="2">
        <StyledAccordion.Header>How do I use this software?</StyledAccordion.Header>
        <StyledAccordion.Body>
         Please make sure you choose the microscope feed when you are asked for permission to access the camera. That is because 
         the model has been trained on the microscope feed. If you choose the front camera, the model will not be able to detect
          the LED pins accurately and may make false-positive or false-negative decisions. 
        </StyledAccordion.Body>
      </StyledAccordion.Item>
    </StyledAccordion>
    <BottomBlock> 
    </BottomBlock>
   </Wrapper>
   
  
  );
};

export default Guide;



