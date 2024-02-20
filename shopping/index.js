const express = require("express");

const app = express();

app.use(express.json());
app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "hello shooping" });
});

app.listen(8003, () => {
  console.log("pshoping listening to port 8003");
});
