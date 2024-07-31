import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  rootClassName: '',
  review2:
    'I highly recommend Company XYZ for their exceptional services. They have exceeded our expectations in every way.',
  author2Src:
    'https://images.unsplash.com/photo-1695746999392-1a3ccb033d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Michael Johnson',
  author3Name: 'Michael Johnson',
  review1:
    'Company XYZ has been instrumental in helping us achieve our business goals. Their expertise and professionalism are unmatched.',
  heading1: 'Testimonials',
  author4Alt: 'Image of Sarah Williams',
  author1Src:
    'https://images.unsplash.com/photo-1616337900440-056dd0f082d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1522091759069-9fe8e6826b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'Company XYZ truly understands our needs and delivers results that align with our vision. We are grateful for their partnership.',
  author4Position: 'CMO, Company JKL',
  author3Position: 'CFO, Company GHI',
  author1Alt: 'Image of John Doe',
  review3:
    'Working with Company XYZ has been a game-changer for our organization. Their innovative solutions have made a significant impact.',
  author2Position: 'COO, Company DEF',
  author4Src:
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  author4Name: 'Sarah Williams',
  author1Position: 'CEO, Company ABC',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author2Name: 'Jane Smith',
  author2Alt: 'Image of Jane Smith',
}

Testimonial.propTypes = {
  rootClassName: PropTypes.string,
  review2: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  author4Position: PropTypes.string,
  author3Position: PropTypes.string,
  author1Alt: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  author4Src: PropTypes.string,
  author1Name: PropTypes.string,
  author4Name: PropTypes.string,
  author1Position: PropTypes.string,
  content1: PropTypes.string,
  author2Name: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial
