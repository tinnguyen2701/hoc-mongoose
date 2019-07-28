const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

module.exports = mongoose.model("Person", personSchema);
