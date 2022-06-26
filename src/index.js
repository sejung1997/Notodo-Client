import { useRouter } from "./hooks/useRouter.js";
import CommunityListPage from "./pages/community/index.js";
import ChallengeListPage from "./pages/challenge/list/index.js";
import MainPage from "./pages/main/index.js";
import MyPage from "./pages/mypage/index.js";
import ChallengeDetailPage from "./pages/challenge/challengeId/index.js";

const root = document.querySelector(".App");
const BASE_URL = "http://localhost:3000/";

export const routes = [
  {
    path: "/main",
    view: () => {
      MainPage({ root });
    },
  },
  {
    path: "/challenge/list",
    view: () => {
      ChallengeListPage({ root });
    },
  },
  {
    path: "/challenge/:id",
    view: () => {
      ChallengeDetailPage({ root });
    },
  },
  {
    path: "/challenge/:id/room",
    view: () => {
      // CourseDetail({ root });
    },
  },
  {
    path: "/community",
    view: () => {
      CommunityListPage({ root });
    },
  },
  {
    path: "/mypage",
    view: () => {
      MyPage({ root });
    },
  },
];

(() => {
  const router = useRouter();

  window.onload = () => {
    const path = location.pathname;
    console.log(path);
    window.addEventListener("popstate", () => {
      router.render();
    });

    if (path === "/") router.push("/main");
    else router.push(path);
  };
})();
