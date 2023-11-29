import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/onboarding/header.png";
import ResearchImage from "../Images/onboarding/research.png";
import IdeateImage from "../Images/onboarding/ideate.png";
import UnderstandImage from "../Images/onboarding/understand.png";
//import LofiDesign from "../Images/onboarding/lofidesign.png";
import finalImage from "../Images/onboarding/final.png";
// import Walkthrough from "../Images/onboarding/walkthrough.mp4";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";

function Onboarding() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">Onboarding</div>
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
            One of my squad's main focus was to shift a pre-existing on-premise
            software to an all-cloud solution while overhauling and improving
            all usability with new and existing customers.
            <br />
            <br />
            A large feature that we needed to overcome was an onboarding process
            of new Cardholder/Users to the site, this would be a new feature
            compared to the on-premise software but still utilising it’s
            existing features.
            <br />
            <br />I took to the task working with my squad in an agile
            environment to iterate on the feature to create a feasible
            onboarding solution.
          </div>
          <h3 className="subHeader">Discovery</h3>
          <div className="text">
            We first began reaching out to our external stakeholders and looked
            at the existing on-premise solution for onboarding cardholders, we
            identified our target personas and created a journey map that
            reflects those business processes, we found that it had no clear
            built-in process for onboarding users as it was built to accommodate
            any type of business workflow, so every business would have its own
            set of workflows and could differ vastly from one another so we took
            the key similarities instead.
            <br />
            <br />
            We also discovered this was a usability issue as it would also
            require extensive training and modules for the customers to be able
            to use and understand first.
            <br />
            <br />
            We knew we had to explore and create a solution that could do the
            same thing but still be easy and intuitive to understand and use
            without the training and modules.
          </div>
        </div>
      </div>
      <div className="chapterImage">
        <img src={UnderstandImage} alt="chapter" />
      </div>
      {/* CHAPTER 02 */}
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">02</div>
          <h2 className="header">Research</h2>
          <h3 className="subHeader">Gather Insights</h3>
          <div className="text">
            I then began speaking and interviewing our existing customers that
            use this feature on a day-to-day basis, these customers would fit
            our targeted persona as well so that we knew we are getting
            information from actual users.
            <br />
            <br />
            Because the current solution is quite all over the place we found
            out through our customers that a step-for-step process in onboarding
            a new Cardholder/User where all the necessary steps can be provided
            for them seemed to be a potential solution.
            <br />
            <br />I completed my research to look at competitors and how they
            achieve their solutions, as well as non-competitor research to see
            how other organisations do step-for-step onboarding.
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
            After we put together all the pieces in our ideation phase I then
            set out to create the final prototype which we could go and test
            with our customers/users to validate the solution.
            <br />
            <br />
            I designed a hi-fi prototype in Figma using the design system I
            created for our entire department for all our different platforms
            and projects.
            <br />
            <br />
            After going back to my squad for some refinements, feedback, and
            critiques I then came up with a final testing solution that I could
            go test with our customers.
          </div>
          <h3 className="subHeader">Prototyping</h3>
          <div className="text">
            I experimented with a new way of testing our prototypes by using a
            platform called Useberry. Userberry is an online platform where I
            can upload my Figma prototypes, create questions and give some
            context as to what the user needs to complete.
            <br />
            <br />
            Because we have customers all across the world I thought it would be
            great to create this on Useberry and send out a mass link to all our
            external customers where they can in their own time complete the
            test.
            <br />
            <br />I received way more results than expected which was fantastic
            and viewed all recordings and completion rates, then compiled the
            results to find that the prototype was a great success. We moved
            this straight over to development..
          </div>
        </div>
      </div>
      {/* <div className="chapterImage">
      <img src={LofiDesign} alt="chapter" />
    </div> */}
      <div className="chapterImage imageSpacing">
        <img src={finalImage} alt="chapter" />
      </div>
      <Footer />
    </>
  );
}

export default Onboarding;
