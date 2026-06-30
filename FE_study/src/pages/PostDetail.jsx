import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { communityPosts } from "../data/dummyCommunityData";
import "./PostDetail.css";

function PostDetail({ isLoggedIn, profile, localCommunityData, setLocalCommunityData }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const postId = searchParams.get("id");
    const tab = decodeURIComponent(searchParams.get("tab") || "Q&A");

    const allPosts = Object.values(localCommunityData).flat();

    //post에는 상세페이지에 들어와있는 데이터를 가지고있음(객체).
    const post = allPosts.find((item) => item.id === postId);

    if (!post) {
        return (
            <main className="post-detail-page">
                <h2>게시글을 찾을 수 없습니다.</h2>

                <button
                    className="back-button"
                    onClick={() =>
                        navigate(`/community?tab=${encodeURIComponent(tab)}`)
                    }
                >
                    목록으로
                </button>
            </main>
        );
    }

    const username = profile;

    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState(post.comments || []);
    const [comment, setComment] = useState('');





    const toggleLike = () => {
        if (!isLoggedIn) {
            alert("로그인 후 좋아요를 누를 수 있습니다.");
            return;
        }

        setLiked(!liked);
    };

    const addComment = () => {
        //로그인 검증
        if (!isLoggedIn) {
            alert("로그인 후 댓글을 작성할 수 있습니다.");
            return;
        }

        //공백 동작x
        if (comment.trim() === "") return;

        const newComment = {
            id: Date.now(),
            author: profile || "익명",
            date: new Date().toLocaleString("ko-KR"),
            likes: 0,
            liked: false,
            content: comment,
        };


        // 현재 화면의 댓글 리스트 업데이트
        setComments([...comments, newComment]);
        setComment("");

        //  전체 데이터(localCommunityData) 구조 안에서 현재 게시글의 댓글만 교체
        const updatedCommunityData = {
            ...localCommunityData,
            [tab]: localCommunityData[tab].map((item) =>
                item.id === postId ? { ...item, comments: [...comments, newComment] } : item
            ),
        };

        //  부모 State 갱신 및 로컬 스토리지에 새 데이터 저장
        setLocalCommunityData(updatedCommunityData);
        window.localStorage.setItem('postsData', JSON.stringify(updatedCommunityData));

    };

    //로그인 검증(좋아요)
    const toggleCommentLike = (id) => {
        if (!isLoggedIn) {
            alert("로그인 후 좋아요를 누를 수 있습니다.");
            return;
        }
        //변경된 댓글 목록을 변수에 먼저 담습니다.
        const updatedComments = comments.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    liked: !item.liked,
                    likes: item.liked
                        ? item.likes - 1
                        : item.likes + 1,
                };
            }

            return item;
        });
        setComments(updatedComments);

        // 전체 데이터 구조 업데이트
        const updatedCommunityData = {
            ...localCommunityData,
            [tab]: localCommunityData[tab].map((item) =>
                item.id === postId ? { ...item, comments: updatedComments } : item
            ),
        };

        setLocalCommunityData(updatedCommunityData);
        //  로컬 스토리지 저장
        window.localStorage.setItem("postsData", JSON.stringify(updatedCommunityData));



    };

    return (
        <main className="post-detail-page animate__animated animate__fadeIn">

            <button
                className="back-button"
                onClick={() =>
                    navigate(`/community?tab=${encodeURIComponent(tab)}`)
                }
            >
                ← 목록으로
            </button>

            <section className="post-detail-card">

                <span className={`detail-badge ${post.badge}`}>
                    {tab}
                </span>

                <h1>{post.title}</h1>

                <div className="post-info">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>조회 {post.views}</span>
                    <span>·</span>
                    <span>댓글 {comments.length}</span>
                </div>

                <hr />

                <div className="post-content">
                    <p>{post.text}</p>
                </div>

                <div className="like-area">
                    <button
                        className={liked ? "liked" : ""}
                        onClick={toggleLike}
                    >
                        👍 도움이 됐어요 {liked ? post.likes + 1 : post.likes}
                    </button>
                </div>

            </section>

            <section className="comment-section">

                <h2>댓글 {comments.length}</h2>

                <div className="comment-list">

                    {/* 댓글 그려주는 영역 */}
                    {comments.map((item) => (

                        <div
                            key={item.id}
                            className="comment-item"
                        >

                            <div className="comment-header">
                                <strong>{item.author}</strong>
                                <span>{item.date}</span>
                            </div>

                            <p>{item.content}</p>

                            <button
                                className={`comment-like-btn ${item.liked ? "liked" : ""}`}
                                onClick={() => toggleCommentLike(item.id)}
                            >
                                👍 {item.likes}
                            </button>

                        </div>

                    ))}

                </div>

                <div className="comment-input">

                    <textarea
                        placeholder="댓글을 입력하세요."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button onClick={addComment}>
                        등록
                    </button>

                </div>

            </section>

        </main>
    );
}

export default PostDetail;