export default class DB {
  static setApiUrl(url) {
    this.apiURL = url;
  }

  static async findAll() {
    const response = await fetch(this.apiURL + "product");
    return response.json();
  }

  //   static createItemCart(items) {
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }

  //   static UpdateQuantity(items) {
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }
  //   static deleteItem(items) {
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }

  //   static resetCart(items) {
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }

  // fonction générale qui permet d'update le Local Storage
  static updateLocalStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
}
