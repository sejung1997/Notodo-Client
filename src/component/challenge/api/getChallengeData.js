const baseUrl = "https://backend.ddudutodo.site/api/v1/challenges";

const cache = [
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
  {
    name: "자전거로 출근",
    contents: "string",
    image: "string",
    start_date: "2022-06-24T08:01:31.122Z",
    end_date: "2022-06-24T08:01:31.122Z",
    tags: ["깃생살기", "습관 만들기", "운동", "성별무관"],
    master: {
      email: "user@example.com",
      name: "abc",
      nick_name: "def",
      picture: "string",
      id: 0,
      complete_rate: 0,
    },
    id: 0,
    user_cnt: 15,
  },
];
export const getData = async () => {
  if (cache) return cache;
  // const res = await fetch(`${baseUrl}/`);
  // if (res.ok) {
  //   const json = await res.json();
  //   return json;
  // }
  throw new Error("요청에 실패함");
};
