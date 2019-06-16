class UI {
  constructor() {
    this.cardsField = document.querySelector(".cards");
    this.priceField = document.querySelector(".priceField");
    this.salaryField = document.querySelector(".salaryField");
    this.products = document.querySelector(".products");
    this.alert = document.querySelector(".alert");
  }
  preLoader() {
    this.cardsField.innerHTML = `<div class="spinner-border text-primary" role="status" style="margin: 0 auto;">
    <span class="sr-only">Loading...</span>
  </div>`;
  }

  renderCards(cards) {
    let output = "";
    cards.forEach(card => {
      output += `
              <div class="col-4 mt-3">
            <div class="card " height: 100%;">
            <div className="img__wrapper">
            <img
                src=${card.img}
                class="card-img-top"
                alt="USB"
                style="width: 100%; height: 250px;"
              />
            </div>  
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

  renderProducts(object) {
    let output = "";
    for (let key in object) {
      output += ` ${key} : ${object[key]} `;
    }
    this.products.innerHTML = output;
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
