import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return(
        <MainContainer>
           <h1>Welcome to Organ Donation Website</h1>
        </MainContainer>
    )
}

export default Header

//MAIN CONTAINER
const MainContainer = styled.header`background: url(../../images/abstract4.jpg) no-repeat center/cover;
height: 25rem;

h1 {
    transform: translate(-50%, -50%);
    font-family: 'Roboto', sans-serif;
    color: #ffe;
    position: absolute;
    top: 25%;
    left: 50%;

}
`;