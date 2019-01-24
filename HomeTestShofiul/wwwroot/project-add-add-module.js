(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-add-add-module"],{

/***/ "./src/app/components/project/add/add.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/add/add.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <form class=\"text-center border border-light p-5\" id=\"createProject\" #createProject=\"ngForm\" (ngSubmit)=\"addProject(createProject)\">\n\n            <h2 class=\"mb-4\">Add Project</h2>\n            <div class=\"form-group\">\n                <input type=\"text\" id=\"project-name\" class=\"form-control mb-4\" placeholder=\"Project Name\"\n                  name=\"projectName\" #projectName=\"ngModel\" [(ngModel)]=\"project.projectName\" \n                  [ngClass]=\"{ 'is-invalid': createProject.submitted && projectName.invalid }\" required />\n\n                  <div *ngIf=\"createProject.submitted && projectName.invalid\" class=\"invalid-feedback\">\n                      <div class=\"error-msg\" *ngIf=\"projectName.errors.required\">Project name is required</div>\n                  </div>\n            </div>\n            \n            <div class=\"form-group\">\n                <input type=\"text\" id=\"project-address\" class=\"form-control mb-4\" placeholder=\"Project Address\"\n                    name=\"projectAddress\" #projectAddress=\"ngModel\" [(ngModel)]=\"project.address\"\n                    [ngClass]=\"{ 'is-invalid': createProject.submitted && projectAddress.invalid }\" required />\n\n                  <div *ngIf=\"createProject.submitted && projectAddress.invalid\" class=\"invalid-feedback\">\n                      <div class=\"error-msg\" *ngIf=\"projectAddress.errors.required\">Project Address is required</div>\n                  </div>\n            </div>\n           <div class=\"form-group\">\n              <input type=\"text\" id=\"phone\" class=\"form-control mb-4\" placeholder=\"Phone No\"\n                    name=\"projectPhone\" #projectPhone=\"ngModel\" [(ngModel)]=\"project.phone\" \n                    [ngClass]=\"{ 'is-invalid': createProject.submitted && projectPhone.invalid }\" required />\n\n                  <div *ngIf=\"createProject.submitted && projectPhone.invalid\" class=\"invalid-feedback\">\n                      <div class=\"error-msg\" *ngIf=\"projectPhone.errors.required\">Phone no is required for the project</div>\n                  </div>\n           </div>\n            <!--Multi Select-->\n            <div class=\"form-group\" id=\"sh-multiselect\">\n                <select2  [data]=\"contacts\"\n                          [options]=\"options\"\n                          [value]=\"value\"\n                          (valueChanged)=\"addContactToProject($event)\"\n                          >\n                </select2>\n                <i class=\"fa fa-chevron-down\"></i>\n                \n            </div>\n          \n            <!-- Message -->\n            <div class=\"form-group\">\n              <textarea class=\"form-control rounded-0\" id=\"project-details\" rows=\"3\" placeholder=\"Project Details\"\n                  name=\"projectDetails\" #projectDetails=\"ngModel\" [(ngModel)]=\"project.projectDetails\"></textarea>\n            </div>\n            <!-- Send button -->\n            <button class=\"btn btn-info btn-block\" type=\"submit\">Add Project</button>\n          \n        </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n\n  <!-- Default form contact -->"

/***/ }),

/***/ "./src/app/components/project/add/add.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/add/add.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/add/add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/add/add.component.ts ***!
  \*********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddComponent = /** @class */ (function () {
    function AddComponent(_contactService, _projectService, router) {
        this._contactService = _contactService;
        this._projectService = _projectService;
        this.router = router;
        this.contactList = new Array();
        this.project = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.extra = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        this.options = {
            multiple: true,
            placeholder: 'Please Select Contacts'
        };
        this.getAllContacts();
    };
    AddComponent.prototype.addContactToProject = function (data) {
        this.project.contactList = data.value;
    };
    AddComponent.prototype.getAllContacts = function () {
        var _this = this;
        this._contactService.getAllContacts().subscribe(function (responseAllContacts) {
            Object.assign(_this.contactList, responseAllContacts);
            _this.contacts = _this._contactService.CreateContactSelectList(_this.contactList);
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent.prototype.addProject = function (f) {
        var _this = this;
        this._projectService.createProject(this.project).subscribe(function (response) {
            _this.router.navigate(['/projects']);
        }, function (error) {
            console.log(error);
            _this.extra = error;
        });
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/project/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/components/project/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/project/add/add.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/project/add/add.module.ts ***!
  \******************************************************/
/*! exports provided: AddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.component */ "./src/app/components/project/add/add.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [{
        path: '',
        data: {
            title: 'Add Project',
            urls: [{ title: 'Add Project', url: '/add' }, { title: 'Add Project' }]
        },
        component: _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }];
var AddModule = /** @class */ (function () {
    function AddModule() {
    }
    AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_select2__WEBPACK_IMPORTED_MODULE_5__["Select2Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], AddModule);
    return AddModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-add-add-module.js.map