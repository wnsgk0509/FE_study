import './HomePage.css';

import { Link } from 'react-router-dom';

function HomePage() {
    return (
        
        <div className='Home-bg-color' >

            <div className='Home-Text'>
                <div className='Title-Text'>
                    <h1>프론트엔드 개발의</h1>
                    <h1 style={{ color: 'yellow' }}>뼈대부터 완성까지</h1>
                </div>



                <div className='Sub-Text'>
                    <span>HTML, CSS, JavaScript, React를 하나의 플랫폼에서</span><br />
                    <span>체계적인 순서로 흔들리지 않는 실력을 쌓으세요</span>
                </div>
                <div className='Func-Button'>
                    <Link to="/catalog"><button type="button" className="btn btn-light">학습 시작하기 </button></Link>
                    <Link to="/community"><button type="button" className="btn btn-light">커뮤니티 둘러보기</button></Link>
                </div>
                <hr style={{ color: 'white' }} />

                <div className='Site-Info'>
                    인강사이트 스팩 넣기 
                    

                </div>
            </div>


        </div>
    )
}

export default HomePage;