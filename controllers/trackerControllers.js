const Expense = require("../model/Expense");
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.render("pages/app", { expenses, error: {} });
  } catch {
    res.status(500).json("Error Occurred");
  }
};

const createExpense = async (req, res) => {
  try {
    const { name, expense, savings, type, id } = req.body;
    const error = {};
    if (!name) error.name = "Expense name is required";
    if (!expense) error.expense = "Expense amount is required";
    if (!type) error.type = "Expense type is required";
    if (Object.keys(error).length > 0) {
      const expenses = await Expense.find();
      return res.render("pages/app", { expenses, error });
    }
    if (id) {
      await Expense.findOneAndUpdate(
        { _id: id },
        {
          $set: { name, expenseAmount: expense, savingsAmount: savings, type },
        },
        { new: true }
      );
    } else {
      await new Expense({
        name,
        expenseAmount: expense,
        savingsAmount: savings ? savings : "0",
        type,
      }).save();
    }
    res.redirect("/tracker");
  } catch {
    res.status(500).json("Error Occurred");
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { _id } = req.params;
    await Expense.findOneAndDelete({ _id });
    res.redirect("/tracker");
  } catch {
    res.status(500).json("Error Occurred");
  }
};

module.exports = { getAllExpenses, createExpense, deleteExpense };
