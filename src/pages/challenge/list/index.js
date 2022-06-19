import {getData} from "../../../../src/component/challenge/api/getChallengeData"
export default function ChallengeList () {
  const target = document.querySelector(".App")
  const element = document.createElement("div")
  let state =
  [
    {
      "name": "string",
      "contents": "string",
      "image": "string",
      "start_date": "2022-06-19T09:19:42.168000+00:00",
      "end_date": "2022-06-19T09:19:42.168000+00:00",
      "tags": [
        "string"
      ],
      "id": 1
    }
  ]
  state =  await getData(0)

  const render = () => {
    element.innerHTML = `
    <h1>내 첼린지</h1>
    <ul>
  
    </ul
    
  `
  }
  render()
}