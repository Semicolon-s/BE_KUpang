import { insert, select, update, del } from "../repository/DBManagement.js";

const addProduct = (productName, imgUrl) => {
	if (productName == "") throw new Error("value can't be Null");
	insert("product", ["productName", "imgUrl"], [productName, imgUrl]);
};
const addStock = (productId, stockNum) => {
	insert("stock", ["productId", "stockNum"], [productId, stockNum]);
};
const addOrderList = (productId, orderNum, buyer, phonenumber, address, orderState) => {
	if (buyer == "" || phonenumber == "" || address == "") throw new Error("value can't be Null");
	if (isNaN(productId) || isNaN(orderNum) || isNaN(phonenumber) || isNaN(orderState)) throw new Error("value is uncorrect format");
	insert(
		"order_list",
		["productId", "orderNum", "buyer", "phonenumber", "address", "orderState"],
		[productId, orderNum, buyer, phonenumber, address, orderState]
	);
};
const addUser = (userName, userPassword, userToken) => {
	if (userName == "" || userPassword == "" || userToken == "") throw new Error("value can't be Null");
	insert("user", ["userName", "userPassword", "userToken"], [userName, userPassword, userToken]);
};
const addWarehouseHistory = (productId, warhouseState, warhouseNum) => {
	if (isNaN(productId) || isNaN(warhouseNum) || isNaN(warhouseState)) throw new Error("value can't be Null");
	insert("warehouse_history", ["productId", "warhouseState", "warhouseNum"], [productId, warhouseState, warhouseNum]);
};

const deleteProduct = (productId) => {
	if (isNaN(productId)) throw new Error("value can't be Null");
	del("product", "productId=" + productId);
};

const deleteStock = () => {};
const deleteOrderList = () => {};
const deleteUser = () => {};
const deleteWarehouseHistory = () => {};

const selectProduct = async (fields, table, whereOptions) => {
	const data = await select(fields, table, whereOptions);
	console.log("respository service  : " + data + "\n\n");
	return data;
};

export { selectProduct };
