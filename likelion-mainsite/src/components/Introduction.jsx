import React from 'react';
import './Introduction.css';
import IntroductionBox from './IntroductionBox';

const Introduction = () => {
    const introductionList = {
        techit : {
            img: '/techit.svg',
            content: 'Techit 강의 <br/> 무제한 무료 제공'
        },
        networking : {
            img: '/networking.svg',
            content: '타학교 및 현직자와의 <br/> 네트워킹 기회'
        },
        activity : {
            img: '/activity.svg',
            content: '전국 최대 규모의 <br/> 아이디어톤과 해커톤'
        },
        everyone : {
            img: '/everyone.svg',
            content: '비전공자도 쉽게 <br/> 시작할 수 있는 동아리'
        }
    }

    const subtitle = "";

    return (
        <div className='introduction-container'>
            <div className='introduction-title'>멋쟁이사자처럼이란 ?</div>
            <div className='introduction-subtitle introduction-subtitle-desktop'>
                멋쟁이사자처럼은 IT 서비스 구축을 위한 웹 프로그래밍을 학습하는 <br/> 전국 최대 규모의 IT 연합 동아리입니다.
            </div>
            <div className='introduction-subtitle introduction-subtitle-mobile'>
                멋쟁이사자처럼은 IT 서비스 구축을 위한 웹 프로그래밍을 <br/> 학습하는 전국 최대 규모의 IT 연합 동아리입니다.
            </div>
            <div className='introduction-box-list-container introduction-box-list-desktop'>
                <IntroductionBox introduction={introductionList.techit}/>
                <IntroductionBox introduction={introductionList.networking}/>
                <IntroductionBox introduction={introductionList.activity}/>
                <IntroductionBox introduction={introductionList.everyone}/>
            </div>
            <div className='introduction-box-list-mobile'>
                <div className='introduction-box-list-container'>
                    <IntroductionBox introduction={introductionList.techit}/>
                    <IntroductionBox introduction={introductionList.networking}/>
                </div>
                <div className='introduction-box-list-container'>
                    <IntroductionBox introduction={introductionList.activity}/>
                    <IntroductionBox introduction={introductionList.everyone}/>
                </div>
            </div>
        </div>
    );
};

export default Introduction;