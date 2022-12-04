import express from "express";
import { getAllProductList, addProduct, deleteProduct, editProduct } from "../service/userService.js";

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", async (req, res, next) => {
	try {
		const data = await getAllProductList();
		return res
			.status(200)
			.header("Access-Control-Allow-Origin", "*")
			.send(
				JSON.stringify({
					statusCode: 200,
					message: "상품 목록 불러오기",
					data: data,
				})
			);
	} catch (error) {
		console.log(error);
		return res.status(500).send(
			JSON.stringify({
				statusCode: 500,
				message: "REQUEST FAIL",
			})
		);
	}
});

productRouter.post("/add", (req, res, next) => {
	const body = req.body;
	if (body.productName == undefined || body.imgUrl == undefined) return res.status(404);
	try {
		addProduct(body.productName, body.imgUrl);
		return res
			.status(200)
			.header("Access-Control-Allow-Origin", "*")
			.send(
				JSON.stringify({
					statusCode: 200,
					message: "상품 추가",
				})
			);
	} catch (error) {
		console.log(error);
		return res.status(500).send(
			JSON.stringify({
				statusCode: 500,
				message: "REQUEST FAIL",
			})
		);
	}
});

productRouter.delete("/delete", (req, res, next) => {
	if (req.query.productId == undefined) return res.status(404);
	try {
		deleteProduct(req.query.productId);
		return res
			.status(200)
			.header("Access-Control-Allow-Origin", "*")
			.send(
				JSON.stringify({
					statusCode: 200,
					message: "상품 삭제",
				})
			);
	} catch (error) {
		console.log(error);
		return res.status(500).send(
			JSON.stringify({
				statusCode: 500,
				message: "REQUEST FAIL",
			})
		);
	}
});

productRouter.patch("/update", (req, res, next) => {
	if (req.query.productId == undefined || req.query.productName == undefined || req.query.imgUrl == undefined) return res.status(404);
	try {
		editProduct(req.query.productId, req.query.productName, req.query.imgUrl);
		return res
			.status(200)
			.header("Access-Control-Allow-Origin", "*")
			.send(
				JSON.stringify({
					statusCode: 200,
					message: "상품 수정",
				})
			);
	} catch (error) {
		console.log(error);
		return res.status(500).send(
			JSON.stringify({
				statusCode: 500,
				message: "REQUEST FAIL",
			})
		);
	}
});

//TODO
// productRouter.get("/:search", (req, res) => {
// 	console.log("상품이름으로 검색.");
// 	if (req.params.name == undefined)
// 		return res.status(400).json({
// 			status: "error",
// 			error: "Sorry, busNum is uncorrect!",
// 		});
// 	getBusLineInfo(req.params.name).then(
// 		(value) => res.send(value),
// 		(error) => {
// 			console.log(error);
// 			res.status(500).send("Sorry, result is not found");
// 		}
// 	);
// });

export { productRouter };
