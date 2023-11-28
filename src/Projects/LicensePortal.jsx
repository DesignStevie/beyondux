import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/licenseManager/tile.png";
import ResearchImage from "../Images/licenseManager/research.png";
import ideateImage from "../Images/licenseManager/ideate.png";
import lofiDesign from "../Images/licenseManager/lofiDesign.png";
import finalImage from "../Images/licenseManager/final.png";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";

function LicensePortal() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">License Portal</div>
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
        <div className="chapterImage">
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
            Next on our roadmap was to introduce Card PINs, which is form of a
            second factor authentication that is required after swiping an
            access card. These PIN’s are added by an Operator either by random
            generation or it is manually entered by the Cardholder.
          </div>
          <h3 className="subHeader">Discovery</h3>
          <div className="text">
            We gathered valuable insights from our stakeholders and some
            knowledge experts in regards to subscription and license
            managements, asking questions of how we might implement the license
            service, and what challenges we may face on the way as this will be
            the first license management service we will be offering.
          </div>
          <h3 className="subHeader">Design sprint</h3>
          <div className="text">
            I took the team on a Design Sprint journey to:
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
              Uncover knowledge gaps and challenges.
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
              Do high level research on competitors.
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
              Ideated potential solutions.
            </div>
          </div>
        </div>
        <hr className="seperator" />
        {/* CHAPTER 02 */}
        <div className="gridContainer">
          <div className="chapter">02</div>
          <h2 className="header">Research</h2>
          <h3 className="subHeader">Existing Solutions</h3>
          <div className="text">
            We set out to research any other services that were similar to what
            we were wanting to achieve and highlighted any points of interests
            in terms of functionality and also the interface we might want to
            explore. <br />
            <br />
            We noted what feature we might want to adopt and also what features
            we want to stay clear away from.
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
          <h3 className="subHeader">Design Excercises</h3>
          <div className="text">We did a few exercises such as:</div>
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
              Crazy 8’s - 8 minutes to draw 8 different solution sketches.
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
              Final sketches - 15min to draw a final favourite solution.
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
              Heatmap Voting - place all final solutions on a board where each
              person has 10 dots to vote on designs and areas of interest.
            </div>
          </div>
          <div className="text">
            We finalised our decisions based on the votes, but would iterate
            further as we began developing.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={ideateImage} alt="chapter" />
      </div>
      {/* CHAPTER 04 */}
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">04</div>
          <h2 className="header">Validate</h2>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            I designed a fully functioning high fidelity prototype in Figma that
            we could demonstrate to our stakeholder and knowledge experts and
            then finally validate them with customers.
          </div>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            With all tests coming back at 100% completion and satisfaction, we
            were able to pass along the final solution onto our developers to
            begin building.
            <br />
            <br />
            During development we ran into a few “gotcha’s” and had to iterate
            and refactor minor components to suit the needs.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={lofiDesign} alt="chapter" />
      </div>
      <div className="chapterImage imageSpacing">
        <img src={finalImage} alt="chapter" />
      </div>
      <Footer />
    </>
  );
}

export default LicensePortal;
