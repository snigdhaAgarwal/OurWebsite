import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Fluid Rosy Woodpecker</title>
        <meta property="og:title" content="Contact - Fluid Rosy Woodpecker" />
      </Helmet>
      <header data-thq="thq-navbar" className="contact-navbar-interactive">
        <div className="contact-image"></div>
        <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
          <nav className="contact-links">
            <Link to="/" className="contact-navlink">
              About Us
            </Link>
            <span className="contact-text">Products</span>
            <span className="contact-text01">
              Contact
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </nav>
          <div className="contact-buttons">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
          <div className="contact-nav">
            <div className="contact-top">
              <img 
                  alt="contact-logo"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="contact-logo"
              />
              <div data-thq="thq-close-menu" className="contact-close-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="contact-links1">
              <span className="contact-text02">About</span>
              <span className="contact-text03">Features</span>
              <span className="contact-text04">Pricing</span>
              <span className="contact-text05">Team</span>
              <span className="contact-text06">Blog</span>
            </nav>
            <div className="contact-buttons1">
              <button className="contact-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="contact-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="contact-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="contact-gallery-card">
        <img
            alt="contact-2"
          src="/unsplash-image-1500w.jpeg"
          className="contact-image1"
        />
        <div className="contact-container1"></div>
      </div>
      <div className="contact-banner">
        <h1 className="contact-text07">Contact Us</h1>
        <main className="contact-hero">
          <div className="contact-container2">
            <svg viewBox="0 0 1024 1024" className="contact-icon12">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <span className="contact-text08">
              <span className="contact-text09">
                +971 55 9020870, +971 55 9020871
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <svg viewBox="0 0 1024 1024" className="contact-icon14">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z"></path>
            </svg>
            <span className="contact-text13">
              <span className="contact-text14">peeyush@sparkuae.com</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <svg viewBox="0 0 1024 1024" className="contact-icon16">
              <path d="M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-83.285 139.947-220.416 249.643-275.157 290.091-54.784-40.448-191.872-150.144-275.157-290.091-29.653-49.835-51.669-102.229-61.099-155.563-3.328-18.816-5.077-37.717-5.077-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
            </svg>
            <span className="contact-text18">
              <span className="contact-text19">PO BOX , Dubai, UAE</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Contact
