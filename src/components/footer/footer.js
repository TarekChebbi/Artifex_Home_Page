import React from 'react';
import './footer.css';

import Logo from '../../assets/images/Logo_Artifex.svg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>

          

            <div className='footerWrapper'>
               


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'><img src={Logo} /></Link>
                                <br /><br />
                                <p>Find the perfect piece to add to your collection or decorate your space.</p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Address</strong>: Nabeul, Nabeul Center 8000 Tunisia</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+50) - 52-025-123 </p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> stoonproduction@gmail.com , </p>
                                <p> <strong></strong> tarekchebbi33@gmail.com </p>
                           

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3></h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#"> </Link></li>
                                            <li><Link to="#"> </Link></li>
                                          
                                         
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Artists</Link></li>
                                            <li><Link to="#">FAQ</Link></li>
                                            <li><Link to="#">Contact</Link></li>
                                            <li><Link to="#">Support</Link></li>
                                           
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                          
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Cookies Settings</Link></li>
                                        
                                          
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3></h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#"> </Link></li>
                                            <li><Link to="#"> </Link></li>
                                          
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3></h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#"> </Link></li>
                                            <li><Link to="#"> </Link></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Payment</h3>
                                <br className='res-hide'/>
                             

                                <br />

                                <p>Secured Payment Gateways</p>
                                <img src={paymentImage} />
                            </div>

                        </div>


                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2024, Artifex - 
                                    All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                   

                                    <div className='phNo d-flex align-items-center  mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0' style={{color:'#9866FF'}}>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;