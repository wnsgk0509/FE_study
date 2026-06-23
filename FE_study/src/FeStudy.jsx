import { Routes, Route, Link } from 'react-router-dom';


// 사용할 페이지 컴포넌트들을 불러옵니다. (경로는 실제 파일 위치에 맞게 수정하세요)
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Community from './pages/Community';
import CatalogDetail from './pages/CatalogDetail';
import PostDetail from './pages/PostDetail';

{/* 
    FeStudy 코드구조
    GNV 
    
    Routes

    Footer 
*/}
function FeStudy() {
    return (
        <div>
            {/* GNV */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white'
            }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/"><strong><span style={{ color: 'c177ec', fontSize: '25px' }}>FE<span style={{ color: 'black' }}>acdemy</span></span></strong>
                    </Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/catalog"><button>카탈로그</button></Link>
                    <Link to="/community"><button>커뮤니티</button></Link>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button>로그인</button>
                </div>
            </nav>

            {/* 실제 화면이 바뀌는 영역 */}
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
                <Route path="/catalog" element={<Catalog />}></Route>
                <Route path={"/community"} element={<Community />}></Route>
                <Route path="/catalog/catalogDetail" element={<CatalogDetail />}></Route>
                <Route path='/community/communityDetail' element={<PostDetail />}></Route>
            </Routes>

            {/* Footer */}
            <footer style={{ backgroundColor: '#101828', padding: '40px 50px', color: '#EAECF0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>

                    {/* 왼쪽: 로고 및 사이트 설명 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <strong>
                                <span style={{ fontSize: '28px', color: '#FFFFFF' }}>
                                    FE<span style={{ color: '#c177ec' }}>academy</span>
                                </span>
                            </strong>
                        </div>
                        <div style={{ fontSize: '15px', color: '#98A2B3', lineHeight: '1.6' }}>
                            프론트엔드 개발의 뼈대부터 완성까지.<br />
                            체계적인 커리큘럼으로 실력을 키우세요.
                        </div>
                    </div>

                    {/* 오른쪽: 링크 섹션 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left', padding:'20px' }}>
                        <div>
                            <strong><span style={{ fontSize: '16px', color: '#FFFFFF'  }}>링크</span></strong>
                        </div>
                        <div>
                            <a
                                href='https://github.com/wnsgk0509/FE_study'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{
                                    fontSize: '15px',
                                    color: '#c177ec',
                                    textDecoration: 'none',
                                    fontWeight: '600'
                                }}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>

                {/* 하단 저작권 표시 */}
                <div style={{
                    marginTop: '40px',
                    paddingTop: '20px',
                    borderTop: '1px solid #1D2939',
                    textAlign: 'center',
                    fontSize: '13px',
                    color: '#667085'
                }}>
                    © 2026 FEacademy. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default FeStudy;