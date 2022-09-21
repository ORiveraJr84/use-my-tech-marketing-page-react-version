import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WarningMessageWrapper = styled.div`
  background-color: var(--main-highlight-color);
  padding-bottom: 1.3rem;
  display: flex;
  flex-direction: column;

  .dismiss {
    display: inline-block;
    align-self: flex-end;
    box-align: right;
    font-family: var(--main-font);
    font-size: 0.65rem;
    color: var(--darkest-color);
    border: 2px solid var(--darkest-color);
    border-radius: 100%;
    padding: 0.05rem 0.25rem;
    margin: 0.25rem 0.25rem 0 0;
    cursor: pointer;

    &:hover {
      background-color: var(--darkest-color);
      color: var(--main-highlight-color);
      border: none;
      padding: 0.15rem 0.34rem;
    }
  }
`;

const InnerWarningMessageWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  p {
    font-size: 0.75rem;
    margin-right: 1vw;
  }

  button {
    font-size: 0.65rem;
    padding: 0.35rem 0.35rem;
  }
`;

const WarningMessage = ({ setDismissed }) => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    if (window.scrollY === 0) {
      window.scrollTo(0, 0);
    }
    if (e.target.id === "learnMore-btn") {
      setDismissed(true);
      navigate("/covid19");
    } else {
      setDismissed(true);
    }
  };

  return (
    <WarningMessageWrapper id="warning-message">
      <div id="dismiss-btn" className="dismiss" onClick={(e) => handleClick(e)}>
        x
      </div>
      <InnerWarningMessageWrapper className="container">
        <p>
          We&rsquo;ve compiled some COVID-19 resources to help you stay
          connected and informed.
        </p>
        <button
          id="learnMore-btn"
          className="reverse-btn"
          onClick={(e) => handleClick(e)}
        >
          Learn More
        </button>
      </InnerWarningMessageWrapper>
    </WarningMessageWrapper>
  );
};

export default WarningMessage;
