import { useNavigate, useSearchParams } from "react-router-dom";
import { categories, communityPosts } from "../data/dummyCommunityData";

function PostDetail() {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const postId = searchParams.get("id");

    const allPosts = Object.values(communityPosts).flat();

    const post = allPosts.find((item) => item.id === postId);

    if (!post) {
        return <h2>게시글을 찾을 수 없습니다.</h2>;
    }

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>

            <div className="post-info">
                <span>{post.author}</span>
                <span> | </span>
                <span>{post.date}</span>
            </div>

            <hr />

            <div className="post-content">
                <p>
                    {post.text}
                </p>
            </div>

            <button
                className="back-button"
                onClick={() => navigate("/community")}
            >
                목록으로
            </button>
        </div>
    );
}

export default PostDetail;