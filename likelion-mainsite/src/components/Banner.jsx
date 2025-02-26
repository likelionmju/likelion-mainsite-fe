import React from 'react';
import Apply from './Apply';
import './Banner.css';
import Header from './Header';
import Introduction from './Introduction';
import maheung from '@/assets/maheung.svg';

const Banner = ({character}) => {
    return (
        <div className="banner">
            <Header />
            <div className="banner_title_container">
                <div className='banner_title_box'>
                    <div className='character_container'>
                        <div className='character_box'>
                            <div className='character-img-container'>
                                <img className="character" src={maheung} />
                            </div>
                            <div className='character-background'></div>
                        </div>


                        {/* <p className="banner_title">LIKELION MJU</p> */}

                    </div>
                </div>
                <p className="banner_title">LIKELION MJU</p>
            </div>
            {/* <img className="character" src={character} />
            <p className="banner_title">LIKELION MJU</p> */}
            <Apply />
        </div>
    );
};

export default Banner;