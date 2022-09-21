import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: var(--darkest-color);
  padding: 2rem 0;

  a {
    margin-bottom: 0.02rem 0;

    :hover {
      color: var(--brightest-color);
    }
  }

  a,
  p {
    color: var(--faded-brightest-color);
    font-family: var(--main-font);
    font-weight: 100;
    font-size: 0.75rem;
  }

  h6 {
    font-family: var(--main-font);
    font-size: 0.85rem;
    color: var(--brightest-color);
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="column">
            <h6>FOR BORROWERS</h6>
            <Link to="/borrowers">Overview</Link>
            <Link to="/borrowers/database">Tech Database</Link>
            <Link to="/borrowers/alerts">Monitoring and Alerts</Link>
            <Link to="/borrowers/Pitching">Pitching</Link>
            <Link to="/borrowers/Collaboration">Collaboration</Link>
            <Link to="/borrowers/reporting">Reporting and Measurement</Link>
          </div>
          <div className="column">
            <h6>FOR RENTERS</h6>
            <Link to="/renters" href="/">
              Overview
            </Link>
            <Link to="/renters/portfolio">Create Portfolio</Link>
            <Link to="/renters/tech-trends">Daily Tech Trends</Link>
            <Link to="/renters/topics">Topics</Link>
            <Link to="/renters/media-outlets">Media Outlets</Link>
            <Link to="/renters/trending">Trending Stories</Link>
          </div>
          <div className="column">
            <h6>RESOURCES</h6>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/webinars">Webinars</Link>
            <Link to="/guides-ebooks">Guides and eBooks</Link>
            <Link to="/research">Research</Link>
            <Link to="/tech-talk">Daily Tech Talk</Link>
            <Link to="/rankings">Rankings</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/trending">Trends</Link>
          </div>
          <div className="column">
            <h6>COMPANY</h6>
            <Link to="/About">About</Link>
            <Link to="/press">Press</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/bookmarklets">Bookmarklets</Link>
            <Link to="/refer">Refer a Friend</Link>
          </div>
          <div className="column">
            <h6>CONTACT US</h6>
            <Link to="/feedback">Feedback/Support</Link>
            <a
              href="mailto:info@usemytech.com"
              target="_blank"
              rel="noreferrer"
            >
              info@usemytech.com
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <Link to="/do-not-sell">Do not sell</Link>
            <a href="tel:+1800-873-6983">(800) USE-MY-TECH</a>
          </div>
        </div>
        <div className="row">
          <div id="privacy-policy-and-terms">
            <p>
              <Link to="/privacy">Privacy Policy</Link> •{" "}
              <Link to="/terms">Terms & Conditions</Link>
            </p>
          </div>
          <div>
            <p>Copyright © 2020 Use My Tech • Made in USA</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
