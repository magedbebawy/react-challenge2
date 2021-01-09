import React from 'react';
import './Footer.styles.css'
import {ReactComponent as Facebook} from '../../images/social/facebook-white.svg'
import {ReactComponent as Instagram} from '../../images/social/instagram-white.svg'
import {ReactComponent as Twitter} from '../../images/social/twitter-white.svg'
import {ReactComponent as Apple } from '../../images/store/app-store.svg'
import {ReactComponent as Google} from '../../images/store/play-store.svg'
import {ReactComponent as Microsoft} from '../../images/store/windows-store.svg'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-links'>
                    <a href="#">Home</a>
                    |
                    <a href="#">Terms and Conditions</a>
                    |
                    <a href="#">Privacy Policy</a>
                    |
                    <a href="#">Collection Statement</a>
                    |
                    <a href="#">Help</a>
                    |
                    <a href="#">Manage Account</a>
                </div>
            </div>
            <div className='copyrights'>
                <p>Copyright &#169; 2016 DEMO Streaming All Rights Reserved </p>
            </div>
            <div className='social'>
                <Facebook className='icon'></Facebook>
                <Twitter className='icon'></Twitter>
                <Instagram className='icon'></Instagram>
                <Microsoft className='store'></Microsoft>
                <Google className='store'></Google>
                <Apple className='store'></Apple>
            </div>
        </div>
        
    )
}

export default Footer