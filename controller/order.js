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
const order = express.Router();

order.get("/", (req, res, next) => {
  console.log("주문내역 불러오기");
  getNearByArriveList().then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

order.get("/:search", (req, res) => {
  console.log("주문내역 검색하기");
  if (req.params.filter == undefined)
    return res.status(400).json({
      status: "error",
      error: "Sorry, busNum is uncorrect!",
    });
  getBusLineInfo(req.params.filter).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

order.post("/add", (req, res, next) => {
  if (
    req.query.id == undefined ||
    req.query.count != undefined ||
    req.query.buyer != undefined ||
    req.query.phonenumber != undefined ||
    req.query.address != undefined ||
    req.query.orderState != undefined
  )
    return next();
  console.log("주문 내역 추가");
  getStationArriveList(
    req.query.id,
    req.query.count,
    req.query.buyer,
    req.query.phonenumber,
    req.query.address,
    req.query.orderState
  ).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

order.post("/confirm", (req, res, next) => {
  if (req.query.orderState == undefined) return next();
  console.log("주문 확인 → 재고 감소");

  if (req.params.orderState == undefined)
    return res.status(400).json({
      status: "error",
      error: "Sorry, x,y is uncorrect!",
    });

  getNearByBusArriveListAPI(req.params.orderState).then(
    (value) => res.send(value),
    (error) => {
      console.log(error);
      res.status(500).send("Sorry, result is not found");
    }
  );
});

export { order };
