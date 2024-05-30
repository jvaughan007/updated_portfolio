import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
    <StyledFooter>
        <div className="copyright">
            <p>Copyright: Joshua Vaughan 2021</p>
        </div> 
    </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .copyright {
        width: 100%;

        p {
            text-align: center;
            width: 100%;
        }
    }
`;

export default Footer;