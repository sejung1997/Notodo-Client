const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

app.listen(3000, () => {
  console.log("Server running");
  console.log("test");
});

app.use(express.static(__dirname + "/dist"));
// app.use(
//   history({
//     index: __dirname + "http://localhost:3000/index.html",
//   })
// );

app.get("/*", (req, res) => {
  if (res.url === "http://localhost:3000/main")
    res.sendFile(__dirname + "http://localhost:3000/index.html");
  else res.sendFile(__dirname + "http://localhost:3000/index.html");
});

// app.use(express.static(__dirname));
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "/dist/index.html"));
// });
