import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
    <StyledContact id="contact">
        <h2>Contact Me:</h2>
        <div className="formAndMap">
            <div className="contactForm">
                <form action="https://formspree.io/f/moqprobv" method="POST">
                    <label>
                        Name <input type="text" name="name"/>
                    </label>

                    <label>
                        Email <input type="text" name="_replyto" />
                    </label>

                    <label>
                        Message <textarea name="message" className="message" rows="13" ></textarea>
                    </label>

                    {/* <!-- your other form fields go here --> */}

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="mapContainer">
                <iframe title="map" width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Houston+(Houston)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ca03eab26d2378a67884483658d3595c8cb8bb37'></script>
            </div>
        </div>
        <div className="linksContainer">
            <h3>Links</h3>
            <div className="links">
                <a href="https://github.com/jvaughan007" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/joshvaughan1989/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:jvaughan1204@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </div>
    </StyledContact>
    );
}

const StyledContact = styled.section`
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    .formAndMap {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        .contactForm {
            display: flex;
            

            form {
                display: flex;
                flex-direction: column;
                background-color: #84aabc;
                padding: 1rem;
                box-shadow: 0 1rem 1rem gray;
                width: 100%;
                

                label {
                    font-weight: bold;
                    display: flex;
                    flex-direction: column;
                }
                
                input {
                    margin-bottom: 1rem;
                }

                button {
                    margin-top: 1rem;
                    border: none;
                    padding: 1rem;
                    color: white;
                    background-color: purple;
                    font-weight: bold;

                    :active {
                        background-color: violet;
                    }
                }
            }
        }
    }

    .linksContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 25px gray;
        margin-top: 2.5rem;
        width: 90%;
        align-self: center;

        .links {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;


            a {
                text-decoration: none;
                color: black;
                font-size: large;
                margin-bottom: 1rem;

                :hover {
                    font-weight: bold;
                }
            }

        }
    }

    @media all and (max-width: 900px) {
        display: flex;
        margin: 0;

        h2{
            margin-left: 2rem;
        }

        .formAndMap {
            flex-direction: column;
            margin: 0;
            justify-content: center;
            align-items: center;

            .contactForm {
                width: 80%;
                margin-bottom: 2rem;
                
                form {
                    width: 100%;
                }
            }

            .mapContainer {
                width: 80%;

                iframe {
                    width: 100%;
                }
            }

        }

        .linksContainer {

            a {
                :active {
                    font-weight: bold;
                }
            }
        }
    }
`;

export default Contact;