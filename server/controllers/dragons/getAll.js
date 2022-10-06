const { Dragon } = require("../../models");

const getAll = async (req, res) => {
  const dragons = await Dragon.find({});
  res.json({
    status: "success",
    code: 200,
    data: dragons,
  });
};

module.exports = getAll;
