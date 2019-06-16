const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", function() {
  const ui = new UI();
  const data = new Data();
  let totalPrice = 0,
    salary,
    restPay,
    products = {};

  document.querySelector("form").addEventListener("submit", function(e) {
    const input = document.querySelector("#exampleInput");
    salary = input.value;
    restPay = salary;
    ui.renderSalary(restPay);
    ui.preLoader();
    input.setAttribute("disabled", "true");

    data.fetchCards().then(cards => {
      ui.renderCards(cards);

      document.querySelector(".cards").addEventListener("click", function(e) {
        if (e.target.classList.contains("btn")) {
          let price = e.target.parentElement.getAttribute("data-price"),
            title = e.target.parentElement.getAttribute("data-title");

          totalPrice += Number(price);
          restPay -= Number(price);
          products[title] = products[title] + 1 || 1;

          if (totalPrice <= salary) {
            ui.renderPrice(totalPrice);
            ui.renderProducts(products);
            ui.renderSalary(restPay);
          } else {
            ui.showAlert();
            ui.renderSalary(restPay);
            const btns = document.querySelectorAll(".btn");
            for (let btn of btns) {
              btn.classList.add("disabled");
            }
          }
        }
        e.preventDefault();
      });
    });

    e.preventDefault();
  });
});
