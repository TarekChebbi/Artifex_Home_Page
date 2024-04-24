import React from 'react';
import './style.css';
import Banner3 from '../../assets/images/image 1.png';

function Card() {
  return (
    <div className="content">
            <div className='info'>
                            <h2 class="mb-4">
                            Discover Unique Artwork Online
                            </h2>
                            <p>Explore curated collections and find the perfect piece for your home or </p> <br /><p>office. Our marketplace connects you with talented artists from around</p><br /><p>the world.</p>
                            <h2 class="mb-4">
                            Secure Online Purchasing
                            </h2>
                            <p>Shop with confidence knowing that your transactions are protected. Our  </p> <br /><p>secure platform ensures a safe and seamless purchasing experience.</p>
                        </div>
    <div className="special-wrapper">
      <div className="special-box">
        <img src={Banner3} alt="" /> 
        <div className="special-info">
          <h2>Person Name</h2>
          <p></p>
          <div className="special-rating">
            <input value="5" name="rating" id="special-star5" type="radio" />
            <label htmlFor="special-star5"></label>
            <input value="4" name="rating" id="special-star4" type="radio" />
            <label htmlFor="special-star4"></label>
            <input value="3" name="rating" id="special-star3" type="radio" />
            <label htmlFor="special-star3"></label>
            <input value="2" name="rating" id="special-star2" type="radio" />
            <label htmlFor="special-star2"></label>
            <input value="1" name="rating" id="special-star1" type="radio" />
            <label htmlFor="special-star1"></label>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Card;
