import React from 'react';
import './style.css'; // Make sure to create a corresponding CSS file



const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>For more info</h2>
      <div className="services-container">
      
        <a class="card human-resources" href="#">
     <div class="overlay"></div>
  <div class="circle">
  <svg version="1.1" viewBox="0 0 66 77" height="77px" width="66px">
    <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
        <path fill="#AFCEFF" d="M4.28872448,42.7464904 C4.28872448,39.3309774 5.4159227,33.7621426 6.40576697,30.4912557 C10.5920767,32.1098991 14.3021264,35.1207513 18.69596,35.1207513 C30.993618,35.1207513 42.5761396,28.7162991 49.9992251,17.9014817 C56.8027248,23.8881252 60.8188351,33.0463165 60.8188351,42.7464904 C60.8188351,60.817447 47.6104607,76.6693426 32.5537798,76.6693426 C17.4970989,76.6693426 4.28872448,60.817447 4.28872448,42.7464904" />
        <path fill="#3B6CB7" d="M64.3368879,31.1832696 L62.8424171,46.6027478 L60.6432609,46.7824348 L59.8340669,34.6791304 L47.6573402,25.3339478 C44.2906753,34.068487 34.3459503,40.2903304 24.4684093,40.2903304 C17.7559812,40.2903304 10.046244,37.4168 5.80469412,32.8004522 L5.80469412,34.6791304 L5.80469412,46.6027478 L4.28932167,46.6027478 L1.30187314,27.8802435 C1.30187314,20.9790957 3.52342407,15.5432 7.27229127,11.3578087 C13.132229,4.79558261 21.8124018,0.0492173913 30.5672235,0.342852174 C37.4603019,0.569286957 42.6678084,2.72991304 50.8299179,0.342852174 C51.4629405,1.44434783 51.8615656,3.00455652 51.5868577,5.22507826 C51.4629405,6.88316522 51.2106273,7.52302609 50.8299179,8.45067826 C58.685967,14.1977391 64.3368879,20.7073739 64.3368879,31.1832696" />
    </g>
</svg>
  </div>
  <p>Human Resources</p>
</a>
<a class="card human-resources" href="#">
     <div class="overlay"></div>
  <div class="circle">
  </div>
  <p>Credentialing</p>
</a>
<a class="card human-resources" href="#">
     <div class="overlay"></div>
  <div class="circle">
  
  </div>
  <p>Payment</p>
</a>
      </div>
    </div>
  );
};

export default ServicesSection;
