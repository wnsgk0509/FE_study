import { useState, useEffect , useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { categories} from "../data/dummyCommunityData";
import "./Community.css";

function Community({localCommunityData}) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
   

    const [selectedTab, setSelectedTab] = useState(
        searchParams.get("tab") || "Q&A"
    );
    const allTitles = localCommunityData[selectedTab].map(post => post.title);


    useEffect(() => {
        const tab = searchParams.get("tab");

        if (tab && localCommunityData[tab]) {
            setSelectedTab(tab);
        } else {
            setSelectedTab("Q&A");
        }
    }, [searchParams]);

    const changeTab = (tab) => {
        setSelectedTab(tab);

        setSearchParams({
            tab: tab,
        });
    };


    const [searchTerm, setSearchTerm] = useState('')
                                                        // 데이터 미보유시 undefined 대비 안전장치
    const currentTabPosts = localCommunityData[selectedTab] || [/*빈배열*/];
    const filteredPosts = currentTabPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <main className="community-page animate__animated animate__fadeIn" style={{width:'100%'}}>
            <section className="community-header">
                <div>
                    <h1>무엇이든 물어보세요</h1>
                    <h4>함께 배우고 성장하는 공간입니다</h4>
                </div>

                <button className="write-button">
                    글쓰기
                </button>
            </section>

            <div className="search-box">
                <span className="search-icon">⌕</span>
                <input
                    type="text"
                    placeholder="궁금한 내용을 검색해보세요"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                
            </div>

            <div className="category-tabs">
                {categories.map((tab) => (
                    <button
                        key={tab}
                        className={selectedTab === tab ? "tab active" : "tab"}
                        onClick={() => changeTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <section className="post-list animate__animated animate__fadeIn">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="post-item"
                            onClick={() => {
                                navigate(
                                    `/community/communityDetail?id=${post.id}&tab=${encodeURIComponent(selectedTab)}`
                                );
                            }}
                        >
                            <div className="post-main">
                                <span className={`category-badge ${post.badge}`}>
                                    {selectedTab}
                                </span>
                                <strong>{post.title}</strong>
                            </div>

                            <div className="post-info">
                                <span>{post.author}</span>
                                <span>·</span>
                                <span>{post.date}</span>
                                <span className="reply-count">
                                    답글 {post.comments?.length || 0}
                                </span>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="no-result" style={{ textAlign: 'center', padding: '50px 0', color: '#888' }}>
                        검색 결과가 없습니다.
                    </div>
                )}
            </section>

            <p className="post-total">
                {filteredPosts.length}개의 게시글
            </p>
        </main>
    );
}

export default Community;