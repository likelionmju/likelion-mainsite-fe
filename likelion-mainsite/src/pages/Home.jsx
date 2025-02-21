import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Home.css';
import character from '../assets/character.svg'
import Apply from '@/components/Apply';
import Card from '@/components/Card';
import fire_icon from '../assets/fire_icon.svg';
import chat_icon from '../assets/chat_icon.svg';
import crown_icon from '../assets/crown_icon.svg';
import Part from '@/components/Part';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			{/* 배너 */}
			<div className="banner">
				<img className="character" src={character} />
				<p className="banner_title">LIKELION MJU</p>
				<Apply />
			</div>

			{/* 인재상 */}
			<div className="right_people">
				<p className="right_people_title">인재상</p>
				<p className="right_people_exp">명지대 멋쟁이사자처럼에서는 이런 아기사자들을 찾아요!</p>
				<div className="card_div">
					<Card
						img={fire_icon}
						keyword="[꾸준함]"
						content={`꾸준한 노력과 성장을 통해
							프로젝트를 완성해 나갈 수 있는
							인재를 찾고 있어요!
							
							멋쟁이사자처럼은 끈기있게
							목표를 향해 나아가고,
							도전과 실패 속에서도
							끝까지 포기하지 않는 분들을
							기다리고 있습니다!`
						}
					/>
					<Card
						img={chat_icon}
						keyword="[소통]"
						content={`원활한 소통을 통해
							팀원들과 함께 성장하고,
							프로젝트를 성공적으로
							이끌어 나갈 인재를 찾고 있어요!

							멋쟁이사자처럼은
							서로의 아이디어를 존중하고
							적극적으로 의견을
							나눌 수 있는 분들을 찾고 있습니다!`
						}
					/>
					<Card
						img={crown_icon}
						keyword="[책임감]"
						content={`자신의 역할을 끝까지 해내며,
							책임감을 가지고 프로젝트를
							완수할 인재를 찾고 있어요!

							팀원들과 함께 목표를
							이루기 위해 최선을 다하고,
							자신의 결과물에 책임을
							다하는 분들을 기다리고 있습니다!`
						}
					/>
				</div>
			</div>
			<Part/>
			<Footer />
		</div>
	);
};

export default Home;
