const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", function() {
  const ui = new UI();
  const data = new Data();
  let totalPrice = 0;
  let salary = 300;
  let restPay = salary;
  ui.preLoader();

  data.fetchCards().then(cards => {
    ui.renderCards(cards);

    document.querySelector(".cards").addEventListener("click", function(e) {
      if (e.target.classList.contains("btn")) {
        let price = e.target.parentElement.getAttribute("data-price");
        let title = e.target.parentElement.getAttribute("data-title");

        totalPrice += Number(price);
        restPay -= Number(price);

        if (totalPrice <= salary) {
          ui.renderProducts(title);
          ui.renderPrice(totalPrice);
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
