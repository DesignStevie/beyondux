import {React} from "react";
import "./BackButton.css"
import {useNavigate} from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
      };
  return (
    <>
      <button onClick={handleClick} className="backButton">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2066_316"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_2066_316)">
            <path
              d="M7.8248 12.9998L12.7248 17.8998C12.9248 18.0998 13.0206 18.3331 13.0123 18.5998C13.004 18.8665 12.8998 19.0998 12.6998 19.2998C12.4998 19.4831 12.2665 19.579 11.9998 19.5873C11.7331 19.5956 11.4998 19.4998 11.2998 19.2998L4.6998 12.6998C4.5998 12.5998 4.52897 12.4915 4.4873 12.3748C4.44564 12.2581 4.4248 12.1331 4.4248 11.9998C4.4248 11.8665 4.44564 11.7415 4.4873 11.6248C4.52897 11.5081 4.5998 11.3998 4.6998 11.2998L11.2998 4.6998C11.4831 4.51647 11.7123 4.4248 11.9873 4.4248C12.2623 4.4248 12.4998 4.51647 12.6998 4.6998C12.8998 4.8998 12.9998 5.1373 12.9998 5.4123C12.9998 5.6873 12.8998 5.9248 12.6998 6.1248L7.8248 10.9998H18.9998C19.2831 10.9998 19.5206 11.0956 19.7123 11.2873C19.904 11.479 19.9998 11.7165 19.9998 11.9998C19.9998 12.2831 19.904 12.5206 19.7123 12.7123C19.5206 12.904 19.2831 12.9998 18.9998 12.9998H7.8248Z"
              fill="white"
            />
          </g>
        </svg>
        Home
      </button>
    </>
  );
}

export default BackButton;
