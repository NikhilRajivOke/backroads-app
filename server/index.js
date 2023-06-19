const express = require("express");
const app = express();
const port = 5000;
const toursData = require("./public/toursData");
const cors = require('cors');

app.use(cors());
//console.log(toursData);
app.use(express.static("public"));

app.get("/toursData", (req, resp) => {
  resp.send({ status: 200, data: toursData });
});

app.listen(port, () => {
  console.log("Server running on port ", port);
});
