import React, { useState } from 'react';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
`
const StyledScrool = styled.span`
    position: fixed; 
    bottom: 20px;
    align-items: center;
    height: 40px;
    margin-bottom: 50px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: ${fadeIn} 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;

    &:hover{
        opacity: 1;
    }
`


const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };



    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <StyledScrool>
            <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} size="3x" />
        </StyledScrool>
    );
}

export default ScrollArrow;