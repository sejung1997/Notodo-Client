import { getData } from "../../../../src/component/challenge/api/getChallengeData.js";
export default function ChallengeList($target) {
  const element = document.createElement("div");
  $target?.appendChild(element);
  let state = [];
  (async function getList() {
    state = await getData(0);
    render();
  })();

  const render = () => {
    element.innerHTML = `
    <h1>내 첼린지</h1>
    <ul>
    ${state.map(
      (el) => `
    <li class="challengeList">
      <div>${el.name}</div>
      <di>마스터: ${el.master.name}<div>
      <img src=${el.image}>
      <div class="tags">
      ${el.tags.map(
        (tagEl) => `
        <div>${tagEl}</div>
      `
      )}
        <div>${el.price}원~</div>
      </div>
    </li>
  `
    )}
    </ul>
    
  `;
  };
}
