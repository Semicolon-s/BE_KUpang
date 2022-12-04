import { selectProduct, insertProduct, delProduct, updateProduct, selectOrder, insertOrder } from "./repositoryService.js";

const getAllProductList = async () => await selectProduct(["*"], "product");
const addProduct = (productName, imgUrl) => insertProduct(productName, imgUrl);
const deleteProduct = (productId) => delProduct(productId);
const editProduct = (productId, productName, imgUrl) => updateProduct(productId, productName, imgUrl);

const getAllOrderList = async () => await selectOrder(["*"], "order_list");
const addOrder = (productId, orderNum, buyer, phonenumber, address, orderState) => insertOrder(productId, orderNum, buyer, phonenumber, address, orderState);

export { getAllProductList, addProduct, deleteProduct, editProduct, getAllOrderList, addOrder };
