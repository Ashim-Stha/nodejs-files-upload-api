const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;

const fileExtensionLimiter = require("./middleware/fileExtensionLimiter");
const fileSizeLimiter = require("./middleware/fileSizeLimiter");
const filesPayloadExists = require("./middleware/filesPayloadExists");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post(
  "/upload",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtensionLimiter([".png", ".jpeg", ".jpg"]),
  fileSizeLimiter,
  (req, res) => {
    const files = req.files;
    console.log(files);

    return res.json({ status: "logged", message: "logged" });
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
