import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
    <StyledAbout>
        <article className="about">
            <h2>About Me</h2>
            <div className="aboutDesc">
                <div className="text">
                <p>
                    When I was 6 years old, I built my first computer and fell in love with technology. I always had a love for gaming and
                    dreamed of one day being an engineer. Once I hit college, I began to realize how so many inefficiencies and obstacles
                    from an operations standpoint could be made non-issues utilizing software. It was
                    then that I decided that I wanted to pursue a career in technology.
                </p>
                <p>
                    In 2018, I started a company called Grand Master Tech Inc. with 4 others with the purpose of developing marketing applications
                    for the appointment based and food service business model industries. We were nearing being ready for launch when the COVID-19
                    pandemic began in the states. We pivoted to creating a web-based menu, but unfortunately had to close down due to our limited resources.
                    We simply couldnt produce the output at speeds necessary.
                </p>
                <p>
                    After the government shut down in early 2020, I was even more determined to pursue development as a career. I stumbled upon the Thinkful (now Chegg Skills)
                    Engineering Immersion program and decided to attempt a coding bootcamp to become a Full Stack Developer. 5 months later, I graduated
                    with an even greater drive to learn, create, and provide solutions for eliminating obstacles to make goals more reachable!
                </p>
                <p>
                    Within 90 days of graduation, I found myself in my first developer position working with technologies I never got a chance to work with in bootcamp!
                    Within a month I had already contributed to the flagship product, and began getting challenged with more difficult tasks. When the business fell in to a need
                    for an additional QA engineer, I was offered an opportunity to learn about the testing side of the SDLC, and moved in to a QA engineer position.
                </p>
                <p>
                    My transition to QA allowed me to see a whole new side of development, and I became so excited to provide value in our efficiency of our product delivery.
                    Before long I became a top performer, by achieving the following:
                </p>
                <ul>
                    <li>
                    Increased test automation coverage by 40% within a 6-month period, significantly reducing manual testing hours and accelerating the software release cycle.
                    </li>
                    <li>
                        Streamlined testing process by introducing new testing tools (MABL) and methodologies, improving testing efficiency by 30%, and reducing software development lifecycle time 15%.
                    </li>
                    <li>
                        Identified and rectified 250+ high-impact bugs in post-launch software, boosting system stability and user satisfaction scores by 20%
                    </li>
                </ul>
                <p>
                    In late June of 2022 I was offered a position as a founding automation engineer and the lead on the QA team - an opportunity that would allow me to implement
                    my own STLC and to build my skills in a fast-paced startup environment. In this role at Instant Teams, I personally achieved the following:
                </p>
                <ul>
                    <li>
                        Developed and integrated a new STLC into the SDLC, resulting in a 20% increase in labor efficiency within the first month.
                    </li>
                    <li>
                        Introduced and implemented automated testing using Jest and GitHub Actions, resulting in 30% reduced labor hours of manual testing per release over the first quarter.
                    </li>
                    <li>
                        Reduced kickbacks of tickets by 27% on average by encouraging collaborative test-driven development between QA and the Development team.
                    </li>
                    <li>
                        Achieved department goal of less than 5 escaped defects per release for 6 straight releases.
                    </li>
                </ul>
                <p>
                    While the product team showed extreme productivity and success, ultimately the lack of funds led to the release of the entire development team. Which brings us to here. I'm hoping to not only apply my accumulated skills to a dedicated team, but to develop even further to become an valued asset to the team with an opportunity to pay it forward to other aspiring engineers!    
                </p>
                </div>
            </div>
        </article>
    </StyledAbout>

    );
}

const StyledAbout = styled.section`
/* margin: 4rem 5rem; */

.about {
    margin: 4rem 1rem;
    box-shadow: 1px 5px 10px #918e8d82; 

    h2 {
        font-size: xx-large;
        margin-left: 2rem;
        padding-top: 1rem;
    }
    .aboutDesc {
        padding: 0 3rem 1rem 3rem;

        .text {
            p {
                font-size: medium;
                
            }
        }
    }
}
`;

export default About;