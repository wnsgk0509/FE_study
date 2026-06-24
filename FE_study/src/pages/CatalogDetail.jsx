import { useParams, Link } from 'react-router-dom';
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
    
    // 💡 구조 분해 할당에 'links' 배열을 추가합니다. (기본값 빈 배열 설정)
    const { text1, text2, difficult, explain, time, videoUrl, links = [] } = currentItem.value;

    let currentImg;
    if (text1 === "HTML") currentImg = htmlLogo;
    else if (text1 === "CSS") currentImg = cssLogo;
    else if (text1 === "JavaScript") currentImg = jsLogo;
    else if (text1 === "React") currentImg = reactLogo;

    return (
        <div >
        <div  className="banner"> 
            <div className="img">
                <img className="image" src={currentImg} alt={text1} />
                </div>
                

                <div className="explain">
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <span className="badge-text1" style={{ background: '#e3f2fd', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', color: '#0d47a1' }}>
                            {text1}
                        </span>
                        <span className="badge-difficult" style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px', color: '#616161' }}>
                            난이도: {difficult}
                        </span>
                    </div>

                    <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#212121' }}>{text2}</h1>
                    
                    <hr style={{ border: '0', height: '1px', background: '#ddd', marginBottom: '20px' }} />

                    <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#424242', fontSize: '18px' }}>
                        <p>{explain}</p>
                    </div>

                    <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '20px' }}>
                        <p style={{ margin: 0, color: '#666' }}>
                            총 예상 학습 시간: <strong>{time}</strong>
                        </p>
                    </div>
                    </div>
                <div >
                <iframe className="frame" src={videoUrl} allowFullScreen></iframe>
            </div>
            <Link to="/catalog"><button type="button" class="backCatalog btn btn-outline-primary">
                    카탈로그 돌아가기
                    </button></Link>

            <div className="link"> 
                <div className="study">
                    

                    <div style={{ marginTop: '20px', marginLeft: '40px' }}>
                        <h3 style={{ color: '#212121', marginBottom: '12px', fontSize: '18px' }}>
                            다른 과목 바로가기
                        </h3>
                        
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

                
            </div>
        </div>
        </div>
    );
}

export default CatalogDetail;