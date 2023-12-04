import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/twoFactorAuth/header.png";
import ResearchImage from "../Images/twoFactorAuth/research.png";
import ideateImage from "../Images/twoFactorAuth/ideate.png";
import LofiDesign from "../Images/twoFactorAuth/prototype.png";
import finalImage from "../Images/twoFactorAuth/header.png";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";
import ViewMore from "../Components/ViewMore/ViewMore";

function TwoFactorAuth() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">Two Factor Auth </div>
          <div className="projectDescription">
            <div className="company">
              <h4>Company</h4>
              <ul>
                <li>Gallagher Security</li>
              </ul>
            </div>
            <div className="team">
              <h4>Team</h4>
              <ul>
                <li>4 Engineers</li>
                <li>2 Testers</li>
                <li>1 Product Owner</li>
              </ul>
            </div>
            <div className="roles">
              <h4>Assumed Roles</h4>
              <ul>
                <li>User Experience (UX) Designer</li>
                <li>User Interface (UI) Designer</li>
                <li>Workshop Facilitator</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chapterImage headerImage">
          <img src={HeaderImage} alt="chapter" />
        </div>
      </div>
      <div className="containerPlain">
        {/* CHAPTER 01 */}
        <div className="gridContainer">
          <div className="chapter">01</div>
          <h2 className="header">Understand</h2>
          <h3 className="subHeader">Context</h3>
          <div className="text">
            Developing Command Centre Web we needed to create a Two Factor
            Authenticator to secure the login process using our existing Mobile
            Credential App - Mobile Connect. Mobile Connects primary use case is
            used as a digital credential to gain access through secure doors,
            rather than using a physical access card.
          </div>
          <h3 className="subHeader">Discovery</h3>
          <div className="text">
            Gathering all the requirements and how the Two Factor Authenticator
            will be utilised to gain access to Command Centre Web, I began
            gathering insights about Mobile Connect and how the 2FA could be
            implemented, by interviewing our stakeholders, and customers.
          </div>
        </div>
        <hr className="seperator" />
        {/* CHAPTER 02 */}
        <div className="gridContainer">
          <div className="chapter">02</div>
          <h2 className="header">Research</h2>
          <h3 className="subHeader">Exisiting Solutions</h3>
          <div className="text">
            I focused on looking at existing solutions that are used as Two
            Factor Authenticators such as:
          </div>
          <div className="list">
            <div className="listItem">
              <div className="bullet">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    width="8"
                    height="8"
                    rx="2"
                    transform="rotate(45 5 0)"
                    fill="#232323"
                  />
                </svg>
              </div>
              <strong>Google Auth</strong>
            </div>
            <div className="listItem">
              <div className="bullet">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    width="8"
                    height="8"
                    rx="2"
                    transform="rotate(45 5 0)"
                    fill="#232323"
                  />
                </svg>
              </div>
              <strong>Microsoft Authenticator</strong>
            </div>
            <div className="listItem">
              <div className="bullet">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    width="8"
                    height="8"
                    rx="2"
                    transform="rotate(45 5 0)"
                    fill="#232323"
                  />
                </svg>
              </div>
              <strong>Adobe Account Access</strong>
            </div>
            <div className="listItem">
              <div className="bullet">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    width="8"
                    height="8"
                    rx="2"
                    transform="rotate(45 5 0)"
                    fill="#232323"
                  />
                </svg>
              </div>
              <strong>Blizzard Authenticator</strong>
            </div>
          </div>
          <div className="text">
            I found common patterns between them all that can be used within our
            final solution.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={ResearchImage} alt="chapter" />
      </div>
      <div className="containerPlain">
        {/* CHAPTER 03 */}
        <div className="gridContainer">
          <div className="chapter">03</div>
          <h2 className="header">Ideate</h2>
          <h3 className="subHeader">Exploration</h3>
          <div className="text">
            I took apart all the existing solutions currently in the market and
            pieced together parts that stood out to be of value in the final
            design and created a few concept designs that I would take to my
            team, and stakeholders to critique and get feedback from.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={ideateImage} alt="chapter" />
      </div>
      {/* CHAPTER 03 */}
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">04</div>
          <h2 className="header">Validate</h2>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            I designed a high fidelity prototype using Adobe XD after getting
            early feedback from my team, and stakeholder.
          </div>
          <h3 className="subHeader">User Testing</h3>
          <div className="text">
            I tested with customers that hadn’t used our App before as well as
            some stakeholders. All tests came back positive with 100% success
            rate. <br/> <br/>I made some minor adjustments and once I was ready, I could
            pass this over to our developers to implement.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={LofiDesign} alt="chapter" />
      </div>
      <div className="chapterImage imageSpacing">
        <img src={finalImage} alt="chapter" />
      </div>
      <div className="viewMore">
        <hr className="line"/>
        <h2>More Projects</h2>
      </div>
      <ViewMore project="/two-factor-auth" />
      <Footer />
    </>
  );
}

export default TwoFactorAuth;
