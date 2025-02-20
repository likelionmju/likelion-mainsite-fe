import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Recruit.css';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Button from '@/components/Button.jsx';
import axiosInstance from '@/libs/api/instance.js';
import { strictEmailRegex, numberRegex, studentNumberRegex, phoneNumberRegex } from "@/constants/rejex"; 


const RecruitPage = () => {
  const navigate = useNavigate();

  // 중복 검사 상태
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [isPasswordDuplicate, setIsPasswordDuplicate] = useState(null);

  // 개별적인 유효성 검사 상태
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidStudentNumber, setIsValidStudentNumber] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isNumericPassword, setIsNumericPassword] = useState(true);

  // 입력 값 상태
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [militaryService, setMilitaryService] = useState('선택해주세요');
  const [studentStatus, setStudentStatus] = useState('선택해주세요');
  const [applicationPart, setApplicationPart] = useState('선택해주세요');
  const [firstQuestion, setFirstQuestion] = useState('');
  const [secondQuestion, setSecondQuestion] = useState('');
  const [thirdQuestion, setThirdQuestion] = useState('');
  const [fouthQuestion, setFouthQuestion] = useState('');
  const [fifthQuestion, setFifthQuestion] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [passWord, setPassWord] = useState('');
  const [inquiry, setInquiry] = useState('');

  // 모든 필드가 유효한지 체크하는 함수
  const isFormValid = () => {
    if (
      !name ||
      !studentNumber ||
      !department ||
      !phoneNumber ||
      !emailAddress ||
      militaryService === '선택해주세요' ||
      studentStatus === '선택해주세요' ||
      applicationPart === '선택해주세요' ||
      !firstQuestion ||
      !secondQuestion ||
      !thirdQuestion ||
      !fouthQuestion ||
      !fifthQuestion ||
      !agreement ||
      passWord.length !== 4 ||
      !isValidEmail ||
      !isValidStudentNumber ||
      !isValidPhoneNumber ||
      !isNumericPassword
    ) {
      return false;
    }
    return true;
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailAddress(email);
    setIsValidEmail(strictEmailRegex.test(email));
  };

  const handleStudentNumberChange = (e) => {
    const value = e.target.value;
    setStudentNumber(value);
    setIsValidStudentNumber(studentNumberRegex.test(value)); 
  };


  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValidPhoneNumber(phoneNumberRegex.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassWord(value);
    setIsNumericPassword(numberRegex.test(value));
  };


   const checkDuplicate = async () => {
    if (!studentNumber) {
      alert('학번을 입력해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.get(`/api/forms/checkid?studentId=${studentNumber}`);
      
      if (response.status === 200) {
        setIsDuplicate(response.data.data);
      } else {
        console.error('서버 응답 오류:', response);
      }
    } catch (error) {
      console.error('중복 검사 요청 실패:', error);
      alert('중복 검사 중 오류가 발생했습니다.');
    }
  };

   const checkPasswordDuplicate = async () => {
    if (!passWord || passWord.length !== 4) {
      alert('4자리 숫자로 된 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.get(`/api/forms/checkpw?queryNumber=${passWord}`);

      if (response.status === 200) {
        setIsPasswordDuplicate(response.data.data); 
      } else {
        console.error('서버 응답 오류:', response);
      }
    } catch (error) {
      console.error('비밀번호 중복 검사 요청 실패:', error);
      alert('비밀번호 중복 검사 중 오류가 발생했습니다.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!isFormValid()) {
      alert("모든 필수 항목을 올바른 형식으로 작성해 주세요.");
      return;
    }
    
    const userData = {
      name: name,
      studentId: studentNumber,
      department: department,
      phone: phoneNumber,
      email: emailAddress,
      militaryStatus: militaryService,
      enrollmentStatus: studentStatus,
      rolePreference: applicationPart,
      selfIntroduction: firstQuestion,
      learningApproach: secondQuestion,
      teamworkExperience: thirdQuestion,
      participationPlan: fouthQuestion,
      expectations: fifthQuestion,
      consent: agreement,
      queryNumber: passWord,
      question: inquiry,
    };
  
    try {
      const response = await axiosInstance.post('/api/forms/submit', userData);
      console.log('지원 폼 제출 성공:', response.data);
      navigate('/');
    } catch (error) {
      console.error('지원 폼 제출 실패:', error);
      alert('지원 폼 제출에 실패했습니다. 다시 시도해 주세요.');
    }
  };
  

  return (
    <div className="application">
      <Header />
      <div className="form-wrapper">
        <h2>
          <strong className="form-description">
            멋쟁이사자처럼 13기 아기사자 지원서
          </strong>
          <br />
          <small>(2025.02.24 ~ 2025.03.07)</small>
          <br />
          <small className="form-guide">
            <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>{' '}
            표시는 필수 입력 항목입니다.
          </small>
          <br />
        </h2>
        <hr />
        {/* <form> */}
          <div className="form-group">
            <label
              htmlFor="name"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              이름{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="마흥이"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="studentNumber"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              학번{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <div className="duplicate-wrapper">
            <input               
              type="text"
              className="form-control"
              id="studentNumber"
              placeholder="60******"
              required
              onChange={handleStudentNumberChange}>
            </input>
            <button
              type="button"
              className="btn btn-primary"
              onClick={checkDuplicate} 
              style={{ marginTop: '10px' }}
            >
              중복 검사
            </button>
            </div>
            {!isValidStudentNumber && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          학번은 60XXXXXX 형식으로 입력하세요.
        </p>
      )}

            {isDuplicate !== null && (
              <p style={{ color: isDuplicate ? 'red' : 'green', marginTop: '10px' }}>
                {isDuplicate ? '이미 사용 중인 학번입니다.' : '사용 가능한 학번입니다.'}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="username" style={{ color: 'white' }}>
              학과{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <p style={{ color: 'white', fontSize: '12px' }}>
              복수전공, 연계전공 있다면 모두 기재해주세요.
            </p>
            <input
              type="text"
              className="form-control"
              id="department"
              placeholder="데이터사이언스(본) 경영학과(복) 아동학과(연)"
              required
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="age"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              전화번호{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="010-XXXX-XXXX"
              required
              onChange={handlePhoneNumberChange}
            />
            {!isValidPhoneNumber && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          전화번호는 010-XXXX-XXXX 형식으로 입력해야 합니다.
        </p>
      )}
          </div>
          <div className="form-group">
            <label
              htmlFor="height"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              이메일{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="emailAddress"
              placeholder="maheung@mju.ac.kr"
              required
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
        <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          올바른 이메일 형식을 입력하세요.
        </div>
      )}
          </div>
          {/* 성별 남성일 때만 출력 고려 */}
          <div className="form-group">
            <label
              htmlFor="weight"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              병역 사항{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <select
              name=""
              id=""
			  value={militaryService}
              required
              onChange={(e) => setMilitaryService(e.target.value)}
              className="select-control"
            >
              <option value="선택해주세요" disabled>
                선택해주세요
              </option>
              <option value="미필">미필</option>
              <option value="군필">군필</option>
              <option value="해당 없음">해당 없음</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="weight"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              재적 상태{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <select
              name=""
              id=""
			  value={studentStatus}
              required
              onChange={(e) => setStudentStatus(e.target.value)}
              className="select-control"
            >
              <option value="선택해주세요" disabled >
                선택해주세요
              </option>
              <option value="재학">재학</option>
              <option value="휴학">휴학</option>
              <option value="졸업유예">졸업유예</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: '150px' }}>
            <label
              htmlFor="weight"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              지원 파트{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <select
              name=""
              id=""
			  value={applicationPart}
              required
              onChange={(e) => setApplicationPart(e.target.value)}
              className="select-control"
            >
              <option value="선택해주세요" disabled>
                선택해주세요
              </option>
              <option value="프론트엔드">프론트엔드</option>
              <option value="백엔드">백엔드</option>
              <option value="미정">미정</option>
            </select>
          </div>
          <hr />
          <div
            className="form-group"
            style={{ marginTop: '50px', marginBottom: '100px' }}
          >
            <label
              htmlFor="firstQuestion"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              1. 자기소개 & 지원동기 (500자 내외){' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <textarea
              className="textarea-control"
              id="firstQuestion"
              placeholder="답변을 입력해주세요"
              required
              onChange={(e) => setFirstQuestion(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '100px' }}>
            <label
              htmlFor="secondQuestion"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              2. 새로운 분야를 접할 때 자신만의 학습 방법이나 접근 방식이 있다면
              그 방법이 효과적이었던 경험과 함께 작성해주세요. (500자 내외){' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <textarea
              className="textarea-control"
              id="secondQuestion"
              placeholder="답변을 입력해주세요"
              required
              onChange={(e) => setSecondQuestion(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '100px' }}>
            <label
              htmlFor="thirdQuestion"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              3. 효율적인 팀워크를 위해 가장 중요한 요소는 무엇이라고
              생각하나요? 그 요소가 중요한 이유와 실제 경험에서 이를 발휘했던
              사례가 있다면 함께 작성해주세요. (500자 내외){' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <textarea
              className="textarea-control"
              id="thirdQuestion"
              placeholder="답변을 입력해주세요"
              required
              onChange={(e) => setThirdQuestion(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '100px' }}>
            <label
              htmlFor="fouthQuestion"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              4. 멋쟁이사자처럼은 1년 단위로 운영되고 개발 공부에 많은 시간을
              투자해야 합니다. 활동 기간 동안 얼마나 열정적으로 참여할 수
              있는지, 향후 1년 간의 계획과 포부를 작성해주세요. (500자 내외){' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <textarea
              className="textarea-control"
              id="fouthQuestion"
              placeholder="답변을 입력해주세요"
              required
              onChange={(e) => setFouthQuestion(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '150px' }}>
            <label
              htmlFor="fifthQuestion"
              style={{ color: 'white', marginBottom: '20px' }}
            >
              5. 멋쟁이사자처럼 13기 활동에서 기대하는 바, 혹은 이루고자 하는
              바가 있다면 인간관계, 자기 개발, 프로젝트, 개발 실력 등의 분야와
              상관없이 작성해주세요. (500자 내외)
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </label>
            <textarea
              className="textarea-control"
              id="fifthQuestion"
              placeholder="답변을 입력해주세요"
              required
              onChange={(e) => setFifthQuestion(e.target.value)}
            />
          </div>
          <hr />
          <div
            className="form-group"
            style={{ marginBottom: '100px', marginTop: '50px' }}
          >
            <div style={{ color: 'white', marginBottom: '20px' }}>
              개인정보 수집 및 이용동의{' '}
              <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
            </div>
            <div>
              <div className="information-collection-box">
                <strong>1. 개인정보의 수집 및 이용 목적</strong>
                <p>
                  지원자의 식별, 본인 확인, 서류 & 면접 전형 진행(합격여부 확인)
                  및 문의 등의 원활한 처리
                </p>
                <strong>2. 수집하는 개인정보의 항목</strong>
                <ul>
                  <li>
                    [필수항목] : 성명, 학번, 학과, 휴대폰 번호, 이메일 주소,
                    병역사항(대상인 경우), 재적상태
                  </li>
                  <li>[선택항목] : 없음</li>
                </ul>
                <strong>3. 개인정보의 보유 및 이용기간</strong>
                <p>
                  지원 정보: 지원 후부터 면접 전형 합격 결과 발표 시까지 보유{' '}
                  <br />
                  지원자의 개인정보는 동아리내에서 관리되는 db에 저장되어 선발이
                  필요한 경우 해당 db에서 상시선발을 위해 약 3주 동안
                  보관합니다. 다만, 지원자가 개인정보의 삭제를 원하는 경우 지체
                  없이 해당 정보를 삭제합니다.
                </p>
                <strong>
                  4. 동의를 거부할 권리 및 동의 거부에 따른 불이익
                </strong>
                <p>
                  지원자는 개인정보의 수집, 이용 등과 관련한 위 사항에 대하여
                  원하지 않는 경우 동의를 거부할 수 있습니다. 다만, 수집하는
                  개인정보의 항목에서 필수정보에 대한 수집 및 이용에 대하여
                  동의하지 않는 경우는 선발전형에 제한이 있을 수 있습니다.
                  제출된 서류는 합격 결과 발표 시까지 보관되며, 지원자가 삭제를
                  원하는 경우 인스타그램 @likelion_mju로 연락을 주시면 지체없이
                  삭제하도록 도와드리겠습니다.
                </p>
              </div>
              <div className="checkbox-wrapper">
                <label
                  htmlFor="agree1"
                  style={{ color: 'white' }}
                >
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <input
                    type="checkbox"
                    id="agree1"
                    required
                    style={{ height: '20px', width: '20px', margin: 'initial' }}
					onChange={(e) => setAgreement(true)}
                  />
              </div>
            </div>
          </div>
          <hr />
          <div className="form-group">
          <label htmlFor="passWord" style={{ color: 'white' }}>
            비밀번호
            <span style={{ marginLeft: '2px', color: '#3383FE' }}>*</span>
          </label>
          <p style={{ color: 'white', fontSize: '12px' }}>
            서류전형 및 면접전형 합격여부 결과 확인용 네자리 비밀번호를 만들어주세요.
          </p>
          <div className="duplicate-wrapper">
          <input
            type="text"
            className="form-control"
            id="passWord"
            placeholder="XXXX"
            required
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={checkPasswordDuplicate}
          >
            중복 검사
          </button>
          </div>
          {!isNumericPassword && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          비밀번호는 숫자만 입력할 수 있습니다.
        </p>
      )}
          {isPasswordDuplicate !== null && (
            <p style={{ color: isPasswordDuplicate ? 'red' : 'green', marginTop: '10px' }}>
              {isPasswordDuplicate ? '이미 사용 중인 비밀번호입니다.' : '사용 가능한 비밀번호입니다.'}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="inQuiry" style={{ color: 'white', marginBottom: '20px' }}>
            문의사항 및 궁금한 점
          </label>
          <textarea
            className="textarea-control"
            id="inQuiry"
            placeholder="답변을 입력해주세요"
            onChange={(e) => setInquiry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Button type="submit" disabled={!isFormValid()} onClick={handleSubmit}>
            지원서 제출
          </Button>
        </div>
      </div>

      <Footer />
    </div>
);
}

export default RecruitPage;