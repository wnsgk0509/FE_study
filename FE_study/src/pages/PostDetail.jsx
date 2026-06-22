import { useNavigate, useParams } from "react-router-dom";

function PostDetail() {
    const navigate = useNavigate();
        const { id } = useParams();

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                ← 목록으로
            </button>

            <h1>{id}번 게시글 상세 페이지</h1>

            <p>여기에 게시글 상세 내용이 들어갑니다.</p>
        </div>
    );
}

export default PostDetail;