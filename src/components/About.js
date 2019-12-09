import React from 'react';

import me from '../images/me.jpg';

import aboutStyles from '../styles/About.module.scss';

const About = () => {
    return(
        <div className={aboutStyles.about} id="about">
            <div className={aboutStyles.container}>
                <h1>About Me</h1>
                <div className={aboutStyles.contentCard}>
                    <img alt="Profile" src={me} id={aboutStyles.me} />
                    With a background in music and a degree in recording engineering, 
                    classical training in percussion, and a lifelong passion for coding and 
                    all things computers, I’ve accumulated a wealth of broadly transferable 
                    skills in life. Disparate coordinates, as these seem to be, in fact
                    yield closely knit assets in both life and career. With the experience 
                    accumulated over the last decade as a freelance recording engineer/producer 
                    and musician, I have thrived where being agile, team-oriented, and creative 
                    are essential skills to succeeding. Over the years I’ve transitioned from 
                    the all-night engineer at local studios to a husband and father, and this 
                    metamorphosis has uncovered a yearning for stability and ownership in something new. 
                    
                    <br /><br />

                    A youth spent partly pouring over MDN reference pages learning how to build my 
                    first attempts at a web presence sparked a genuine love for the craft of web 
                    development. Later, building sites for my own creative projects cemented my love 
                    and appreciation for well-executed, functional development and simple yet depthful 
                    design. To date I have graduated from two online coding bootcamps taught through 
                    Udemy - JavaScript and React.JS - as well as a series presented by Mead.io on 
                    GatsbyJS, a React based Progressive Web App generator.

                    <br /> <br />

                    My education and career in music has fostered core attributes of my personality.  
                    These are the inherent ability to connect and thrive in small groups, the confidence 
                    to desire mastery through patient and determined study, and a love for the emotive, 
                    nonverbal communication that comes from creating in an ensemble role. These 
                    precepts once nurtured have given way to an ability to acquire skills whenever 
                    the need arises in a multitude of environments and, I believe, have helped guide 
                    me towards my current goals in the professional world - to succeed at a high level 
                    working with experienced and knowledgeable teammates in divergent roles, and to 
                    become more than the sum of my knowledge (to acquire wisdom through my experiences). 
                    I am excited to work on a variety of projects. Please feel free to reach out and 
                    start a conversation.

                </div>
            </div>
        </div> 
    );
};

export default About;