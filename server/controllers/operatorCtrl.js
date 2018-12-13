const getOperators = (req, res) => {
  let db = req.app.get("db");
  db.getOperators().then(response => {
    console.log(response);
    res.status(200).json(response);
  });
};

const addOperator = (req, res) => {
  console.log(req.body);
  let { last, first, role, rate } = req.body;
  let db = req.app.get("db");
  db.addOperator([last, first, role, rate]).then(response => {
    console.log(response);
  });
};

module.exports = {
  getOperators,
  addOperator
};
