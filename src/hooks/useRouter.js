import { routes } from "../index.js";

const root = document.querySelector(".App");

export const useRouter = () => {
  function render() {
    const pageMatches = routes.map((route) => {
      return {
        route,
        result: location.pathname.match(createRegExpPath(route.path)),
      };
    });
    console.log(pageMatches);
    let match = pageMatches.find((pageMatch) => pageMatch.result);

    if (match) {
      root.innerHTML = "";
      match.route.view();
    } else {
      root.innerHTML = `<h1>404</h1>`;
    }
  }

  const createRegExpPath = (path) => {
    return new RegExp(
      "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
    );
  };

  const push = (url, data) => {
    history.pushState(data ? { data } : null, null, url);
    render();
  };

  return { push, render };
};
