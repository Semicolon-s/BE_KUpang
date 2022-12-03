import express from "express";
import { getAllProductList } from "../service/userService.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {
	const data = await getAllProductList();
	console.log(data);
	res.send(JSON.stringify(data));
});
export { productRouter };
