"use strict";

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.SharedService = void 0;

var core_1 = require("@angular/core");

var user_1 = require("../classes/user");

var quiz_1 = require("../classes/quiz");

var SharedService =
/** @class */
function () {
  function SharedService() {
    this.user = new user_1.User();
    this.quiz = new quiz_1.Quiz();
  }

  SharedService.prototype.getUser = function () {
    return this.user;
  };

  SharedService.prototype.getCookie = function (cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return '';
  };

  SharedService.prototype.setNameOfQuiz = function (quiz_name) {
    switch (quiz_name) {
      case 'true-or-false':
        {
          this.name_of_quiz = 'صحيح أم خطأ';
          break;
        }
    }
  };

  SharedService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], SharedService);
  return SharedService;
}();

exports.SharedService = SharedService;