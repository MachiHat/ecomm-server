const express = require("express");
const app = express();

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const defaultRoute = '/api'; 
app.use(defaultRoute); // Estara bien? xd

// SERVER INIT
const PORT = process.env.PORT || 8080;

const connectedServer = app.listen(PORT, () => {
  console.log('Server is live on port: ' + PORT);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
