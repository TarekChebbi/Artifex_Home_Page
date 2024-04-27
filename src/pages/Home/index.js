import React, { useState, useEffect, useRef, useContext } from 'react';
import SliderBanner from './slider/index';
import SliderBanner2 from './slider2/index';
import CatSlider from '../../components/catSlider';

import Banners from '../../components/banners';
import Stars from '../../components/imagestars'
import Stars2 from '../../components/imagestars2'
import Stars3 from '../../components/imagestars3'
import Collbanner from '../../components/CollectionBanner'
import Collbanner2 from '../../components/CollectionBanner2'

import Viewmore from '../../components/ViewMore'
import Faqs from '../../components/Faqs'
import Shq from '../../components/ContactUsSection'
import Servsec from '../../components/ServicesSection'
import Teambehind from '../../components/TeamBehind'


import './style.css';
import Product from '../../components/product';
import Banner4 from '../../assets/images/banner4.jpg';

import Slider from "react-slick";

import axios from 'axios';
import { MyContext } from '../../App';

const Home = (props) => {

    const [prodData, setprodData] = useState(props.data)
    const [catArray, setcatArray] = useState([])
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);

    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    const productRow=useRef();
    const context = useContext(MyContext);

    var settings = {
        dots: false,
        infinite: context.windowWidth<992 ? false : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: context.windowWidth<992 ? false : true,
    };

    const catArr = [];

    useEffect(() => {

        prodData.length !== 0 &&
            prodData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catArr.push(item_.cat_name);
                    })
            })

        const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
        setcatArray(list2)

        setactiveTab(list2[0])

        window.scrollTo(0,0);

    }, [])





    useEffect(() => {
        var arr = [];
        setActiveTabData(arr);
        prodData.length !== 0 &&
            prodData.map((item, index) => {
                item.items.map((item_, index_) => {
                    if (item_.cat_name === activeTab) {
                        {
                            item_.products.length !== 0 &&
                                item_.products.map((product) => {
                                    arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            setActiveTabData(arr)
                            setTimeout(()=>{
                                setIsLoadingProducts(false);
                            },[1000]);
                        }
                    }
                })

            })

    }, [activeTab, activeTabData])





    const bestSellsArr = [];

    useEffect(() => {
        prodData.length !== 0 &&
            prodData.map((item) => {
                if (item.cat_name === "Electronics") {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((product, index) => {
                                    bestSellsArr.push(product);
                                })
                        })
                }

            });


        setBestSells(bestSellsArr);

    }, [])




    return (
        <div style={{display:'block'}}>
            <SliderBanner />
            <br />
            <br />
            <SliderBanner2 />
           
            
            

            <Banners />
            <br />
            <br />
            <Stars />
            <br />
            <br />
            <br />
            <br />
            <Stars2 />
            <br />
            <br />
            <br />
            <br />
            <Stars3 />
            <br />
            <br />
            <br />
            <br />
            <Collbanner />
       
            

            <section className='homeProducts homeProductWrapper'>
                <div className='container-fluid'>
                   


                    <div className={`productRow ${isLoadingProducts===true && 'loading'}`} ref={productRow}>

                        {
                            activeTabData.length !== 0 &&
                            activeTabData.map((item, index) => {
                                return (
                                    <div className='item' key={index}>

                                        <Product tag={item.type} item={item} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>

            <Viewmore />
            <br />
            <br />
            <Faqs />
            <Shq />
            <Servsec />
            <br />
            <Teambehind />
            <br />
            <br />
            <Collbanner2 />
        </div>
    )
}

export default Home;






