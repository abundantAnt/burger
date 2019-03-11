const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        orm.update("burgers", id, cb);
    },
    delete: function(id, cb) {
        orm.delete("burgers", id, cb);
    }
};

module.exports = burger;