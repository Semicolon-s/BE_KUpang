import express from "express";
import { getAllStockList, editStock } from "../service/userService.js";

const stockRouter = express.Router();

stockRouter.use(express.json());

stockRouter.get("/", async (req, res, next) => {
  try {
    const data = await getAllStockList();
    return res.status(200).send(
      JSON.stringify({
        statusCode: 200,
        message: "재고내역 불러오기",
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

stockRouter.patch("/updateProductNum", (req, res, next) => {
  if (req.query.productId == undefined || req.query.stockNum == undefined)
    return res.status(404);
  try {
    editStock(req.query.productId, req.query.stockNum);
    return res.status(200).send(
      JSON.stringify({
        statusCode: 200,
        message: "재고내역 수정",
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
