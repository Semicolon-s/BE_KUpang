import { selectProduct } from "./repositoryService.js";
const getAllProductList = async () => {
	let data = await selectProduct(["*"], "product");
	let list = [];
	// for (let i = 0; i < data.length; i++) {
	// 	console.log(await data[i]);
	// 	list.push(data[i]);
	// }
	console.log("user service  : " + data + "\n\n");
	return data;
};
export { getAllProductList };
