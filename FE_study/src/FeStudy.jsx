import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './FeStudy.css'

import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Community from './pages/Community';
import CatalogDetail from './pages/CatalogDetail';
import PostDetail from './pages/PostDetail';
import dummyUserData from './data/dummyUserData';
import GNV from './component/GNV';
import {useState } from 'react';
import LoginForm from './form/LoginForm';
import Footer from './component/Footer';

function FeStudy() {

    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //로그인 정보 랜더링
    const [profile, setProfile] = useState('');

    const handleButtonClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            setProfile('');

        } else {
            setIsLoginModal(true);
        }

    };


    return (

        < div >
<<<<<<< HEAD
            {/* GNV */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '150px',
                backgroundColor: 'white',
                border: 'solid 1px #b9b9b9c4',
                height: '60px',
                width: '100%',
                position: 'sticky',
                top: 0,
                zIndex: 1    /*네비게이션바가 제일 앞에오게 */
            }
            }>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/" style={{ textDecoration: 'none', width:'320px' }}><strong><span style={{ color: '#279eff', fontSize: '25px' }}>FE<span style={{ color: 'black' }}>Academy</span></span></strong>
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center'  }}>

                    <Link to="/catalog"><button type="button" className="btn btn-light" style={{ width: '100px' }}>카탈로그</button></Link>
                    <Link to="/community"><button type="button" className="btn btn-light" style={{ width: '100px' }}>커뮤니티</button></Link>

                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="profile">
                        {profile && `${profile}님 환영합니다!`}
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{ width: '100px' }}
                        onClick={handleButtonClick}
                    >{isLoggedIn ? '로그아웃' : '로그인'}</button>
                </div>
                
                

            </nav >
            {/* GNV */}
=======
            <GNV
                profile={profile}
                isLoggedIn={isLoggedIn}
                handleButtonClick={handleButtonClick}
            />
>>>>>>> 5778a26f8872d5f56502218d42ed0be611e5f94d

            {/* 로그인폼 */}
            {isLoginModal && (<LoginForm
                isLoginModal={isLoginModal}
                setIsLoginModal={setIsLoginModal}     // 모달을 닫기 위해 전달
                dummyUserData={dummyUserData}         // 유저 데이터 검증을 위해 전달
                setProfile={setProfile}               // 프로필 이름을 변경하기 위해 전달
                setIsLoggedIn={setIsLoggedIn}         // 로그인 상태를 변경하기 위해 전달
            />)}
            {/* 로그인폼 */}


            {/* 실제 화면이 바뀌는 영역 */}
            <div>
                <Routes>
                    <Route path={"/"} element={<HomePage />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                    <Route path={"/community"} element={<Community />}></Route>
                    <Route path="/catalog/catalogDetail" element={<CatalogDetail />}></Route>
                    <Route path='/community/communityDetail' element={<PostDetail />}></Route>
                    <Route path="/catalog/:id" element={<CatalogDetail />} />

                </Routes>
            </div>
            {/* 실제 화면이 바뀌는 영역 */}

            {/* Footer */}
            <Footer/>
            {/* Footer */}

        </div >
    )
}

export default FeStudy;