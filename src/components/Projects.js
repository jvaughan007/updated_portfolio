import React from 'react';
import styled from 'styled-components';
import gsn from './images/gsn.png';
import kaimahi from'./images/kaimahi.png';
import petful from'./images/petful.png';
import spacedRep from'./images/spacedRep.png';

const Projects = () => {
    return (
    <StyledProjects id="projects">
        <h2>Projects</h2>
        <article className="projectsContainer">

            <div className="project">
                <a href="https://www.thegsn.xyz/" target="_blank" rel="noopener noreferrer">
                    <img src={gsn} alt='gsn'/>
                    </a>
                <div className='descContainer'>
                    <h3>Gaming Social Network</h3>
                    <p className='description'>
                    Social networking website for gamers of all kinds to connect, create groups and share their thoughts about gaming! Built to show how expansive a full-stack application can be!
                    </p>
                    <p>
                    <b>Technologies:</b> PostgreSQL, Express, React, NodeJS
                    </p>
                    <div className='repo'>
                        <a href='https://github.com/jvaughan007/gaming-social-network-client' target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                </div>    
            </div>

            <div className="project">
            <a href="https://kaimahi-client-git-master.jvaughan007.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={kaimahi} alt='kaimahi'className="kaimahiImg" />
                </a>
                <h3>Kaimahi</h3>
                <div className='descContainer'>
                    <p className='description'>
                    Lead tracking and management application for people who like a "no-frills", straightforward, and easy to navigate contacts tracker.
                    </p>
                    <p>
                    <b>Technologies:</b> PostgreSQL, Express, React, NodeJS
                    </p>
                    <div className='repo'>
                        <a href='https://github.com/jvaughan007/kaimahi-client' target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                </div>    
            </div>
        </article>
        <article className="projectsContainer">
            <div className="project">
            <a href="https://petful-client.jvaughan007.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={petful} alt='petful'/>
                </a>
                <h3>Petful</h3>
                <div className='descContainer'>
                    <p className='description'>
                    Pet adoption application that I built to show how linked list queues can be implemented and used for those who also enjoy their furry friends!
                    </p>
                    <p>
                    <b>Technologies:</b> PostgreSQL, Express, React, NodeJS
                    </p>
                    <div className='repo'>
                        <a href='https://github.com/jvaughan007/petful-client' target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                </div>    
            </div>

            <div className="project">
            <a href="https://spaced-repetition-client-bay.vercel.app/register" target="_blank" rel="noopener noreferrer">
                <img src={spacedRep} alt='spacedRep' className="spacedRepImg" />
                </a>
                <h3>Spaced Repetition</h3>
                <div className='descContainer'>
                    <p className='description'>
                    Language learning application built with spaced repetition for those looking to learn a language and see how data structures and algorithms can be implemented!
                    </p>
                    <p>
                        <b>Technologies:</b> PostgreSQL, Express, React, NodeJS
                    </p>
                    <div className='repo'>
                        <a href='https://github.com/jvaughan007/spaced-repetition-client' target="_blank" rel="noopener noreferrer" id="about">Repo</a>
                    </div>
                </div>    
            </div>  
        </article>
    </StyledProjects>
    );
}

const StyledProjects = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: Prompt;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;
    }
    
    .projectsContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .project {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 280px;
            max-width: 500px;
            max-height: 746px;
            background-color: #F6F4F4;
            margin: 2rem 1rem 1rem 1rem;
            filter: drop-shadow(0px 0px 10px #000000);

            h3 {
                text-align: center;
            }


            img {
                width: 100%;
                height: 100%;
            }

            p {
                text-align: center;
                padding: 0 1rem;
            }

            .descContainer {
                width: 100%;

                .repo {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    a {
                        background-color: purple;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        margin-bottom: 1rem;
                        color: white;
                        padding: 1rem;

                        :visited {
                            color: white;
                        }

                        :active {
                            color: blue;
                            background-color: violet;
                        }

                    }
                }
            }

            
        }

       
    }

    @media all and (min-width:1081px) {
            .projectsContainer {
                width: 100%;

                .project {
                    margin: 2rem 2rem 1rem 2rem;
                }
            }
        }

`;

export default Projects;