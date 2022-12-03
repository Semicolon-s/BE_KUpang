import express from "express";
import { product } from "./product.js";
import { order } from "./order.js";
import { stock } from "./stock.js";
const app = express();

let port = 3000; //포트 번호 3000
app.listen(port, () => {
  console.log("Server On : http:///3.95.64.25:" + port);
});

app.get("/", (req, res) => {
  res.send("local host 입니다.");
});

app.use("/product", product);
app.use("/order", order);
app.use("/stock", stock);
