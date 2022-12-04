import express from "express";
import cors from "cors";
import { productRouter } from "./productController.js";
import { orderRouter } from "./orderController.js";
import { stockRouter } from "./stockController.js";
const app = express();

let port = 3000; //포트 번호 3000

app.use(
	cors({
		origin: "http://127.0.0.1:3000",
	})
);
app.listen(port, () => {
	console.log("Server On : " + port);
});

app.get("/", (req, res) => {
	res.send("이제부터 이 서버는 제것입니다.");
});

app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/stock", stockRouter);
