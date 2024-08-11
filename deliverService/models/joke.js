const db = require("../config/db");

class Jokes {
  constructor(type, joke) {
    this.type = type;
    this.joke = joke;
  }

  save() {
    let sql = `INSERT INTO jokes(type,joke) VALUES('${this.type}','${this.joke}');`;
    return db.execute(sql);
  }

  static getAll() {
    let sql = "SELECT jokes.jokes.type, jokes.jokes.joke, jokes.types.types FROM jokes.jokes JOIN jokes.types ON jokes.jokes.type = jokes.types.id";
    return db.execute(sql);
  }

  static getRandom() {
    let sql = "SELECT jokes.jokes.type, jokes.jokes.joke, jokes.types.types FROM jokes.jokes JOIN jokes.types ON jokes.jokes.type = jokes.types.id ORDER BY RAND() LIMIT 1;";
    return db.execute(sql);
  }

  static getRandomFromType(type){
    let sql = `SELECT jokes.jokes.type, jokes.jokes.joke, jokes.types.types FROM jokes.jokes JOIN jokes.types ON jokes.jokes.type = jokes.types.id WHERE jokes.types.types = '${type}' ORDER BY RAND() LIMIT 1;`;
    return db.execute(sql);
  }
}

module.exports = Jokes;
