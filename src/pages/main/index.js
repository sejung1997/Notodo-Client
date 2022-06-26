import { useRouter } from "../../hooks/useRouter";

export default function MainPage({ root }) {
  const router = useRouter();
  const init = () => {
    const el = document.createElement("div");
    el.innerHTML = `<p id="test">메인페이지다잇</p>`;
    root.appendChild(el);
    document.querySelector("#test").addEventListener("click", () => {
      router.push("/challenge/5");
    });
  };

  init();
}
