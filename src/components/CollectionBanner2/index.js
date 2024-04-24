import React from 'react';
import './style.css'; // Make sure the CSS file is in the same directory

const CollectionBanner2 = () => {
  return (
    <div className="collection-banner2">
      <div className="banner-left2"> 
        <h1 style={{margin: '133px',fontFamily:'Arial, sans-serif',fontWeight:'bold'}}>Discover Unique Artwork
For Sale</h1>
      </div>
      <div className="banner-right2">
        <p>Explore a diverse collection of artwork from talented artists around the world.</p>
        <div className="button-container">
          <button className="btn2">Discover</button>
          <button className="sign-up2">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner2;
