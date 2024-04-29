import React, { useState, useEffect, useRef, useContext } from 'react';
import HeroSection from '../../components/HomePageSection/HeroSection';
import './style.css';
import Slider from "react-slick";
import axios from 'axios';
import { MyContext } from '../../App';

const HomePage = (props) => {


    return (
        <div style={{display:'block'}}>
            <HeroSection />
            
        </div>
    )
}

export default HomePage;






