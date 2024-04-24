import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../assets/images/2slider.png';
import Slide2 from '../../../assets/images/2slider1.png';
import Slide3 from '../../../assets/images/2slider2.png';
import Slide4 from '../../../assets/images/2slider3.png';
import Slide5 from '../../../assets/images/2slider4.png';
import Slide6 from '../../../assets/images/2slider5.png';
import Slide7 from '../../../assets/images/2slider6.png';
import Button from '@mui/material/Button';

import Newsletter from '../../../components/newsletter';

import { MyContext } from '../../../App';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={Slide1} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide3} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide4} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide5} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide6} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide7} className='w-100' />
                        <div className='info1'>
                            <h2 class="mb-4">
                            Discover Art in Various<br />
                            Categories on our  <br />
                            Marketplace
                            </h2>
                            <p>Browse through a wide selection of paintings, sculptures, digital art, and more on our marketplace.</p> <br /><p> Find the perfect piece to add to your collection or decorate your space.</p>
                        </div>
                    </div>
                    
                </Slider>

                {
                    context.windowWidth>992 
                }
                

            </div>
        </section>
    )
}

export default HomeSlider;