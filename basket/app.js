class UI {
  constructor() {
    this.cardsField = document.querySelector(".cards");
    this.priceField = document.querySelector(".priceField");
    this.salaryField = document.querySelector(".salaryField");
    this.products = document.querySelector(".products");
    this.alert = document.querySelector(".alert");
  }

  renderCards(cards) {
    let output = "";
    cards.forEach(card => {
      output += `
            <div class="col-4">
          <div class="card" style="width: 18rem;">
            <img
              src=${card.img}
              class="card-img-top"
              alt="USB"
            />
            <div class="card-body" data-price="${card.price}" data-title="${
        card.title
      }">
              <h5 class="card-title">${card.title}</h5>
              <h4>Price: ${card.price}</h4>
              <a href="#" class="btn btn-primary">Add to basket</a>
            </div>
          </div>
        </div>
            `;
    });
    this.cardsField.innerHTML = output;
  }

  renderProducts(title) {
    this.products.innerHTML += `<li>${title}</li>`;
  }

  renderPrice(price) {
    this.priceField.innerHTML = `Total price: ${price}`;
  }

  renderSalary(salary) {
    this.salaryField.innerHTML = ` The rest of pay: ${salary}`;
  }

  showAlert() {
    this.alert.innerHTML = `<div class="alert alert-danger" role="alert">
    You don't have enough salary
  </div>`;
  }
}

class Data {
  fetchCards() {
    return fetch("data.json")
      .then(res => res.json())
      .then(data => data.cards)
      .catch(err => err);
  }
}

const cards = document.querySelector(".cards");
const buttons = document.querySelectorAll(".btn");

document.querySelector(".basket").addEventListener("click", function() {
  const ui = new UI();
  const data = new Data();
  let totalPrice = 0;
  let salary = 300;
  let restPay = salary;

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
        } else if (totalPrice > salary) {
          ui.showAlert();
          ui.renderSalary(restPay);
          for (let btn of buttons) {
            btn.classList.add("disabled");
          }
        }
      }
      e.preventDefault();
    });
  });
});
