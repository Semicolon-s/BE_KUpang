import mysql from "mysql";
import { resolve } from "path";

const connect = () => {
<<<<<<< HEAD
	const config = {
		host: "localhost",
		port: "3306",
		user: "root",
		database: "ku_pang",
	};
	const conn = mysql.createConnection(config);
	conn.connect();
	return conn;
=======
  const config = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "0405",
    database: "ku_pang",
  };
  const conn = mysql.createConnection(config);
  conn.connect();
  return conn;
>>>>>>> 4322ee7993b9b1b0b9549735c76d6e59e1cee665
};

/**
 * INSERT INTO stock(stockNum, stockName) VALUES (12345, "물품");
 * @param {string} table "stock"
 * @param {list} fields ["stockNum", "stockName"]
 * @param {list} values [12345, "물품"]
 */
const insert = (table, fields, values) => {
  let conn = connect();
  let fieldsdStr = "";
  let valuesStr = "";
  for (const field of fields) {
    fieldsdStr += field + ",";
  }
  fieldsdStr = fieldsdStr.substring(0, fieldsdStr.length - 1);
  for (const value of values) {
    if (typeof value === "string") valuesStr += "'" + value + "'" + ",";
    else valuesStr += value + ",";
  }
  valuesStr = valuesStr.substring(0, valuesStr.length - 1);
  let sql = `INSERT INTO ${table} (${fieldsdStr}) VALUES (${valuesStr})`;
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err + ":: INSERT FAIL!");
      throw new Error("QUERY FAIL");
    }
    console.log("INSERT SUCCESS!");
    conn.end();
    return result;
  });
};

/**
 * * SELECT * FROM stock WHERE stockId=7);
 * @param {list} fields ["*"]
 * @param {string} table "stock"
 * @param {string, undefined} whereOptions "stockId=7"
 */
const select = async (fields, table, whereOptions) => {
  let conn = connect();
  let fieldsdStr = "";
  for (const field of fields) {
    fieldsdStr += field + ",";
  }
  fieldsdStr = fieldsdStr.substring(0, fieldsdStr.length - 1);

  let sql = `SELECT ${fieldsdStr} FROM ${table}`;
  if (whereOptions != undefined && whereOptions.length != 0) {
    sql += " WHERE " + whereOptions;
  }
  console.log(sql);
  return new Promise((res, rej) => {
    conn.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error("QUERY FAIL");
      }
      res(result);
      console.log(result);
    });
  });
};

/**
 * UPDATE stock SET stockNum=3311 WHERE stockId=6;
 * @param {string} table "stock"
 * @param {string} updateOptions "stockNum=3311"
 * @param {string} whereOptions "stockId=7"
 */
const update = (table, updateOptions, whereOptions) => {
  let conn = connect();
  let sql = `UPDATE ${table} SET ${updateOptions}`;
  if (whereOptions != undefined && whereOptions.length != 0) {
    sql += " WHERE " + whereOptions;
  }
  console.log(sql);
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err + ":: UPDATE FAIL!");
      throw new Error("QUERY FAIL");
    }
    console.log("UPDATE SUCCESS!");
    conn.end();
  });
};

/**
 * DELTE FROM stock WHERE stockNum=3;
 * @param {string} table "stock"
 * @param {string} whereOptions "stockNum=3"
 */
const del = (table, whereOptions) => {
  const conn = connect();
  let sql = `DELETE FROM ${table}`;
  if (whereOptions != undefined && whereOptions.length != 0) {
    sql += " WHERE " + whereOptions;
  }
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err + ":: DELETE FAIL!");
      throw new Error("QUERY FAIL");
    }
    console.log("DELETE SUCCESS!");
    conn.end();
  });
};

export { insert, select, update, del };
