document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("heading");
  const form = document.getElementById("create-expense-form");
  const editBtns = document.getElementsByClassName("edit-btn");
  const resetBtn = document.getElementById("reset-btn");
  const createOrUpdate = document.getElementById("create-or-update");
  [...editBtns].forEach((editBtn) => {
    editBtn.addEventListener("click", function () {
      const { name, expense, savings, type, id } = this.dataset;
      form.querySelector('[name="name"]').value = name;
      form.querySelector('[name="expense"]').value = expense;
      form.querySelector('[name="savings"]').value = savings;
      form.querySelector('[name="type"]').value = type;
      form.querySelector('[name="id"]').value = id;
      createOrUpdate.value = "Update";
      heading.innerHTML = "Update The Existing Expense";
      resetBtn.classList.remove("d-none");
    });
  });
  resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.querySelector('[name="name"]').value = "";
    form.querySelector('[name="expense"]').value = "";
    form.querySelector('[name="savings"]').value = "";
    form.querySelector('[name="type"]').value = "Choose";
    form.querySelector('[name="id"]').value = "";
    createOrUpdate.value = "Create";
    heading.innerHTML = "Create New Expense Tracker";
    resetBtn.classList.add("d-none");
  });
});
