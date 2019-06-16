class Data {
  fetchCards() {
    return fetch("data.json")
      .then(res => res.json())
      .then(data => data.cards)
      .catch(err => err);
  }
}
