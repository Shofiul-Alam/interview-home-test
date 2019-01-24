(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <h2>Contact List</h2>\n          <a [routerLink]=\"['/contacts/add']\" role=\"button\" class=\"btn btn-success\">Add Contact</a>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 mx-auto mt-5\">\n      <table mdbTable class=\"z-depth-1 table-responsive-sm\" striped=\"true\" hover=\"true\" >\n        <thead>\n          <tr>\n            <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\" class=\"text-center\">{{head}}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr mdbTableCol *ngFor=\"let el of elements; let i = index\">\n            <th *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" scope=\"row\" class=\"text-center\">{{el.Id}}</th>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">{{el.Name}}</td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">{{el.Address}}</td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\"><a [routerLink]=\"['/contacts/'+el.Id]\">{{el.Details|slice:0:30}}...</a></td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">\n              <a [routerLink]=\"['/contacts/edit/'+el.Id]\" role=\"button\" class=\"btn btn-success\">Edit</a>\n              <button role=\"button\" class=\"btn btn-danger\" (click)=\"deleteContact(el.Id)\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot class=\"grey lighten-5 w-100\">\n      \n          <tr>\n            <td colspan=\"5\">\n              <mdb-table-pagination (nextPageClick)=\"onNextPageClick($event)\" (previousPageClick)=\"onPreviousPageClick($event)\">\n              </mdb-table-pagination>\n            </td>\n          </tr>\n      \n        </tfoot>\n      </table>\n    </div>\n  </div>\n  \n  \n</main>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(tableService, cdRef, _contactService) {
        this.tableService = tableService;
        this.cdRef = cdRef;
        this._contactService = _contactService;
        this.elements = [];
        this.previous = [];
        this.headElements = ['ID', 'Name', 'Address', 'Details', 'Action'];
        this.contacts = new Array();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.getAllContacts();
    };
    ContactComponent.prototype.getAllContacts = function () {
        var _this = this;
        this._contactService.getAllContacts().subscribe(function (responseAllContacts) {
            Object.assign(_this.contacts, responseAllContacts);
            for (var _i = 0, _a = _this.contacts; _i < _a.length; _i++) {
                var contact = _a[_i];
                _this.elements.push({ Id: contact.id,
                    Name: contact.name,
                    Address: contact.address,
                    Details: contact.details });
            }
            _this.tableService.setDataSource(_this.elements);
            _this.elements = _this.tableService.getDataSource();
            _this.previous = _this.tableService.getDataSource();
        }, function (error) {
            console.log(error);
        });
    };
    ContactComponent.prototype.deleteContact = function (id) {
        var _this = this;
        console.log(id);
        this._contactService.deleteContact(id).subscribe(function (response) {
            _this.elements = _this.elements.filter(function (item) { return item.Id != id; });
        }, function (error) {
            console.log(error);
        });
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
        this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
        this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    };
    ContactComponent.prototype.onNextPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    ContactComponent.prototype.onPreviousPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"])
    ], ContactComponent.prototype, "mdbTablePagination", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/contact/contact.module.ts ***!
  \******************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");






var routes = [{
        path: '',
        data: {
            title: "Contacts",
            urls: [{ title: 'Contacts', url: '/contacts' }, { title: 'Contacts' }]
        },
        component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map