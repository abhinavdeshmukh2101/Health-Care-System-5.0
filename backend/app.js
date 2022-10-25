const express = require("express");

const app = express();

const customMiddelware = () => {
  console.log("custom middleware");
};

app.use(customMiddelware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
