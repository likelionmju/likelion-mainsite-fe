import './Header.css';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import likelion_logo from '../assets/likelion_logo.svg';
import hamburger_bars_icon from '../assets/hamburger_bars_icon.svg';

const Header = () => {
	const navigate = useNavigate();
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
		setIsMenuActive(!isMenuActive);
	};

	return (
		<header>
            <nav className="navbar">
                <div className="navbar_logo">
                    <img src={likelion_logo} alt="멋사 로고" />
                </div>
                <ul className={`navbar_menu ${isMenuActive ? 'active' : ''}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recruit</a></li>
                    <li><a href="">Login</a></li>
                </ul>
                <a href="#" onClick={toggleMenu} className="navbar_toggleBtn">
                    <img src={hamburger_bars_icon} alt="햄버거 바 아이콘" />
                </a>
            </nav>
		</header>
	);
};

export default Header;
