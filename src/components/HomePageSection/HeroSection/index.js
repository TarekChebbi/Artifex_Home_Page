import React from 'react';
import './style.css'; // Make sure this path is correct

import FacebookIcon from '../../../assets/images/Facebook.svg';
import TwitterIcon from '../../../assets/images/Tracé 2.svg';
import InstagramIcon from '../../../assets/images/Instagram.svg';

const HeroSection = () => {
  return (
    <div className="hero-section">
    <div className="hero-overlay">
        
      <div className="hero-content">
      <h1 className="hero-title">
  <span className="creative-text" style={{color:'#86e1ff'}}>WHERE CREATIVITY</span> UNLEASHES POSSIBILITIES
</h1>
        <p className="hero-subtitle">
          "Embark on a journey of innovation. At Artifex, we cultivate a
          community where creativity thrives, collaboration flourishes, and
          groundbreaking solutions take flight. Join us, explore, and shape the
          landscape of tomorrow."
        </p>
        <div className="hero-social-links">
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={FacebookIcon} className='icon-img' alt="Facebook" />
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={InstagramIcon} className='icon-img' alt="Instagram" />
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={TwitterIcon} className='icon-img' alt="Twitter" />
  </a>
</div>

          <div className="hero-cta-buttons">
    <button className="btn faq-button" style={{color:'#86e1ff'}}>FAQ Questions</button>
    <button className="btn contact-button">
    Contact us     
    <svg className="button-arrow" xmlns="http://www.w3.org/2000/svg" width="41.618" height="11.687" viewBox="0 0 41.618 11.687">
        <path d="M-5.2,0-6.264,1.062l4.022,4.022H-40.975V6.6H-2.242l-4.022,4.022L-5.2,11.687.642,5.844Z" transform="translate(40.975)" fill="#fff"/>
    </svg>
</button>
</div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
