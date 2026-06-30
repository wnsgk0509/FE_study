import { useParams, Link } from 'react-router-dom';
import dummyData from '../data/dummyData';
import { useState } from 'react';
import "./CatalogDetail.css";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/CSS.png";
import jsLogo from "../assets/JS.png";
import reactLogo from "../assets/REACT.png";

function CatalogDetail() {
    const { id } = useParams(); 
    // 존재하지 않는 페이지 식별
    const currentItem = dummyData.find(item => item.id === Number(id));

    if (!currentItem) return <div>페이지를 찾을 수 없습니다.</div>;
    //더미데이터 value 안에있는 것 , 넘겨 받기
    const { text1, text2, difficult, explain, time, videoUrl, links = [], content = [] } = currentItem.value;
    //text1과 일치하는것과 맞는 로고 지정
    let currentImg;
    if (text1 === "HTML") currentImg = htmlLogo;
    else if (text1 === "CSS") currentImg = cssLogo;
    else if (text1 === "JavaScript") currentImg = jsLogo;
    else if (text1 === "React") currentImg = reactLogo;

    return (
        <div>
            <div className="banner animate__animated animate__fadeIn"> 
                <div className="img">
                    <img className="image" src={currentImg} alt={text1} /> {/*text1 과 일치하는 로고 출력*/}
                </div>
            {/* 상단 배너 학습 과목 설명 텍스트 박스 */}
                <div className="explain">
                    <div className="text-box">
                        <span className="badge-text1">
                            {text1}
                        </span>
                        <span className="badge-difficult">
                            난이도: {difficult}
                        </span>
                    </div>

                    <h1 className="badge-text2">{text2}</h1>
                    

                    <div className='badge-explainBox'>
                        <p className='badge-explain'>{explain}</p>
                    </div>

                    <div className='timeBox'>
                        <p className='badge-time'>
                            총 예상 학습 시간: <strong>{time}</strong>
                        </p>
                    </div>
                </div>
                
                <div>
                    <iframe className="frame" src={videoUrl} allowFullScreen title="강의 영상"></iframe>
                </div>

                <div className="link"> 
                    <div className="study">
                        <div className='moveLink'>
                            <h3 className="mainText">
                                다른 과목 바로가기
                            </h3>
                            {/* 더미데이터 links에서 데이터를 받아와서 maps를 이용해 각 페이지에 출력 */}
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {links.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '8px' }}>
                                        <Link to={item.path} style={{ textDecoration: 'none', fontWeight: '500', color: '#0d47a1' }}>
                                            <span style={{ cursor: 'pointer' }}>
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* 아코디언 컴포넌트 출력 */}
                        <div className='accordion'>
                            <Accordion list={content} />
                        </div>
                </div>
                
                
            </div>
        </div>
    );
}

// 💡 아코디언 분할 및 토글 관리 컴포넌트
function Accordion({ list }) {
    const [openIndex, setOpenIndex] = useState(null);
    // 배너를 클릭했을때 닫혀있다면 열어주고 열려있다면 닫아준다.
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // 9개의 데이터를 각각 3개씩 분할 슬라이싱
    const lecture1 = list.slice(0, 3);
    const lecture2 = list.slice(3, 6);
    const lecture3 = list.slice(6, 9);

    // 개별 아코디언 바 아이템 렌더링 함수 (오타 수정완료)
    const renderAccordionItem = (index, title, subTitles) => {
        const isOpen = openIndex === index;
    
        return (
            <div className='accordion-box'>
                <div 
                // 클릭했을때 handleToggle 함수 실행
                    onClick={() => handleToggle(index)} 
                    className='cqTextBox'
                    style={{background: isOpen ? '#f1f3f5' : '#fcfcfc'}}
                >
                    <span className='cqTextBanner'>{title}</span>
                    <span style={{ color: '#888' }}>{isOpen ? "▲" : "▼"}</span>
                </div>
                {/* 배너를 열었을때 map을 돌려서 sub 데이터를 출력*/}
                {isOpen && (
                    <div className='subTitle-All'>
                        {subTitles.length > 0 ? (
                            subTitles.map((sub, i) => (
                                <div key={i} className='subTitle-textBox'>
                                    <span className='subTitle-Text' >{sub}</span>
                                </div>
                            ))
                        ) : (
                            <div>준비된 강의가 없습니다.</div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='cq-Main'>
            <h3 className='cq-Info'>📖 커리큘럼 안내</h3>
            {renderAccordionItem(1, "▶ 1강: 기초 핵심 다지기 (1~3차시)", lecture1)}
            {renderAccordionItem(2, "▶ 2강: 심화 이론 분석 (4~6차시)", lecture2)}
            {renderAccordionItem(3, "▶ 3강: 실전 응용 실습 (7~9차시)", lecture3)}
        </div>
    );
}

export default CatalogDetail;