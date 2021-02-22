"use strict";
exports.__esModule = true;
exports.Db = void 0;
var Db = /** @class */ (function () {
    function Db(db) {
        this.db = db;
    }
    Db.prototype.select = function (path) {
        this.db
            .list(path)
            .valueChanges()
            .subscribe(function (result) {
            console.log(result);
            return result;
        });
    };
    return Db;
}());
exports.Db = Db;
