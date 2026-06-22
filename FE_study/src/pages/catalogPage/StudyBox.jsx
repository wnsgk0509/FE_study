import React from "react";
import '../catalogPage/StudyBox.css';
import { Link } from "react-router-dom";
const StudyBox = ({data}) =>{
const { text1 , text2 , difficult , explain , time} = data;
    return(
        <>
        <Link to="/catalog/catalogDetail"><button className="studyBox">
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