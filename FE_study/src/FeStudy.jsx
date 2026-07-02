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
import { useState } from 'react';
import LoginForm from './form/LoginForm';
import Footer from './component/Footer';
import { communityPosts } from './data/dummyCommunityData';

function FeStudy() {

    // 로그인 폼
    const [isLoginModal, setIsLoginModal] = useState(false);

    // 로그인 상태를 로컬스토리지와 연동 
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLogIn') === 'true';
    });

    //  프로필 이름도 새로고침 시 로컬스토리지의 유저 정보에서 꺼내오기
    const [profile, setProfile] = useState(() => {
       
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const userObj = JSON.parse(savedUser);
            return userObj.userName; // 로그인한 유저의 이름 반환
        }
        return '';
    })


    //  로컬 스토리지 데이터를 관리할 State 추가 (최초 1회만 실행됨)
    const [localCommunityData, setLocalCommunityData] = useState(() => {
        const isData = window.localStorage.getItem('postsData');
        
        if (isData) {
            // 저장된 데이터가 있으면 불러옴
            return JSON.parse(isData); 
        } else {
            // 없으면 임의 데이터를 저장하고 반환
            window.localStorage.setItem('postsData', JSON.stringify(communityPosts));
            return communityPosts;
        }
    });

    // 로그인 / 로그아웃 핸들러 버튼 클릭시
    const handleButtonClick = () => {
        if (isLoggedIn) {
            //  로그아웃 시 로컬스토리지 제거
            localStorage.removeItem('isLogIn');
            localStorage.removeItem('user');

            setIsLoggedIn(false);
            setProfile('');

        } else {
            setIsLoginModal(true);
        }
    };

    return (
        <div>
            {/* GNV */}
            <div style={{ marginBottom: '60px' }}>
                <GNV
                    profile={profile}
                    isLoggedIn={isLoggedIn}
                    handleButtonClick={handleButtonClick}
                />
            </div>
            {/* GNV */}

            {/* 로그인폼 */}
            {isLoginModal && (
                <LoginForm
                    isLoginModal={isLoginModal}
                    setIsLoginModal={setIsLoginModal}     // 모달을 닫기 위해 전달
                    dummyUserData={dummyUserData}         // 유저 데이터 검증을 위해 전달
                    setProfile={setProfile}               // 프로필 이름을 변경하기 위해 전달
                    setIsLoggedIn={setIsLoggedIn}         // 로그인 상태를 변경하기 위해 전달
                />
            )}
            {/* 로그인폼 */}


            {/* body 섹션 */}
            <div>
                <Routes>
                    <Route path={"/"} element={<HomePage />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                    <Route path={"/community"} element=
                        {<Community
                            localCommunityData={localCommunityData}
                        />}></Route>
                    <Route path="/catalog/catalogDetail" element={<CatalogDetail />}></Route>
                    <Route path="/community/communityDetail" element=
                        {<PostDetail
                            isLoggedIn={isLoggedIn}
                            profile={profile}
                            localCommunityData={localCommunityData}
                            setLocalCommunityData={setLocalCommunityData}

                        />}>
                    </Route>

                    <Route path="/catalog/:id" element={<CatalogDetail />} />
                </Routes>
            </div>
            {/* body 섹션 */}

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    )
}

export default FeStudy;