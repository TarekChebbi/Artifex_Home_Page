import React, { useState } from 'react';
import './style.css'; // Ensure this path is correct for your CSS file

const AddArtworkForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Call the passed in function with the selected file
      onImageSelected(event.target.files[0]);
    }
};

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  

  return (
    <div className="art-signin-form-container">
      <div className="art-signin-header">Add Artwork</div>

      {step === 1 && (
        <div className="art-signin-step">
          {/* Step 1: Artwork Details */}
          <input type="text" placeholder="Artwork Title" />
          <select>
            <option value="painting">Painting</option>
            <option value="drawing">Drawing</option>
            <option value="sculpture">Sculpture</option>
            {/* More categories as needed */}
          </select>
          <textarea placeholder="Describe the artwork"></textarea>
          <label className="image-uploader">
      <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
      <div className="image-uploader-content">
        <span className="image-uploader-icon">+</span>
        <span className="image-uploader-text">Main Image</span>
      </div>
    </label>
     
          <div className="art-signin-button-container">
            <button className="art-signin-button art-signin-next" onClick={nextStep}>
              Next 1/3
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="art-signin-step">
          {/* Step 2: Artwork Dimensions & Pricing */}
          <input type="number" placeholder="Height in cm" />
          <input type="number" placeholder="Width in cm" />
          <input type="text" placeholder="Price in USD" />
          <input type="number" placeholder="Year of creation" />
          <label className="image-uploader">
      <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
      <div className="image-uploader-content">
        <span className="image-uploader-icon">+</span>
        <span className="image-uploader-text">Main Image</span>
      </div>
    </label>
          <div className="art-signin-button-container">
          <button className="art-signin-button art-signin-prev" onClick={prevStep}>Previous</button>
          <button className="art-signin-button art-signin-next" onClick={nextStep}>Next 2/3</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="art-signin-step">
          {/* Step 3: Create Your Account */}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Choose a password" />
          <input type="password" placeholder="Confirm your password" />
          <label className="image-uploader">
      <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
      <div className="image-uploader-content">
        <span className="image-uploader-icon">+</span>
        <span className="image-uploader-text">Main Image</span>
      </div>
    </label>
          <div className="art-signin-button-container">
          <button className="art-signin-button art-signin-prev" onClick={prevStep}>Previous</button>
          <button className="art-signin-button art-signin-create" onClick={() => alert('Form Submitted!')}>Create Your Account 3/3</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AddArtworkForm;
