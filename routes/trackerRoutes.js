const router = require("express").Router();
const {
  getAllExpenses,
  createExpense,
  deleteExpense,
} = require("../controllers/trackerControllers");
router.get("/", getAllExpenses);
router.post("/", createExpense);
router.get("/delete/:_id", deleteExpense);

module.exports = router;
