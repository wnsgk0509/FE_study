import React from "react";
import './StudyBox.css';
import { Link } from "react-router-dom";
const StudyBox = ({data , id}) =>{
const { text1 , text2 , difficult , explain , time} = data;
    return(
        <>
        {/* 카탈로그 상세 페이지 컴포넌트 박스 / 더미데이터에서 데이터 전달 받음 */}
        <Link to={`/catalog/${id}`}><button className="studyBox">
            <p className="study1">{text1}</p>
            <p className="study2">{text2}</p>    
            <p className="study3">{difficult}</p>    
            <p className="study4">{explain}</p>    
            <p className="study5">{time}</p>    

        </button></Link>
        
        </>
    )
}
export default StudyBox;