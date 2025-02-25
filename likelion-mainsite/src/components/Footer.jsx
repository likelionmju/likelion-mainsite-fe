import './Footer.css';
import insta_icon from '../assets/insta_icon.svg';

const Footer = () => {
	return (
		<footer>
            <p>명지대학교 멋쟁이사자처럼</p>
            <br />
            {/* <div className="description_wrapper">
                <div>
                    <p className="description">프론트엔드 |</p>
                    <p className="description">정유진 윤윤아</p>
                </div>
                <div>
                    <p className="description">백엔드 |</p>
                    <p className="description">김예일 이범진 강예린</p>
                </div>
            </div> */}
            <div className="copyright_wrapper">
                <p>© likelion_MJU | All rights reserved.</p>
                <a 
                    href="https://www.instagram.com/likelion_mju" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="insta_icon" src={insta_icon} alt="인스타 아이콘" />
                </a>
            </div>
		</footer>
	);
};

export default Footer;
