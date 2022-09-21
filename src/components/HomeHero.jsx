import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { listOfNeeds } from "../utils/listOfNeeds";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled.div`
  background-color: var(--secondary-midtone-color);
  background-image: url("/img/studio.png");
  background-size: 80vw;
  background-repeat: no-repeat;
  background-position: 44vw -30vw;
  padding: 15vh 0;
`;

const InnerHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hero-text {
    max-width: 43%;

    h3 {
      color: var(--brightest-color);
      font-size: 2.75rem;
      padding: 0.4rem 0;
      line-height: 3rem;
      height: 8rem;
    }

    p {
      color: var(--brightest-color);
      margin: 6vh 0px;
      line-height: 3vh;
    }

    .button-group {
      width: 100%;

      .reverse-btn {
        background-color: rgba(0, 0, 0, 0);
        border: 1.5px solid var(--brightest-color);
        padding: 0.34rem 1rem;
        color: var(--brightest-color);
        margin-right: 1vw;

        :hover {
          background-color: var(--secondary-highlight-color);
        }
      }
    }
  }
`;

const HomeHero = ({ dismissed }) => {
  let navigate = useNavigate();
  return (
    <HeroWrapper
      className="hero"
      style={dismissed ? { marginTop: "4rem" } : { marginTop: "7rem" }}
    >
      <InnerHeroWrapper className="container">
        <div className="hero-text">
          <h3>
            Do you need to rent <br />
            <span id="dynamic-text">
              <Typewriter
                options={{
                  strings: listOfNeeds,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p>
            Use My Tech is the new standard in equipment rentals without the
            hassle of a middleman. Easily search for cameras, lenses, fog
            machines, and so much more.
          </p>
          <div className="button-group">
            <button className="reverse-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
            <button onClick={() => navigate("/request-demo")}>
              Request Demo
            </button>
          </div>
        </div>
      </InnerHeroWrapper>
    </HeroWrapper>
  );
};

export default HomeHero;
