import { useParams } from 'react-router-dom';
import { dummyData } from '../data/dummyData';
import "./CatalogDetail.css"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/CSS.png"
import jsLogo from "../assets/JS.png"
import reactLogo from "../assets/REACT.png"



function CatalogDetail() {
    const { id } = useParams(); 

    const currentItem = dummyData.find(item => item.id === Number(id));

    if (!currentItem) return <div>페이지를 찾을 수 없습니다.</div>;
    
const { text1, text2, difficult, explain, time , imgUrl, videoUrl} = currentItem.value;

let currentImg;
    if (text1 === "HTML") currentImg = htmlLogo;
    else if (text1 === "CSS") currentImg = cssLogo;
    else if (text1 === "JavaScript") currentImg = jsLogo;
    else if (text1 === "React") currentImg = reactLogo;

    return (
        

        <>
        <div style={{marginLeft:10}}className="banner"> 
            <div className="img">
            <img className="image" src={currentImg}/>
            <iframe className="frame"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            </div>

            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <span className="badge-text1" style={{ background: '#e3f2fd', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', color: '#0d47a1' }}>
                    {text1}
                </span>
                <span className="badge-difficult" style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px', color: '#616161' }}>
                    난이도: {difficult}
                </span>
            </div>

            {/* 강의 제목 */}
            <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#212121' }}>{text2}</h1>
            
            <hr style={{ border: '0', height: '1px', background: '#ddd', marginBottom: '20px' }} />

            {/* 강의 상세 설명 */}
            <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#424242', fontSize: '18px' }}>
                <p>{explain}</p>
            </div>

            {/* 소요 시간 정보 */}
            <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <p style={{ margin: 0, color: '#666' }}>
                    ⏱️ 총 예상 학습 시간: <strong>{time}</strong>
                </p>
            </div>
        </div>
        </>
    );
}

export default CatalogDetail;