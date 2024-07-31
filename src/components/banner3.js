import React from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container1">
          <h2 className="banner3-title">
            {props.heading1 ?? (
              <fragment>
                <span className="banner3-text3 thq-heading-2">
                  Invest in the Future with Us
                </span>
              </fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <fragment>
                <span className="banner3-text4 thq-heading-3">
                  Explore unique investment opportunities across various
                  industries with our expert team.
                </span>
              </fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <fragment>
                <span className="banner3-text2">Get Started</span>
              </fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1641790017163-4c0de7df1841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM3NDA0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  heading1: undefined,
  rootClassName: '',
  image1Alt: 'Investment Opportunities',
  content1: undefined,
}

Banner3.propTypes = {
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner3
