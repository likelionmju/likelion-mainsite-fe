import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Home.css';
import YearPlan from '@/components/YearPlan';
// import character from '../assets/character.svg'
import character from '../assets/character4.svg'
import Apply from '@/components/Apply';
import Card from '@/components/Card';
import fire_icon from '../assets/fire_icon.svg';
import chat_icon from '../assets/chat_icon.svg';
import crown_icon from '../assets/crown_icon.svg';
import Part from '@/components/Part';
import Why from '@/components/Why';
import gift_icon from "../assets/gift_icon.svg";
import noti_icon from "../assets/noti_icon.svg";
import monitor_icon from "../assets/monitor_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import recruit_date_line from "../assets/recruit_date_line.svg";
import RecruitDate from '@/components/RecruitDate';
import Banner from '@/components/Banner';
import Introduction from '@/components/Introduction';

const Home = () => {
	return (
		<div className="Home">
			{/* <Header /> */}
			{/* 배너 */}
			<Banner character={character} />
			{/* <Introduction/> */}
			{/* <div className="banner">
				<div className="banner_title_container">
					<img className="character" src={character} />
					<p className="banner_title">LIKELION MJU</p>
				</div> */}
				{/* {/* <img className="character" src={character} /> */}
				{/* <p className="banner_title">LIKELION MJU</p> */}
				{/* <Apply /> */}
			{/* </div> */}

			{/* 멋사 소개 */}
			{/* <div className="why">
				<p className="why_title">왜 멋쟁이사자처럼인가요?</p>
				<p className="why_exp">멋쟁이사자처럼은 IT 서비스 구축을 위한 웹 프로그래밍을 학습하는<br />전국 최대 규모의 IT 연합 동아리입니다.</p>
				<div className="why_div">
					<Why
						img={gift_icon}
						content={`Techit 강의
							무제한 무료 제공`}
					/>
					<Why
						img={noti_icon}
						content={`타학교 및 현직자와의
							네트워킹 기회`}
					/>
					<Why
						img={monitor_icon}
						content={`전국 최대 규모의
							아이디어톤과 해커톤`}
					/>
					<Why
						img={heart_icon}
						content={`비전공자도 
							시작할 수 있는 동아리`}
					/>
				</div>
			</div> */}
			
			{/* 파트별 소개 */}
			<Part/>

			{/* 연간 일정 */}
			<YearPlan />

			{/* 인재상 */}
			{/* <div className="right_people">
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
			</div> */}

			{/* 모집 일정 */}
			{/* <div className="recruit_date">
				<p className="recruit_date_title">모집 일정</p>
				<img className="recruit_date_line"  src={recruit_date_line} />
				<div className="recruit_date_div">
					<RecruitDate
						content_bold="서류 모집"
						content_medium="2/24 ~ 3/9"
					/>
					<RecruitDate
						content_bold="서류 발표"
						content_medium="3/10"
						content_light="(17:00 이내)"
					/>
					<RecruitDate
						content_bold="면접"
						content_medium="3/12 ~ 3/14"
					/>
					<RecruitDate
						content_bold="합격자 발표"
						content_medium="3/15"
					/>
				</div>
			</div> */}

			<Footer />
		</div>
	);
};

export default Home;
