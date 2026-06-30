import { Link } from 'react-router-dom';
import StudyBox from '../component/StudyBox';
import './Catalog.css';
import { useState } from 'react';
import  dummyData  from '../data/dummyData';

function Catalog() {
    // 기본값을 'null'(전체)로 설정하여 처음엔 전체가 눌려있도록 합니다.
    const [activeText, setActiveText] = useState(null);

    return (
        <div className="bgcolor animate__animated animate__fadeIn">
             {/* 메인 배너 */}
            <div className="mainBanner">
                <p className="main11">학습 카탈로그</p>
                <p className="main12">총 12개의 코스가 준비되어 있습니다.</p>
            </div>
            {/* 버튼 클릭시 해당하는 탭 창 출력 */}
            <div className="main2Banner">
                <button 
                    onClick={() => setActiveText(null)} 
                    className={`btn_ALL ${activeText === null ? 'active' : ''}`}
                >
                    전체
                </button>
                <button 
                    onClick={() => setActiveText('HTML')} 
                    className={`btn_HTML ${activeText === 'HTML' ? 'active' : ''}`}
                >
                    HTML
                </button>
                <button 
                    onClick={() => setActiveText('CSS')} 
                    className={`btn_CSS ${activeText === 'CSS' ? 'active' : ''}`}
                >
                    CSS
                </button>
                <button 
                    onClick={() => setActiveText('JavaScript')} 
                    className={`btn_JS ${activeText === 'JavaScript' ? 'active' : ''}`}
                >
                    JS
                </button>
                <button 
                    onClick={() => setActiveText('React')} 
                    className={`btn_REACT ${activeText === 'React' ? 'active' : ''}`}
                >
                    React
                </button>
            </div>
            {/* 상세페이지 컴포넌트 박스 */}
            <div className="Box"> 
                {dummyData
                    .filter(item => activeText === null || item.value.text1 === activeText)
                    .map(item => (
                        <StudyBox
                            key={item.id}
                            id={item.id}
                            data={item.value}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Catalog;