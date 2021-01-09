import React from 'react';
import './Serie.styles.css'
import data from '../../feed/sample.json'

class Serie extends React.Component{
    state={
        series: data.entries
    }

    render(){
        return(
            this.state.series.filter(serie => {
                return (serie.programType === 'series') && (serie.releaseYear >= 2010)
            }).sort((a,b) => (
                (a.title > b.title) ? 1 : -1
            )).slice(0, 21).map(serie => (
                <div className='serie'>
                    <img  src={serie.images['Poster Art'].url} alt={serie.title}></img>
                    <p>{serie.title}</p>
                </div>
            ))
        )
    }
}

export default Serie