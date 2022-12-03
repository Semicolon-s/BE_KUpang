import mysql from "mysql";
let dbPool;
const getPool = () => {
	if (dbPool) return dbPool;
	dbPool = mysql.createPool({
		host: "localhost",
		user: "root",
		password: "chanaka",
		database: "shared_adult",
	});
	return dbPool;
};
export { getPool };
