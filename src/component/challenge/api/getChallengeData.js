const baseUrl =
  "https://backend.ddudutodo.site/api/v1/challenges";

// const cache = {};
export const getData = async (keywords) => {

  const res = await fetch(`${baseUrl}/`);
  if (res.ok) {
    const json = await res.json();
    // cache[keywords] = json;
    return json;
  }
  throw new Error("요청에 실패함");
};
