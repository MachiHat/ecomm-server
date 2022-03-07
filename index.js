const express = require("express");
const app = express();

// LOCAL IMPORTS
const prodRoutes = require("./routes/products.routes");
// const cartRoutes = require("./routes/cart.routes");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const defaultRoutes = "/api";
app.use(defaultRoutes, prodRoutes);

// SERVER INIT
const PORT = process.env.PORT || 8080;

const connectedServer = app.listen(PORT, () => {
  console.log("Server is live on port: " + PORT);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
