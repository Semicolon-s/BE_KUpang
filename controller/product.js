import {
  getNearByArriveList,
  getBusLineInfo,
  getStationArriveList,
  getNearByBusArriveListAPI,
  getBusStationonArriveListAPI,
} from "../axios/dbBusaxios.js";
//함수명 수정
//get post delete patch
import express from "express";
const product = express.Router();

product.get("/", (req, res, next) => {
  console.log("현재 등록되어 있는 상품의 목록 불러오기");
  getNearByArriveList().then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

product.get("/:search", (req, res) => {
  console.log("상품이름으로 검색.");
  if (req.params.name == undefined)
    return res.status(400).json({
      status: "error",
      error: "Sorry, busNum is uncorrect!",
    });
  getBusLineInfo(req.params.name).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

product.post("/add", (req, res, next) => {
  if (req.query.name == undefined || req.query.url != undefined) return next();
  console.log("상품 등록");
  getStationArriveList(req.query.name, req.query.url).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

product.delete("/delete", (req, res, next) => {
  if (req.query.id == undefined) return next();
  console.log("상품 삭제");

  if (req.params.id == undefined)
    return res.status(400).json({
      status: "error",
      error: "Sorry, x,y is uncorrect!",
    });

  getNearByBusArriveListAPI(req.params.id).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

product.patch("/update", (req, res, next) => {
  if (req.query.name == undefined) return next();
  console.log("상품 정보 수정");
  getBusStationonArriveListAPI(req.query.name).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

export { product };
