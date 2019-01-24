(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n  <div class=\"jumbotron\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h2>Project List</h2>\n              <a [routerLink]=\"['/projects/add']\" role=\"button\" class=\"btn btn-success right\">Add Project</a>\n          </div>\n        </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 mx-auto mt-5\">\n      <table mdbTable class=\"z-depth-1 table-responsive-sm\" striped=\"true\" hover=\"true\" >\n        <thead>\n          <tr>\n            <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr mdbTableCol *ngFor=\"let el of elements; let i = index\">\n            <th *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" scope=\"row\" class=\"text-center\">{{el.Id}}</th>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">{{el.Name}}</td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">{{el.Phone}}</td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">{{el.Address}}</td>\n            <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\">\n              <a [routerLink]=\"['/projects/edit/'+el.Id]\" role=\"button\" class=\"btn btn-success\">Edit</a>\n              <button role=\"button\" class=\"btn btn-danger\" (click)=\"deleteProject(el.Id)\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot class=\"grey lighten-5 w-100\">\n      \n          <tr>\n            <td colspan=\"5\">\n              <mdb-table-pagination (nextPageClick)=\"onNextPageClick($event)\" (previousPageClick)=\"onPreviousPageClick($event)\">\n              </mdb-table-pagination>\n            </td>\n          </tr>\n      \n        </tfoot>\n      </table>\n    </div>\n  </div>\n  \n  \n</main>"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(tableService, cdRef, _projectService) {
        this.tableService = tableService;
        this.cdRef = cdRef;
        this._projectService = _projectService;
        this.elements = [];
        this.previous = [];
        this.headElements = ['Id', 'ProjectName', 'Phone', 'Address', 'Action'];
        this.projects = new Array();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getAllContacts();
    };
    ProjectComponent.prototype.getAllContacts = function () {
        var _this = this;
        this._projectService.getAllProjects().subscribe(function (responseAllProjects) {
            Object.assign(_this.projects, responseAllProjects);
            for (var _i = 0, _a = _this.projects; _i < _a.length; _i++) {
                var project = _a[_i];
                _this.elements.push({ Id: project.id,
                    Name: project.projectName,
                    Phone: project.phone,
                    Address: project.address });
            }
            _this.tableService.setDataSource(_this.elements);
            _this.elements = _this.tableService.getDataSource();
            _this.previous = _this.tableService.getDataSource();
        }, function (error) {
            console.log(error);
        });
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this._projectService.deleteProject(id).subscribe(function (response) {
            _this.elements = _this.elements.filter(function (item) { return item.Id != id; });
        }, function (error) {
            console.log(error);
        });
    };
    ProjectComponent.prototype.ngAfterViewInit = function () {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
        this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
        this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    };
    ProjectComponent.prototype.onNextPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    ProjectComponent.prototype.onPreviousPageClick = function (data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTablePaginationComponent"])
    ], ProjectComponent.prototype, "mdbTablePagination", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbTableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/project/project.module.ts ***!
  \******************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");






var routes = [{
        path: '',
        data: {
            title: "Projects",
            urls: [{ title: 'Projects', url: '/projects' }, { title: 'Projects' }]
        },
        component: _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    }];
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map