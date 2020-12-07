import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return(
        <FooterContainer>
            <span style={{color: "#e3ddda", top: "1rem", left: "42rem", position: "relative"  }}>Built using MERN stack</span>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background: #8c5329;
    height: 4rem;
    left: 0;
    bottom: 0;
    width: 100%;
`;