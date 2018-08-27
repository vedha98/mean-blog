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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<app-navbar></app-navbar>\r\n<div class=\"container-fluid\" style=\"padding-left:0px;padding-right:0px\" >\r\n<flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _components_allposts_allposts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/allposts/allposts.component */ "./src/app/components/allposts/allposts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'validate', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'allposts', component: _components_allposts_allposts_component__WEBPACK_IMPORTED_MODULE_17__["AllpostsComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_allposts_allposts_component__WEBPACK_IMPORTED_MODULE_17__["AllpostsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot(),
                ngx_quill__WEBPACK_IMPORTED_MODULE_16__["QuillModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/allposts/allposts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/allposts/allposts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/allposts/allposts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/allposts/allposts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  allposts works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/allposts/allposts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/allposts/allposts.component.ts ***!
  \***********************************************************/
/*! exports provided: AllpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllpostsComponent", function() { return AllpostsComponent; });
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

var AllpostsComponent = /** @class */ (function () {
    function AllpostsComponent() {
    }
    AllpostsComponent.prototype.ngOnInit = function () {
    };
    AllpostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allposts',
            template: __webpack_require__(/*! ./allposts.component.html */ "./src/app/components/allposts/allposts.component.html"),
            styles: [__webpack_require__(/*! ./allposts.component.css */ "./src/app/components/allposts/allposts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllpostsComponent);
    return AllpostsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  background: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"new\" style=\"z-index:4; background: white;\r\n    margin: 50px;height:32em\">\r\n\r\n\r\n\r\n      <!--Form with header-->\r\n\r\n\r\n\r\n\t\t\t\t\t\t            <quill-editor>\r\n\t\t\t\t\t\t              <div id=\"toolbar-container\" class=\"ql-toolbar ql-snow\">\r\n\t\t\t\t\t\t                <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ql-font ql-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-0\"><svg viewBox=\"0 0 18 18\"> <polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon> </svg></span>\r\n\t\t\t\t\t\t                <span\r\n\t\t\t\t\t\t                class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-0\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"serif\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"monospace\"></span></span>\r\n\t\t\t\t\t\t                  </span>\r\n\t\t\t\t\t\t                  <select class=\"ql-font\" style=\"display: none;\">\r\n\t\t\t\t\t\t                    <option selected=\"selected\"></option>\r\n\t\t\t\t\t\t                    <option value=\"serif\"></option>\r\n\t\t\t\t\t\t                    <option value=\"monospace\"></option>\r\n\t\t\t\t\t\t                  </select>\r\n\t\t\t\t\t\t                  <span class=\"ql-size ql-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-1\"><svg viewBox=\"0 0 18 18\"> <polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon> </svg></span>\r\n\t\t\t\t\t\t                  <span\r\n\t\t\t\t\t\t                  class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-1\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"small\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"large\"></span>\r\n\t\t\t\t\t\t                    <span\r\n\t\t\t\t\t\t                    tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"huge\"></span>\r\n\t\t\t\t\t\t                      </span>\r\n\t\t\t\t\t\t                      </span>\r\n\t\t\t\t\t\t                      <select class=\"ql-size\" style=\"display: none;\">\r\n\t\t\t\t\t\t                        <option value=\"small\"></option>\r\n\t\t\t\t\t\t                        <option selected=\"selected\"></option>\r\n\t\t\t\t\t\t                        <option value=\"large\"></option>\r\n\t\t\t\t\t\t                        <option value=\"huge\"></option>\r\n\t\t\t\t\t\t                      </select>\r\n\t\t\t\t\t\t                      </span>\r\n\t\t\t\t\t\t                      <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-bold\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"></path> <path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-italic\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"></line> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-underline\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"></path> <rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"></rect> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-strike\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"></line> <path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"></path> <path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t                      <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ql-color ql-picker ql-color-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-2\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"></line> <polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"></line> </svg></span>\r\n\t\t\t\t\t\t                      <span\r\n\t\t\t\t\t\t                      class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-2\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected ql-primary\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#e60000\" style=\"background-color: rgb(230, 0, 0);\"></span>\r\n\t\t\t\t\t\t                        <span\r\n\t\t\t\t\t\t                        tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#ff9900\" style=\"background-color: rgb(255, 153, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#ffff00\" style=\"background-color: rgb(255, 255, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#008a00\"\r\n\t\t\t\t\t\t                          style=\"background-color: rgb(0, 138, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#0066cc\" style=\"background-color: rgb(0, 102, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\"\r\n\t\t\t\t\t\t                          data-value=\"#9933ff\" style=\"background-color: rgb(153, 51, 255);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffffff\" style=\"background-color: rgb(255, 255, 255);\"></span><span tabindex=\"0\" role=\"button\"\r\n\t\t\t\t\t\t                          class=\"ql-picker-item\" data-value=\"#facccc\" style=\"background-color: rgb(250, 204, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffebcc\" style=\"background-color: rgb(255, 235, 204);\"></span>\r\n\t\t\t\t\t\t                          <span\r\n\t\t\t\t\t\t                          tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffffcc\" style=\"background-color: rgb(255, 255, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#cce8cc\" style=\"background-color: rgb(204, 232, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#cce0f5\" style=\"background-color: rgb(204, 224, 245);\"></span>\r\n\t\t\t\t\t\t                            <span\r\n\t\t\t\t\t\t                            tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ebd6ff\" style=\"background-color: rgb(235, 214, 255);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#bbbbbb\" style=\"background-color: rgb(187, 187, 187);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#f06666\" style=\"background-color: rgb(240, 102, 102);\"></span>\r\n\t\t\t\t\t\t                              <span\r\n\t\t\t\t\t\t                              tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffc266\" style=\"background-color: rgb(255, 194, 102);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffff66\" style=\"background-color: rgb(255, 255, 102);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#66b966\" style=\"background-color: rgb(102, 185, 102);\"></span>\r\n\t\t\t\t\t\t                                <span\r\n\t\t\t\t\t\t                                tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#66a3e0\" style=\"background-color: rgb(102, 163, 224);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#c285ff\" style=\"background-color: rgb(194, 133, 255);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#888888\" style=\"background-color: rgb(136, 136, 136);\"></span>\r\n\t\t\t\t\t\t                                  <span\r\n\t\t\t\t\t\t                                  tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#a10000\" style=\"background-color: rgb(161, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#b26b00\" style=\"background-color: rgb(178, 107, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#b2b200\" style=\"background-color: rgb(178, 178, 0);\"></span>\r\n\t\t\t\t\t\t                                    <span\r\n\t\t\t\t\t\t                                    tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#006100\" style=\"background-color: rgb(0, 97, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#0047b2\" style=\"background-color: rgb(0, 71, 178);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#6b24b2\" style=\"background-color: rgb(107, 36, 178);\"></span>\r\n\t\t\t\t\t\t                                      <span\r\n\t\t\t\t\t\t                                      tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#444444\" style=\"background-color: rgb(68, 68, 68);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#5c0000\" style=\"background-color: rgb(92, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#663d00\" style=\"background-color: rgb(102, 61, 0);\"></span>\r\n\t\t\t\t\t\t                                        <span\r\n\t\t\t\t\t\t                                        tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#666600\" style=\"background-color: rgb(102, 102, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#003700\" style=\"background-color: rgb(0, 55, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#002966\" style=\"background-color: rgb(0, 41, 102);\"></span>\r\n\t\t\t\t\t\t                                          <span\r\n\t\t\t\t\t\t                                          tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#3d1466\" style=\"background-color: rgb(61, 20, 102);\"></span>\r\n\t\t\t\t\t\t                                            </span>\r\n\t\t\t\t\t\t                                            </span>\r\n\t\t\t\t\t\t                                            <select class=\"ql-color\" style=\"display: none;\">\r\n\t\t\t\t\t\t                                              <option selected=\"selected\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#e60000\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ff9900\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffff00\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#008a00\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#0066cc\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#9933ff\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffffff\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#facccc\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffebcc\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffffcc\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#cce8cc\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#cce0f5\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ebd6ff\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#bbbbbb\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#f06666\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffc266\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#ffff66\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#66b966\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#66a3e0\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#c285ff\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#888888\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#a10000\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#b26b00\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#b2b200\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#006100\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#0047b2\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#6b24b2\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#444444\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#5c0000\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#663d00\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#666600\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#003700\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#002966\"></option>\r\n\t\t\t\t\t\t                                              <option value=\"#3d1466\"></option>\r\n\t\t\t\t\t\t                                            </select>\r\n\t\t\t\t\t\t                                            <span class=\"ql-background ql-picker ql-color-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-3\"><svg viewBox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"></rect> <rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"></rect> <rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"></rect> <rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"></rect> <rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"></rect> <path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"></path> <path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"></path> <path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"></path> <rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"></rect> <rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"></rect> <path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"></path> <rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"></rect> <rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"></rect> <rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"></rect> <rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"></rect> <rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"></rect> <rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"></rect> <rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"></rect> <rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"></rect> <rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"></rect> <rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"></rect> <path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"></path> <rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"></rect> <rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"></rect> <rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"></rect> <rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"></rect> <path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"></path> <rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"></rect> <path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"></path> <rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"></rect> <path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"></path> <rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"></rect> <rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"></rect> </g> <polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"></line> </svg></span>\r\n\t\t\t\t\t\t                                            <span\r\n\t\t\t\t\t\t                                            class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-3\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#000000\" style=\"background-color: rgb(0, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#e60000\"\r\n\t\t\t\t\t\t                                              style=\"background-color: rgb(230, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#ff9900\" style=\"background-color: rgb(255, 153, 0);\"></span><span tabindex=\"0\"\r\n\t\t\t\t\t\t                                              role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#ffff00\" style=\"background-color: rgb(255, 255, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#008a00\"\r\n\t\t\t\t\t\t                                              style=\"background-color: rgb(0, 138, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#0066cc\" style=\"background-color: rgb(0, 102, 204);\"></span><span tabindex=\"0\"\r\n\t\t\t\t\t\t                                              role=\"button\" class=\"ql-picker-item ql-primary\" data-value=\"#9933ff\" style=\"background-color: rgb(153, 51, 255);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected\"></span><span tabindex=\"0\"\r\n\t\t\t\t\t\t                                              role=\"button\" class=\"ql-picker-item\" data-value=\"#facccc\" style=\"background-color: rgb(250, 204, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffebcc\" style=\"background-color: rgb(255, 235, 204);\"></span>\r\n\t\t\t\t\t\t                                              <span\r\n\t\t\t\t\t\t                                              tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffffcc\" style=\"background-color: rgb(255, 255, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#cce8cc\" style=\"background-color: rgb(204, 232, 204);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#cce0f5\"\r\n\t\t\t\t\t\t                                                style=\"background-color: rgb(204, 224, 245);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ebd6ff\" style=\"background-color: rgb(235, 214, 255);\"></span><span tabindex=\"0\" role=\"button\"\r\n\t\t\t\t\t\t                                                class=\"ql-picker-item\" data-value=\"#bbbbbb\" style=\"background-color: rgb(187, 187, 187);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#f06666\" style=\"background-color: rgb(240, 102, 102);\"></span>\r\n\t\t\t\t\t\t                                                <span\r\n\t\t\t\t\t\t                                                tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffc266\" style=\"background-color: rgb(255, 194, 102);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#ffff66\" style=\"background-color: rgb(255, 255, 102);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#66b966\"\r\n\t\t\t\t\t\t                                                  style=\"background-color: rgb(102, 185, 102);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#66a3e0\" style=\"background-color: rgb(102, 163, 224);\"></span><span tabindex=\"0\"\r\n\t\t\t\t\t\t                                                  role=\"button\" class=\"ql-picker-item\" data-value=\"#c285ff\" style=\"background-color: rgb(194, 133, 255);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#888888\" style=\"background-color: rgb(136, 136, 136);\"></span>\r\n\t\t\t\t\t\t                                                  <span\r\n\t\t\t\t\t\t                                                  tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#a10000\" style=\"background-color: rgb(161, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#b26b00\" style=\"background-color: rgb(178, 107, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#b2b200\"\r\n\t\t\t\t\t\t                                                    style=\"background-color: rgb(178, 178, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#006100\" style=\"background-color: rgb(0, 97, 0);\"></span><span tabindex=\"0\" role=\"button\"\r\n\t\t\t\t\t\t                                                    class=\"ql-picker-item\" data-value=\"#0047b2\" style=\"background-color: rgb(0, 71, 178);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#6b24b2\" style=\"background-color: rgb(107, 36, 178);\"></span>\r\n\t\t\t\t\t\t                                                    <span\r\n\t\t\t\t\t\t                                                    tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#444444\" style=\"background-color: rgb(68, 68, 68);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#5c0000\" style=\"background-color: rgb(92, 0, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#663d00\"\r\n\t\t\t\t\t\t                                                      style=\"background-color: rgb(102, 61, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#666600\" style=\"background-color: rgb(102, 102, 0);\"></span><span tabindex=\"0\"\r\n\t\t\t\t\t\t                                                      role=\"button\" class=\"ql-picker-item\" data-value=\"#003700\" style=\"background-color: rgb(0, 55, 0);\"></span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#002966\" style=\"background-color: rgb(0, 41, 102);\"></span>\r\n\t\t\t\t\t\t                                                      <span\r\n\t\t\t\t\t\t                                                      tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"#3d1466\" style=\"background-color: rgb(61, 20, 102);\"></span>\r\n\t\t\t\t\t\t                                                        </span>\r\n\t\t\t\t\t\t                                                        </span>\r\n\t\t\t\t\t\t                                                        <select class=\"ql-background\" style=\"display: none;\">\r\n\t\t\t\t\t\t                                                          <option value=\"#000000\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#e60000\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ff9900\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ffff00\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#008a00\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#0066cc\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#9933ff\"></option>\r\n\t\t\t\t\t\t                                                          <option selected=\"selected\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#facccc\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ffebcc\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ffffcc\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#cce8cc\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#cce0f5\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ebd6ff\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#bbbbbb\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#f06666\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ffc266\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#ffff66\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#66b966\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#66a3e0\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#c285ff\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#888888\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#a10000\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#b26b00\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#b2b200\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#006100\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#0047b2\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#6b24b2\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#444444\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#5c0000\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#663d00\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#666600\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#003700\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#002966\"></option>\r\n\t\t\t\t\t\t                                                          <option value=\"#3d1466\"></option>\r\n\t\t\t\t\t\t                                                        </select>\r\n\t\t\t\t\t\t                                                        </span>\r\n\t\t\t\t\t\t                                                        <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-script\" value=\"sub\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"></path> <path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-script\" value=\"super\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"></path> <path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t                                                        <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-header\" value=\"1\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-header\" value=\"2\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-blockquote\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"></rect> <rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"></rect> <path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"></path> <path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-code-block\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"></line> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t                                                        <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-list\" value=\"ordered\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"></line> <path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"></path> <path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"></path> <path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-list\" value=\"bullet\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"></line> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-indent\" value=\"-1\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"></polyline> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-indent\" value=\"+1\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"></line> <line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t                                                        <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-direction\" value=\"rtl\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"></line> <path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"></path> <rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"></rect> <rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"></rect> </svg><svg viewBox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"></line> <path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"></path> <rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"></rect> <rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"></rect> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ql-align ql-picker ql-icon-picker\"><span class=\"ql-picker-label\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-controls=\"ql-picker-options-4\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span>\r\n\t\t\t\t\t\t                                                        <span\r\n\t\t\t\t\t\t                                                        class=\"ql-picker-options\" aria-hidden=\"true\" tabindex=\"-1\" id=\"ql-picker-options-4\"><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item ql-selected\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span>\r\n\t\t\t\t\t\t                                                          <span\r\n\t\t\t\t\t\t                                                          tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"center\">\r\n\t\t\t\t\t\t                                                            <svg viewBox=\"0 0 18 18\">\r\n\t\t\t\t\t\t                                                              <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line>\r\n\t\t\t\t\t\t                                                              <line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"></line>\r\n\t\t\t\t\t\t                                                              <line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"></line>\r\n\t\t\t\t\t\t                                                            </svg>\r\n\t\t\t\t\t\t                                                            </span><span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"right\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"></line> </svg></span>\r\n\t\t\t\t\t\t                                                            <span\r\n\t\t\t\t\t\t                                                            tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=\"justify\">\r\n\t\t\t\t\t\t                                                              <svg viewBox=\"0 0 18 18\">\r\n\t\t\t\t\t\t                                                                <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line>\r\n\t\t\t\t\t\t                                                                <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"></line>\r\n\t\t\t\t\t\t                                                                <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"></line>\r\n\t\t\t\t\t\t                                                              </svg>\r\n\t\t\t\t\t\t                                                              </span>\r\n\t\t\t\t\t\t                                                              </span>\r\n\t\t\t\t\t\t                                                              </span>\r\n\t\t\t\t\t\t                                                              <select class=\"ql-align\" style=\"display: none;\">\r\n\t\t\t\t\t\t                                                                <option selected=\"selected\"></option>\r\n\t\t\t\t\t\t                                                                <option value=\"center\"></option>\r\n\t\t\t\t\t\t                                                                <option value=\"right\"></option>\r\n\t\t\t\t\t\t                                                                <option value=\"justify\"></option>\r\n\t\t\t\t\t\t                                                              </select>\r\n\t\t\t\t\t\t                                                              </span>\r\n\t\t\t\t\t\t                                                              <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-link\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"></line> <path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"></path> <path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-image\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"></rect> <circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-video\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"></rect> <rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"></rect> <rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"></rect> <rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"></rect> <rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"></rect> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-formula\" type=\"button\"><svg viewBox=\"0 0 18 18\"> <path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"></path> <rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"></rect> <path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"></path> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t                                                              <span class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"ql-clean\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"\" viewBox=\"0 0 18 18\"> <line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"></line> <line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </line>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"></line> <line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"></line> <rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"></rect> </svg></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t              <div id=\"editor-container\" class=\"ql-container ql-snow\" style=\"background:white;\">\r\n\t\t\t\t\t\t                <div class=\"ql-editor ql-blank\" data-gramm=\"false\" contenteditable=\"true\" data-placeholder=\"Compose an epic...\"  >\r\n\t\t\t\t\t\t                  <p>\r\n\t\t\t\t\t\t                    <br>\r\n\r\n\t\t\t\t\t\t                  </p>\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t                <div class=\"ql-clipboard\" contenteditable=\"true\" tabindex=\"-1\"></div>\r\n\t\t\t\t\t\t                <div class=\"ql-tooltip ql-hidden\">\r\n\t\t\t\t\t\t                  <a class=\"ql-preview\" target=\"_blank\" href=\"about:blank\"></a>\r\n\t\t\t\t\t\t                  <input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">\r\n\t\t\t\t\t\t                  <a class=\"ql-action\"></a>\r\n\t\t\t\t\t\t                  <a class=\"ql-remove\"></a>\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t            </quill-editor>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=new>\r\n  <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"new = false\">Post</a>\r\n</div>\r\n<div class=\"container-fluid\" *ngIf=!new>\r\n  <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"new = true\">New</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <main role=\"main\">\r\n\r\n\r\n     <div class=\"jumbotron\">\r\n       <div class=\"container\">\r\n         <h1 class=\"display-3\">Welcome!</h1>\r\n         <p>This is a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\r\n         <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/register']\" role=\"button\" *ngIf=\"!authService.loggedIn()\">Register »</a>\r\n         <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\" role=\"button\" *ngIf=\"!authService.loggedIn()\">Login »</a></p>\r\n       </div>\r\n     </div>\r\n\r\n     <div class=\"container\">\r\n       <!-- Example row of columns -->\r\n       <div class=\"row\">\r\n         <div class=\"col-md-4\">\r\n           <h2>Heading</h2>\r\n           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n           <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n         </div>\r\n         <div class=\"col-md-4\">\r\n           <h2>Heading</h2>\r\n           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n           <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n         </div>\r\n         <div class=\"col-md-4\">\r\n           <h2>Heading</h2>\r\n           <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n           <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n         </div>\r\n       </div>\r\n\r\n       <hr>\r\n\r\n     </div> <!-- /container -->\r\n\r\n   </main>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\" >\r\n  <div class=\"form-control\">\r\n    <label>UserName</label>\r\n    <input type=\"text\"  [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-control\">\r\n    <label>Password</label>\r\n    <input type=\"password\"  [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var details = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(details).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Logged in Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark \">\r\n   <a class=\"navbar-brand\" href=\"#\">My Blog App</a>\r\n  <div class=\"container\" >\r\n    <ul class=\"navbar-nav  navbar-right\">\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\"  [routerLink]=\"['/']\">Home</a>\r\n  </li>\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/allposts']\" href=\"#\">Explore</a>\r\n  </li>\r\n</ul>\r\n</div>\r\n     <div class=\"container-fluid\" >\r\n       <ul class=\"navbar-nav  navbar-right\">\r\n         <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!authService.loggedIn()\">\r\n           <a class=\"nav-link\"  [routerLink]=\"['/login']\">Login</a>\r\n         </li>\r\n         <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!authService.loggedIn()\">\r\n           <a class=\"nav-link\"  [routerLink]=\"['/register']\">Register</a>\r\n         </li>\r\n         <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"authService.loggedIn()\">\r\n           <a class=\"nav-link\" (click) = \"onLogoutClick()\" href=\"#\">logout</a>\r\n         </li>\r\n         <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"authService.loggedIn()\">\r\n           <a class=\"nav-link\" [routerLink]=\"['/profile']\" href=\"#\">Profile</a>\r\n         </li>\r\n         <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"authService.loggedIn()\">\r\n           <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" href=\"#\">Dashboard</a>\r\n         </li>\r\n\r\n       </ul>\r\n\r\n     </div>\r\n   </nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logged out Successfully', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\" >\r\n  <div class=\"form-control\">\r\n    <label>Name</label>\r\n    <input type=\"text\"  [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-control\">\r\n    <label>UserName</label>\r\n    <input type=\"text\"  [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-control\">\r\n    <label>Email</label>\r\n    <input type=\"text\"  [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-control\">\r\n    <label>Password</label>\r\n    <input type=\"password\"  [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        console.log(user);
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are Registered', { cssClass: 'alert-sucess', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {JwtHelperService} from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append("Content-Type", 'application/json');
        headers.append("Authorization", this.authToken);
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        var toke = localStorage.getItem('id_token');
        if (toke) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\Users\vetha\Documents\GitHub\mean-boiler\ang-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map