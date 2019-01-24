(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-contact-project-contact-module"],{

/***/ "./src/app/components/project/project-contact/project-contact.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-contact/project-contact.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2>Contact Manamgnet</h2>\n                <a [routerLink]=\"['/projects']\" role=\"button\" class=\"btn btn-success right\">Project List</a>\n            </div>\n          </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-4 project-contact\" *ngFor=\"let project of projects; let i = index \">\n                <div class=\"list-group project-contact-box\">\n                    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        <h5 class=\"mb-1 project-contact-h5\">{{project.projectName}}</h5>\n                        <button mdbBtn color=\"default\" rounded=\"true\" data-toggle=\"modal\" data-target=\"#basicExample\"\n                          (click)=\" editContact($event, project); frame.show()\" mdbWavesEffect size=\"sm\"><i class=\"fas fa-user-plus\"></i></button>\n                      </div>\n                      <small>{{project.address}}</small>\n                    </a>\n                    <div class=\"list-group-item list-group-item-action flex-column align-items-start\"\n                    *ngFor=\"let contact of project.contacts; let j = index\">\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        <p class=\"mb-1\">{{contact.name}}</p>\n                        <small class=\"text-muted\">\n                          <button type=\"button\" (click)=\"deleteContact($event, contact.id, project.id)\">\n                            <i class=\"fas fa-backspace\"></i></button>\n                          </small>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"i%3 == 0\" class=\"clearfix\"></div>\n            </div>\n        </div>\n      </div>\n      \n      \n      <div mdbModal #frame=\"mdbModal\" class=\"modal fade bottom\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\" id=\"contact-project-modal-container\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">{{project.projectName}} New Contact</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide(); clearContacts()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n      \n            <div class=\"row row-divided\">\n                <div class=\"col-md-6\">\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"addContactToProject(); frame.hide()\" novalidate>\n                        <div class=\"modal-body mx-3\">\n                            <div class=\"md-form mb-5\">\n                              <i class=\"fas fa-user prefix grey-text\"></i>\n                              <input type=\"text\" id=\"contact-name\" class=\"form-control validate\" formControlName=\"name\"\n                                mdbInputDirective required>\n                              <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Name</label>\n                            </div>\n                            <div class=\"md-form mb-5\">\n                              <i class=\"fas fa-envelope prefix grey-text\"></i>\n                              <input type=\"text\" id=\"contact-address\" class=\"form-control validate\" formControlName=\"address\"\n                                mdbInputDirective required>\n                              <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Address</label>\n                            </div>\n                    \n                            <div class=\"md-form mb-4\">\n                              <i class=\"fas fa-lock prefix grey-text\"></i>\n                              <textarea type=\"text\" id=\"contact-details\" class=\"form-control validate\" formControlName=\"details\"\n                                mdbInputDirective></textarea>\n                            </div>\n                          </div>\n                          <div class=\"modal-footer d-flex justify-content-center\">\n                              <button mdbBtn color=\"deep-orange\" class=\"waves-light\" mdbWavesEffect>Sign up</button>\n                            </div>\n                    </form>\n                </div>\n                <div class=\"vertical-divider\">or</div>\n                <div *ngIf=\"showMeModal==true\" class=\"col-md-6\">\n                    <form class=\"text-center p-5\" id=\"add-contact-exist\" (ngSubmit)=\"addExistingContact(); frame.hide()\">\n                        <!--Multi Select-->\n      \n                         <div class=\"form-group\" id=\"sh-multiselect\">\n                             <select2  [data]=\"contacts\"\n                                       [options]=\"options\"\n                                       [value]=\"selectedContacts\"\n                                       (valueChanged) = \"reInit($event)\"\n                                     \n                                       >\n                             </select2>\n                             <i class=\"fa fa-chevron-down\"></i>\n                         </div>\n                 \n                         <button mdbBtn class=\"btn btn-info btn-block\" >Add From Exisitng</button>\n                       </form>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/project/project-contact/project-contact.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-contact/project-contact.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LWNvbnRhY3QvcHJvamVjdC1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/project-contact/project-contact.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project/project-contact/project-contact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContactComponent", function() { return ProjectContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_ViewModel_ContactAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ViewModel/ContactAdd */ "./src/app/models/ViewModel/ContactAdd.ts");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var src_app_models_ViewModel_ProjectUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/ViewModel/ProjectUpdate */ "./src/app/models/ViewModel/ProjectUpdate.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ProjectContactComponent = /** @class */ (function () {
    function ProjectContactComponent(_projectService, _contactService, router) {
        this._projectService = _projectService;
        this._contactService = _contactService;
        this.router = router;
        this.projects = new Array();
        this.contact = new src_app_models_ViewModel_ContactAdd__WEBPACK_IMPORTED_MODULE_5__["ContactAdd"]();
        this.project = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.projectUpdate = new src_app_models_ViewModel_ProjectUpdate__WEBPACK_IMPORTED_MODULE_7__["ProjectUpdate"]();
        this.contactList = new Array();
        this.showMeModal = false;
    }
    ProjectContactComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
        this.getAllContacts();
        this.contactForm = this.createFormGroup();
        this.options = {
            multiple: true,
            placeholder: 'Please Select Contacts'
        };
    };
    ProjectContactComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    };
    ProjectContactComponent.prototype.getAllProjects = function () {
        var _this = this;
        this._projectService.getAllProjects().subscribe(function (responseAllProjects) {
            Object.assign(_this.projects, responseAllProjects);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectContactComponent.prototype.getAllContacts = function () {
        var _this = this;
        this._contactService.getAllContacts().subscribe(function (responseAllContacts) {
            Object.assign(_this.contactList, responseAllContacts);
            _this.contacts = _this._contactService.CreateContactSelectList(_this.contactList);
            console.log(_this.contacts);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectContactComponent.prototype.editContact = function ($event, project) {
        this.showMeModal = true;
        $event.preventDefault();
        this.project = project;
        this.prepareSelectedContacts();
    };
    ProjectContactComponent.prototype.addContactToProject = function () {
        var _this = this;
        var result = Object.assign({}, this.contactForm.value);
        this._projectService.addContactToProject(this.project.id, result).subscribe(function (response) {
            Object.assign(_this.projects, response);
            _this.clearContacts();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    ProjectContactComponent.prototype.deleteContact = function ($event, id, projectId) {
        var _this = this;
        console.log(id);
        this._contactService.deleteContact(id).subscribe(function (response) {
            _this.projects.map(function (item) {
                if (item.id == projectId) {
                    return item.contacts = item.contacts.filter(function (contact) { return contact.id != id; });
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    ProjectContactComponent.prototype.prepareSelectedContacts = function () {
        var arr = [];
        if (this.project.contacts.length > 0) {
            for (var _i = 0, _a = this.project.contacts; _i < _a.length; _i++) {
                var contact = _a[_i];
                arr.push(contact.id.toString());
            }
        }
        this.selectedContacts = arr;
    };
    ProjectContactComponent.prototype.clearContacts = function () {
        this.showMeModal = false;
        this.selectedContacts = [];
        this.project = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
    };
    ProjectContactComponent.prototype.reInit = function (data) {
        Object.assign(this.projectUpdate, this.project);
        this.projectUpdate.contactList = data.value;
        console.log(this.project.contactList);
    };
    ProjectContactComponent.prototype.addExistingContact = function () {
        this._projectService.updateProject(this.projectUpdate.id, this.projectUpdate).subscribe(function (response) {
            window.location.reload();
        }, function (error) {
            console.log(error);
        });
    };
    ProjectContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-contact',
            template: __webpack_require__(/*! ./project-contact.component.html */ "./src/app/components/project/project-contact/project-contact.component.html"),
            styles: [__webpack_require__(/*! ./project-contact.component.scss */ "./src/app/components/project/project-contact/project-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ProjectContactComponent);
    return ProjectContactComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-contact/project-contact.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/project/project-contact/project-contact.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContactModule", function() { return ProjectContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-contact.component */ "./src/app/components/project/project-contact/project-contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_7__);








var routes = [{
        path: '',
        data: {
            title: 'Project contacts',
            urls: [{ title: 'Project Contacts', url: '/edit' }, { title: 'Project contacts' }]
        },
        component: _project_contact_component__WEBPACK_IMPORTED_MODULE_3__["ProjectContactComponent"]
    }];
var ProjectContactModule = /** @class */ (function () {
    function ProjectContactModule() {
    }
    ProjectContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_project_contact_component__WEBPACK_IMPORTED_MODULE_3__["ProjectContactComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"],
                ng2_select2__WEBPACK_IMPORTED_MODULE_7__["Select2Module"]
            ]
        })
    ], ProjectContactModule);
    return ProjectContactModule;
}());



/***/ }),

/***/ "./src/app/models/ViewModel/ContactAdd.ts":
/*!************************************************!*\
  !*** ./src/app/models/ViewModel/ContactAdd.ts ***!
  \************************************************/
/*! exports provided: ContactAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdd", function() { return ContactAdd; });
var ContactAdd = /** @class */ (function () {
    function ContactAdd(name, details, address) {
        if (name === void 0) { name = ''; }
        if (details === void 0) { details = ''; }
        if (address === void 0) { address = ''; }
        this.name = name;
        this.details = details;
        this.address = address;
    }
    return ContactAdd;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-contact-project-contact-module.js.map