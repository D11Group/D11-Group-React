import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner3 from '../components/banner3'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>D11 Holdings Companies</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner3
        action1={
          <fragment>
            <span className="home-text">Get Started</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text01 thq-heading-3">
              &quot;INSPIRING&quot; The inspiration for us is to follow the
              future. We are investing in continuous development.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text02 thq-heading-2">
              <span className="home-text03">D11 Group</span>
              <br></br>
              <span>Connecting the Universe</span>
            </span>
          </fragment>
        }
        image1Src="/d11group-20240725-0004-1500w.jpg"
        rootClassName="banner3-root-class-name"
      ></Banner3>
      <Features1
        feature1Title="Investment Opportunities"
        feature2Title="Strategic Investments"
        feature3Title="Industry Expertise"
        rootClassName="features1-root-class-name"
        feature1ImgSrc="/img-20220722-wa0033-1400w.jpg"
        feature1Description="Explore unique investment opportunities with our diversified portfolio of companies."
        feature2Description="We invest in innovative startups and established businesses to drive growth and success."
      ></Features1>
      <CTA
        text={
          <fragment>
            <span className="home-text06 thq-heading-2">
              <span>TANSPARENCY. INTEGRITY. COMPETENCY</span>
              <br></br>
              <span>
                Connecting the Universe
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </fragment>
        }
        action1="View Services"
        content1="Explore our wide range of business services across various industries and sectors."
        rootClassName="cta-root-class-name"
      ></CTA>
      <Features2
        feature1Title="Diverse Portfolio"
        feature2Title="Strategic Investments"
        feature3Title="Industry Expertise"
        rootClassName="features2-root-class-name"
        feature1ImgSrc="/photo-1535968200488-d96414e4d95a_sb-1400w.jpg"
        feature1Description="Our holding company manages a diverse portfolio of businesses across various industries."
        feature2Description="We make strategic investments in promising companies to drive growth and maximize returns."
        feature3Description="Our companies operate in various industries, providing a wide range of services and products."
      ></Features2>
      <Steps
        step1Title="Discover Our Services"
        step2Title="Choose Your Solutions"
        step3Title="Meet Our Team"
        step4Title="Start Growing Your Business"
        rootClassName="steps-root-class-name"
        step1Description="Explore the wide range of services we offer to help your business succeed."
        step2Description="Select the solutions that best fit your company's needs and goals."
        step3Description="Get to know the experienced professionals who will support and guide your business."
        step4Description="Begin your journey towards success with our comprehensive business solutions."
      ></Steps>
      <Contact
        content1="We'd love to hear from you. Reach out to us for any inquiries or questions."
        content2="Our team is available to assist you during our business hours."
        heading1="Get in Touch"
        rootClassName="contact-root-class-name"
      ></Contact>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
