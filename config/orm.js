const db = require("./connection");

function printQuestionMarks(nums) {
  var arr = [];
  for (let i = 0; i < nums; i++) {
    arr.push("?");
  };
  return arr.toString();
};

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key])
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    db.query(queryString, function (err, results) {
      if (err) throw err;
      cb(results);
    })
  },

  create: function (table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols.toString()}) 
                       VALUES (${printQuestionMarks(vals.length)})`
                   
    console.log(queryString);
    db.query(queryString, vals, function (err, results) {

      if (err) throw err;
      cb(results);
    })
  },

  update: function (table, id, cb) {
    var queryString = `UPDATE ${table} SET devoured=1 WHERE id = ${id}`;
    console.log(queryString);

   const query = db.query(queryString, function (err, results) {
      if (err) throw err;
      cb(results);
    })
    console.log(query.sql);
  },

  delete: function (table, id, cb) {
    var queryString = `DELETE FROM ${table} WHERE id= ${id}`;
    console.log(queryString);

    const query = db.query(queryString, function (err, results) {
      if (err) throw err;
      cb(results);
    });
    console.log(query.sql);
  }
}

module.exports = orm;
