import React from "react";
import myImage from "../Assets/IMAGE.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    return (
        <section id="about">
            <div className="about-me-container">
            <h1>About Me</h1>
            <img src={myImage} alt="My Profile" className="profile-image" />
            <p className="student-info">
                A Student at Avantika University.
            </p>
            <p>
                I'm deeply passionate about my field of study and have been working on expanding my knowledge and skills. I'm eager to contribute creative solutions and ideas. Feel free to contact me, and we can discuss opportunities for collaboration.
            </p>
            <div className="contact-infoo">
                <p className="left-info"><strong>Name:</strong> Anand Patel</p>
                <p className="left-info"><strong>Email:</strong> anand.patel@avantika.edu.in</p>
                <p className="right-info"><strong>Phone No.:</strong> 9302658574</p>
                <p className="right-info">
                    <strong>Contact:</strong> 
                    <a href="https://www.linkedin.com/in/anand-patel-65619a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                       aria-label="LinkedIn">
                       <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </p>
            </div>

            <div className="skills-section">
                <h2>My Skills</h2>
                <div className="skill-bars">
                    <div className="skill">
                        <label>React</label>
                        <progress value="50" max="100"></progress>
                    </div>
                    <div className="skill">
                        <label>HTML</label>
                        <progress value="80" max="100"></progress>
                    </div>
                    <div className="skill">
                        <label>CSS</label>
                        <progress value="90" max="100"></progress>
                    </div>
                    <div className="skill">
                        <label>JavaScript</label>
                        <progress value="55" max="100"></progress>
                    </div>
                    <div className="skill">
                        <label>Python</label>
                        <progress value="70" max="100"></progress>
                    </div>
                </div>
            </div>
            <div className="education-section">
                <h2>Education</h2>
                <div className="education-info">
                    <p>
                        <strong>BTech in Computer Science</strong><br />
                        Avantika University (2022 - 2026)<br />
                        7.25/10<br />
                        A Bachelor of Technology (B.Tech) degree program provides in-depth theoretical knowledge and practical skills in engineering disciplines, preparing graduates for careers in various industries, research, and innovation.
                    </p>
                    <p>
                        <strong>Class 12</strong><br />
                        Vivekanand Vidhya vihar Chandravatiganj (2021 - 2022)<br />
                        85/100<br />
                        Class 12 encompasses advanced studies and specialized subjects, marking a pivotal stage in students' academic progression and preparation for higher education or professional endeavors. It focuses on comprehensive learning and exam preparation, shaping students' future academic and career paths.
                    </p>
                    <p>
                        <strong>Class 10</strong><br />
                        Vivekanand Vidhya vihar Chandravatiganj (2019 - 2020)<br />
                        84/100<br />
                        Class 10 forms a foundational stage in students' education, covering fundamental subjects and preparing them for higher academic levels or vocational pathways, laying the groundwork for future academic and career pursuits. It typically involves a blend of theoretical learning, practical applications, and standardized examinations, fostering holistic development and critical thinking skills.
                    </p>
                </div>
            </div>
            <div className="half-line"></div>

        </div>
        </section>
        
    );
}

export default AboutMe;
