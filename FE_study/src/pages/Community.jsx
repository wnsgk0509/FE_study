import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, communityPosts } from "../data/dummyCommunityData";
import "./Community.css";

function Community() {
    const [ selectedTab, setSelectedTab ] = useState("Q&A");
    const navigate = useNavigate();

    return (
        <main className="community-page">
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
                />
            </div>

            <div className="category-tabs">
                {categories.map((tab) => (
                    <button
                        key={tab}
                        className={
                            selectedTab === tab
                                ? "tab active"
                                : "tab"
                        }
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <section className="post-list">
                {communityPosts[ selectedTab ].map((post) => (
                    <article
                        key={post.id}
                        className="post-item"
                        onClick={() =>
                            navigate(
                                `/community/communityDetail?id=${post.id}`
                            )
                        }
                    >
                        <div className="post-main">
                            <span
                                className={`category-badge ${post.badge}`}
                            >
                                {selectedTab}
                            </span>

                            <strong>{post.title}</strong>
                        </div>

                        <div className="post-info">
                            <span>{post.author}</span>
                            <span>·</span>
                            <span>{post.date}</span>

                            <span className="reply-count">
                                답글 {post.reply}
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <p className="post-total">
                {communityPosts[ selectedTab ].length}개의 게시글
            </p>
        </main>
    );
}

export default Community;