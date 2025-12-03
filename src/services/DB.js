export default class DB {
  static setApiUrl(data) {
    this.apiURL = data;
  }

  static async findAll() {
    const response = await fetch(this.apiURL + "product");
    return response.json();
  }

  static async create(data) {
    const response = await fetch(this.apiURL + "product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: 1,
      }),
    });
    return response.json();
  }

  static async deleteOne(id) {
    const response = await fetch(this.apiURL + "product/" + id, {
      method: "DELETE",
    });
    return response.json();
  }
}
