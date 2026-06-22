import "./CatalogDetail.css"

function CatalogDetail(){
    return(
        <>
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
                <div className="studyBox "></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>
                <div className="studyBox"></div>


            </div>


        </>
    )
}
export default CatalogDetail;