import React from 'react';
import './Title.styles.css'

const Title = ({child}) => (
    <div className='title'>
        <p>{child}</p>
    </div>
)

export default Title