export default class DB {
  static setApiUrl(data) {
    this.apiURL = data;
  }

  static async findAll() {
    const response = await fetch(this.apiURL + "product");
    return response.json();
  }

  static createItemCart(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  static async deleteOne(id) {
    const response = await fetch(this.apiURL + "product/" + id, {
      method: "DELETE",
    });
    return response.json();
  }

  static UpdateQuantity(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
  static deleteItem(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  static resetCart(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
}
