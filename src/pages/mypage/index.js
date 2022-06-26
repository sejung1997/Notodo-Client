import "../../component/unit/mypage/mypage.style.css";

export default function MyPage({ root }) {
  const init = () => {
    const el = document.createElement("div");
    el.innerHTML = `<div class="test"><p>마이페이지 페이지다잇</p></div>`;
    root.appendChild(el);
  };

  init();
}
