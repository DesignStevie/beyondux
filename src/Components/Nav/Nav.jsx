import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [showMenu, setMenu] = useState(false);

  return (
    <div className="navMainContainer">
      <NavLink to="/" className="navLogo">
        Steven Odendaal
      </NavLink>
      <div className="navItemsContainer">
        <div className="navLinks">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Work
            <div className="activeBar"></div>
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Me
            <div className="activeBar"></div>
          </NavLink>
        </div>
        <div className="navContact">
          <button className="roundButton primaryButton">Let's Chat</button>
        </div>
      </div>
      <div className="navItemsMobile">
        {!showMenu ? (
          <div
            onClick={() => {
              setMenu(true);
              document.body.style.overflow = "hidden"
            }}
            className="navMenu"
          >
            <svg
              width="26"
              height="10"
              viewBox="0 0 26 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H25"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 9H25"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => {
              setMenu(false);
              document.body.style.overflow = "visible"
            }}
            className="navMenu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51465 18.4844L18.4852 1.51381"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1.51465 1.51562L18.4852 18.4862"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        )}
        {showMenu && ( <div className="navMenuContainer">
          <div className="navMenuItems">
            <div className="navMenuLinks">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "navMenuLink pending" : isActive ? "navMenuLink active" : "navMenuLink"
                }
                end
              >
                Work
                <div className="activeBar"></div>
              </NavLink>
              <NavLink
                to="/aboutme"
                className={({ isActive, isPending }) =>
                  isPending ? "navMenuLink pending" : isActive ? "navMenuLink active" : "navMenuLink"
                }
                end
              >
                About Me
                <div className="activeBar"></div>
              </NavLink>
            </div>
            <div className="navMenuContact">
              <button className="roundButton primaryButton">Let's Chat</button>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default Nav;
