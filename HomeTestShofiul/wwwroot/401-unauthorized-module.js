(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["401-unauthorized-module"],{

/***/ "./src/app/401/unauthorized.module.ts":
/*!********************************************!*\
  !*** ./src/app/401/unauthorized.module.ts ***!
  \********************************************/
/*! exports provided: UnauthorizedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedModule", function() { return UnauthorizedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unauthorizied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unauthorizied.component */ "./src/app/401/unauthorizied.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var routes = [{
        path: '',
        data: {
            title: 'Unauthorized',
            urls: [{ title: 'Unauthorized', url: '/unauthorized' }, { title: 'Unauthorized' }]
        },
        component: _unauthorizied_component__WEBPACK_IMPORTED_MODULE_3__["UnauthoriziedComponent"]
    }];
var UnauthorizedModule = /** @class */ (function () {
    function UnauthorizedModule() {
    }
    UnauthorizedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_unauthorizied_component__WEBPACK_IMPORTED_MODULE_3__["UnauthoriziedComponent"]],
        })
    ], UnauthorizedModule);
    return UnauthorizedModule;
}());



/***/ }),

/***/ "./src/app/401/unauthorizied.component.css":
/*!*************************************************!*\
  !*** ./src/app/401/unauthorizied.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLzQwMS91bmF1dGhvcml6aWVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/401/unauthorizied.component.html":
/*!**************************************************!*\
  !*** ./src/app/401/unauthorizied.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n  <div class=\"error-body text-center\">\r\n    <h1>401</h1>\r\n    <h3 class=\"text-uppercase\">Unauthorized Access !</h3>\r\n    <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO ACCESS RESTICTED CONTENT</p>\r\n    <a class=\"btn btn-info btn-rounded m-b-40\" [routerLink]=\"['/dashboard']\">Back to home</a> </div>\r\n  <footer class=\"footer text-center\">© 2017 Admin Pro.</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/401/unauthorizied.component.ts":
/*!************************************************!*\
  !*** ./src/app/401/unauthorizied.component.ts ***!
  \************************************************/
/*! exports provided: UnauthoriziedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthoriziedComponent", function() { return UnauthoriziedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnauthoriziedComponent = /** @class */ (function () {
    function UnauthoriziedComponent() {
    }
    UnauthoriziedComponent.prototype.ngOnInit = function () {
        return 'x';
    };
    UnauthoriziedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorizied',
            template: __webpack_require__(/*! ./unauthorizied.component.html */ "./src/app/401/unauthorizied.component.html"),
            styles: [__webpack_require__(/*! ./unauthorizied.component.css */ "./src/app/401/unauthorizied.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnauthoriziedComponent);
    return UnauthoriziedComponent;
}());



/***/ })

}]);
//# sourceMappingURL=401-unauthorized-module.js.map