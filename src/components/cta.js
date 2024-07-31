import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container1">
              <div className="cta-content">
                <span>
                  {props.text ?? (
                    <fragment>
                      <span className="cta-text2 thq-heading-2">
                        <span>Discover Our Diverse Portfolio</span>
                      </span>
                    </fragment>
                  )}
                </span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  action1: 'View Portfolio',
  rootClassName: '',
  text: undefined,
  content1:
    'Explore our wide range of investments across various industries and sectors.',
}

CTA.propTypes = {
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  content1: PropTypes.string,
}

export default CTA
