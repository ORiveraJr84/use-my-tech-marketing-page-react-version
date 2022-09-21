import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainBody = () => {
  let navigate = useNavigate();
  return (
    <div className="main-body">
      <div className="container">
        <h2>
          Smarter rentals with powerful, <br />
          easy-to-use software
        </h2>
        <div className="row">
          <section className="text-section">
            <h3>Find the right borrower or lender</h3>
            <p>
              Say hello to your one-stop, relationship-building platform and
              goodbye to outdated databases! Use My Tech's intuitive search
              engine lets you lend or borrow to other users in a much more
              targeted way than legacy{" "}
              <Link to="/borrowers/database">tech databases.</Link> Building and
              sharing tech lists has never been easier, and since they're
              automatically kept up-to-date you can finally stop spending time
              maintaining old media contact lists.
            </p>
          </section>
          <section className="image">
            <img src="/img/Letter.png" id="letter" alt="" />
          </section>
        </div>
        <div className="row">
          <section className="image" id="magnifying-glass">
            <img src="/img/Magnifying Glass.png" alt="" />
          </section>
          <section className="text-section">
            <h3>Monitor the news</h3>
            <p>
              Never miss a beat: Get alerts in your inbox whenever borrowers or
              lenders and tweeting about tech on your watchlist or any relevant
              keywords. You&rsquo;ll instantly know who to connect with, what
              they&rsquo;re looking for, and when.
            </p>
          </section>
        </div>
        <div className="row">
          <section className="text-section">
            <h3>Report on any campaign</h3>
            <p>
              Show your value: Use My Tech turns data from your watchlists into
              professional, easy-to-digest reports. Export presentation-ready
              PDF reports or the raw data in Excel, and quickly show off your
              items&rsquo; impact.
            </p>
          </section>
          <section className="image">
            <img src="/img/Chart.png" alt="" />
          </section>
        </div>
        <button id="main-button" onClick={() => navigate("/request-demo")}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MainBody;
