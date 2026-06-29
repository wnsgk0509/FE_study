export const categories = [
    "Q&A",
    "팁 공유",
    "자유게시판",
];

export const communityPosts = {
    "Q&A": [
            {
            id: "id1",
            title: "React에서 상태 관리를 어떻게 해야 할까요?",
            author: "김민수",
            date: "2026-06-15",
            reply: 5,
            badge: "qa-badge",

            views: 321,
            likes: 18,

            text:
                "React에서 상태 관리를 할 때, 컴포넌트 간의 상태 공유가 필요할 경우 Context API를 사용하거나, 더 복잡한 상태 관리가 필요할 경우 Redux나 MobX와 같은 라이브러리를 사용하는 것이 좋습니다. 또한, 상태를 최소화하고 필요한 곳에서만 상태를 관리하는 것이 성능 최적화에 도움이 됩니다.",

            comments: [
                {
                    id: 1,
                    author: "이서연",
                    date: "2026-06-15",
                    likes: 8,
                    content:
                        "작은 프로젝트라면 Context API만으로도 충분합니다. 규모가 커질 때 Redux를 사용하는 것을 추천합니다.",
                },
                {
                    id: 2,
                    author: "박지호",
                    date: "2026-06-15",
                    likes: 4,
                    content:
                        "상태를 최소화하는 것이 중요합니다. props drilling이 심해질 때 Context를 사용하는 편입니다.",
                },
                {
                    id: 3,
                    author: "최유진",
                    date: "2026-06-16",
                    likes: 2,
                    content:
                        "최근에는 Redux Toolkit을 많이 사용합니다. 기존 Redux보다 코드가 훨씬 간단합니다.",
                },
            ],
        },

        {
            id: "id2",
            title: "useEffect 의존성 배열이 왜 이렇게 헷갈리죠?",
            author: "박지호",
            date: "2026-06-13",
            reply: 12,
            badge: "qa-badge",

            views: 287,
            likes: 11,

            text:
                "useEffect의 의존성 배열은 컴포넌트가 렌더링될 때마다 특정 값이 변경되었는지 확인하고, 그 값이 변경되었을 때만 useEffect 내부의 콜백 함수를 실행하도록 합니다. 따라서 의존성 배열에 포함된 값이 많아질수록 관리가 어려워질 수 있습니다. 이를 해결하기 위해서는 필요한 값만 의존성 배열에 포함시키고, 불필요한 값은 제외하는 것이 좋습니다.",

            comments: [
                {
                    id: 1,
                    author: "김민수",
                    date: "2026-06-13",
                    likes: 5,
                    content:
                        "의존성 배열에 있는 값이 변경될 때만 useEffect가 다시 실행됩니다.",
                },
                {
                    id: 2,
                    author: "이서연",
                    date: "2026-06-13",
                    likes: 3,
                    content:
                        "eslint-plugin-react-hooks를 사용하면 누락된 의존성을 쉽게 확인할 수 있습니다.",
                },
            ],
        },
    ],

    "팁 공유": [
        {
            id: "id3",
            title: "CSS 변수로 다크모드 구현하는 가장 쉬운 방법",
            author: "이서연",
            date: "2026-06-14",
            reply: 15,
            badge: "tip-badge",

            views: 441,
            likes: 29,

            text:
                "CSS 변수를 사용하여 다크모드를 구현하는 방법은 간단하고 유지보수가 쉬우며, 색상 값을 한 곳에서 관리할 수 있어 코드의 일관성을 유지하는 데 도움이 됩니다.",

            comments: [
                {
                    id: 1,
                    author: "장현우",
                    date: "2026-06-14",
                    likes: 7,
                    content:
                        ":root와 data-theme 속성을 함께 사용하면 구현이 더욱 편리합니다.",
                },
                {
                    id: 2,
                    author: "김민수",
                    date: "2026-06-14",
                    likes: 2,
                    content:
                        "CSS 변수만으로도 대부분의 다크모드를 구현할 수 있습니다.",
                },
            ],
        },

        {
            id: "id4",
            title: "비동기 에러 핸들링 패턴 3가지 정리",
            author: "장현우",
            date: "2026-06-11",
            reply: 9,
            badge: "tip-badge",

            views: 278,
            likes: 17,

            text:
                "비동기 에러 핸들링은 try-catch, .catch() 메서드, 그리고 async/await 패턴을 활용하는 것이 일반적입니다. 각 패턴의 장단점을 이해하고 상황에 맞게 선택하는 것이 중요합니다.",

            comments: [
                {
                    id: 1,
                    author: "최유진",
                    date: "2026-06-11",
                    likes: 5,
                    content:
                        "try-catch가 가장 읽기 쉽고 유지보수도 편합니다.",
                },
            ],
        },

        {
            id: "id5",
            title: "Chrome DevTools 단축키 완전 정리",
            author: "임나영",
            date: "2026-06-08",
            reply: 18,
            badge: "tip-badge",

            views: 602,
            likes: 34,

            text:
                "Chrome DevTools의 단축키를 활용하면 디버깅과 개발 속도를 크게 향상시킬 수 있습니다. 예를 들어, Elements 패널을 열 때는 Ctrl+Shift+C, Console 패널은 Ctrl+Shift+J를 사용하면 빠르게 접근할 수 있습니다.",

            comments: [
                {
                    id: 1,
                    author: "이서연",
                    date: "2026-06-08",
                    likes: 10,
                    content:
                        "단축키를 외우면 개발 속도가 정말 빨라집니다.",
                },
            ],
        },
    ],

    "자유게시판": [
        {
            id: "id6",
            title: "프론트엔드 공부 6개월 후기 공유합니다",
            author: "최유진",
            date: "2026-06-12",
            reply: 31,
            badge: "free-badge",

            views: 712,
            likes: 46,

            text:
                "프론트엔드 공부를 시작한 지 6개월이 되었는데, 그동안의 경험과 느낀 점을 공유하고자 합니다. 처음에는 HTML과 CSS부터 시작하여 JavaScript, React까지 공부하면서 많은 어려움이 있었지만, 꾸준히 학습하고 프로젝트를 진행하면서 실력이 향상되었습니다. 또한, 온라인 커뮤니티와 스터디 그룹에 참여하여 다른 개발자들과의 교류가 큰 도움이 되었습니다.",

            comments: [
                {
                    id: 1,
                    author: "강도현",
                    date: "2026-06-12",
                    likes: 11,
                    content:
                        "저도 비슷한 과정으로 공부했는데 정말 공감됩니다.",
                },
                {
                    id: 2,
                    author: "한지민",
                    date: "2026-06-12",
                    likes: 8,
                    content:
                        "꾸준함이 가장 중요한 것 같아요.",
                },
            ],
        },

        {
            id: "id7",
            title: "HTML/CSS만으로 포트폴리오 사이트 만들어봤어요",
            author: "강도현",
            date: "2026-06-09",
            reply: 22,
            badge: "free-badge",

            views: 503,
            likes: 33,

            text:
                "HTML과 CSS만으로 포트폴리오 사이트를 만들어보았습니다. 처음에는 디자인과 레이아웃을 잡는 것이 어려웠지만, 다양한 레퍼런스를 참고하고 CSS Flexbox와 Grid를 활용하여 반응형 디자인을 구현할 수 있었습니다. 또한, 애니메이션 효과를 추가하여 사용자 경험을 향상시켰습니다.",

            comments: [
                {
                    id: 1,
                    author: "김민수",
                    date: "2026-06-09",
                    likes: 9,
                    content:
                        "CSS만으로도 깔끔한 포트폴리오를 만들 수 있군요!",
                },
            ],
        },

        {
            id: "id8",
            title: "코딩 스터디 같이 하실 분 구합니다 (React)",
            author: "한지민",
            date: "2026-06-06",
            reply: 14,
            badge: "free-badge",

            views: 388,
            likes: 21,

            text:
                "React를 주제로 한 코딩 스터디를 진행하려고 합니다. 관심 있는 분들은 함께 참여하여 서로의 지식을 공유하고 프로젝트를 진행하며 실력을 향상시킬 수 있습니다. 스터디는 온라인으로 진행되며, 매주 정기적으로 모임을 가질 예정입니다.",

            comments: [
                {
                    id: 1,
                    author: "박지호",
                    date: "2026-06-06",
                    likes: 4,
                    content:
                        "관심 있습니다! 참여 방법을 알려주세요.",
                },
                {
                    id: 2,
                    author: "이서연",
                    date: "2026-06-06",
                    likes: 3,
                    content:
                        "온라인 스터디라면 저도 참여하고 싶습니다.",
                },
            ],
        },
    ],
};