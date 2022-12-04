import express from "express";
import {} from "../service/userService.js";

const stockRouter = express.Router();

stockRouter.use(express.json());

stockRouter.get("/", async (req, res, next) => {
	try {
		const data = await getAllOrderList();
		return res.status(200).send(
			JSON.stringify({
				statusCode: 200,
				message: "주문 목록 불러오기",
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

stockRouter.post("/add", async (req, res, next) => {
	const body = req.body;
	if (
		body.productId == undefined ||
		body.orderNum == undefined ||
		body.buyer == undefined ||
		body.phonenumber == undefined ||
		body.address == undefined ||
		body.orderState == undefined
	)
		return res.status(404);
	try {
		addOrder(body.productId, body.orderNum, body.buyer, body.phonenumber, body.address, body.orderState);
		return res.status(200).send(
			JSON.stringify({
				statusCode: 200,
				message: "주문 추가",
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
export { stockRouter };
