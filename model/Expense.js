const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  expenseAmount: {
    type: String,
    required: true,
  },
  savingsAmount: {
    type: String,
    default: "0",
  },
  type: {
    type: String,
    enum: ["health", "education", "personal", "others"],
    required: true,
  },
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
