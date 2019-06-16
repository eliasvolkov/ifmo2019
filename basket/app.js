const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", function() {
  const ui = new UI();
  const data = new Data();
  let totalPrice = 0,
    salary,
    restPay,
    products = {};
  ui.preLoader();

  document.querySelector("form").addEventListener("submit", function(e) {
    salary = document.querySelector("#exampleInput").value;
    restPay = salary;
    ui.renderSalary(restPay);
    document.querySelector(".btn").classList.add("disabled");
    e.preventDefault();
  });

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
});

document.querySelector(".basket").addEventListener("click", function() {});
