const { Schema, model } = require("mongoose");

const dragonSchema = Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Dragon = model("dragon", dragonSchema);

module.exports = {
  Dragon,
};
