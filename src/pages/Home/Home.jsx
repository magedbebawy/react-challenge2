import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title.component';
import placeholder from '../../images/placeholder.png'
import './Home.css'

const Home = () => {
    return(
        <div class='home-container'>
            <Title child='Popular Titles'/>
            <div className='placeholders'>
                <Link to='/series' style={{ textDecoration: 'none', color: 'black' }} >
                    <div>
                        <div className='image-container'>
                            <img  src={placeholder} alt="image"/>
                            <div className='centered'>SERIES</div>
                        </div>
                        <p className='title-name'>Popular Series</p>
                    </div>
                </Link>
                <Link to='/movies' style={{ textDecoration: 'none', color: 'black' }}>
                    <div>
                        <div className='image-container'>
                            <img  src={placeholder} alt="image"/>
                            <div className='centered'>MOVIES</div>
                        </div>
                        <p className='title-name'>Popular Movies</p>
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
    
}

export default Home