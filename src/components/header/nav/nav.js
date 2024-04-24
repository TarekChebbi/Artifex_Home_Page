import React, { useEffect, useContext } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { useState } from 'react';
import Logo from '../../../assets/images/Logo_Artifex.svg';
import { MyContext } from '../../../App';

const Nav = (props) => {


    const [navData, setNavData] = useState([]);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openDropdownMenu, setDropdownMenu] = useState(false);
    const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);

    const [openMegaMenu, setOpenMegaMenu] = useState(false);

    const context = useContext(MyContext);

    useEffect(() => {
        setNavData(props.data);
    }, [])

    useEffect(() => {
        setIsOpenNav(props.openNav)
    }, [props.openNav])


    const closeNav=()=>{
        props.closeNav();
    }

    const openDropdownFun=(index)=>{
        setDropdownMenu(!openDropdownMenu)
        setDropdownMenuIndex(index)
    }

    return (
        <>
            {
                isOpenNav === true && <div className='navbarOverlay' onClick={props.closeNav}></div>
            }
            <div className={`nav d-flex align-items-center ${isOpenNav === true && 'click'}`}  style={{ height : '120px'}}>
                <div className='container-fluid'>
                    <div className='row position-relative'>
                        <div className='col-sm-2 part1 d-flex align-items-center'>
                        
                        <Link to="/"><img src={Logo} className='logo' style={{ height : '76px'}} /></Link>
                            
                        </div>

                        <div className='col-sm-8 part2 position-static'>
                           
                        </div>
                        <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNo d-flex align-items-center ml-auto'>
                        
                            <button class="signupBtn1"> SIGN UP </button>
                            
                            </div>
                            <div className='phNo d-flex align-items-center ml-auto'>
                            <Link to={'/signIn'}>
                            <button class="signupBtn"> LOGIN </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;