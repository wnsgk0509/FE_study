import { useNavigate, useSearchParams } from "react-router-dom";

function PostDetail() {
    const navigate = useNavigate();

    // 주소에서 id 값을 가져옴
    // 예: /community/DetailCommunity?id=id1
    const [ searchParams ] = useSearchParams();
    const id = searchParams.get("id");

    // id별 상세 게시글 내용
    const posts = {
        id1: {
            category: "Q&A",
            title: "Flexbox와 Grid 중 언제 어떤 걸 써야 하나요?",
            author: "김민준",
            date: "2026-06-15",
            content: `
Flexbox는 한 방향 정렬에 사용할 때 편합니다.

예를 들어 가로로 버튼을 정렬하거나,
세로로 메뉴를 정렬할 때 사용할 수 있습니다.

Grid는 행과 열을 같이 관리할 때 좋습니다.
카드 목록이나 게시판 레이아웃에 많이 사용합니다.
      `,
        },

        id2: {
            category: "Q&A",
            title: "useEffect 의존성 배열이 왜 이렇게 헷갈리죠?",
            author: "박지호",
            date: "2026-06-13",
            content: `
useEffect는 컴포넌트가 화면에 나타날 때 실행할 수 있습니다.

의존성 배열 []이 비어 있으면 처음 한 번만 실행됩니다.

배열 안에 count를 넣으면 count 값이 바뀔 때마다 실행됩니다.
      `,
        },

        id3: {
            category: "팁 공유",
            title: "CSS 변수로 다크모드 구현하는 가장 쉬운 방법",
            author: "이서연",
            date: "2026-06-14",
            content: `
CSS 변수는 색상을 한 곳에서 관리할 수 있게 해줍니다.

:root에 기본 색상을 만들고,
다크모드 클래스에서 색상 값만 바꾸면 됩니다.
      `,
        },

        id4: {
            category: "팁 공유",
            title: "비동기 에러 핸들링 패턴 3가지 정리",
            author: "장현우",
            date: "2026-06-11",
            content: `
비동기 작업은 try-catch로 에러를 처리할 수 있습니다.

async/await를 사용할 때는
try 안에 요청 코드를 넣고 catch에서 에러를 처리합니다.
      `,
        },

        id5: {
            category: "팁 공유",
            title: "Chrome DevTools 단축키 완전 정리",
            author: "임나영",
            date: "2026-06-08",
            content: `
F12를 누르면 개발자 도구가 열립니다.

Elements에서는 HTML과 CSS를 확인할 수 있고,
Console에서는 오류 메시지를 확인할 수 있습니다.
      `,
        },

        id6: {
            category: "자유게시판",
            title: "프론트엔드 공부 6개월 후기 공유합니다",
            author: "최유진",
            date: "2026-06-12",
            content: `
처음에는 HTML과 CSS부터 공부했습니다.

그 다음 JavaScript를 배우고,
현재는 React로 간단한 프로젝트를 만들고 있습니다.
      `,
        },

        id7: {
            category: "자유게시판",
            title: "HTML/CSS만으로 포트폴리오 사이트 만들어봤어요",
            author: "강도현",
            date: "2026-06-09",
            content: `
HTML로 페이지 구조를 만들고,
CSS로 색상과 레이아웃을 꾸몄습니다.

자기소개와 프로젝트 소개 페이지를 넣었습니다.
      `,
        },

        id8: {
            category: "자유게시판",
            title: "코딩 스터디 같이 하실 분 구합니다 (React)",
            author: "한지민",
            date: "2026-06-06",
            content: `
React를 같이 공부할 스터디원을 구합니다.

주 2회 온라인으로 진행할 예정입니다.
관심 있는 분은 댓글 남겨주세요.
      `,
        },
    };

    // 주소 id가 없거나 잘못된 경우
    const post = posts[ id ];

    if (!post) {
        return (
            <main>
                <h1>게시글을 찾을 수 없습니다.</h1>

                <button onClick={() => navigate("/")}>
                    목록으로 돌아가기
                </button>
            </main>
        );
    }

    return (
        <main className="detail-page">
            <button onClick={() => navigate("/")}>
                ← 목록으로
            </button>

            <section className="detail-card">
                <span className="detail-category">{post.category}</span>

                <h1>{post.title}</h1>

                <p className="detail-info">
                    {post.author} · {post.date}
                </p>

                <hr />

                <p className="detail-content">{post.content}</p>
            </section>
        </main>
    );
}

export default PostDetail;