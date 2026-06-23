import { Routes, Route, Link } from 'react-router-dom';


// 사용할 페이지 컴포넌트들을 불러옵니다. (경로는 실제 파일 위치에 맞게 수정하세요)
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Community from './pages/Community';
import CatalogDetail from './pages/CatalogDetail';
import PostDetail from './pages/PostDetail';



function FeStudy() {
    return (
        <div>
            {/* 페이지 이동을 위한 메뉴 바 */}
            <nav style={{
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'space-between',
                backgroundColor: '#eee'
            }}>
                <div style={{  display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/">FE academy</Link>
                </div>

                <div style={{  display: 'flex', justifyContent: 'center'}}>
                    <Link to="/catalog"><button>카탈로그</button></Link>
                    <Link to="/community"><button>커뮤니티</button></Link>
                </div>

                <div style={{  display: 'flex', justifyContent: 'flex-end' }}>
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

        </div>
    )
}

export default FeStudy;