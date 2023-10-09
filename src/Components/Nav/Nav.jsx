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
              isPending ? "pending" : isActive ? "active" : "navLink"
            }
          >
            Work
            <div className="activeBar"></div>
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navLink"
            }
          >
            About Me
            <div className="activeBar"></div>
          </NavLink>
        </div>
        <div className="navContact">
          <a href="https://www.linkedin.com/in/steven-odendaal-a09a69187" target="_blank" rel="noreferrer">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93994 2.99905C4.93968 3.52948 4.72871 4.03808 4.35345 4.41297C3.97819 4.78785 3.46937 4.99831 2.93894 4.99805C2.40851 4.99778 1.89991 4.78681 1.52502 4.41155C1.15014 4.03629 0.939676 3.52748 0.939942 2.99705C0.940207 2.46661 1.15117 1.95801 1.52644 1.58313C1.9017 1.20824 2.41051 0.997782 2.94094 0.998047C3.47137 0.998312 3.97998 1.20928 4.35486 1.58454C4.72975 1.9598 4.94021 2.46861 4.93994 2.99905ZM4.99994 6.47905H0.999942V18.999H4.99994V6.47905ZM11.3199 6.47905H7.33994V18.999H11.2799V12.429C11.2799 8.76905 16.0499 8.42905 16.0499 12.429V18.999H19.9999V11.069C19.9999 4.89905 12.9399 5.12905 11.2799 8.15905L11.3199 6.47905Z"
              fill="#333333"
            />
          </svg>
          </a>
          <button className="roundButton primaryButton">Let's Chat</button>
        </div>
      </div>
      <div className="navItemsMobile">
        {!showMenu ? (
          <div
            onClick={() => {
              setMenu(true);
              document.body.style.overflow = "hidden";
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
              document.body.style.overflow = "visible";
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
        {showMenu && (
          <div className="navMenuContainer">
            <div className="navMenuItems">
              <div className="navMenuLinks">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "navMenuLink pending"
                      : isActive
                      ? "navMenuLink active"
                      : "navMenuLink"
                  }
                  end
                >
                  Work
                  <div className="activeBar"></div>
                </NavLink>
                <NavLink
                  to="/aboutme"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "navMenuLink pending"
                      : isActive
                      ? "navMenuLink active"
                      : "navMenuLink"
                  }
                  end
                >
                  About Me
                  <div className="activeBar"></div>
                </NavLink>
              </div>
              <div className="navMenuContact">
                <button className="roundButton primaryButton">
                  Let's Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
