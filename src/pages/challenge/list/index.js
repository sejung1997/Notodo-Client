export default function ChallengeListPage({ root }) {
  const init = () => {
    const el = document.createElement("div");
    el.innerHTML = `<p>첼린지 리스트 페이지다잇</p>`;
    root.appendChild(el);
  };

  init();
}
