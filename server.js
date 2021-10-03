var express = require("express");
var cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

var app = express();

app.use(fileUpload());
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", async (req, res) => {
  //console.log(req.files);
  fileName = await req.files.upfile.name;
  //console.log(fileName);
  fileType = await req.files.upfile.mimetype;
  //console.log(fileType);
  fileSize = await req.files.upfile.size;
  //console.log(fileSize);
  res.send({
    name: fileName,
    type: fileType,
    size: fileSize,
  });
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
