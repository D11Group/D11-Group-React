import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal"
          >
            <div className="features1-divider-container">
              {activeTab === 0 && <div className="features1-container2"></div>}
            </div>
            <div className="features1-content">
              <h2 className="features1-feature1-title thq-heading-2">
                {props.feature1Title}
              </h2>
              <span className="features1-feature1-description thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 1 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="features1-feature2-title thq-heading-2">
                {props.feature2Title}
              </h2>
              <span className="features1-feature2-description thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 2 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="features1-feature3-title thq-heading-2">
                {props.feature3Title}
              </h2>
              <span className="features1-feature3-description thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Investment Opportunities Image',
  feature1Description:
    'Explore unique investment opportunities with our diversified portfolio of companies.',
  rootClassName: '',
  feature2Description:
    'We invest in innovative startups and established businesses to drive growth and success.',
  feature3Title: 'Industry Expertise',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Our companies operate in various industries, providing a wide range of services and products.',
  feature3ImgAlt: 'Industry Expertise Image',
  feature1ImgAlt: 'Diverse Portfolio',
  feature1Title: 'Investment Opportunities',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1493219686142-5a8641badc78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM2NDk2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Strategic Investments',
}

Features1.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
