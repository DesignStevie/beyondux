import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderImage from "../Images/designSystem/tile.png";
import FoundationColour from "../Images/designSystem/colour.png";
import FoundationTypography from "../Images/designSystem/typography.png";
import FoundationSpace from "../Images/designSystem/space.png";
import ComponentButtons from "../Images/designSystem/buttons.png";
import ComponentTextboxes from "../Images/designSystem/textboxes.png";
import DocumentationConcept01 from "../Images/designSystem/documentationConcept01.png";
import DocumentationConcept02 from "../Images/designSystem/documentationConcept02.png";
import "./ProjectLayout.css";
import BackButton from "../Components/BackButton/BackButton";
import ViewMore from "../Components/ViewMore/ViewMore";

function DesignSystem() {
  return (
    <>
      <BackButton />
      <div className="projectHeaderContainer">
        <div className="containerPlain">
          <div className="projectHeader">Design System</div>
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
                <li>1 Engineers</li>
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
            Whilst working within my department and it’s squads we needed to
            keep constancy across all projects and because we did not have a
            Design system put in place I knew we had to start implementing one
            that could be used and maintained for the years to come.
            <br />
            <br />
            Creating a design system is a comprehensive process that involves
            careful planning, collaboration, and iteration.
          </div>
          <h3 className="subHeader">Define</h3>
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
                <strong>Purpose</strong>- To grow our products in its own
                Gallagher ecosystem and expand on it’s own unique secure
                experience for their customers.
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
                <strong>Problem</strong>- Whilst still being early in the cloud
                we needed to create something unique as it would need to
                accommodate very complex workflows that most other design system
                potentially wouldn't be able to accommodate and even grow with
                our products for the future to come.
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
                <strong>Objectives</strong>- Create a simple and maintainable
                design system that can grow along side our cloud products.
              </div>
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
            I did some research and gained some inspiration on other industry
            standard designs systems such as:
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
                <strong>Atlassian</strong>
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
                <strong>Fluid UI</strong>
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
                <strong>Material</strong>
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
                <strong>Uber</strong>
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
                <strong>Washington Post</strong>
              </div>
            </div>
          </div>
        </div>
        <hr className="seperator" />
        {/* CHAPTER 03 */}
        <div className="gridContainer">
          <div className="chapter">03</div>
          <h2 className="header">Design</h2>
          <h3 className="subHeader">Foundations</h3>
          <div className="text">
            Beginning with key foundations that define the design systems visual
            experience.
          </div>
        </div>
      </div>
      <div className="chapterImage imageSpacing">
        <img src={FoundationColour} alt="colour" />
      </div>
      <div className="chapterImage imageSpacing">
        <img src={FoundationTypography} alt="typography" />
      </div>
      <div className="chapterImage imageSpacing">
        <img src={FoundationSpace} alt="space" />
      </div>
      <div className="containerPlain">
        <div className="gridContainer">
          <h3 className="subHeader">Components</h3>
          <div className="text">
            Translating the foundations into core collections of reusable
            components that will be used frequently used across our products.
          </div>
        </div>
      </div>
      <div className="chapterImage imageSpacing">
        <img src={ComponentButtons} alt="buttons" />
      </div>
      <div className="chapterImage imageSpacing">
        <img src={ComponentTextboxes} alt="textboxes" />
      </div>
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">04</div>
          <h2 className="header">Tokens</h2>
          <h3 className="subHeader">Dark Mode</h3>
          <div className="text">
            <strong>Currently in beta</strong> - I began mapping out our colours
            to enable us to incorporate Dark Mode within our products. These
            colour tokens serve as a consistent and easily modifiable palette,
            enabling seamless integration across various elements and interfaces
            within your design ecosystem.
          </div>
        </div>
      </div>
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">05</div>
          <h2 className="header">Accessibility</h2>
          <h3 className="subHeader">WCAG 2.1 Level AA Colour Contrasting</h3>
          <div className="text">
            <strong>Currently in beta</strong> - I began to prioritise
            accessibility by thoughtfully applying colour choices. I adhered to
            accessibility standards, ensuring sufficient colour contrast to
            enhance readability and usability for all users, including those
            with visual impairments.
            <br /> <br />
            Our colour palette is carefully crafted to accommodate different
            levels of contrast, making information easily discernible. By
            utilising colour tokens with clear accessibility guidelines, we
            enhance the inclusivity of our design system, creating a user
            experience that is both aesthetically pleasing and accessible to a
            diverse audience.
          </div>
        </div>
      </div>
      <div className="containerPlain">
        <div className="gridContainer">
          <div className="chapter">06</div>
          <h2 className="header">Documentation</h2>
          <h3 className="subHeader">Early Concepts</h3>
          <div className="text">
            <strong>Currently in its early stages</strong> - We aim to provide
            comprehensive insights into the design principles, components, and
            usage guidelines within our system. As we continue to develop and
            refine our documentation, we invite users and stakeholders to
            explore the initial structure and offer valuable feedback.
            <br /> <br />
            This early-phase approach ensures that our documentation aligns
            seamlessly with user needs, fostering a user-friendly resource that
            supports efficient design implementation and encourages ongoing
            improvement.
          </div>
        </div>
      </div>
      <div className="chapterImage imageSpacing imageDropshadow">
        <img src={DocumentationConcept01} alt="chapter" />
      </div>
      <div className="chapterImage imageSpacing imageDropshadow">
        <img src={DocumentationConcept02} alt="chapter" />
      </div>
      <div className="viewMore">
      <hr className="seperator" />
        <h2>More Projects</h2>
      </div>
      <ViewMore project="/design-system" />
      <Footer />
    </>
  );
}

export default DesignSystem;
