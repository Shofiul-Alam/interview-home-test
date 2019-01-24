(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-edit-contactEdit-module"],{

/***/ "./src/app/components/contact/edit/contactEdit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact/edit/contactEdit.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditModule", function() { return ContactEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.component */ "./src/app/components/contact/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [{
        path: '',
        data: {
            title: 'Edit Contact',
            urls: [{ title: 'Edit Contact', url: '/edit' }, { title: 'Edit Project' }]
        },
        component: _edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    }];
var ContactEditModule = /** @class */ (function () {
    function ContactEditModule() {
    }
    ContactEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_select2__WEBPACK_IMPORTED_MODULE_5__["Select2Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], ContactEditModule);
    return ContactEditModule;
}());



/***/ }),

/***/ "./src/app/components/contact/edit/edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contact/edit/edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <form class=\"text-center border border-light p-5\" id=\"createContact\" #createContact=\"ngForm\" (ngSubmit)=\"updateContact(createContact)\">\n  \n              <h2 class=\"mb-4\">Edit Contact</h2>\n              <div class=\"form-group\">\n                  <input type=\"text\" id=\"contact-name\" class=\"form-control mb-4\" placeholder=\"Contact Name\"\n                    name=\"contactName\" #contactName=\"ngModel\" [(ngModel)]=\"contact.name\" \n                    [ngClass]=\"{ 'is-invalid': createContact.submitted && contactName.invalid }\" required />\n  \n                    <div *ngIf=\"createContact.submitted && contactName.invalid\" class=\"invalid-feedback\">\n                        <div class=\"error-msg\" *ngIf=\"contactName.errors.required\">Contact name is required</div>\n                    </div>\n              </div>\n              \n              <div class=\"form-group\">\n                  <input type=\"text\" id=\"contact-address\" class=\"form-control mb-4\" placeholder=\"Contact Address\"\n                      name=\"ContactAddress\" #ContactAddress=\"ngModel\" [(ngModel)]=\"contact.address\"\n                      [ngClass]=\"{ 'is-invalid': createContact.submitted && ContactAddress.invalid }\" required />\n  \n                    <div *ngIf=\"createContact.submitted && ContactAddress.invalid\" class=\"invalid-feedback\">\n                        <div class=\"error-msg\" *ngIf=\"ContactAddress.errors.required\">Contact Address is required</div>\n                    </div>\n              </div>\n                           \n            \n              <!-- Message -->\n              <div class=\"form-group\">\n                <textarea class=\"form-control rounded-0\" id=\"Contact-details\" rows=\"3\" placeholder=\"Contact Details\"\n                    name=\"ContactDetails\" #ContactDetails=\"ngModel\" [(ngModel)]=\"contact.details\"></textarea>\n              </div>\n              <!-- Send button -->\n              <button class=\"btn btn-info btn-block\" type=\"submit\">Update Contact</button>\n            \n          </form>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>\n  \n    <!-- Default form contact -->"

/***/ }),

/***/ "./src/app/components/contact/edit/edit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/contact/edit/edit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_ViewModel_ContactView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/ViewModel/ContactView */ "./src/app/models/ViewModel/ContactView.ts");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(_contactService, router, route) {
        this._contactService = _contactService;
        this.router = router;
        this.route = route;
        this.contact = new src_app_models_ViewModel_ContactView__WEBPACK_IMPORTED_MODULE_3__["ContactView"]();
    }
    EditComponent.prototype.ngOnInit = function () {
        this.routeId = this.route.snapshot.paramMap.get('id');
        this.getContact(this.routeId);
        this.options = {
            multiple: true,
            placeholder: 'Please Select Contacts'
        };
    };
    EditComponent.prototype.getContact = function (id) {
        var _this = this;
        this._contactService.getContact(id).subscribe(function (responseContact) {
            Object.assign(_this.contact, responseContact);
        }, function (error) {
            console.log(error);
        });
    };
    EditComponent.prototype.updateContact = function (f) {
        var _this = this;
        this._contactService.updateContact(this.routeId, this.contact).subscribe(function (response) {
            _this.router.navigate(['/contacts']);
        }, function (error) {
            console.log(error);
            _this.extra = error;
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/contact/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/contact/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contact-edit-contactEdit-module.js.map