import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Community from './pages/Community';
import CatalogDetail from './pages/CatalogDetail';
import PostDetail from './pages/PostDetail';

function FeStudy() {
    return (

        < div >
            {/* GNV */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: '150px',
                backgroundColor: 'white',
                border: 'solid 1px #b9b9b9c4',
                height: '60px',
                width: '100%',
                position: 'fixed'
            }
            }>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}><strong><span style={{ color: '#279eff', fontSize: '25px' }}>FE<span style={{ color: 'black' }}>Academy</span></span></strong>
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link to="/catalog"><button type="button" className="btn btn-light">카탈로그</button></Link>
                    <Link to="/community"><button type="button" className="btn btn-light">커뮤니티</button></Link>

                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-dark">로그인</button>
                </div>

            </nav >
            {/* GNV */}


            {/* 실제 화면이 바뀌는 영역 */}
            <div style={{ paddingTop: '60px' }}>
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
            <footer style={{ backgroundColor: '#101828', padding: '40px 50px', color: '#EAECF0', margin: '0px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                    {/* 왼쪽: 로고 및 사이트 설명 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'px' }}>
                        <div>
                            <strong>
                                <span style={{ fontSize: '28px', color: '#FFFFFF', textDecoration: 'none' }}>
                                    FE<span style={{ color: '#279eff' }}>Academy</span>
                                </span>
                            </strong>
                        </div>
                        <div style={{ fontSize: '15px', color: '#98A2B3' }}>
                            프론트엔드 개발의 뼈대부터 완성까지.<br />
                            체계적인 커리큘럼으로 실력을 키우세요.
                        </div>
                    </div>
                    {/* 왼쪽: 로고 및 사이트 설명 */}

                    {/* 오른쪽: 링크 섹션 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left', padding: '20px' }}>
                        <div>
                            <strong><span style={{ fontSize: '16px', color: '#FFFFFF' }}>링크</span></strong>
                        </div>
                        <div>
                            <a
                                href='https://github.com/wnsgk0509/FE_study'
                                target='_blank'
                                style={{
                                    fontSize: '15px',
                                    color: '#279eff',
                                    textDecoration: 'none'
                                }}
                            >
                                <strong>GitHub</strong>
                            </a>
                        </div>
                    </div>

                </div>
                {/* 오른쪽: 링크 섹션 */}

                {/* 하단 저작권 표시 */}
                <div style={{
                    marginTop: '40px',
                    paddingTop: '20px',
                    borderTop: '1px solid #1D2939',
                    textAlign: 'center',
                    fontSize: '13px',
                    color: '#667085'
                }}>
                    © 2026 FE-Academy. All rights reserved.
                </div>
                {/* 하단 저작권 표시 */}

            </footer>
            {/* Footer */}

        </div >
    )
}

export default FeStudy;