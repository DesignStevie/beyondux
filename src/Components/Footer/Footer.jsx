import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <svg
        className="footerLogo"
          width="155"
          height="100"
          viewBox="0 0 155 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M136.532 11.8908L100.914 47.542L94.9744 41.5966L118.755 17.8361L100.935 0L77.1758 23.7815L53.4165 0L35.639 17.8571L59.3773 41.6176L53.4375 47.542L17.8195 11.8908L0 29.7269L65.2962 95.084C71.8447 101.639 82.486 101.639 89.0345 95.084L154.331 29.7269L136.511 11.8908H136.532ZM83.1157 65.3782L77.1758 71.3025L71.257 65.3782L77.1758 59.4328L83.1157 65.3782Z"
            fill="#4F4F4F"
          />
        </svg>
        <div className="footerContactSocials">
          <div className="footerEmail">
            <h4>Contact</h4>
            <p>stevenodendaal98@gmail.com</p>
          </div>
          <div className="footerSocials">
            <h4>Socials</h4>
            <div className="socialIcons">
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
                    fill="#828282"
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
                    fill="#828282"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-madeby">
        <hr className="footerLine" />
        <p>Proudly built in React by Steven Odendaal</p>
      </div>
    </div>
  );
}

export default Footer;