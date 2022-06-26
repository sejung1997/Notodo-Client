export default function CommunityListPage({ root }) {
  const init = () => {
    const el = document.createElement("div");
    el.innerHTML = `<p>커뮤니티 리스트 페이지다잇</p>`;
    root.appendChild(el);
  };

  init();
}
