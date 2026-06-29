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

    const [ isLoginModal, setIsLoginModal ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    //로그인 정보 랜더링
    const [ profile, setProfile ] = useState('');

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
            {/* GNV */}
            <GNV
                profile={profile}
                isLoggedIn={isLoggedIn}
                handleButtonClick={handleButtonClick}
            />
            {/* GNV */}

            {/* 로그인폼 */}
            {isLoginModal && (<LoginForm
                isLoginModal={isLoginModal}
                setIsLoginModal={setIsLoginModal}     // 모달을 닫기 위해 전달
                dummyUserData={dummyUserData}         // 유저 데이터 검증을 위해 전달
                setProfile={setProfile}               // 프로필 이름을 변경하기 위해 전달
                setIsLoggedIn={setIsLoggedIn}         // 로그인 상태를 변경하기 위해 전달
            />)}
            {/* 로그인폼 */}
            {/* 로그인폼 */}


            {/* 실제 화면이 바뀌는 영역 */}
            <div>
                <Routes>
                    <Route path={"/"} element={<HomePage />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                    <Route path={"/community"} element={<Community />}></Route>
                    <Route path="/catalog/catalogDetail" element={<CatalogDetail />}></Route>
                    <Route path="/community/communityDetail" element={<PostDetail isLoggedIn={isLoggedIn} profile={profile}/>}></Route>
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