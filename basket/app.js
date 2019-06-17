const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", function() {
  // For the first section (basket)
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

  // For the second section (mixer)

  const inputs = document.querySelectorAll('input[type="number"]');
  const range = document.querySelectorAll('input[type="range"]');

  document.querySelector(".mixer").addEventListener("input", function(e) {
    {
      e.target.classList.contains("inp") ? changeInputs() : changeRanges();
    }
  });

  function changeRanges() {
    let r = range[0].value;
    inputs[1].value = r;
    let g = range[1].value;
    inputs[2].value = g;
    let b = range[2].value;
    inputs[3].value = b;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  function changeInputs() {
    let r = inputs[1].value;
    range[0].value = r;
    let g = inputs[2].value;
    range[1].value = g;
    let b = inputs[3].value;
    range[2].value = b;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
});
