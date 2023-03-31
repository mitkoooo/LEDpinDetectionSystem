import styled from "styled-components";  // Importing styled-components library
import Accordion from "react-bootstrap/Accordion"; // Importing Accordion component from react-bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css' // Importing Bootstrap CSS styles

// Defining a styled-component Wrapper that renders a div element
export const Wrapper = styled.div` 
` // Closing backtick for Wrapper styles

// Defining a styled-component StyledAccordion that extends Accordion
export const StyledAccordion = styled(Accordion)` 
    position: relative;
    display: flex;
    flex-direction: column;
    

    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%;

    width: 60%;
` // Closing backtick for StyledAccordion styles

// Defining a styled-component BottomBlock that renders a div element
export const BottomBlock =styled.div` 
    height: 60px; 
    width: 100%; 

    background-color: #000000; 
    position: absolute; 

    left: auto; 
    bottom: auto;  

    margin-top: 100px; 
` // Closing backtick for BottomBlock styles

// Defining a styled-component StyledHeader that renders a div element
export const StyledHeader = styled.div` 
    font-size: 30px; 
    font-weight: 600; 

    color: #000; 
    text-align: center; 
    
    margin-top: 150px; 
` // Closing backtick for StyledHeader styles




