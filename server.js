const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => {
  console.log("Server running on http://localhost${PORT}");
});
