import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.styles.css'


const Nav = () => {
    return(
        <div className='nav'>
            <Link to='/' className='logo'>DEMO Streaming</Link>            
            <a className='link-button' href='#'>Start your free trial</a>
            <a className='link ' href='#'>Log in</a>
        </div>
    )

}    

export default Nav