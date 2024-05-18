const filesPayloadExists = (req, res) => {
  if (!req.files)
    return res.status(400).json({ status: "error", message: "missing files" });

  next();
};

module.exports = filesPayloadExists;
