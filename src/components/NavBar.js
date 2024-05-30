import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <StyledNav>
            <div className="navContainer">
                <h1>Josh Vaughan</h1>
                <ul className='nav-links'>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>                    
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
display: flex;
position: fixed;
width: 100%;
height:3rem;
left: 0px;
top: 0px;
z-index: 1;

.navContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        width: 100%;
       
        background: black;
        /* box-shadow: 0px 3px 5px #5A788E; */
        filter: drop-shadow(0px 3px 5px #5A788E);
        
    }

h1 {
    margin-left: 2rem;
    font-family: "Oswald";
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 53px;
    display: flex;
    align-items: center;
    text-align: center;

color: #FEFEFE;
}

ul { 
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
}

li {
    margin-right: 3rem;
}

a {
    font-family: Prompt;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;

    color: rgba(245, 239, 245, 0.91);

    border: 1px solid #000000;

    :hover {
        border-bottom: 1px solid #dd520b;
    }
}

@media all and (max-width: 1023px) {
    display: flex;
    

    

    .navContainer {
        position: fixed;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        margin-top: 0;
        height: fit-content;
        
    }

    h1 {
        margin: 0;
    }

    ul {
        flex-direction: row;
        margin-top: 0;
        justify-content: center;
        padding-left: 0;
    }
    

    li {
        margin-top: 0;
        margin-right: .5rem;
        
    }

    
}

`;

export default NavBar;