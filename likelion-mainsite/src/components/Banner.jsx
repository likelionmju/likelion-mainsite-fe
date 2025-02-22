import React from 'react';
import Apply from './Apply';
import './Banner.css';
import Header from './Header';
import Introduction from './Introduction';

const Banner = ({character}) => {
    return (
        <div className="banner">
            <Header />
            <div className="banner_title_container">
                <div className='banner_title_box'>
                    <div className='character_container'>
                        <div className='character_box'>
                            <img className="character" src={character} />
                            <div className='character-background'></div>
                        </div>
                    </div>
                    <p className="banner_title">LIKELION MJU</p>
                </div>
            </div>
            {/* <img className="character" src={character} />
            <p className="banner_title">LIKELION MJU</p> */}
            <Apply />
            <Introduction/>
        </div>
    );
};

export default Banner;