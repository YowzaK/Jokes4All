const db = require("../config/db");

class Types {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  save() {
    let sql = `INSERT INTO types(id,type) VALUES('${this.id}','${this.type}')`;
    return db.execute(sql);
  }
  static getAll() {
    let sql = "SELECT * FROM types;";
    return db.execute(sql);
  }
}

module.exports = Types;
