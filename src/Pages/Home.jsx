import React from "react";
import { useRef } from "react";
import Footer from "../Components/Footer/Footer";
import MyImage from "../Images/me.png";
import headerBackground from "../Images/Background.png";
import headerImage from "../Images/headerImage.png";
import aboutBackgroundImage from "../Images/aboutBackground.png";
import Projects from "../Components/WorkItem/Projects";
import "./Home.css";

function Home() {
  const toWork = useRef(null);

  const scrollToWork = () => {
    toWork.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="headerBackgroundGradient">
        <img
          className="headerbackgroundImage"
          src={headerBackground}
          alt="face"
        />
      </div>
      <div className="headerContainer">
        <div className="headerGreetingContainer">
          <div className="logoFaceContainer">
            <svg
              width="72"
              height="167"
              viewBox="0 0 72 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.7266 22.2657C39.4725 22.4019 40.0857 22.7671 40.5661 23.3613C41.0465 23.9555 41.2867 24.6364 41.2867 25.4039C41.2867 26.0971 41.1097 26.7099 40.7557 27.2422C40.4144 27.7622 39.915 28.1707 39.2576 28.4678C38.6001 28.7649 37.8226 28.9134 36.925 28.9134H31.2168V15.9522H36.6784C37.5761 15.9522 38.3473 16.0946 38.9921 16.3793C39.6495 16.6641 40.1425 17.0602 40.4713 17.5677C40.8126 18.0753 40.9833 18.6509 40.9833 19.2947C40.9833 20.0498 40.7747 20.6812 40.3575 21.1887C39.9529 21.6963 39.4093 22.0553 38.7266 22.2657ZM33.8718 21.3001H36.2992C36.9313 21.3001 37.418 21.164 37.7594 20.8916C38.1008 20.6069 38.2714 20.2046 38.2714 19.6846C38.2714 19.1647 38.1008 18.7624 37.7594 18.4776C37.418 18.1929 36.9313 18.0505 36.2992 18.0505H33.8718V21.3001ZM36.5457 26.7966C37.1905 26.7966 37.6899 26.648 38.0439 26.3509C38.4105 26.0538 38.5938 25.6329 38.5938 25.0882C38.5938 24.5311 38.4042 24.0979 38.0249 23.7884C37.6456 23.4665 37.1336 23.3056 36.4888 23.3056H33.8718V26.7966H36.5457Z"
                fill="#F2F2F2"
              />
              <path
                d="M33.3379 49.8507V58.0984C33.3379 59.0021 33.5691 59.6957 34.0315 60.1794C34.494 60.6503 35.1439 60.8858 35.9813 60.8858C36.8311 60.8858 37.4873 60.6503 37.9497 60.1794C38.4121 59.6957 38.6434 59.0021 38.6434 58.0984V49.8507H41.2867V58.0793C41.2867 59.2121 41.043 60.173 40.5556 60.9622C40.0806 61.7386 39.437 62.324 38.6246 62.7186C37.8247 63.1132 36.9311 63.3104 35.9438 63.3104C34.9689 63.3104 34.0815 63.1132 33.2817 62.7186C32.4943 62.324 31.8694 61.7386 31.4069 60.9622C30.9445 60.173 30.7133 59.2121 30.7133 58.0793V49.8507H33.3379Z"
                fill="#F2F2F2"
              />
              <path
                d="M38.7337 80.7582L35.8671 76.2266L33.2663 80.7582H30.2667L34.4433 73.9705L30.2098 67.2985H33.2663L36.1329 71.8108L38.7148 67.2985H41.7143L37.5567 74.0669L41.7902 80.7582H38.7337Z"
                fill="#F2F2F2"
              />
              <path
                d="M38.2657 38.8836C38.2657 39.9849 37.364 40.8776 36.2517 40.8776C35.1395 40.8776 34.2378 39.9849 34.2378 38.8836C34.2378 37.7823 35.1395 36.8896 36.2517 36.8896C37.364 36.8896 38.2657 37.7823 38.2657 38.8836Z"
                fill="#F2F2F2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3.98806C0 1.78552 1.80338 0 4.02797 0H67.972C70.1966 0 72 1.78552 72 3.98806V163.012C72 165.214 70.1966 167 67.972 167H4.02797C1.80339 167 0 165.214 0 163.012V3.98806ZM4.02797 1.99403H67.972C69.0843 1.99403 69.986 2.88679 69.986 3.98806V96.7104H2.01399V3.98806C2.01399 2.88679 2.91568 1.99403 4.02797 1.99403ZM69.986 98.7045V163.012C69.986 164.113 69.0843 165.006 67.972 165.006H4.02797C2.91568 165.006 2.01399 164.113 2.01399 163.012V98.7045H69.986Z"
                fill="#F2F2F2"
              />
              <path
                d="M17.8761 112.742C18.3514 112.83 18.7422 113.065 19.0483 113.448C19.3544 113.831 19.5075 114.27 19.5075 114.764C19.5075 115.211 19.3947 115.606 19.1691 115.949C18.9516 116.284 18.6334 116.547 18.2145 116.738C17.7956 116.93 17.3001 117.026 16.7282 117.026H13.0909V108.675H16.5711C17.1431 108.675 17.6345 108.766 18.0453 108.95C18.4642 109.133 18.7784 109.388 18.9879 109.716C19.2054 110.043 19.3141 110.413 19.3141 110.828C19.3141 111.315 19.1812 111.722 18.9154 112.049C18.6576 112.376 18.3112 112.607 17.8761 112.742ZM14.7827 112.12H16.3294C16.7322 112.12 17.0423 112.033 17.2599 111.857C17.4774 111.674 17.5861 111.414 17.5861 111.079C17.5861 110.744 17.4774 110.485 17.2599 110.302C17.0423 110.118 16.7322 110.027 16.3294 110.027H14.7827V112.12ZM16.4865 115.662C16.8973 115.662 17.2156 115.566 17.4411 115.375C17.6747 115.183 17.7916 114.912 17.7916 114.561C17.7916 114.202 17.6707 113.923 17.429 113.724C17.1874 113.516 16.8611 113.412 16.4502 113.412H14.7827V115.662H16.4865Z"
                fill="#F2F2F2"
              />
              <path
                d="M35.426 110.039V112.132H38.2657V113.46H35.426V115.674H38.6283V117.038H33.7343V108.675H38.6283V110.039H35.426Z"
                fill="#F2F2F2"
              />
              <path
                d="M59.2676 108.675L56.4158 114.118V117.026H54.724V114.118L51.8601 108.675H53.7694L55.582 112.491L57.3825 108.675H59.2676Z"
                fill="#F2F2F2"
              />
              <path
                d="M16.41 136.172C15.6205 136.172 14.8954 135.989 14.2349 135.622C13.5743 135.255 13.0506 134.749 12.6639 134.102C12.2773 133.448 12.0839 132.711 12.0839 131.889C12.0839 131.076 12.2773 130.346 12.6639 129.7C13.0506 129.046 13.5743 128.535 14.2349 128.168C14.8954 127.801 15.6205 127.618 16.41 127.618C17.2075 127.618 17.9325 127.801 18.5851 128.168C19.2457 128.535 19.7653 129.046 20.1439 129.7C20.5306 130.346 20.7239 131.076 20.7239 131.889C20.7239 132.711 20.5306 133.448 20.1439 134.102C19.7653 134.749 19.2457 135.255 18.5851 135.622C17.9245 135.989 17.1994 136.172 16.41 136.172ZM16.41 134.677C16.9175 134.677 17.3646 134.565 17.7513 134.342C18.138 134.11 18.4401 133.783 18.6576 133.361C18.8751 132.938 18.9838 132.447 18.9838 131.889C18.9838 131.331 18.8751 130.844 18.6576 130.43C18.4401 130.007 18.138 129.684 17.7513 129.46C17.3646 129.237 16.9175 129.125 16.41 129.125C15.9024 129.125 15.4513 129.237 15.0566 129.46C14.6699 129.684 14.3678 130.007 14.1503 130.43C13.9328 130.844 13.824 131.331 13.824 131.889C13.824 132.447 13.9328 132.938 14.1503 133.361C14.3678 133.783 14.6699 134.11 15.0566 134.342C15.4513 134.565 15.9024 134.677 16.41 134.677Z"
                fill="#F2F2F2"
              />
              <path
                d="M39.9414 135.981H38.2496L34.419 130.25V135.981H32.7273V127.618H34.419L38.2496 133.361V127.618H39.9414V135.981Z"
                fill="#F2F2F2"
              />
              <path
                d="M54.8086 127.618C55.6948 127.618 56.4722 127.789 57.1408 128.132C57.8175 128.475 58.3371 128.966 58.6996 129.604C59.0702 130.234 59.2555 130.968 59.2555 131.805C59.2555 132.643 59.0702 133.377 58.6996 134.007C58.3371 134.629 57.8175 135.111 57.1408 135.454C56.4722 135.797 55.6948 135.969 54.8086 135.969H51.8601V127.618H54.8086ZM54.7482 134.545C55.6344 134.545 56.3191 134.306 56.8025 133.827C57.2858 133.349 57.5275 132.675 57.5275 131.805C57.5275 130.936 57.2858 130.258 56.8025 129.771C56.3191 129.277 55.6344 129.03 54.7482 129.03H53.5519V134.545H54.7482Z"
                fill="#F2F2F2"
              />
              <path
                d="M34.419 146.561V151.73C34.419 152.296 34.5681 152.731 34.8661 153.034C35.1642 153.329 35.5831 153.476 36.1229 153.476C36.6707 153.476 37.0936 153.329 37.3917 153.034C37.6897 152.731 37.8388 152.296 37.8388 151.73V146.561H39.5426V151.718C39.5426 152.428 39.3855 153.03 39.0713 153.524C38.7652 154.011 38.3503 154.378 37.8267 154.625C37.3111 154.872 36.7351 154.996 36.0987 154.996C35.4703 154.996 34.8984 154.872 34.3828 154.625C33.8752 154.378 33.4724 154.011 33.1744 153.524C32.8763 153.03 32.7273 152.428 32.7273 151.718V146.561H34.419Z"
                fill="#F2F2F2"
              />
              <path
                d="M57.2858 154.912L55.4611 152.101L53.8057 154.912H51.8964L54.5549 150.701L51.8601 146.561H53.8057L55.6303 149.361L57.2737 146.561H59.183L56.5366 150.761L59.2313 154.912H57.2858Z"
                fill="#F2F2F2"
              />
              <path
                d="M18.6294 150.549C18.6294 151.651 17.7277 152.543 16.6154 152.543C15.5031 152.543 14.6014 151.651 14.6014 150.549C14.6014 149.448 15.5031 148.555 16.6154 148.555C17.7277 148.555 18.6294 149.448 18.6294 150.549Z"
                fill="#F2F2F2"
              />
            </svg>
            <img src={headerImage} alt="face" />
          </div>
          <div className="headingText">
            <div className="name">Hi, I'm Steven!</div>
            <div className="role">I'm a UX/UI Designer.</div>
            <div className="contactSocials">
              <a
                href="https://dribbble.com/so128"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.816 32 32 24.8333 32 16C32 7.16667 24.816 0 16 0ZM26.568 7.37467C28.538 9.77378 29.6281 12.7745 29.6573 15.8787C29.2067 15.792 24.6947 14.872 20.148 15.4453C20.0427 15.2187 19.956 14.976 19.852 14.7333C19.5692 14.0659 19.2687 13.4061 18.9507 12.7547C23.9827 10.7067 26.2733 7.75733 26.568 7.37467ZM16 2.36133C19.4707 2.36133 22.6467 3.66133 25.0587 5.796C24.816 6.14267 22.7507 8.90267 17.892 10.724C15.652 6.612 13.172 3.244 12.7893 2.724C13.8418 2.47825 14.9193 2.35609 16 2.36V2.36133ZM10.1867 3.644C10.5507 4.13067 12.98 7.51467 15.2533 11.54C8.86667 13.2413 3.22667 13.2067 2.62 13.2067C3.50533 8.972 6.36933 5.44933 10.1867 3.644ZM2.32533 16.0173V15.6013C2.916 15.6187 9.544 15.7053 16.3653 13.6573C16.764 14.4213 17.128 15.2013 17.4747 15.9827C17.3013 16.0347 17.1107 16.0867 16.9373 16.1387C9.892 18.412 6.14267 24.624 5.83067 25.1453C3.57388 22.6407 2.32507 19.3887 2.32533 16.0173ZM16 29.6747C12.9627 29.6795 10.0115 28.6654 7.61867 26.7947C7.86133 26.2907 10.6373 20.9453 18.3427 18.256C18.3773 18.2387 18.396 18.2387 18.4293 18.2213C20.356 23.2013 21.136 27.384 21.3453 28.5813C19.696 29.2933 17.892 29.6747 16 29.6747ZM23.6187 27.332C23.48 26.4987 22.7507 22.508 20.9627 17.596C25.2493 16.92 28.9973 18.0307 29.4667 18.1867C28.876 21.9867 26.6893 25.2667 23.6187 27.332Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/steven-odendaal-a09a69187/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.333496 2.784C0.333496 2.13404 0.591691 1.5107 1.05128 1.05112C1.51087 0.591526 2.13421 0.333332 2.78416 0.333332H27.2135C27.5356 0.332805 27.8546 0.395815 28.1524 0.518754C28.4501 0.641692 28.7206 0.822145 28.9485 1.04978C29.1764 1.27742 29.3571 1.54776 29.4804 1.84534C29.6037 2.14293 29.667 2.4619 29.6668 2.784V27.2133C29.6672 27.5355 29.604 27.8546 29.4809 28.1523C29.3578 28.45 29.1773 28.7205 28.9495 28.9484C28.7218 29.1763 28.4513 29.357 28.1537 29.4802C27.856 29.6035 27.537 29.6668 27.2148 29.6667H2.78416C2.46222 29.6667 2.14344 29.6032 1.84603 29.48C1.54861 29.3568 1.27839 29.1761 1.05081 28.9484C0.823226 28.7207 0.642739 28.4504 0.51966 28.1529C0.39658 27.8554 0.333321 27.5366 0.333496 27.2147V2.784ZM11.9442 11.5173H15.9162V13.512C16.4895 12.3653 17.9562 11.3333 20.1602 11.3333C24.3855 11.3333 25.3868 13.6173 25.3868 17.808V25.5707H21.1108V18.7627C21.1108 16.376 20.5375 15.0293 19.0815 15.0293C17.0615 15.0293 16.2215 16.4813 16.2215 18.7627V25.5707H11.9442V11.5173ZM4.61083 25.388H8.88816V11.3333H4.61083V25.3867V25.388ZM9.50016 6.74933C9.50823 7.11556 9.44306 7.47971 9.30848 7.82042C9.17391 8.16112 8.97263 8.47151 8.71647 8.73337C8.46031 8.99524 8.15443 9.2033 7.81677 9.34534C7.47911 9.48739 7.11648 9.56055 6.75016 9.56055C6.38384 9.56055 6.02121 9.48739 5.68356 9.34534C5.3459 9.2033 5.04001 8.99524 4.78385 8.73337C4.5277 8.47151 4.32642 8.16112 4.19184 7.82042C4.05727 7.47971 3.9921 7.11556 4.00016 6.74933C4.01599 6.03047 4.31268 5.34639 4.82668 4.84358C5.34068 4.34077 6.03113 4.05922 6.75016 4.05922C7.4692 4.05922 8.15965 4.34077 8.67365 4.84358C9.18765 5.34639 9.48433 6.03047 9.50016 6.74933Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <svg
          className="headerDots"
          width="144"
          height="240"
          viewBox="0 0 144 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 16)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 144)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 80)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 208)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 48)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 176)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 112)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 112 240)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 16)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 144)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 80)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 208)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 48)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 176)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 112)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 240)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 16)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 144)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 80)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 208)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 48)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 176)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 112)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 16 240)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 16)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 144)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 80)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 208)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 48)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 176)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 112)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 144 240)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 16)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 144)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 80)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 208)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 48)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 176)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 112)"
            fill="white"
            fillOpacity="0.25"
          />
          <circle
            cx="8"
            cy="8"
            r="8"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 80 240)"
            fill="white"
            fillOpacity="0.25"
          />
        </svg> */}
        {/* <div className="scrollArrow">
          <div className="dotText">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            Let me show you what I do
          </div>
          <div className="verticalLine"></div>
          <svg
            onClick={scrollToWork}
            className="arrow"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 16C32 7.184 24.816 -3.14023e-07 16 -6.99382e-07C7.184 -1.08474e-06 -7.9086e-07 7.184 -1.17622e-06 16C-1.56158e-06 24.816 7.184 32 16 32C24.816 32 32 24.816 32 16ZM15.152 20.464L9.504 14.816C9.264 14.576 9.152 14.272 9.152 13.968C9.152 13.664 9.264 13.36 9.504 13.12C9.968 12.656 10.736 12.656 11.2 13.12L16 17.92L20.8 13.12C21.264 12.656 22.032 12.656 22.496 13.12C22.96 13.584 22.96 14.352 22.496 14.816L16.848 20.464C16.384 20.944 15.616 20.944 15.152 20.464Z"
              fill="white"
            />
          </svg>
        </div> */}
        {/* <div className="headerContact">
          <a href="mailto: stevenodendaal98@gmail.com">
            <button className="roundbutton primaryButton">Let's chat</button>
          </a>
          <b className="emailAddress"> stevenodendaal98@gmail.com</b>
        </div> */}
      </div>

      {/* HOME --- MY WORK */}

      <div ref={toWork} className="containerPlain">
        <Projects />
      </div>

      {/* HOME --- ABOUT ME */}
      <div className="colouredBackground">
        <div className="containerPlain">
          <div className="sectionHeading">
            <h2>Me and my career</h2>
          </div>
          <div className="aboutMeContainer">
            <div className="paragraphContent">
              <p>
                I am a UX/UI designer with a passion for creating engaging and
                intuitive digital experiences as well as pursuing a side passion
                for front end development.
              </p>
              <p>
                Over the past 2 years, I’ve honed my skills in facilitating
                design sprint workshops, user research, information
                architecture, wireframing, prototyping, and visual design, using
                tools such as Figma, Adobe Creative Suite, and VS Code.
              </p>
              <p>
                When im not designing, you can find me creating digital art,
                designing tattoos, playing online games, getting out and
                exploring new parts of New Zealand, and many more fun
                activities. These experiences have taught me to be curious,
                creative, and adaptive, traits that I bring to my work as a
                UX/UI designer.
              </p>
            </div>
            <img className="profileImage" src={MyImage} alt="face" />
          </div>
          <svg
            className="aboutDots"
            width="240"
            height="144"
            viewBox="0 0 240 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 32)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 96)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 128)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 0)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 144 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 80 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 208 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 48 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 176 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 112 64)"
              fill="white"
              fillOpacity="0.25"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 240 64)"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </div>
        <img
          className="aboutBackgroundImage"
          src={aboutBackgroundImage}
          alt="face"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
