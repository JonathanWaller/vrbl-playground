const getOperators = (req, res) => {
  let db = req.app.get("db");
  db.getOperators().then(response => {
    console.log(response);
    res.status(200).json(response);
  });
};

module.exports = {
  getOperators
};
