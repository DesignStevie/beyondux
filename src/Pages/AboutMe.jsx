import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import face from "../Images/face.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Nav />
      <div className="aboutBackground">
        <div className="aboutContainer">
          <div className="profileImage">
            <div className="profileImageContainer">
              <img src={face} alt="Steven" />
            </div>
            <div className="profileSocialContainer">
              <a
                href="https://open.spotify.com/playlist/2Uj8ob2HbXMUOqpA5PGpXv?si=9e84df95f01e4256"
                target="_blank"
                rel="noreferrer"
                className="profileSocial"
              >
                <div className="socialIcon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.8 17.8C25.4 14 14.7 13.6 8.6 15.5C7.6 15.8 6.6 15.2 6.3 14.3C6 13.3 6.6 12.3 7.5 12C14.6 9.9 26.3 10.3 33.7 14.7C34.6 15.2 34.9 16.4 34.4 17.3C33.9 18 32.7 18.3 31.8 17.8ZM31.6 23.4C31.1 24.1 30.2 24.4 29.5 23.9C24.1 20.6 15.9 19.6 9.6 21.6C8.8 21.8 7.9 21.4 7.7 20.6C7.5 19.8 7.9 18.9 8.7 18.7C16 16.5 25 17.6 31.2 21.4C31.8 21.7 32.1 22.7 31.6 23.4ZM29.2 28.9C28.8 29.5 28.1 29.7 27.5 29.3C22.8 26.4 16.9 25.8 9.9 27.4C9.2 27.6 8.6 27.1 8.4 26.5C8.2 25.8 8.7 25.2 9.3 25C16.9 23.3 23.5 24 28.7 27.2C29.4 27.5 29.5 28.3 29.2 28.9ZM20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C7.71504 35.9993 9.91982 37.4725 12.3463 38.4776C14.7728 39.4827 17.3736 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0Z" />
                  </svg>
                </div>
                <div className="iconText">
                  <div className="iconTextTitle">On shuffle</div>
                  <div className="iconTextDescription">Synthwave - Lofi</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/steven-odendaal-a09a69187"
                target="_blank"
                rel="noreferrer"
                className="profileSocial"
              >
                <div className="socialIcon">
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.39454 5.22019C8.39399 6.33993 7.95124 7.41359 7.16371 8.20497C6.37617 8.99635 5.30836 9.44063 4.19517 9.44007C3.08199 9.43951 2.01462 8.99416 1.22787 8.20199C0.441121 7.40981 -0.000556067 6.33571 5.25418e-07 5.21597C0.000557118 4.09623 0.443302 3.02257 1.23084 2.23119C2.01837 1.43981 3.08619 0.995534 4.19937 0.996094C5.31256 0.996654 6.37993 1.44201 7.16668 2.23418C7.95342 3.02635 8.3951 4.10045 8.39454 5.22019ZM8.52046 12.5665H0.125919V38.9961H8.52046V12.5665ZM21.7838 12.5665H13.4313V38.9961H21.6999V25.1269C21.6999 17.4006 31.7104 16.6829 31.7104 25.1269V38.9961H40V22.2559C40 9.23108 25.1836 9.71661 21.6999 16.1129L21.7838 12.5665Z" />
                  </svg>
                </div>
                <div className="iconText">
                  <div className="iconTextTitle">My career</div>
                  <div className="iconTextDescription">Work Experience</div>
                </div>
              </a>
              <a
                href="https://dribbble.com/so128"
                target="_blank"
                rel="noreferrer"
                className="profileSocial"
              >
                <div className="socialIcon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.02 40 40 31.04 40 20C40 8.96 31.02 0 20 0ZM33.21 9.22C35.6714 12.2186 37.0334 15.9687 37.07 19.848C36.508 19.74 30.868 18.59 25.184 19.306C25.054 19.024 24.944 18.72 24.816 18.416C24.4622 17.582 24.0861 16.7577 23.688 15.944C29.978 13.384 32.842 9.696 33.21 9.22ZM20 2.95C24.34 2.95 28.308 4.578 31.324 7.246C31.02 7.678 28.438 11.128 22.364 13.406C19.566 8.266 16.464 4.056 15.986 3.406C17.3017 3.09841 18.6488 2.94538 20 2.95ZM12.734 4.556C15.0229 7.72863 17.1373 11.0235 19.068 14.426C11.084 16.552 4.034 16.506 3.276 16.506C3.82566 13.9203 4.96522 11.4964 6.6058 9.42358C8.24639 7.35074 10.3436 5.6849 12.734 4.556ZM2.906 20.02V19.5C3.646 19.52 11.93 19.63 20.456 17.07C20.956 18.024 21.41 19 21.844 19.976C21.626 20.042 21.388 20.106 21.172 20.172C12.364 23.012 7.678 30.778 7.288 31.43C4.46751 28.299 2.90508 24.2341 2.906 20.02ZM20 37.094C16.2029 37.1005 12.5133 35.8329 9.522 33.494C9.826 32.864 13.298 26.182 22.928 22.82C22.972 22.8 22.994 22.8 23.036 22.776C24.6606 26.9668 25.8815 31.3032 26.682 35.726C24.5716 36.6341 22.2974 37.0997 20 37.094ZM29.522 34.164C29.35 33.124 28.438 28.134 26.202 21.996C31.562 21.15 36.248 22.538 36.832 22.734C36.4672 25.0402 35.6296 27.246 34.3716 29.213C33.1136 31.18 31.4625 32.8656 29.522 34.164Z" />
                  </svg>
                </div>
                <div className="iconText">
                  <div className="iconTextTitle">Creative doodles</div>
                  <div className="iconTextDescription">UI Designs</div>
                </div>
              </a>
            </div>
          </div>
          <div className="aboutText">
            <h2>I’m a UX/UI Designer</h2>
            <div className="paragraph">
              With over 2 years a UX/UI Designer I am a collaborative team
              player who values open communication and feedback, and I strive to
              create designs that not only meet user needs but also align with
              business goals. With a keen eye for detail and a passion for
              creating meaningful interactions, I am committed to crafting
              engaging and delightful experiences that enhance user satisfaction
              and drive business success.
              <br />
              <br />
              Understanding the intricate dance between users and technology. I
              thrive on deciphering user behaviour, identifying pain points, and
              concocting solutions that make their digital journeys seamless and
              enjoyable.
            </div>
            <h2>My spare time...</h2>
            <div className="paragraph">
              I’m always creating, designing, and learning new ways to better my
              skills that I have a passion in, this includes:
            </div>
            <ul>
              <li>
                Learning React, and front end development, so I can build my own
                websites, and also jump in with my developers to help with minor
                UI updates.
              </li>
              <li>
                Learning Blender to create 3D models, animations, and sculpting
                characters.
              </li>
              <li>
                learning Unreal Engine, and Unity to create cinematic videos,
                and even create games.
              </li>
              <li>Designing tattoos for friends and myself.</li>
              <li>Designing, and building furniture for my house.</li>
              <li>Acrylic painting on canvases.</li>
              <li>Painting Warhammer figurines.</li>
              <li>Creating digital art on Procreate.</li>
            </ul>
            <div className="paragraph">I have too many hobbies...</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
