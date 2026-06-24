import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Community.css";

function Community() {
    const [ selectedTab, setSelectedTab ] = useState("Q&A");
    const navigate = useNavigate();

    return (
        <main className="community-page">
            <section className="community-header">
                <div>
                    <nav style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '20px' }}>
                        <Link to="/community/communityDetail"><button>커뮤니티 상세페이지</button></Link>
                    </nav>




                    <h1>무엇이든 물어보세요</h1>
                    <h4>함께 배우고 성장하는 공간입니다</h4>
                </div>

                <button className="write-button">글쓰기</button>
            </section>

            <div className="search-box">
                <span className="search-icon">⌕</span>
                <input type="text" placeholder="궁금한 내용을 검색해보세요" />
            </div>

            <div className="category-tabs">
                <button
                    className={selectedTab === "Q&A" ? "tab active" : "tab"}
                    onClick={() => setSelectedTab("Q&A")}
                >
                    Q&amp;A
                </button>

                <button
                    className={selectedTab === "팁 공유" ? "tab active" : "tab"}
                    onClick={() => setSelectedTab("팁 공유")}
                >
                    팁 공유
                </button>

                <button
                    className={selectedTab === "자유게시판" ? "tab active" : "tab"}
                    onClick={() => setSelectedTab("자유게시판")}
                >
                    자유게시판
                </button>
            </div>

            {selectedTab === "Q&A" && (
                <>
                    <section className="post-list">
                        <article
                            className="post-item"
                            onClick={() =>navigate("/community/communityDetail?id=id1")}
                        >
                            <div className="post-main" >
                                <span className="category-badge qa-badge">Q&amp;A</span>
                                <strong>Flexbox와 Grid 중 언제 어떤 걸 써야 하나요?</strong>
                            </div>
                            <div className="post-info">
                                <span>김민준</span>
                                <span>·</span>
                                <span>2026-06-15</span>
                                <span className="reply-count">답글 8</span>
                            </div>
                        </article>

                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id2")}
                        >
                            <div className="post-main">
                                <span className="category-badge qa-badge">Q&amp;A</span>
                                <strong>useEffect 의존성 배열이 왜 이렇게 헷갈리죠?</strong>
                            </div>
                            <div className="post-info">
                                <span>박지호</span>
                                <span>·</span>
                                <span>2026-06-13</span>
                                <span className="reply-count">답글 12</span>
                            </div>
                        </article>
                    </section>

                    <p className="post-total">2개의 게시글</p>
                </>
            )}

            {selectedTab === "팁 공유" && (
                <>
                    <section className="post-list">
                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id3")}
                        >
                            <div className="post-main">
                                <span className="category-badge tip-badge">팁 공유</span>
                                <strong>CSS 변수로 다크모드 구현하는 가장 쉬운 방법</strong>
                            </div>
                            <div className="post-info">
                                <span>이서연</span>
                                <span>·</span>
                                <span>2026-06-14</span>
                                <span className="reply-count">답글 15</span>
                            </div>
                        </article>

                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id4")}
                        >
                            <div className="post-main">
                                <span className="category-badge tip-badge">팁 공유</span>
                                <strong>비동기 에러 핸들링 패턴 3가지 정리</strong>
                            </div>
                            <div className="post-info">
                                <span>장현우</span>
                                <span>·</span>
                                <span>2026-06-11</span>
                                <span className="reply-count">답글 9</span>
                            </div>
                        </article>

                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id5")}
                        >
                            <div className="post-main">
                                <span className="category-badge tip-badge">팁 공유</span>
                                <strong>Chrome DevTools 단축키 완전 정리</strong>
                            </div>
                            <div className="post-info">
                                <span>임나영</span>
                                <span>·</span>
                                <span>2026-06-08</span>
                                <span className="reply-count">답글 18</span>
                            </div>
                        </article>
                    </section>

                    <p className="post-total">3개의 게시글</p>
                </>
            )}

            {selectedTab === "자유게시판" && (
                <>
                    <section className="post-list">
                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id6")}
                        >
                            <div className="post-main">
                                <span className="category-badge free-badge">자유게시판</span>
                                <strong>프론트엔드 공부 6개월 후기 공유합니다</strong>
                            </div>
                            <div className="post-info">
                                <span>최유진</span>
                                <span>·</span>
                                <span>2026-06-12</span>
                                <span className="reply-count">답글 31</span>
                            </div>
                        </article>

                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id7")}
                        >
                            <div className="post-main">
                                <span className="category-badge free-badge">자유게시판</span>
                                <strong>HTML/CSS만으로 포트폴리오 사이트 만들어봤어요</strong>
                            </div>
                            <div className="post-info">
                                <span>강도현</span>
                                <span>·</span>
                                <span>2026-06-09</span>
                                <span className="reply-count">답글 22</span>
                            </div>
                        </article>

                        <article
                            className="post-item"
                            onClick={() => navigate("/community/communityDetail?id=id8")}
                        >
                            <div className="post-main">
                                <span className="category-badge free-badge">자유게시판</span>
                                <strong>코딩 스터디 같이 하실 분 구합니다 (React)</strong>
                            </div>
                            <div className="post-info">
                                <span>한지민</span>
                                <span>·</span>
                                <span>2026-06-06</span>
                                <span className="reply-count">답글 14</span>
                            </div>
                        </article>
                    </section>
                    <p className="post-total">3개의 게시글</p>
                </>
            )}
        </main>
    );
}

export default Community;