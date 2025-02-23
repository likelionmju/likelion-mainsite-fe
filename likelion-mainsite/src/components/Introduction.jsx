import React from 'react';
import './Introduction.css';
import IntroductionBox from './IntroductionBox';

const Introduction = () => {
    const introductionList = {
        techit : {
            img: '../src/assets/techit.svg',
            content: 'Techit 강의 <br/> 무제한 무료 제공'
        },
        networking : {
            img: '../src/assets/networking.svg',
            content: '타학교 및 현직자와의 <br/> 네트워킹 기회'
        },
        activity : {
            img: '../src/assets/activity.svg',
            content: '전국 최대 규모의 <br/> 아이디어톤과 해커톤'
        },
        everyone : {
            img: '../src/assets/everyone.svg',
            content: '누구나 쉽게 비전공자도 <br/> 시작할 수 있는 동아리'
        }
    }

    return (
        <div className='introduction-container'>
            <div className='introduction-title'>왜 멋쟁이사자처럼인가요 ?</div>
            <div className='introduction-subtitle'>
                멋쟁이사자처럼은 IT 서비스 구축을 위한 웹 프로그래밍을 학습하는 <br/> 전국 최대 규모의 IT 연합 동아리입니다.
            </div>
            <div className='introduction-box-list-container'>
                <IntroductionBox introduction={introductionList.techit}/>
                <IntroductionBox introduction={introductionList.networking}/>
                <IntroductionBox introduction={introductionList.activity}/>
                <IntroductionBox introduction={introductionList.everyone}/>
            </div>
        </div>
    );
};

export default Introduction;