(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list-books/list-books.component */ "./src/app/components/list-books/list-books.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-book/new-book.component */ "./src/app/components/new-book/new-book.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_1__["ListBooksComponent"] },
    { path: 'all', redirectTo: '' },
    { path: 'new', component: _components_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_3__["NewBookComponent"] },
    { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!--<p-menubar [styleClass]=\"'menubarCustom'\" [model]=\"items\"></p-menubar>-->\n  <p-tabMenu [style]=\"{'width':'100%'}\" [model]=\"items\"></p-tabMenu>\n</header>\n<router-outlet></router-outlet>\n<!--<footer>...footer</footer>-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.ui-tabmenu .ui-tabmenu-nav {\n  margin-left: 35%;\n  margin-right: 30%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'My Books',
                icon: 'fa fa-book',
                routerLink: 'all'
            },
            {
                label: 'New',
                icon: 'fa fa-fw fa-edit',
                routerLink: 'new'
            },
            {
                label: 'Categories',
                icon: 'fa fa-list-alt',
                routerLink: 'categories'
            },
        ];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-books/list-books.component */ "./src/app/components/list-books/list-books.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/new-book/new-book.component */ "./src/app/components/new-book/new-book.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__["ListBooksComponent"],
                _components_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_12__["NewBookComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_8__["DataViewModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DialogModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["PanelModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["MenubarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"]
            ],
            providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_9__["BookService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2\" style=\"margin-top: 50px\">\n    <form novalidate [formGroup]=\"categoryForm\" >\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"category\">Category name</label><span class=\"error\">*</span>\n            <input type=\"text\" class=\"form-control\" id=\"category\"  formControlName=\"category\" placeholder=\"Documentary\">\n            <div  *ngIf=\"categoryForm.get('category').invalid&&categoryForm.get('category').dirty || categoryForm.get('category').touched\">\n              <p class=\"error\"  *ngIf=\"categoryForm.get('category').hasError('required')\">* category required</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row col-lg-6 col-md-6 col-sm-6 offset-lg-3 offset-md-3 offset-sm-3\">\n        <button type=\"button\"  style=\"width: 100%\" (click)=\"onSubmit()\" [disabled]=\"categoryForm.invalid\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n<hr>\n<div class=\"col-lg-6 col-md-6 col-sm-6 offset-lg-3 offset-md-3 offset-sm-3\" style=\"max-height: 50vh;overflow-y: scroll\">\n  <table class=\"table table-bordered\">\n    <thead style=\"text-align: center;\">\n    <tr>\n      <td>Categories</td>\n    </tr>\n    </thead>\n    <tbody>\n    <tr><td>Documentary</td></tr>\n    <tr><td>Drama</td></tr>\n    <tr><td>Crime</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n    <tr><td>Comedy</td></tr>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.onSubmit = function () {
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/list-books/list-books.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-books/list-books.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dataView #dv [value]=\"books\" [paginator]=\"true\" [rows]=\"12\" paginatorPosition=\"both\" filterBy=\"title\"\n            [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\n  <p-header>\n    <div class=\"ui-helper-clearfix\">\n      <div class=\"ui-g\">\n        <div class=\"ui-g-12 ui-md-4\">\n          <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\"></p-dropdown>\n        </div>\n        <div class=\"ui-g-6 ui-md-4 filter-container\">\n          <div style=\"position:relative\">\n            <input type=\"search\" class=\"form-control\" pInputText placeholder=\"Search by title\" (keyup)=\"dv.filter($event.target.value)\">\n          </div>\n        </div>\n        <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\n          <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n        </div>\n      </div>\n    </div>\n  </p-header>\n  <ng-template let-book pTemplate=\"listItem\">\n    <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\n      <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\n        <img src=\"assets/images/placeholder.png\">\n      </div>\n      <div class=\"ui-g-12 ui-md-8 car-details\">\n        <div class=\"ui-g\">\n          <div class=\"ui-g-2 ui-sm-6\">Author: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.author}}</b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Country: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.country}}</b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Language: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.language}}</b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Link: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b><a [href]=\"book.link\" target=\"_blank\">{{book.link}}</a></b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Pages: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.pages}}</b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Title: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.title}}</b></div>\n\n          <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{book.year}}</b></div>\n        </div>\n      </div>\n      <div class=\"ui-g-6 ui-md-1 search-icon\">\n        <button pButton type=\"button\" class=\"ui-button-info\" icon=\"pi pi-search\" (click)=\"selectBook($event, book)\"></button>\n        <!--<button pButton type=\"button\" class=\"ui-button-success\" icon=\"pi pi-check\" (click)=\"editBook($event, book)\"></button>-->\n        <button pButton type=\"button\" class=\"ui-button-danger\" icon=\"fa fa-trash\" (click)=\"removeBook($event, book)\"></button>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template let-book pTemplate=\"gridItem\">\n    <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"book.title\" [style]=\"{'text-align':'center'}\">\n        <img src=\"assets/images/placeholder.png\" width=\"60\">\n        <div class=\"car-detail\">{{book.author}} - {{book.year}}</div>\n        <hr class=\"ui-widget-content\" style=\"border-top:0\">\n        <button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectBook($event, book)\" style=\"margin-top:0\"></button>\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataView>\n\n<p-dialog header=\"Book Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"500\" (onAfterHide)=\"onDialogHide()\">\n  <div class=\"ui-g\" *ngIf=\"selectedBook\">\n    <div class=\"ui-g-12\" style=\"text-align:center\">\n      <img src=\"assets/images/placeholder.png\">\n    </div>\n    <div class=\"ui-g-4\">Author: </div>\n    <div class=\"ui-g-8\">{{selectedBook.author}}</div>\n\n    <div class=\"ui-g-4\">Country: </div>\n    <div class=\"ui-g-8\">{{selectedBook.country}}</div>\n\n    <div class=\"ui-g-4\">Language: </div>\n    <div class=\"ui-g-8\">{{selectedBook.language}}</div>\n\n    <div class=\"ui-g-4\">Link: </div>\n    <div class=\"ui-g-8\"><a [href]=\"selectedBook.link\" target=\"_blank\">{{selectedBook.link}}</a></div>\n\n    <div class=\"ui-g-4\">Pages: </div>\n    <div class=\"ui-g-8\">{{selectedBook.pages}}</div>\n\n    <div class=\"ui-g-4\">Title: </div>\n    <div class=\"ui-g-8\">{{selectedBook.title}}</div>\n\n    <div class=\"ui-g-4\">Year: </div>\n    <div class=\"ui-g-8\">{{selectedBook.year}}</div>\n  </div>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/components/list-books/list-books.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-books/list-books.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/list-books/list-books.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/list-books/list-books.component.ts ***!
  \***************************************************************/
/*! exports provided: ListBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function() { return ListBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListBooksComponent = /** @class */ (function () {
    function ListBooksComponent(bookService) {
        this.bookService = bookService;
        this.books = [
            {
                'author': 'Chinua Achebe',
                'country': 'Nigeria',
                'imageLink': 'images/things-fall-apart.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
                'pages': 209,
                'title': 'Things Fall Apart',
                'year': 1958
            },
            {
                'author': 'Hans Christian Andersen',
                'country': 'Denmark',
                'imageLink': 'images/fairy-tales.jpg',
                'language': 'Danish',
                'link': 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
                'pages': 784,
                'title': 'Fairy tales',
                'year': 1836
            },
            {
                'author': 'Dante Alighieri',
                'country': 'Italy',
                'imageLink': 'images/the-divine-comedy.jpg',
                'language': 'Italian',
                'link': 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
                'pages': 928,
                'title': 'The Divine Comedy',
                'year': 1315
            },
            {
                'author': 'Unknown',
                'country': 'Sumer and Akkadian Empire',
                'imageLink': 'images/the-epic-of-gilgamesh.jpg',
                'language': 'Akkadian',
                'link': 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
                'pages': 160,
                'title': 'The Epic Of Gilgamesh',
                'year': -1700
            },
            {
                'author': 'Unknown',
                'country': 'Achaemenid Empire',
                'imageLink': 'images/the-book-of-job.jpg',
                'language': 'Hebrew',
                'link': 'https://en.wikipedia.org/wiki/Book_of_Job\n',
                'pages': 176,
                'title': 'The Book Of Job',
                'year': -600
            },
            {
                'author': 'Unknown',
                'country': 'India/Iran/Iraq/Egypt/Tajikistan',
                'imageLink': 'images/one-thousand-and-one-nights.jpg',
                'language': 'Arabic',
                'link': 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
                'pages': 288,
                'title': 'One Thousand and One Nights',
                'year': 1200
            },
            {
                'author': 'Unknown',
                'country': 'Iceland',
                'imageLink': 'images/njals-saga.jpg',
                'language': 'Old Norse',
                'link': 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
                'pages': 384,
                'title': 'Nj\u00e1l\'s Saga',
                'year': 1350
            },
            {
                'author': 'Jane Austen',
                'country': 'United Kingdom',
                'imageLink': 'images/pride-and-prejudice.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
                'pages': 226,
                'title': 'Pride and Prejudice',
                'year': 1813
            },
            {
                'author': 'Honor\u00e9 de Balzac',
                'country': 'France',
                'imageLink': 'images/le-pere-goriot.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n',
                'pages': 443,
                'title': 'Le P\u00e8re Goriot',
                'year': 1835
            },
            {
                'author': 'Samuel Beckett',
                'country': 'Republic of Ireland',
                'imageLink': 'images/molloy-malone-dies-the-unnamable.jpg',
                'language': 'French, English',
                'link': 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
                'pages': 256,
                'title': 'Molloy, Malone Dies, The Unnamable, the trilogy',
                'year': 1952
            },
            {
                'author': 'Giovanni Boccaccio',
                'country': 'Italy',
                'imageLink': 'images/the-decameron.jpg',
                'language': 'Italian',
                'link': 'https://en.wikipedia.org/wiki/The_Decameron\n',
                'pages': 1024,
                'title': 'The Decameron',
                'year': 1351
            },
            {
                'author': 'Jorge Luis Borges',
                'country': 'Argentina',
                'imageLink': 'images/ficciones.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/Ficciones\n',
                'pages': 224,
                'title': 'Ficciones',
                'year': 1965
            },
            {
                'author': 'Emily Bront\u00eb',
                'country': 'United Kingdom',
                'imageLink': 'images/wuthering-heights.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Wuthering_Heights\n',
                'pages': 342,
                'title': 'Wuthering Heights',
                'year': 1847
            },
            {
                'author': 'Albert Camus',
                'country': 'Algeria, French Empire',
                'imageLink': 'images/l-etranger.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/The_Stranger_(novel)\n',
                'pages': 185,
                'title': 'The Stranger',
                'year': 1942
            },
            {
                'author': 'Paul Celan',
                'country': 'Romania, France',
                'imageLink': 'images/poems-paul-celan.jpg',
                'language': 'German',
                'link': '\n',
                'pages': 320,
                'title': 'Poems',
                'year': 1952
            },
            {
                'author': 'Louis-Ferdinand C\u00e9line',
                'country': 'France',
                'imageLink': 'images/voyage-au-bout-de-la-nuit.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n',
                'pages': 505,
                'title': 'Journey to the End of the Night',
                'year': 1932
            },
            {
                'author': 'Miguel de Cervantes',
                'country': 'Spain',
                'imageLink': 'images/don-quijote-de-la-mancha.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/Don_Quixote\n',
                'pages': 1056,
                'title': 'Don Quijote De La Mancha',
                'year': 1610
            },
            {
                'author': 'Geoffrey Chaucer',
                'country': 'England',
                'imageLink': 'images/the-canterbury-tales.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/The_Canterbury_Tales\n',
                'pages': 544,
                'title': 'The Canterbury Tales',
                'year': 1450
            },
            {
                'author': 'Anton Chekhov',
                'country': 'Russia',
                'imageLink': 'images/stories-of-anton-chekhov.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n',
                'pages': 194,
                'title': 'Stories',
                'year': 1886
            },
            {
                'author': 'Joseph Conrad',
                'country': 'United Kingdom',
                'imageLink': 'images/nostromo.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Nostromo\n',
                'pages': 320,
                'title': 'Nostromo',
                'year': 1904
            },
            {
                'author': 'Charles Dickens',
                'country': 'United Kingdom',
                'imageLink': 'images/great-expectations.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Great_Expectations\n',
                'pages': 194,
                'title': 'Great Expectations',
                'year': 1861
            },
            {
                'author': 'Denis Diderot',
                'country': 'France',
                'imageLink': 'images/jacques-the-fatalist.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n',
                'pages': 596,
                'title': 'Jacques the Fatalist',
                'year': 1796
            },
            {
                'author': 'Alfred D\u00f6blin',
                'country': 'Germany',
                'imageLink': 'images/berlin-alexanderplatz.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n',
                'pages': 600,
                'title': 'Berlin Alexanderplatz',
                'year': 1929
            },
            {
                'author': 'Fyodor Dostoevsky',
                'country': 'Russia',
                'imageLink': 'images/crime-and-punishment.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/Crime_and_Punishment\n',
                'pages': 551,
                'title': 'Crime and Punishment',
                'year': 1866
            },
            {
                'author': 'Fyodor Dostoevsky',
                'country': 'Russia',
                'imageLink': 'images/the-idiot.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/The_Idiot\n',
                'pages': 656,
                'title': 'The Idiot',
                'year': 1869
            },
            {
                'author': 'Fyodor Dostoevsky',
                'country': 'Russia',
                'imageLink': 'images/the-possessed.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n',
                'pages': 768,
                'title': 'The Possessed',
                'year': 1872
            },
            {
                'author': 'Fyodor Dostoevsky',
                'country': 'Russia',
                'imageLink': 'images/the-brothers-karamazov.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n',
                'pages': 824,
                'title': 'The Brothers Karamazov',
                'year': 1880
            },
            {
                'author': 'George Eliot',
                'country': 'United Kingdom',
                'imageLink': 'images/middlemarch.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Middlemarch\n',
                'pages': 800,
                'title': 'Middlemarch',
                'year': 1871
            },
            {
                'author': 'Ralph Ellison',
                'country': 'United States',
                'imageLink': 'images/invisible-man.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Invisible_Man\n',
                'pages': 581,
                'title': 'Invisible Man',
                'year': 1952
            },
            {
                'author': 'Euripides',
                'country': 'Greece',
                'imageLink': 'images/medea.jpg',
                'language': 'Greek',
                'link': 'https://en.wikipedia.org/wiki/Medea_(play)\n',
                'pages': 104,
                'title': 'Medea',
                'year': -431
            },
            {
                'author': 'William Faulkner',
                'country': 'United States',
                'imageLink': 'images/absalom-absalom.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Absalom,_Absalom!\n',
                'pages': 313,
                'title': 'Absalom, Absalom!',
                'year': 1936
            },
            {
                'author': 'William Faulkner',
                'country': 'United States',
                'imageLink': 'images/the-sound-and-the-fury.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n',
                'pages': 326,
                'title': 'The Sound and the Fury',
                'year': 1929
            },
            {
                'author': 'Gustave Flaubert',
                'country': 'France',
                'imageLink': 'images/madame-bovary.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Madame_Bovary\n',
                'pages': 528,
                'title': 'Madame Bovary',
                'year': 1857
            },
            {
                'author': 'Gustave Flaubert',
                'country': 'France',
                'imageLink': 'images/l-education-sentimentale.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Sentimental_Education\n',
                'pages': 606,
                'title': 'Sentimental Education',
                'year': 1869
            },
            {
                'author': 'Federico Garc\u00eda Lorca',
                'country': 'Spain',
                'imageLink': 'images/gypsy-ballads.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/Gypsy_Ballads\n',
                'pages': 218,
                'title': 'Gypsy Ballads',
                'year': 1928
            },
            {
                'author': 'Gabriel Garc\u00eda M\u00e1rquez',
                'country': 'Colombia',
                'imageLink': 'images/one-hundred-years-of-solitude.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n',
                'pages': 417,
                'title': 'One Hundred Years of Solitude',
                'year': 1967
            },
            {
                'author': 'Gabriel Garc\u00eda M\u00e1rquez',
                'country': 'Colombia',
                'imageLink': 'images/love-in-the-time-of-cholera.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n',
                'pages': 368,
                'title': 'Love in the Time of Cholera',
                'year': 1985
            },
            {
                'author': 'Johann Wolfgang von Goethe',
                'country': 'Saxe-Weimar',
                'imageLink': 'images/faust.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/Goethe%27s_Faust\n',
                'pages': 158,
                'title': 'Faust',
                'year': 1832
            },
            {
                'author': 'Nikolai Gogol',
                'country': 'Russia',
                'imageLink': 'images/dead-souls.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/Dead_Souls\n',
                'pages': 432,
                'title': 'Dead Souls',
                'year': 1842
            },
            {
                'author': 'G\u00fcnter Grass',
                'country': 'Germany',
                'imageLink': 'images/the-tin-drum.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/The_Tin_Drum\n',
                'pages': 600,
                'title': 'The Tin Drum',
                'year': 1959
            },
            {
                'author': 'Jo\u00e3o Guimar\u00e3es Rosa',
                'country': 'Brazil',
                'imageLink': 'images/the-devil-to-pay-in-the-backlands.jpg',
                'language': 'Portuguese',
                'link': 'https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n',
                'pages': 494,
                'title': 'The Devil to Pay in the Backlands',
                'year': 1956
            },
            {
                'author': 'Knut Hamsun',
                'country': 'Norway',
                'imageLink': 'images/hunger.jpg',
                'language': 'Norwegian',
                'link': 'https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n',
                'pages': 176,
                'title': 'Hunger',
                'year': 1890
            },
            {
                'author': 'Ernest Hemingway',
                'country': 'United States',
                'imageLink': 'images/the-old-man-and-the-sea.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n',
                'pages': 128,
                'title': 'The Old Man and the Sea',
                'year': 1952
            },
            {
                'author': 'Homer',
                'country': 'Greece',
                'imageLink': 'images/the-iliad-of-homer.jpg',
                'language': 'Greek',
                'link': 'https://en.wikipedia.org/wiki/Iliad\n',
                'pages': 608,
                'title': 'Iliad',
                'year': -735
            },
            {
                'author': 'Homer',
                'country': 'Greece',
                'imageLink': 'images/the-odyssey-of-homer.jpg',
                'language': 'Greek',
                'link': 'https://en.wikipedia.org/wiki/Odyssey\n',
                'pages': 374,
                'title': 'Odyssey',
                'year': -800
            },
            {
                'author': 'Henrik Ibsen',
                'country': 'Norway',
                'imageLink': 'images/a-Dolls-house.jpg',
                'language': 'Norwegian',
                'link': 'https://en.wikipedia.org/wiki/A_Doll%27s_House\n',
                'pages': 68,
                'title': 'A Doll\'s House',
                'year': 1879
            },
            {
                'author': 'James Joyce',
                'country': 'Irish Free State',
                'imageLink': 'images/ulysses.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Ulysses_(novel)\n',
                'pages': 228,
                'title': 'Ulysses',
                'year': 1922
            },
            {
                'author': 'Franz Kafka',
                'country': 'Czechoslovakia',
                'imageLink': 'images/stories-of-franz-kafka.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n',
                'pages': 488,
                'title': 'Stories',
                'year': 1924
            },
            {
                'author': 'Franz Kafka',
                'country': 'Czechoslovakia',
                'imageLink': 'images/the-trial.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/The_Trial\n',
                'pages': 160,
                'title': 'The Trial',
                'year': 1925
            },
            {
                'author': 'Franz Kafka',
                'country': 'Czechoslovakia',
                'imageLink': 'images/the-castle.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/The_Castle_(novel)\n',
                'pages': 352,
                'title': 'The Castle',
                'year': 1926
            },
            {
                'author': 'K\u0101lid\u0101sa',
                'country': 'India',
                'imageLink': 'images/the-recognition-of-shakuntala.jpg',
                'language': 'Sanskrit',
                'link': 'https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n',
                'pages': 147,
                'title': 'The recognition of Shakuntala',
                'year': 150
            },
            {
                'author': 'Yasunari Kawabata',
                'country': 'Japan',
                'imageLink': 'images/the-sound-of-the-mountain.jpg',
                'language': 'Japanese',
                'link': 'https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n',
                'pages': 288,
                'title': 'The Sound of the Mountain',
                'year': 1954
            },
            {
                'author': 'Nikos Kazantzakis',
                'country': 'Greece',
                'imageLink': 'images/zorba-the-greek.jpg',
                'language': 'Greek',
                'link': 'https://en.wikipedia.org/wiki/Zorba_the_Greek\n',
                'pages': 368,
                'title': 'Zorba the Greek',
                'year': 1946
            },
            {
                'author': 'D. H. Lawrence',
                'country': 'United Kingdom',
                'imageLink': 'images/sons-and-lovers.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Sons_and_Lovers\n',
                'pages': 432,
                'title': 'Sons and Lovers',
                'year': 1913
            },
            {
                'author': 'Halld\u00f3r Laxness',
                'country': 'Iceland',
                'imageLink': 'images/independent-people.jpg',
                'language': 'Icelandic',
                'link': 'https://en.wikipedia.org/wiki/Independent_People\n',
                'pages': 470,
                'title': 'Independent People',
                'year': 1934
            },
            {
                'author': 'Giacomo Leopardi',
                'country': 'Italy',
                'imageLink': 'images/poems-giacomo-leopardi.jpg',
                'language': 'Italian',
                'link': '\n',
                'pages': 184,
                'title': 'Poems',
                'year': 1818
            },
            {
                'author': 'Doris Lessing',
                'country': 'United Kingdom',
                'imageLink': 'images/the-golden-notebook.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/The_Golden_Notebook\n',
                'pages': 688,
                'title': 'The Golden Notebook',
                'year': 1962
            },
            {
                'author': 'Astrid Lindgren',
                'country': 'Sweden',
                'imageLink': 'images/pippi-longstocking.jpg',
                'language': 'Swedish',
                'link': 'https://en.wikipedia.org/wiki/Pippi_Longstocking\n',
                'pages': 160,
                'title': 'Pippi Longstocking',
                'year': 1945
            },
            {
                'author': 'Lu Xun',
                'country': 'China',
                'imageLink': 'images/diary-of-a-madman.jpg',
                'language': 'Chinese',
                'link': 'https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n',
                'pages': 389,
                'title': 'Diary of a Madman',
                'year': 1918
            },
            {
                'author': 'Naguib Mahfouz',
                'country': 'Egypt',
                'imageLink': 'images/children-of-gebelawi.jpg',
                'language': 'Arabic',
                'link': 'https://en.wikipedia.org/wiki/Children_of_Gebelawi\n',
                'pages': 355,
                'title': 'Children of Gebelawi',
                'year': 1959
            },
            {
                'author': 'Thomas Mann',
                'country': 'Germany',
                'imageLink': 'images/buddenbrooks.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/Buddenbrooks\n',
                'pages': 736,
                'title': 'Buddenbrooks',
                'year': 1901
            },
            {
                'author': 'Thomas Mann',
                'country': 'Germany',
                'imageLink': 'images/the-magic-mountain.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/The_Magic_Mountain\n',
                'pages': 720,
                'title': 'The Magic Mountain',
                'year': 1924
            },
            {
                'author': 'Herman Melville',
                'country': 'United States',
                'imageLink': 'images/moby-dick.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Moby-Dick\n',
                'pages': 378,
                'title': 'Moby Dick',
                'year': 1851
            },
            {
                'author': 'Michel de Montaigne',
                'country': 'France',
                'imageLink': 'images/essais.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Essays_(Montaigne)\n',
                'pages': 404,
                'title': 'Essays',
                'year': 1595
            },
            {
                'author': 'Elsa Morante',
                'country': 'Italy',
                'imageLink': 'images/history.jpg',
                'language': 'Italian',
                'link': 'https://en.wikipedia.org/wiki/History_(novel)\n',
                'pages': 600,
                'title': 'History',
                'year': 1974
            },
            {
                'author': 'Toni Morrison',
                'country': 'United States',
                'imageLink': 'images/beloved.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Beloved_(novel)\n',
                'pages': 321,
                'title': 'Beloved',
                'year': 1987
            },
            {
                'author': 'Murasaki Shikibu',
                'country': 'Japan',
                'imageLink': 'images/the-tale-of-genji.jpg',
                'language': 'Japanese',
                'link': 'https://en.wikipedia.org/wiki/The_Tale_of_Genji\n',
                'pages': 1360,
                'title': 'The Tale of Genji',
                'year': 1006
            },
            {
                'author': 'Robert Musil',
                'country': 'Austria',
                'imageLink': 'images/the-man-without-qualities.jpg',
                'language': 'German',
                'link': 'https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n',
                'pages': 365,
                'title': 'The Man Without Qualities',
                'year': 1931
            },
            {
                'author': 'Vladimir Nabokov',
                'country': 'Russia/United States',
                'imageLink': 'images/lolita.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Lolita\n',
                'pages': 317,
                'title': 'Lolita',
                'year': 1955
            },
            {
                'author': 'George Orwell',
                'country': 'United Kingdom',
                'imageLink': 'images/nineteen-eighty-four.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n',
                'pages': 272,
                'title': 'Nineteen Eighty-Four',
                'year': 1949
            },
            {
                'author': 'Ovid',
                'country': 'Roman Empire',
                'imageLink': 'images/the-metamorphoses-of-ovid.jpg',
                'language': 'Classical Latin',
                'link': 'https://en.wikipedia.org/wiki/Metamorphoses\n',
                'pages': 576,
                'title': 'Metamorphoses',
                'year': 100
            },
            {
                'author': 'Fernando Pessoa',
                'country': 'Portugal',
                'imageLink': 'images/the-book-of-disquiet.jpg',
                'language': 'Portuguese',
                'link': 'https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n',
                'pages': 272,
                'title': 'The Book of Disquiet',
                'year': 1928
            },
            {
                'author': 'Edgar Allan Poe',
                'country': 'United States',
                'imageLink': 'images/tales-and-poems-of-edgar-allan-poe.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n',
                'pages': 842,
                'title': 'Tales',
                'year': 1950
            },
            {
                'author': 'Marcel Proust',
                'country': 'France',
                'imageLink': 'images/a-la-recherche-du-temps-perdu.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n',
                'pages': 2408,
                'title': 'In Search of Lost Time',
                'year': 1920
            },
            {
                'author': 'Fran\u00e7ois Rabelais',
                'country': 'France',
                'imageLink': 'images/gargantua-and-pantagruel.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n',
                'pages': 623,
                'title': 'Gargantua and Pantagruel',
                'year': 1533
            },
            {
                'author': 'Juan Rulfo',
                'country': 'Mexico',
                'imageLink': 'images/pedro-paramo.jpg',
                'language': 'Spanish',
                'link': 'https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n',
                'pages': 124,
                'title': 'Pedro P\u00e1ramo',
                'year': 1955
            },
            {
                'author': 'Rumi',
                'country': 'Sultanate of Rum',
                'imageLink': 'images/the-masnavi.jpg',
                'language': 'Persian',
                'link': 'https://en.wikipedia.org/wiki/Masnavi\n',
                'pages': 438,
                'title': 'The Masnavi',
                'year': 1236
            },
            {
                'author': 'Salman Rushdie',
                'country': 'United Kingdom, India',
                'imageLink': 'images/midnights-children.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Midnight%27s_Children\n',
                'pages': 536,
                'title': 'Midnight\'s Children',
                'year': 1981
            },
            {
                'author': 'Saadi',
                'country': 'Persia, Persian Empire',
                'imageLink': 'images/bostan.jpg',
                'language': 'Persian',
                'link': 'https://en.wikipedia.org/wiki/Bustan_(book)\n',
                'pages': 298,
                'title': 'Bostan',
                'year': 1257
            },
            {
                'author': 'Tayeb Salih',
                'country': 'Sudan',
                'imageLink': 'images/season-of-migration-to-the-north.jpg',
                'language': 'Arabic',
                'link': 'https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n',
                'pages': 139,
                'title': 'Season of Migration to the North',
                'year': 1966
            },
            {
                'author': 'Jos\u00e9 Saramago',
                'country': 'Portugal',
                'imageLink': 'images/blindness.jpg',
                'language': 'Portuguese',
                'link': 'https://en.wikipedia.org/wiki/Blindness_(novel)\n',
                'pages': 352,
                'title': 'Blindness',
                'year': 1995
            },
            {
                'author': 'William Shakespeare',
                'country': 'England',
                'imageLink': 'images/hamlet.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Hamlet\n',
                'pages': 432,
                'title': 'Hamlet',
                'year': 1603
            },
            {
                'author': 'William Shakespeare',
                'country': 'England',
                'imageLink': 'images/king-lear.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/King_Lear\n',
                'pages': 384,
                'title': 'King Lear',
                'year': 1608
            },
            {
                'author': 'William Shakespeare',
                'country': 'England',
                'imageLink': 'images/othello.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Othello\n',
                'pages': 314,
                'title': 'Othello',
                'year': 1609
            },
            {
                'author': 'Sophocles',
                'country': 'Greece',
                'imageLink': 'images/oedipus-the-king.jpg',
                'language': 'Greek',
                'link': 'https://en.wikipedia.org/wiki/Oedipus_the_King\n',
                'pages': 88,
                'title': 'Oedipus the King',
                'year': -430
            },
            {
                'author': 'Stendhal',
                'country': 'France',
                'imageLink': 'images/le-rouge-et-le-noir.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/The_Red_and_the_Black\n',
                'pages': 576,
                'title': 'The Red and the Black',
                'year': 1830
            },
            {
                'author': 'Laurence Sterne',
                'country': 'England',
                'imageLink': 'images/the-life-and-opinions-of-tristram-shandy.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n',
                'pages': 640,
                'title': 'The Life And Opinions of Tristram Shandy',
                'year': 1760
            },
            {
                'author': 'Italo Svevo',
                'country': 'Italy',
                'imageLink': 'images/confessions-of-zeno.jpg',
                'language': 'Italian',
                'link': 'https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n',
                'pages': 412,
                'title': 'Confessions of Zeno',
                'year': 1923
            },
            {
                'author': 'Jonathan Swift',
                'country': 'Ireland',
                'imageLink': 'images/gullivers-travels.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n',
                'pages': 178,
                'title': 'Gulliver\'s Travels',
                'year': 1726
            },
            {
                'author': 'Leo Tolstoy',
                'country': 'Russia',
                'imageLink': 'images/war-and-peace.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/War_and_Peace\n',
                'pages': 1296,
                'title': 'War and Peace',
                'year': 1867
            },
            {
                'author': 'Leo Tolstoy',
                'country': 'Russia',
                'imageLink': 'images/anna-karenina.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/Anna_Karenina\n',
                'pages': 864,
                'title': 'Anna Karenina',
                'year': 1877
            },
            {
                'author': 'Leo Tolstoy',
                'country': 'Russia',
                'imageLink': 'images/the-death-of-ivan-ilyich.jpg',
                'language': 'Russian',
                'link': 'https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n',
                'pages': 92,
                'title': 'The Death of Ivan Ilyich',
                'year': 1886
            },
            {
                'author': 'Mark Twain',
                'country': 'United States',
                'imageLink': 'images/the-adventures-of-huckleberry-finn.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n',
                'pages': 224,
                'title': 'The Adventures of Huckleberry Finn',
                'year': 1884
            },
            {
                'author': 'Valmiki',
                'country': 'India',
                'imageLink': 'images/ramayana.jpg',
                'language': 'Sanskrit',
                'link': 'https://en.wikipedia.org/wiki/Ramayana\n',
                'pages': 152,
                'title': 'Ramayana',
                'year': -450
            },
            {
                'author': 'Virgil',
                'country': 'Roman Empire',
                'imageLink': 'images/the-aeneid.jpg',
                'language': 'Classical Latin',
                'link': 'https://en.wikipedia.org/wiki/Aeneid\n',
                'pages': 442,
                'title': 'The Aeneid',
                'year': -23
            },
            {
                'author': 'Vyasa',
                'country': 'India',
                'imageLink': 'images/the-mahab-harata.jpg',
                'language': 'Sanskrit',
                'link': 'https://en.wikipedia.org/wiki/Mahabharata\n',
                'pages': 276,
                'title': 'Mahabharata',
                'year': -700
            },
            {
                'author': 'Walt Whitman',
                'country': 'United States',
                'imageLink': 'images/leaves-of-grass.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Leaves_of_Grass\n',
                'pages': 152,
                'title': 'Leaves of Grass',
                'year': 1855
            },
            {
                'author': 'Virginia Woolf',
                'country': 'United Kingdom',
                'imageLink': 'images/mrs-dalloway.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/Mrs_Dalloway\n',
                'pages': 216,
                'title': 'Mrs Dalloway',
                'year': 1925
            },
            {
                'author': 'Virginia Woolf',
                'country': 'United Kingdom',
                'imageLink': 'images/to-the-lighthouse.jpg',
                'language': 'English',
                'link': 'https://en.wikipedia.org/wiki/To_the_Lighthouse\n',
                'pages': 209,
                'title': 'To the Lighthouse',
                'year': 1927
            },
            {
                'author': 'Marguerite Yourcenar',
                'country': 'France/Belgium',
                'imageLink': 'images/memoirs-of-hadrian.jpg',
                'language': 'French',
                'link': 'https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n',
                'pages': 408,
                'title': 'Memoirs of Hadrian',
                'year': 1951
            }
        ];
    }
    ListBooksComponent.prototype.ngOnInit = function () {
        this.sortOptions = [
            { label: 'Newest First', value: '!year' },
            { label: 'Oldest First', value: 'year' },
        ];
    };
    ListBooksComponent.prototype.selectBook = function (event, book) {
        this.selectedBook = book;
        this.displayDialog = true;
        event.preventDefault();
    };
    ListBooksComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    ListBooksComponent.prototype.onDialogHide = function () {
        this.selectedBook = null;
    };
    ListBooksComponent.prototype.editBook = function () {
    };
    ListBooksComponent.prototype.removeBook = function () {
    };
    ListBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-books',
            template: __webpack_require__(/*! ./list-books.component.html */ "./src/app/components/list-books/list-books.component.html"),
            styles: [__webpack_require__(/*! ./list-books.component.scss */ "./src/app/components/list-books/list-books.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], ListBooksComponent);
    return ListBooksComponent;
}());



/***/ }),

/***/ "./src/app/components/new-book/new-book.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-book/new-book.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2\" style=\"margin-top: 50px\">\n    <form novalidate [formGroup]=\"bookForm\" >\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"author\">Author</label><span class=\"error\">*</span>\n            <input type=\"text\" class=\"form-control\" id=\"author\"  formControlName=\"author\" placeholder=\"Chinua Achebe\">\n            <div  *ngIf=\"bookForm.get('author').invalid&&bookForm.get('author').dirty || bookForm.get('author').touched\">\n              <p class=\"error\"  *ngIf=\"bookForm.get('author').hasError('required')\">* Author required</p>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" formControlName=\"country\" placeholder=\"United Kingdom\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"language\">Language</label><span class=\"error\">*</span>\n            <select class=\"form-control\" id=\"language\" formControlName=\"language\">\n              <option value=\"Azerbaijani\">Azerbaijani</option>\n              <option value=\"English\">English</option>\n              <option value=\"Russian\">Russian</option>\n              <option value=\"Turkish\">Turkish</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label><span class=\"error\">*</span>\n            <span pTooltip=\"New category\" style=\"float: right;margin-right: 15px\" (click)=\"showAddCategory = !showAddCategory\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n            <div *ngIf=\"showAddCategory \">\n            <input style=\"display: inline-block\" type=\"text\" class=\"form-control category\"  name=\"category\"  [(ngModel)]=\"newCategory\" (keyup.enter)=\"onAddCategory()\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"new category\">\n            <input style=\"display: inline-block\" type=\"button\" class=\"form-control submit\"   value=\"Submit\" (click)=\"onAddCategory()\" >\n            </div>\n            <select class=\"form-control\" style=\"display: inline-block\" id=\"category\" formControlName=\"category\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label><span class=\"error\">*</span>\n            <textarea class=\"form-control\" id=\"description\" rows=\"3\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"image\">Image file input</label>\n            <input type=\"file\" class=\"form-control-file\" formControlName=\"image\" id=\"image\">\n          </div>\n\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"pages\">Pages</label><span class=\"error\">*</span>\n            <input type=\"number\" class=\"form-control\" formControlName=\"pages\" id=\"pages\" placeholder=\"216\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label><span class=\"error\">*</span>\n            <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" placeholder=\"Mrs Dalloway\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"year\">Year</label><span class=\"error\">*</span>\n            <input type=\"text\" class=\"form-control\" id=\"year\" formControlName=\"year\" placeholder=\"1925\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pdf\">PDF file input</label><span class=\"error\">*</span>\n            <input type=\"file\" class=\"form-control-file\" formControlName=\"pdf\" id=\"pdf\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row col-lg-6 col-md-6 col-sm-6 offset-lg-3 offset-md-3 offset-sm-3\">\n        <button type=\"button\"  style=\"width: 100%\" (click)=\"onSubmit()\" [disabled]=\"bookForm.invalid\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-book/new-book.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-book/new-book.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\n  width: 75%;\n  margin-bottom: 10px; }\n\n.submit {\n  width: 25%;\n  margin-bottom: 10px; }\n\n.error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/components/new-book/new-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-book/new-book.component.ts ***!
  \***********************************************************/
/*! exports provided: NewBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookComponent", function() { return NewBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewBookComponent = /** @class */ (function () {
    function NewBookComponent() {
        this.showAddCategory = false;
    }
    NewBookComponent.prototype.ngOnInit = function () {
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pdf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    NewBookComponent.prototype.onSubmit = function () {
        console.log(this.bookForm.value);
    };
    NewBookComponent.prototype.onAddCategory = function () {
        console.log(this.newCategory);
    };
    NewBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-book',
            template: __webpack_require__(/*! ./new-book.component.html */ "./src/app/components/new-book/new-book.component.html"),
            styles: [__webpack_require__(/*! ./new-book.component.scss */ "./src/app/components/new-book/new-book.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewBookComponent);
    return NewBookComponent;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getCarsLarge = function () {
        return this.http.get('/assets/cars-large.json')
            .toPromise()
            .then(function (res) { return res['data']; })
            .then(function (data) { return data; });
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nahid\WebstormProjects\hw-library\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map