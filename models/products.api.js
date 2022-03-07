class Product {
  constructor(title, author, price, stock) {
    (this.title = title),
      (this.author = author),
      (this.price = price),
      (this.stock = stock);
  }
}
module.exports = Product;