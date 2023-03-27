import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Wrapper = styled.div`

`
export const StyledAccordion = styled(Accordion)`
    margin-top: 100px;
`
export const BottomBlock =styled.div`
    height: 60px; 
    width: 100%;

    background-color: #000000;
    position: absolute;

    left: 0;
    bottom: auto; 

    margin-top: 100px;
`
export const StyledHeader = styled.div`
    font-size: 30px;
    font-weight: 600;

    color: #000;
    text-align: center;
    
    margin-top: 150px;
`