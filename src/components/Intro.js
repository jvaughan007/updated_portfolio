import React from 'react';
import styled from 'styled-components';
import profpic from './images/profpic.jpg';
import bkgrdPic from './images/background.jpg';

const Intro = () => {
    return (
        <StyledIntro>
            <div className="introContainer" id="home">
                <img src={profpic} alt="Josh in a tux" />
                <div className="intro">
                <h2>
                    Greetings!
                </h2>
                <p>
                    I'm Josh, a Full Stack and Automation Engineer
                    from League City, TX!
                </p>
                <br/>
                <p>
                    I am currently seeking my next role in software development!
                </p>
                </div>
                
            </div>
        </StyledIntro>
    )
}

const StyledIntro = styled.section`
    display: flex;
    background-image: url(${bkgrdPic});
    background-size: cover;
    background-position: center;
    height: 50rem;

    .introContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        img {
            
            border: 1px solid #FFFFFF;
        }

        .intro{
            width: 50%;
            background: black;

            h2 { 
                color: #FFFAFA;
                padding-left: 5rem;
                margin: 0;
                margin-bottom: 1rem;
                font-size: xxx-large;
            }

            p {
                padding-left: 5rem;
                font-family: Raleway;
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 0.05em;
                color: #FFFAFA;
                text-align: left;
                margin: 0;
            };
        }
    }
    @media all and (max-width: 767px) {

        .introContainer {
            flex-direction: column;

            img {
                margin-top: 2rem;
                border-radius: 180px;
                border: none;
                padding-right: 0;
            }

            .intro {
                margin-top: 1.5rem;
                text-align: center;

                h2{ 
                    padding-left: 0;
                    margin-bottom: 1rem;
                    font-size: x-large;
                }

                p {
                    padding: 0;
                    text-align: left;
                    font-size: medium;
                    padding-bottom: 0.5rem;
                    margin-bottom: 0;
                }  
            }
        }      
                
    }

        
           


    

    


`;

export default Intro;