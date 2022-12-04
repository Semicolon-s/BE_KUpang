import { insert, select, update, del } from "../repository/DBManagement.js";

const insertProduct = (productName, imgUrl) => {
	if (productName == "") throw new Error("value can't be Null");
	insert("product", ["productName", "imgUrl"], [productName, imgUrl]);
};
const addStock = (productId, stockNum) => {
	insert("stock", ["productId", "stockNum"], [productId, stockNum]);
};
const insertOrder = (productId, productName, orderNum, buyer, phonenumber, address, orderState) => {
	if (buyer == "" || phonenumber == "" || address == "" || productName == "") throw new Error("value can't be Null");
	if (isNaN(productId) || isNaN(orderNum) || isNaN(phonenumber) || isNaN(orderState)) throw new Error("value is uncorrect format");
	insert(
		"order_list",
		["productId", "productName", "orderNum", "buyer", "phonenumber", "address", "orderState"],
		[productId, productName, orderNum, buyer, phonenumber, address, orderState]
	);
};
const addUser = (userName, userPassword, userToken) => {
	if (userName == "" || userPassword == "" || userToken == "") throw new Error("value can't be Null");
	insert("user", ["userName", "userPassword", "userToken"], [userName, userPassword, userToken]);
};
const addWarehouseHistory = (productId, warhouseState, warhouseNum) => {
	if (isNaN(productId) || isNaN(warhouseNum) || isNaN(warhouseState)) throw new Error("value is uncorrect format");
	insert("warehouse_history", ["productId", "warhouseState", "warhouseNum"], [productId, warhouseState, warhouseNum]);
};

const updateProduct = (productId, productName, imgUrl) => {
	if (isNaN(productId)) throw new Error("value is uncorrect format");
	if (productName == "" || imgUrl == "") throw new Error("value can't be Null");
	update("product", "productName='" + productName + "',imgUrl='" + imgUrl + "'", "productId=" + productId);
};

const delProduct = (productId) => {
	if (isNaN(productId)) throw new Error("value can't be Null");
	del("product", "productId=" + productId);
};

const updateStock = (productId, stockNum) => {
	if (isNaN(productId)) throw new Error("value is uncorrect format");

	update("stock", "stockNum=" + stockNum, "productId=" + productId);
};

const deleteStock = () => {};
const deleteOrderList = () => {};
const deleteUser = () => {};
const deleteWarehouseHistory = () => {};

const selectProduct = async (fields, table, whereOptions) => await select(fields, table, whereOptions);
const selectOrder = async (fields, table, whereOptions) => await select(fields, table, whereOptions);
const selectStock = async (fields, table, whereOptions) => await select(fields, table, whereOptions);

export { selectProduct, insertProduct, delProduct, updateProduct, selectOrder, insertOrder, updateStock, selectStock };
