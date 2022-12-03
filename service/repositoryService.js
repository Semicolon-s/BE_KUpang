// DB crud 접근
// 기능 처리

//현재 등록되어 있는 상품의 목록 불러오기
//상품이름으로 검색
//주문내역 불러오기
//주문내역 검색하기
async function search(name, category) {
  let dbname;
  let where;
  if (category == "상품") {
    dbname = product;
  } else if (category == "재고") {
    dbname = stock;
    where = all;
  } else if (category == "주문") {
    dbname = order_list;
    where = productId;
  }
  const result = await db.query;

  let message;

  if (result == null) {
    message = "Error in creating";
    console.log("Error");
  }

  return { message };
}

//상품 등록
//주문 내역 추가
async function add(name, category) {
  let dbname;
  let where;
  if (category == "상품") {
    dbname = product;
  } else if (category == "재고") {
    dbname = stock;
    where = all;
  } else if (category == "주문") {
    dbname = order_list;
    where = productId;
  }
  const result = await db.query;

  let message;

  if (result == null) {
    message = "Error in creating";
    console.log("Error");
  }

  return { message };
}
//상품정보수정 입고 출고
//주문 확인 → 재고 감소
//재고내역 수정
async function update(id, programmingLanguage) {
  let dbname;
  let where;
  if (category == "상품") {
    dbname = product;
  } else if (category == "재고") {
    dbname = stock;
    where = all;
  } else if (category == "주문") {
    dbname = order_list;
    where = productId;
  }
  const result = await db.query;
  let message = "Error in updating programming language";

  if (result == null) {
    message = "Error in creating";
    console.log("Error");
  }

  return { message };
}
//상품 삭제
async function remove(id) {
  const result = await db.query;

  let message = "Error in updating programming language";

  if (result == null) {
    message = "Error in creating";
    console.log("Error");
  }

  return { message };
}

export { search, add, update, remove };
