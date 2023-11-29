import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/cardPINs/tile.png";
// import ResearchImage from "../Images/cardPINs/research.png";
import IdeateImage from "../Images/cardPINs/ideate.png";
import UnderstandImage from "../Images/cardPINs/understand.png";
import LofiDesign from "../Images/cardPINs/lofidesign.png";
import Walkthrough from "../Images/cardPINs/walkthrough.mp4";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";

function CardPINs() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">Card PIN's</div>
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
            Doing initial research into Card PIN’s and how it is currently
            implemented in our Command Centre on premise software.
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
              <div>
                <strong>Stakeholder Interview</strong> - Giving us us some
                insight about the customers and how they would use this feature.
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
                <strong>User interview</strong> - Customers that use this
                feature to discover their existing workflows and if their were
                any pain points they could identify.
              </div>
            </div>
          </div>
          <div className="text">
            <strong>User Problems</strong>
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
              <div>
                Operators need to assign, edit, and view PIN’s within Command
                Centre Web.
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
                Operators dont know the differences between User Codes and Card
                PIN’s.
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
                Cardholders forget their Card PIN’s frequently, causing unwanted
                strain on Operators to manually reassign new ones.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={UnderstandImage} alt="chapter" />
      </div>
      <div className="containerPlain">
        {/* CHAPTER 02 */}
        <div className="gridContainer">
          <div className="chapter">02</div>
          <h2 className="header">Ideate</h2>
          <h3 className="subHeader">Exploration</h3>
          <div className="text">
            I began to sketch different ideas for updating an existing physical
            card. The current design did not have much space for displaying a
            lot of information, which was not a problem until now. However, I
            wanted to explore how the side drawer could handle more information
            and accommodate different card types and complex workflows. <br />
            <br />I chose the side drawer as the best option because it could
            adapt to future needs and scenarios.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={IdeateImage} alt="chapter" />
      </div>
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">03</div>
          <h2 className="header">Validate</h2>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            Based on the ideas created, I developed a high fidelity prototype in
            Figma that reflects our chosen direction. This prototype will help
            us validate our assumptions and get feedback from our customers and
            stakeholders.
          </div>
          <h3 className="subHeader">User Testing</h3>
          <div className="text">
            We conducted usability tests with internal users who had no prior
            exposure to Command Centre, as well as external stakeholders and
            some of our customers. The feedback was positive, with all
            participants successfully completing the tasks. <br />
            <br />
            We delivered the final design to our developers for implementation.
          </div>
        </div>
      </div>
      <div className="chapterImage imageDropshadow">
        <img src={LofiDesign} alt="chapter" />
      </div>
      <div className="chapterImage imageWhiteBorder imageDropshadow imageSpacing">
        <video className="walkthrough" src={Walkthrough} autoPlay loop muted />
      </div>
      <Footer />
    </>
  );
}

export default CardPINs;
