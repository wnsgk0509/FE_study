import './LoginForm.css'
import { useState } from "react";
import profile from '../assets/totoro.png'

function LoginForm({ dummyUserData, setProfile, setIsLoggedIn, setIsLoginModal}){

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');



    return (
        <div className="modal-box animate__animated animate__fadeIn">

            <div className="modal-content">
                <button  onClick={() => setIsLoginModal(false)} className="close">x</button>
                <img className="login-profile" src={profile} />
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const foundUser = dummyUserData.find(dummyUserData => dummyUserData.userId === inputId);

                    if (foundUser) {

                        if (foundUser.userPw === inputPw) {
                            alert(`${foundUser.userName}님 환영합니다!`);
                            setProfile(foundUser.userName);
                            setIsLoggedIn(true);     // 로그인 상태로 변경
                            setIsLoginModal(false);  // 모달창 닫기
                            setInputId('');          // 입력 필드 초기화
                            setInputPw('');          // 입력 필드 초기화
                        } else {
                            alert("비밀번호가 일치하지 않습니다.");
                        }

                    } else {
                        alert("존재하지 않는 아이디입니다.");
                    }


                }}>
                    <input className = 'idBtn'
                        type="text"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}
                        placeholder="아이디" />

                    <input className = 'pwBtn'
                        type="password"
                        value={inputPw}
                        onChange={(e) => setInputPw(e.target.value)}
                        placeholder="비밀번호" />
                    <button className = 'loginBtn' type="submit">로그인</button>

                </form>
                

            </div>

        </div>
    )
}
export default LoginForm;