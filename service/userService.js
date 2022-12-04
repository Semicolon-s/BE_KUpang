import { selectProduct, insertProduct, delProduct, updateProduct, selectOrder, insertOrder, updateStock, selectStock } from "./repositoryService.js";

const getAllProductList = async () => await selectProduct(["*"], "product");
const addProduct = (productName, imgUrl) => insertProduct(productName, imgUrl);
const deleteProduct = (productId) => delProduct(productId);
const editProduct = (productId, productName, imgUrl) => updateProduct(productId, productName, imgUrl);

const getAllOrderList = async () => await selectOrder(["*"], "order_list");
const addOrder = (productId, productName, orderNum, buyer, phonenumber, address, orderState) =>
	insertOrder(productId, productName, orderNum, buyer, phonenumber, address, orderState);
const getAllStockList = async () => await selectStock(["*"], "stock");
const editStock = (productId, stockNum) => updateStock(productId, stockNum);
export { getAllProductList, addProduct, deleteProduct, editProduct, getAllOrderList, addOrder, editStock, getAllStockList };
