(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-edit-edit-module"],{

/***/ "./src/app/components/project/edit/edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/project/edit/edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <form class=\"text-center border border-light p-5\" id=\"createProject\" #createProject=\"ngForm\" (ngSubmit)=\"updateProject(createProject)\">\n  \n              <h2 class=\"mb-4\">Edit Project</h2>\n              <div class=\"form-group\">\n                  <input type=\"text\" id=\"project-name\" class=\"form-control mb-4\" placeholder=\"Project Name\"\n                    name=\"projectName\" #projectName=\"ngModel\" [(ngModel)]=\"project.projectName\" \n                    [ngClass]=\"{ 'is-invalid': createProject.submitted && projectName.invalid }\" required />\n  \n                    <div *ngIf=\"createProject.submitted && projectName.invalid\" class=\"invalid-feedback\">\n                        <div class=\"error-msg\" *ngIf=\"projectName.errors.required\">Project name is required</div>\n                    </div>\n              </div>\n              \n              <div class=\"form-group\">\n                  <input type=\"text\" id=\"project-address\" class=\"form-control mb-4\" placeholder=\"Project Address\"\n                      name=\"projectAddress\" #projectAddress=\"ngModel\" [(ngModel)]=\"project.address\"\n                      [ngClass]=\"{ 'is-invalid': createProject.submitted && projectAddress.invalid }\" required />\n  \n                    <div *ngIf=\"createProject.submitted && projectAddress.invalid\" class=\"invalid-feedback\">\n                        <div class=\"error-msg\" *ngIf=\"projectAddress.errors.required\">Project Address is required</div>\n                    </div>\n              </div>\n             <div class=\"form-group\">\n                <input type=\"text\" id=\"phone\" class=\"form-control mb-4\" placeholder=\"Phone No\"\n                      name=\"projectPhone\" #projectPhone=\"ngModel\" [(ngModel)]=\"project.phone\" \n                      [ngClass]=\"{ 'is-invalid': createProject.submitted && projectPhone.invalid }\" required />\n  \n                    <div *ngIf=\"createProject.submitted && projectPhone.invalid\" class=\"invalid-feedback\">\n                        <div class=\"error-msg\" *ngIf=\"projectPhone.errors.required\">Phone no is required for the project</div>\n                    </div>\n             </div>\n              <!--Multi Select-->\n              <div class=\"form-group\" id=\"sh-multiselect\">\n                  <select2  [data]=\"contacts\"\n                            [options]=\"options\"\n                            [value]=\"selectedContacts\"\n                            (valueChanged)=\"addContactToProject($event)\"\n                            >\n                  </select2>\n                  <i class=\"fa fa-chevron-down\"></i>\n                  \n              </div>\n              \n            \n              <!-- Message -->\n              <div class=\"form-group\">\n                <textarea class=\"form-control rounded-0\" id=\"project-details\" rows=\"3\" placeholder=\"Project Details\"\n                    name=\"projectDetails\" #projectDetails=\"ngModel\" [(ngModel)]=\"project.projectDetails\"></textarea>\n              </div>\n              <!-- Send button -->\n              <button class=\"btn btn-info btn-block\" type=\"submit\">Update Project</button>\n            \n          </form>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>\n  \n    <!-- Default form contact -->"

/***/ }),

/***/ "./src/app/components/project/edit/edit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/project/edit/edit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/project/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_ViewModel_ProjectUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ViewModel/ProjectUpdate */ "./src/app/models/ViewModel/ProjectUpdate.ts");






var EditComponent = /** @class */ (function () {
    function EditComponent(_contactService, _projectService, router, route) {
        this._contactService = _contactService;
        this._projectService = _projectService;
        this.router = router;
        this.route = route;
        this.contactList = new Array();
        this.project = new src_app_models_ViewModel_ProjectUpdate__WEBPACK_IMPORTED_MODULE_5__["ProjectUpdate"]();
        this.extra = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        this.routeId = this.route.snapshot.paramMap.get('id');
        this.getProject(this.routeId);
        this.options = {
            multiple: true,
            placeholder: 'Please Select Contacts'
        };
    };
    EditComponent.prototype.getProject = function (id) {
        var _this = this;
        this._projectService.getProject(id).subscribe(function (responseProject) {
            Object.assign(_this.project, responseProject);
            _this.project.contactList = _this.project.contacts;
            _this.getAllContacts();
        }, function (error) {
            console.log(error);
        });
    };
    EditComponent.prototype.addContactToProject = function (data) {
        this.project.contactList = data.value;
        console.log(this.project.contactList);
    };
    EditComponent.prototype.getAllContacts = function () {
        var _this = this;
        this._contactService.getAllContacts().subscribe(function (responseAllContacts) {
            Object.assign(_this.contactList, responseAllContacts);
            _this.contacts = _this._contactService.CreateContactSelectList(_this.contactList);
            var arr = [];
            if (_this.project.contactList.length > 0) {
                for (var _i = 0, _a = _this.project.contactList; _i < _a.length; _i++) {
                    var contact = _a[_i];
                    arr.push(contact.id.toString());
                }
            }
            _this.selectedContacts = arr;
            console.log(_this.selectedContacts);
        }, function (error) {
            console.log(error);
        });
    };
    EditComponent.prototype.updateProject = function (f) {
        var _this = this;
        this._projectService.updateProject(this.routeId, this.project).subscribe(function (response) {
            _this.router.navigate(['/projects']);
        }, function (error) {
            console.log(error);
            _this.extra = error;
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/project/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/project/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/project/edit/edit.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/project/edit/edit.module.ts ***!
  \********************************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.component */ "./src/app/components/project/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [{
        path: '',
        data: {
            title: 'Edit Project',
            urls: [{ title: 'Edit Project', url: '/edit' }, { title: 'Edit Project' }]
        },
        component: _edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    }];
var EditModule = /** @class */ (function () {
    function EditModule() {
    }
    EditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_select2__WEBPACK_IMPORTED_MODULE_5__["Select2Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], EditModule);
    return EditModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-edit-edit-module.js.map