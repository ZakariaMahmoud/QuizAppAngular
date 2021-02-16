"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemService = void 0;
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService(db) {
        this.db = db;
        console.log(db.list('questions'));
        // this.items = this.db.collection<Item>('Database')
        //        .snapshotChanges().pipe(
        //          map(actions => actions.map(a => {
        //            const data = a.payload.doc.data() as Item;
        //            const id = a.payload.doc.id;
        //            return { id,...data };
        //          }))
        //        );
    }
    ItemService.prototype.push = function (res) {
        var uid = (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds();
        var user = {
            name: sessionStorage.getItem("name"),
            quiz: {
                true_or_false: res
            }
        };
        // this.db.collection('Database').add( user)
        //       .then((docRef) => {
        //           console.log("Document written with ID: ", docRef.id);
        //         })
        //       .catch((error) => {
        //           console.error("Error adding document: ", error);
        //         });
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
