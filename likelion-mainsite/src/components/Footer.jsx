import './Footer.css';
import React from 'react';
import copyright_icon from '../assets/copyright_icon.svg';

const Footer = () => {
	return (
		<footer>
            <p>명지대학교 멋쟁이사자처럼</p>
            <br />
            <div className="description_wrapper">
<div>
            <p className="description">프론트엔드 |</p>
            <p className="description">정유진 윤윤아</p>
            </div>
            <div>
            <p className="description">백엔드 |</p>
            <p className="description">김예일 이범진 강예린</p>
            </div>
</div>
            <br />
            <div>
                <img src={copyright_icon} alt="저작권 아이콘" />
                <p>likelion_MJU | All rights reserved.</p>
            </div>
		</footer>
	);
};

export default Footer;
