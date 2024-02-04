import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/smartAccess/tile.png";
//import ResearchImage from "../Images/onboarding/research.png";
import IdeateImage from "../Images/smartAccess/ideate.png";
//import UnderstandImage from "../Images/onboarding/understand.png";
//import finalImage from "../Images/onboarding/final.png";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";
import ViewMore from "../Components/ViewMore/ViewMore";

function SmartAccess() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">SmartAccess</div>
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
                <li>1 Tester</li>
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
            One of our team's primary objectives is to develop a versatile
            workflow engine designed to transform into an intuitive builder for
            end-users. This workflow builder is engineered to facilitate the
            creation of custom forms, adhering to stringent business security
            policies.
            <br />
            <br />
            Upon submission, these forms undergo a review process by an
            appointed Approver, who holds the authority to grant or deny
            permissions for various requests. These requests can range widely,
            encompassing card issuance, access permissions, contractor
            onboarding, and much more, streamlining critical business
            operations.
          </div>
          <h3 className="subHeader">Discovery</h3>
          <div className="text">
            We reached out to our stakeholders to give us more insight on
            customers pain points and the daily challenges they faced.
            <br />
            <br />
          </div>
        </div>
        <hr className="seperator" />
        {/* CHAPTER 02 */}
        <div className="gridContainer">
          <div className="chapter">02</div>
          <h2 className="header">Research</h2>
          <h3 className="subHeader">Gather Insights</h3>
          <div className="text">
            I began reaching out to our external customers to validate our
            predictions and looked at the existing manual workflows for card,
            access and contractor onboarding, we identified our target personas
            and created a journey map that reflects those business processes, we
            found as predicted that most of the work is manual and took up
            valuable time for admins.
            <br />
            <br />
            Additonally viewing and doing extensive researching on exisiting
            workflow builders in the market and picking key aspects that could
            be benificial to the experience of our product, as well as
            understanding common patterns and trends between all of them.
          </div>
        </div>
        <hr className="seperator" />
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
              <div>
                <strong>Crazy 8’s</strong> - 8 minutes to draw 8 different
                solution sketches.
              </div>
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
              <div>
                <strong>Final sketches</strong>- 15min to draw a final favourite
                solution.
              </div>
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
              <div>
                <strong>Heatmap Voting</strong> - place all final solutions on a
                board where each person has 10 dots to vote on designs and areas
                of interest.
              </div>
            </div>
          </div>
          <div className="text">
            After the exercise, the squad voted on their most preferred design
            ideas and we decided collectively to proceed with a step-for-step
            wizard and added in some unique add ons from their designs to
            further enhance and improve the usability for the final solution.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={IdeateImage} alt="chapter" />
      </div>
      {/* CHAPTER 04 */}
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">04</div>
          <h2 className="header">Validate</h2>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            Over a 2 year period and multiple iterations I developed and created
            multiple different prototypes to take to the field to be tested
            whilst coming back to refine and reform again.
          </div>
          <h3 className="subHeader">User Testing</h3>
          <div className="text">
            We conducted multiple usability tests with internal stakeholders as
            well as external customers interested in the product that fit parts
            of the products different personas, we went on site to Universities
            to test with a large group of students who would be a common persona
            who would be a requester in the system.
          </div>
        </div>
      </div>
      <div className="viewMore">
        <hr className="seperator" />
        <h2>More Projects</h2>
      </div>
      <ViewMore project="/smart-access" />
      <Footer />
    </>
  );
}

export default SmartAccess;
