import {Link } from 'react-router-dom';
import StudyBox from './catalogPage/StudyBox';
import './Catalog.css';

import { dummyData } from '../data/dummyData';



function Catalog() {
    return (
        <div>
             {/* 메인 배너 */}
            <div className="mainBanner">
                <p className="main11">학습 카탈로그</p>
                <p className="main12">총 12개의 코스가 준비되어 있습니다.</p>
            </div>
            {/* 학습 과목 선택 */}
            <div className="main2Banner">
                <button className="btn1">전체</button>
                <button className="btn2">HTML</button>
                <button className="btn3">CSS</button>
                <button className="btn4">JS</button>
                <button className="btn5">React</button>
            </div>
            <div>
            
                {dummyData.map((item)=>(
                    <StudyBox
                    key={item.id}
                    data={item.value}
                    />
                ))}
                
                
                


            


            </div>

        </div>
        
    )
}

export default Catalog;