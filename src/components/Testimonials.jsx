import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import zoe from "../img/Zoe.jpg";

const TestimonalsComponent = styled.div`
  background-image: url("./img/icon-pattern.jpg");
  background-size: 25% auto;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6vw 0px;
`;

const ArrowComponent = styled.div`
  svg {
    width: 2.5rem;
    height: auto;
    fill: var(--faded-main-midtone-color);
    cursor: pointer;

    :hover {
      fill: var(--main-midtone-color);
    }
  }
  [id="left-arrow"] {
    transform: rotate(180deg);
  }
`;

const MainBody = styled.div`
  margin: 0px 2rem;
  width: 75vw;
`;

const OuterCardsWrapper = styled.div`
  overflow: hidden;
`;

const InnerCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  /* margin-left: -1293px; */
  /* overflow: hidden; */
  /* border: 8px solid pink; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;

  a {
    color: var(--main-highlight-color);

    :hover {
      color: var(--secondary-highlight-color);
    }
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--brightest-color);
  height: 30vw;
  flex-grow: 0;
  flex-shrink: 0;
`;

const CardImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  object-position: 0 -10vh;
  filter: brightness(140%);
`;

const CardText = styled.div`
  padding: 1vw;
  width: 100%;

  hr {
    width: 5%;
    text-align: left;
    margin: 3vw 0 1vw 0;
  }

  h4,
  h5 {
    font-family: var(--main-font);
  }

  h4 {
    color: var(--main-highlight-color);
    font-size: 1.3rem;
  }

  h5 {
    font-weight: 100;
    font-size: 0.85rem;
    margin-top: 0.2vw;
  }
`;

const TestimonialNavDots = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  div {
    background-color: var(--faded-main-midtone-color);
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.25rem;
    border-radius: 100%;
    cursor: pointer;

    :hover,
    &.active {
      background-color: var(--main-midtone-color);
    }
  }
`;

const Testimonials = () => {
  const testimonials = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const addTestimonial = (testimonial) => {
    if (testimonial && !testimonials.current.includes(testimonial)) {
      testimonials.current.push(testimonial);
    }
  };

  useEffect(() => {
    const testimonialWidth = testimonials.current[0].clientWidth;
    console.log(`${testimonials.current.length} slides`);
    console.log(`each slide is ${testimonialWidth} px wide`);
  }, []);

  return (
    <TestimonalsComponent>
      {/* 3 columns arrow-main testimonials-arrow */}
      <ArrowComponent>
        <svg
          id="left-arrow"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 489.6 489.6"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="ec34a27d-3f9e-44f4-8e6f-4c99482a5a9a"
            d="M244.8,0C109.8,0,0,109.8,0,244.8S109.8,489.6,244.8,489.6,489.6,379.8,489.6,244.8,379.8,0,244.8,0Zm77.1955,263.4442-98.41,98.41a26.3575,26.3575,0,0,1-37.3967-37.1529l79.8957-79.8977L186.31,165.029a26.358,26.358,0,1,1,37.2758-37.2758l98.4127,98.4127a26.3561,26.3561,0,0,1-.0026,37.2783Z"
          />
        </svg>
      </ArrowComponent>
      <MainBody>
        <Header>
          <h3>Here&rsquo;s what our customers say about us</h3>
          <Link to="/case-studies">view all case studies</Link>
        </Header>
        <OuterCardsWrapper>
          <InnerCardsWrapper>
            <TestimonialCard
              className="testimonial-card"
              ref={addTestimonial}
              data-index={1}
            >
              <CardImg src={zoe} />
              <CardText>
                <p>
                  Use My Tech has a user-friendly interface and tech database.
                  Where other tools are clunky, Use My Tech is intuitive and
                  fast. I love that the platform is integrated with Twitter, and
                  is more up-to-date than other databases I've used.
                </p>
                <hr />
                <h4>Zoe Trager</h4>
                <h5>Account Supervisor</h5>
              </CardText>
            </TestimonialCard>
            <TestimonialCard
              className="testimonial-card"
              ref={addTestimonial}
              data-index={2}
            >
              <CardImg src={zoe} />
              <CardText>
                <p>
                  Use My Tech has a user-friendly interface and tech database.
                  Where other tools are clunky, Use My Tech is intuitive and
                  fast. I love that the platform is integrated with Twitter, and
                  is more up-to-date than other databases I've used.
                </p>
                <hr />
                <h4>Elizabeth Johnson</h4>
                <h5>Account Supervisor</h5>
              </CardText>
            </TestimonialCard>
            <TestimonialCard
              className="testimonial-card"
              ref={addTestimonial}
              data-index={3}
            >
              <CardImg src={zoe} />
              <CardText>
                <p>
                  Use My Tech has a user-friendly interface and tech database.
                  Where other tools are clunky, Use My Tech is intuitive and
                  fast. I love that the platform is integrated with Twitter, and
                  is more up-to-date than other databases I've used.
                </p>
                <hr />
                <h4>Zoe Trager</h4>
                <h5>Account Supervisor</h5>
              </CardText>
            </TestimonialCard>
          </InnerCardsWrapper>
        </OuterCardsWrapper>
        <TestimonialNavDots className="testimonial-nav-dots">
          {testimonials.current.map((testimonial) => {
            console.log(testimonial.dataset.index);
            return <div key={testimonial.dataset.index}></div>;
          })}
        </TestimonialNavDots>
      </MainBody>
      <ArrowComponent>
        <svg
          id="right-arrow"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 489.6 489.6"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="ec34a27d-3f9e-44f4-8e6f-4c99482a5a9a"
            d="M244.8,0C109.8,0,0,109.8,0,244.8S109.8,489.6,244.8,489.6,489.6,379.8,489.6,244.8,379.8,0,244.8,0Zm77.1955,263.4442-98.41,98.41a26.3575,26.3575,0,0,1-37.3967-37.1529l79.8957-79.8977L186.31,165.029a26.358,26.358,0,1,1,37.2758-37.2758l98.4127,98.4127a26.3561,26.3561,0,0,1-.0026,37.2783Z"
          />
        </svg>
      </ArrowComponent>
    </TestimonalsComponent>
  );
};

export default Testimonials;
