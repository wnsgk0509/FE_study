import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { communityPosts } from "../data/dummyCommunityData";
import "./PostDetail.css";

function PostDetail({ isLoggedIn, profile }) {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const postId = searchParams.get("id");
    const tab = decodeURIComponent(searchParams.get("tab") || "Q&A");

    const allPosts = Object.values(communityPosts).flat();

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

    const [ liked, setLiked ] = useState(false);
    const [ comments, setComments ] = useState(post.comments || []);
    const [ comment, setComment ] = useState("");

    const toggleLike = () => {
        if (!isLoggedIn) {
            alert("로그인 후 좋아요를 누를 수 있습니다.");
            return;
        }

        setLiked(!liked);
    };

    const addComment = () => {
        if (!isLoggedIn) {
            alert("로그인 후 댓글을 작성할 수 있습니다.");
            return;
        }
        if (comment.trim() === "") return;

        const newComment = {
            id: Date.now(),
            author: profile || "익명",
            date: new Date().toLocaleString("ko-KR"),
            likes: 0,
            liked: false,
            content: comment,
        };

        setComments([ ...comments, newComment ]);
        setComment("");
    };

    const toggleCommentLike = (id) => {
        if (!isLoggedIn) {
            alert("로그인 후 좋아요를 누를 수 있습니다.");
            return;
        }

        setComments(
            comments.map((item) => {
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
            })
        );
    };

    return (
        <main className="post-detail-page">

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