(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-relative\">\r\n  <router-outlet></router-outlet>\r\n  <app-alert></app-alert>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/forgot-password/restore-password.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/forgot-password/restore-password.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"restore-password row justify-content-center\">\r\n    <div class=\"authBlock col-sm-5\">\r\n      <mat-card>\r\n        <mat-card-title>Reset Password</mat-card-title>\r\n        <mat-card-subtitle>Please enter your email address to request a password reset.</mat-card-subtitle>\r\n        <mat-card-content>\r\n          <form role=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\"\r\n                     #passwordResetEmail=\"ngModel\"\r\n                     name=\"passwordResetEmail\"\r\n                     ngModel\r\n                     [ngClass]=\"{ 'is-invalid': f.submitted && f.invalid }\"\r\n                     required\r\n                     email>\r\n            </div>\r\n            <!-- Calling ForgotPassword from AuthService Api -->\r\n            <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Reset Password\">\r\n            </div>\r\n            <div class=\"redirectToLogin\">\r\n              <span>Go back to ? <span class=\"redirect\" [routerLink]=\"['/login']\">Log In</span></span>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-card class=\"box\">\r\n    <div\r\n      class=\"alert alert-{{message.type}}\"\r\n      *ngIf=\"message.text\"\r\n    >{{message.text}}\r\n    </div>\r\n    <mat-select #langSelect class=\"text_uppercase\" (selectionChange)=\"translate.use(langSelect.value)\" name=\"\" id=\"\">\r\n      <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{lang}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-card-header>\r\n      <mat-card-title>{{'Логін' | translate}}</mat-card-title>\r\n\r\n    </mat-card-header>\r\n    <form class=\"example-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-card-content>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Ім\\'я користувача' | translate}}\" formControlName=\"username\">\r\n        </mat-form-field>\r\n        <div *ngIf=\"loginForm.get('username').invalid && loginForm.get('username').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"loginForm.get('username')['errors']['required']\">{{'Емейл є обов\\'язковим' | translate}}</div>\r\n          <div *ngIf=\"loginForm.get('username')['errors']['email']\">{{'Введіть коректний емейл' | translate}}</div>\r\n        </div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Пароль' | translate }}\" formControlName=\"password\">\r\n        </mat-form-field>\r\n        <div *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"loginForm.get('password')['errors']['required']\">{{'Пароль є обов\\'язковим' | translate}}</div>\r\n          <div *ngIf=\"loginForm.get('password')['errors']['minlength']\">{{'Пароль повинен бути мінімум 8 симлолів' |\r\n            translate}}\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n      <button mat-stroked-button color=\"accent\" class=\"btn-block\">{{'Ввійти' | translate}}</button>\r\n\r\n    </form>\r\n    <div class=\"d-flex justify-content-center mt-2 flex-wrap\">\r\n      <button class=\"loginBtn loginBtn--facebook\" (click)=\"signInWithFB()\">\r\n        Login with Facebook\r\n      </button>\r\n      <button class=\"loginBtn loginBtn--google mt-2\" (click)=\"signInWithGoogle()\">\r\n        Login with Google\r\n      </button>\r\n      <!--<button  type=\"button\" mdbBtn color=\"fb\" class=\"waves-light\" mdbWavesEffect><i class=\"fab fa-facebook-f left\"></i>Facebook</button>-->\r\n\r\n      <!--<button  type=\"button\" class=\"flex-grow-1\" mat-flat-button color=\"primary\">Sign In With Facebook</button>-->\r\n    </div>\r\n    <div class=\"etc-login-form\">\r\n      <p>forgot your password? <a [routerLink]=\"['/forgot-password']\">click here</a></p>\r\n      <p>new user? <a [routerLink]=\"['/registration']\">create new account</a></p>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/registration/registration.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/registration/registration.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-card class=\"box\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{'Реєстрація' | translate}}</mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <form class=\"example-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-card-content>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Ім\\'я' | translate}}\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <div *ngIf=\"registerForm.get('name').invalid && registerForm.get('name').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"registerForm.get('name')['errors']['required']\">{{'Ім\\'я є обов\\'язковим' | translate }}</div>\r\n        </div>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Прізвище' | translate}}\" formControlName=\"lastname\" >\r\n        </mat-form-field>\r\n        <div *ngIf=\"registerForm.get('lastname').invalid && registerForm.get('lastname').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"registerForm.get('lastname')['errors']['required']\">{{'Прізвище є обов\\'язковим' | translate}}</div>\r\n        </div>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Емейл' | translate}}\" formControlName=\"email\" >\r\n        </mat-form-field>\r\n        <div *ngIf=\"registerForm.get('email').invalid && registerForm.get('email').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"registerForm.get('email')['errors']['required']\">{{'Емейл є обов\\'язковим' | translate}}</div>\r\n          <div *ngIf=\"registerForm.get('email')['errors']['email']\">{{'Введіть коректний емейл' | translate}}</div>\r\n        </div>\r\n\r\n        <div *ngIf=\"submitted && forbiddenEmail\" class=\"alert alert-danger\">\r\n            Емейл уже використовується\r\n        </div>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"{{'Пароль' | translate}}\" formControlName=\"password\" >\r\n        </mat-form-field>\r\n        <div *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"registerForm.get('password')['errors']['required']\">{{'Пароль є обов\\'язковим' | translate}}</div>\r\n          <div *ngIf=\"registerForm.get('password')['errors']['minlength']\">{{'Пароль повинен бути мінімум 8 симлолів' | translate}}</div>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n      <button [disabled]=\"registerForm.invalid\" type=\"submit\" mat-stroked-button color=\"accent\" class=\"btn-block\">{{'Зареєструватись' | translate}}</button>\r\n    </form>\r\n    <div class=\"etc-login-form\">\r\n      <p>already have an account? <a [routerLink]=\"['/login']\">login here</a></p>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/reset-password/reset-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/reset-password/reset-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"change-password row justify-content-center\">\r\n    <div class=\"authBlock col-sm-5\">\r\n\r\n      <mat-card>\r\n        <mat-card-title>Change Password</mat-card-title>\r\n        <mat-card-subtitle>Please enter your new password.</mat-card-subtitle>\r\n        <mat-card-content>\r\n          <form role =\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Enter new password\"\r\n                     #newPassword=\"ngModel\"\r\n                     name=\"newPassword\"\r\n                     ngModel\r\n                     [ngClass]=\"{ 'is-invalid': f.submitted && f.invalid }\"\r\n                     required\r\n                     minlength=\"8\">\r\n            </div>\r\n            <!-- Calling ForgotPassword from AuthService Api -->\r\n            <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Change Password\">\r\n            </div>\r\n            <div class=\"redirectToLogin\">\r\n              <span>Go back to ? <span class=\"redirect\" [routerLink]=\"['/login']\">Log In</span></span>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/users/me']\">Social-network</a>\r\n  <div class=\"collapse navbar-collapse d-flex justify-content-end\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav dropdown justify-content \" ngbDropdown>\r\n      <form class=\"form-inline\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"searchUsers \" [ngModelOptions]=\"{standalone: true}\" >\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" (click)=\"searchUsersByWord()\">Search</button>\r\n      </form>\r\n      <li class=\"d-flex align-items-center\">\r\n        <mat-select #langSelect class=\"text_uppercase\" (selectionChange)=\"translate.use(langSelect.value)\" name=\"\"\r\n                    id=\"\">\r\n          <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{lang}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </li>\r\n      <li>\r\n        <a class=\"nav-link dropdown-toggle c-pointer\" id=\"navbarDropdown\" role=\"button\" ngbDropdownToggle>\r\n          <i class=\"fa fa-user\"></i>\r\n        </a>\r\n        <div aria-labelledby=\"navbarDropdown\" class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\r\n          <a (click)=\"deleteUser()\" class=\"c-pointer\" ngbDropdownItem><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            Delete user</a>\r\n          <a (click)=\"logOut()\" class=\"c-pointer\" ngbDropdownItem><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n            Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <app-user-profile></app-user-profile>\r\n      <div class=\"col-sm-8 mt-3\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <app-users></app-users>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/edit-profile/edit-profile.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/edit-profile/edit-profile.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" id=\"edit\">\r\n  <form role=\"form\" [formGroup]=\"userInfoForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputFirstName\">{{'Ім\\'я' | translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputFirstName\" placeholder=\"{{'Ім\\'я' | translate}}\"\r\n               formControlName=\"name\" [ngModel]=\"userInfo?.name\">\r\n      </div>\r\n      <div class=\"col-sm-3 d-flex align-items-center\" *ngIf=\"userInfoForm.get('name').invalid && userInfoForm.get('name').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Ім\\'я є обов\\'язковим' | translate}}\r\n        </small>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputLastName1\">{{'Прізвище' | translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputLastName1\" placeholder=\"{{'Прізвище' | translate}}\"\r\n               formControlName=\"lastname\" [ngModel]=\"userInfo.lastname\">\r\n      </div>\r\n\r\n      <div class=\"col-sm-3 d-flex align-items-center\" *ngIf=\"userInfoForm.get('lastname').invalid && userInfoForm.get('lastname').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Прізвище є обов\\'язковим' | translate}}\r\n        </small>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputCountry\">{{'Країна' | translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputCountry\" placeholder=\"{{'Країна' | translate}}\" formControlName=\"country\"\r\n               [ngModel]=\"userInfo.country\">\r\n      </div>\r\n      <div class=\"col-sm-9 d-flex align-items-center\" *ngIf=\"userInfoForm.get('country').invalid && userInfoForm.get('country').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Поле є обов\\'язковим для заповнення' | translate}}\r\n        </small>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputCity\">{{'Місто' | translate}}</label>\r\n        <input type=\"text\" class=\"form-control has-error\" id=\"exampleInputCity\" placeholder=\"{{'Країна' | translate}}\" formControlName=\"city\"\r\n               [ngModel]=\"userInfo.city\">\r\n      </div>\r\n\r\n      <div class=\"col-sm-3 d-flex align-items-center\" *ngIf=\"userInfoForm.get('city').invalid && userInfoForm.get('city').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Поле є обов\\'язковим для заповнення' | translate}}\r\n        </small>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputAge\">{{'Вік' | translate}}</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"exampleInputAge\" placeholder=\"{{'Вік' | translate}}\" formControlName=\"age\"\r\n               [ngModel]=\"userInfo.age\">\r\n      </div>\r\n\r\n      <div class=\"col-sm-3 d-flex align-items-center\" *ngIf=\"userInfoForm.get('age').invalid && userInfoForm.get('age').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Поле є обов\\'язковим для заповнення' | translate}}\r\n        </small>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-9\">\r\n        <label for=\"exampleInputDescription\">{{'Про себе' | translate}}</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputDescription\" placeholder=\"{{'Опис' | translate}}\" formControlName=\"description\"\r\n               [ngModel]=\"userInfo.description\">\r\n      </div>\r\n      <div class=\"col-sm-3 d-flex align-items-center\" *ngIf=\"userInfoForm.get('description').invalid && userInfoForm.get('description').touched\">\r\n        <small class=\"text-danger\">\r\n          {{'Поле є обов\\'язковим для заповнення' | translate}}\r\n        </small>\r\n      </div>\r\n    </div>\r\n      <button [disabled]=\"userInfoForm.invalid\" type=\"submit\" class=\"btn btn-primary\" >{{'Редагувати' | translate}}</button>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-info/user-info.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-info/user-info.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"isUserInfoLoaded\">\r\n  <h5 class=\"mb-5 text-center\">{{userInfo?.name +\" \"+ userInfo?.lastname}}</h5>\r\n  <div class=\"row\">\r\n    <div class=\"col-6 text-center\" >\r\n      <div class=\"avatar-container\">\r\n        <img [src]=\"userInfo['image']\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n      </div>\r\n      <h6 class=\"mt-2\">Upload a different photo</h6>\r\n      <label class=\"custom-file\"  *ngIf=\"!isImageLoaded\">\r\n        <input type=\"file\" id=\"file\" class=\"custom-file-input \" (change)=\"fileChangeEvent($event)\">\r\n        <span class=\"custom-file-control\">Choose file</span>\r\n      </label>\r\n      <button *ngIf=\"isImageLoaded\" type=\"button\" class=\"btn btn-primary\" (click)=\"uploadImage($event)\">Upload image</button>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h6>{{'Про себе' | translate}}</h6>\r\n      <p>\r\n        {{userInfoForm?.description}}\r\n      </p>\r\n      <h6>{{'Електронна пошта' | translate}}</h6>\r\n      <p>\r\n        {{userInfo?.email}}\r\n      </p>\r\n      <h6>{{'Країна' | translate}}</h6>\r\n      <p>\r\n        {{userInfo?.country}}\r\n      </p>\r\n      <h6>{{'Місто' | translate}}</h6>\r\n      <p>\r\n        {{userInfo?.city}}\r\n      </p>\r\n      <h6>{{'Вік' | translate}}</h6>\r\n      <p>\r\n        {{userInfo?.age}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-messages/user-messages.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-messages/user-messages.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-4\">\r\n  <div class=\"alert alert-info alert-dismissable\">\r\n    <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> This is an <strong>.alert</strong>. Use this\r\n    to show\r\n    important messages to the user.\r\n  </div>\r\n  <table class=\"table table-hover table-striped\">\r\n    <tbody>\r\n    <tr>\r\n      <td>\r\n        <span class=\"float-right font-weight-bold\">3 hrs ago</span> Here is your a link to the latest\r\n        summary\r\n        report from the..\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <span class=\"float-right font-weight-bold\">Yesterday</span> There has been a request on your\r\n        account\r\n        since that was..\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <span class=\"float-right font-weight-bold\">9/10</span> Porttitor vitae ultrices quis, dapibus id\r\n        dolor.\r\n        Morbi venenatis lacinia rhoncus.\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <span class=\"float-right font-weight-bold\">9/4</span> Vestibulum tincidunt ullamcorper eros eget\r\n        luctus.\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <span class=\"float-right font-weight-bold\">9/4</span> Maxamillion ais the fix for tibulum\r\n        tincidunt\r\n        ullamcorper eros.\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview-component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview-component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n\r\n  <!-- Post Content Column -->\r\n  <div class=\"col-lg-12\">\r\n\r\n    <!-- Title -->\r\n    <h1 class=\"mt-4 text-center\">{{post.title}}</h1>\r\n\r\n    <!-- Author -->\r\n    <div class=\"row justify-content-between\">\r\n      <p class=\"lead mx-auto\">\r\n        by\r\n        <a href=\"#\">Name</a>\r\n      </p>\r\n    </div>\r\n\r\n    <hr>\r\n    <!-- Date/Time -->\r\n    <p>Posted on January 1, 2019 at 12:00 PM</p>\r\n\r\n    <hr>\r\n\r\n    <!-- Preview Image -->\r\n    <img class=\"img-fluid rounded\" style=\"height: 200px\" [src]=\"post.image\" alt=\"\">\r\n\r\n    <hr>\r\n\r\n    <!-- Post Content -->\r\n    <p class=\"lead\">{{post.description}}</p>\r\n\r\n    <hr>\r\n\r\n    <share-button  button=\"facebook\" [icon]=\"fbIcon\" ></share-button>\r\n    <hr>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\r\n  <!-- Post Content Column -->\r\n  <div class=\"col-lg-12\">\r\n\r\n    <!-- Title -->\r\n    <h1 class=\"mt-4\">{{title}}</h1>\r\n\r\n    <!-- Author -->\r\n    <div class=\"row justify-content-between\">\r\n      <p class=\"lead\">\r\n        by\r\n        <a href=\"#\">Name</a>\r\n      </p>\r\n      <span  style=\"cursor: pointer\" [routerLink]=\"['/users/me/posts/', id]\">\r\n        <i class=\"fa fa-share-alt mr-1\"></i>\r\n        <span>Share</span>\r\n      </span>\r\n    </div>\r\n\r\n\r\n    <hr>\r\n\r\n    <!-- Date/Time -->\r\n    <p>Posted on January 1, 2019 at 12:00 PM</p>\r\n\r\n    <hr>\r\n\r\n    <!-- Preview Image -->\r\n    <img class=\"img-fluid rounded\" style=\"height: 200px\" [src]=\"image\" alt=\"\">\r\n\r\n    <hr>\r\n\r\n    <!-- Post Content -->\r\n    <p class=\"lead\">{{description}}</p>\r\n\r\n    <blockquote class=\"blockquote\">\r\n      <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n      <footer class=\"blockquote-footer\">Someone famous in\r\n        <cite title=\"Source Title\">Source Title</cite>\r\n      </footer>\r\n    </blockquote>\r\n\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>\r\n\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>\r\n\r\n    <hr>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/user-posts.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/user-posts.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-post\r\n  *ngFor = \"let post of posts\"\r\n  [title] = \"post.title\"\r\n  [description] = \"post.description\"\r\n  [image] = \"post.image\"\r\n  [id] = \"post.id\"\r\n>\r\n\r\n</app-post>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-profile.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-profile.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-tabs\">\r\n  <li role=\"presentation\"\r\n      class=\"nav-item\"\r\n      routerLinkActive=\"active\"\r\n      [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <a routerLink=\"/users/me\" class=\"nav-link\">Profile</a>\r\n  </li>\r\n  <li role=\"presentation\"\r\n      class=\"nav-item\"\r\n      routerLinkActive=\"active\">\r\n    <a routerLink=\"/users/me/messages\" class=\"nav-link\">Messages</a>\r\n  </li>\r\n  <li role=\"presentation\"\r\n      class=\"nav-item\"\r\n      routerLinkActive=\"active\">\r\n    <a [routerLink]=\"['/users/me/edit']\" class=\"nav-link\">Edit information</a>\r\n  </li>\r\n  <li role=\"presentation\"\r\n      class=\"nav-item\"\r\n      routerLinkActive=\"active\">\r\n    <a [routerLink]=\"['/users/me/posts']\" class=\"nav-link\">My posts</a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/user/user.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/user/user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"mb-5 text-center\">{{userInfo?.name+\" \"+userInfo?.lastname}}</h5>\r\n<div class=\"row\" *ngIf=\"isLoaded\">\r\n  <div class=\"col-6 text-center\" >\r\n    <img src=\"{{userInfo?.image}}\" height=\"150px\" width=\"150px\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <h6>{{'Про себе' | translate}}</h6>\r\n    <p>\r\n      {{userInfo?.description}}\r\n    </p>\r\n    <h6>{{'Електронна пошта' | translate}}</h6>\r\n    <p>\r\n      {{userInfo?.email}}\r\n    </p>\r\n    <h6>{{'Країна' | translate}}</h6>\r\n    <p>\r\n      {{userInfo?.country}}\r\n    </p>\r\n    <h6>{{'Місто' | translate}}</h6>\r\n    <p>\r\n      {{userInfo?.city}}\r\n    </p>\r\n    <h6>{{'Вік' | translate}}</h6>\r\n    <p>\r\n      {{userInfo?.age}}\r\n    </p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/users.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/users.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"list-group\">\r\n  <li *ngFor=\"let user of users\" class=\"list-group-item list-group-item-action\" style=\"cursor: pointer\" [routerLink]=\"['/users', user.id]\">\r\n    <span>\r\n      <img [src]=\"user?.image\" class=\"img-responsive\" style=\"width: 50px; height: 50px\"/>\r\n    </span>\r\n    {{ user?.name + \" \" + user?.lastname }}</li>\r\n</ul>\r\n\r\n<app-pagination\r\n  *ngIf=\"usersLoaded\"\r\n  [setPagination]=\"{\r\n        'itemsCount': totalUsersAmount,\r\n        'pageSize': 10\r\n      }\"\r\n  (goToPage)=\"goToPage($event)\"\r\n></app-pagination>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/alert/alert.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/alert/alert.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\r\n     {{alert.message}}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    {{ message }}\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/pagination/pagination.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/pagination/pagination.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"pagesArray.length && pagesArray.length !==  1 \" aria-label=\"Page navigation\" class=\"mt-2\">\r\n  <ng-container>\r\n    <nav aria-label=\"Page navigation example\">\r\n      <ul class=\"pagination mx-auto\">\r\n        <li *ngIf=\"currentPage !== 1\"\r\n            (click)=\"setPage(currentPage - 1)\"\r\n            class=\"page-item\">\r\n          <a class=\"page-link\">Previous</a></li>\r\n        <li\r\n          style=\"cursor: pointer\"\r\n          class=\"page-item\"\r\n          *ngFor=\"let page of  pagesArray; let index = index\"\r\n          [ngClass]=\"{ 'active': currentPage === index + 1 }\"\r\n          (click)=\"setPage(index + 1)\"\r\n        >\r\n          <a class=\"page-link\"> {{ index + 1 }}</a>\r\n        </li>\r\n        <li *ngIf=\"currentPage !== pagesArray.length\"\r\n            (click)=\"setPage(currentPage + 1)\"\r\n            class=\"page-item\">\r\n          <a class=\"page-link\">Next</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"pagesArray.length > 10\">\r\n    <select\r\n      [ngModel]=\"currentPage\"\r\n      (ngModelChange)=\"selectPage($event.target.value)\"\r\n    >\r\n      <option\r\n        *ngFor=\"let p of pagesArray; let index = index\"\r\n        [value]=\"(index + 1)\">\r\n        {{ index + 1 }}\r\n      </option>\r\n    </select>\r\n  </ng-container>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/shared/services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(alertService) {
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status !== 401) {
                const error = err.error.message || err.statusText;
                this.alertService.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    intercept(request, next) {
        if (this.authService.getAccessToken()) {
            request = this.addToken(request, this.authService.getAccessToken());
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 401 && !request.url.match(/auth\/token\/refresh/)) {
                return this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }
        }));
    }
    addToken(request, token) {
        if (request.url.match(/auth\/token\/refresh/)) {
            token = this.authService.getRefreshToken();
        }
        return request.clone({
            setHeaders: {
                Authorization: token
            }
        });
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((result) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(result.tokens.accessToken);
                return next.handle(this.addToken(request, result.tokens.accessToken));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                return this.authService.logout();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                this.isRefreshing = false;
            }));
        }
        else {
            this.isRefreshing = false;
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(token => {
                return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(accessToken => {
                return next.handle(this.addToken(request, accessToken));
            }));
        }
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared/services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");




let AppComponent = class AppComponent {
    constructor(translate, alertService) {
        this.translate = translate;
        this.alertService = alertService;
        translate.addLangs(['ua', 'en']);
        translate.setDefaultLang('ua');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ua/) ? browserLang : 'ua');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _modules_shared_components_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/shared/components/alert */ "./src/app/modules/shared/components/alert/index.ts");
/* harmony import */ var _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/shared/services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/posts.service */ "./src/app/services/posts.service.ts");






















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modules_shared_components_alert__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__["AngularFontAwesomeModule"],
            _ngx_share_button__WEBPACK_IMPORTED_MODULE_20__["ShareButtonModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"],
            // SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            })
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },
            _modules_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_18__["AlertService"],
            _services_posts_service__WEBPACK_IMPORTED_MODULE_21__["PostsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/*
 * This module imports and re-exports all Angular Material modules for convenience,
 * so only 1 module import is needed in your feature modules.
 * See https://material.angular.io/guide/getting-started#step-3-import-the-component-modules.
 *
 * To optimize your production builds, you should only import the components used in your app.
 */



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/modules/auth/registration/registration.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/modules/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_restore_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/restore-password.component */ "./src/app/modules/auth/forgot-password/restore-password.component.ts");







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    // { path: 'forgot-password', component: RestorePasswordComponent, canActivate: [SecureInnerPagesGuard] },
    { path: 'forgot-password', component: _forgot_password_restore_password_component__WEBPACK_IMPORTED_MODULE_6__["RestorePasswordComponent"] },
    { path: 'auth/changePassword/:token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: provideConfig, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/modules/auth/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _forgot_password_restore_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/restore-password.component */ "./src/app/modules/auth/forgot-password/restore-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/modules/auth/reset-password/reset-password.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");












const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]('138909711578-7r6rch40d6311p5jenfcp4177muemkv2.apps.googleusercontent.com')
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]('513151245932065')
    }
]);
function provideConfig() {
    return config;
}
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
            _forgot_password_restore_password_component__WEBPACK_IMPORTED_MODULE_9__["RestorePasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]
        ],
        providers: [{
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                useFactory: provideConfig
            }]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/forgot-password/restore-password.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/forgot-password/restore-password.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".authBlock {\n  margin-top: 100px;\n}\n\n.redirect {\n  cursor: pointer;\n  color: #9f9f9f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9DOlxcVXNlcnNcXEFuZHJpaUZ5dHN5a1xcRGVza3RvcFxcc29jaWFsX25ldHdvcmtcXHNvY2lhbC1uZXR3b3JrL3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxmb3Jnb3QtcGFzc3dvcmRcXHJlc3RvcmUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvcmVzdG9yZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yZXN0b3JlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhCbG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4ucmVkaXJlY3Qge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzlmOWY5ZjtcclxufVxyXG4iLCIuYXV0aEJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5yZWRpcmVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5ZjlmOWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/forgot-password/restore-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/forgot-password/restore-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: RestorePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordComponent", function() { return RestorePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");




let RestorePasswordComponent = class RestorePasswordComponent {
    constructor(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        const { passwordResetEmail } = form.value;
        this.authService.forgotPassword(passwordResetEmail).subscribe(result => {
            if (result.success) {
                this.alertService.success('Check your email');
            }
        });
    }
};
RestorePasswordComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
RestorePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restore-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restore-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/forgot-password/restore-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restore-password.component.scss */ "./src/app/modules/auth/forgot-password/restore-password.component.scss")).default]
    })
], RestorePasswordComponent);



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: #aaaaaa;\n  transition: all ease-in-out 200ms;\n}\n\na:hover {\n  color: #333333;\n  text-decoration: none;\n}\n\n.etc-login-form {\n  color: #919191;\n  margin-top: 11px;\n}\n\nbody {\n  padding: 2em;\n}\n\n/* Shared */\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 15px;\n  color: #FFF;\n  width: 100%;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL0M6XFxVc2Vyc1xcQW5kcmlpRnl0c3lrXFxEZXNrdG9wXFxzb2NpYWxfbmV0d29ya1xcc29jaWFsLW5ldHdvcmsvc3JjXFxhcHBcXG1vZHVsZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREVBO0VBQU8sWUFBQTtBQ0VQOztBRENBLFdBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FERkE7RUFDRSwrQ0FBQTtBQ0tGOztBRERBLGFBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSw2QkFBQTtBQ0lGOztBREZBO0VBQ0UsK0JBQUE7RUFDQSx5R0FBQTtBQ0tGOztBREhBOztFQUVFLHlCQUFBO0VBQ0EsbURBQUE7QUNNRjs7QURGQSxXQUFBOztBQUNBO0VBQ0Usb0RBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtBQ01GOztBREpBOztFQUVFLG1CQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogI2FhYWFhYTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMjAwbXM7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZXRjLWxvZ2luLWZvcm0ge1xyXG4gIGNvbG9yOiAjOTE5MTkxO1xyXG4gIG1hcmdpbi10b3A6IDExcHg7XHJcblxyXG59XHJcblxyXG5ib2R5IHsgcGFkZGluZzogMmVtOyB9XHJcblxyXG5cclxuLyogU2hhcmVkICovXHJcbi5sb2dpbkJ0biB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubG9naW5CdG46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9naW5CdG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZ2luQnRuOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBGYWNlYm9vayAqL1xyXG4ubG9naW5CdG4tLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNEM2OUJBLCAjM0I1NUEwKTtcclxuICAvKmZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBuZXVlXCIsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRDOEM7XHJcbn1cclxuLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogIzM2NGU5MiAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG59XHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xyXG59XHJcblxyXG5cclxuLyogR29vZ2xlICovXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgYmFja2dyb3VuZDogI0RENEIzOTtcclxufVxyXG4ubG9naW5CdG4tLWdvb2dsZTpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxufVxyXG4ubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNFNzRCMzc7XHJcbn1cclxuIiwiYSB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZXRjLWxvZ2luLWZvcm0ge1xuICBjb2xvcjogIzkxOTE5MTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLyogU2hhcmVkICovXG4ubG9naW5CdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xuICBwYWRkaW5nOiAwIDE1cHggMCA0NnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0ZGRjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbkJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luQnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ2luQnRuOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBGYWNlYm9vayAqL1xuLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNEM2OUJBLCAjM0I1NUEwKTtcbiAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzM1NEM4Qztcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpob3Zlcixcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XG59XG5cbi8qIEdvb2dsZSAqL1xuLmxvZ2luQnRuLS1nb29nbGUge1xuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXG4gIGJhY2tncm91bmQ6ICNERDRCMzk7XG59XG5cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNFNzRCMzc7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_info_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/info-message */ "./src/app/modules/shared/models/info-message.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");










let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, translate, ngZone, socialAuthService) {
        // redirect to home if already logged in
        // if (this.authenticationService.isLoggedIn()) {
        //   this.router.navigate(['/users/me']);
        // }
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.translate = translate;
        this.ngZone = ngZone;
        this.socialAuthService = socialAuthService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.socialAuthService.authState.subscribe((user) => {
            console.log('user', user);
            this.user = user;
            this.loggedIn = (user != null);
        });
        this.message = new _shared_models_info_message__WEBPACK_IMPORTED_MODULE_7__["InfoMessage"]('danger', '');
        this.route.queryParams
            .subscribe((params) => {
            if (params.nowCanLogin) {
                this.showMessage('Введіть Ваш логін і пароль', 'success');
            }
            else if ((params.passwordChanged)) {
                this.showMessage('Пароль було успішно змінено', 'success');
            }
        });
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]]
        });
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    showMessage(text, type = 'danger') {
        this.message = new _shared_models_info_message__WEBPACK_IMPORTED_MODULE_7__["InfoMessage"](type, text);
        window.setTimeout(() => {
            this.message.text = '';
        }, 5000);
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login({ login: this.f.username.value, password: this.f.password.value })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            // this.router.navigate([this.returnUrl]);
            this.router.navigate(['/users/me']);
        }, error => {
            this.showMessage('Не правильний логін або пароль', 'danger');
            this.loading = false;
        });
    }
    signInWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID)
            .then(res => {
            return this.authenticationService.signInWithGoogle(res.authToken)
                .subscribe(response => {
                this.router.navigate(['./users/me']);
            });
        });
    }
    signInWithFB() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID)
            .then(res => {
            this.authenticationService.signInWithFacebook(res.authToken, res.id)
                .subscribe(response => {
                this.router.navigate(['/users/me']);
            });
        });
    }
    signOut() {
        this.socialAuthService.signOut();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/auth/registration/registration.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/registration/registration.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: #aaaaaa;\n  transition: all ease-in-out 200ms;\n}\n\na:hover {\n  color: #333333;\n  text-decoration: none;\n}\n\n.etc-login-form {\n  color: #919191;\n}\n\n.etc-login-form p {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdHJhdGlvbi9DOlxcVXNlcnNcXEFuZHJpaUZ5dHN5a1xcRGVza3RvcFxcc29jaWFsX25ldHdvcmtcXHNvY2lhbC1uZXR3b3JrL3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDIwMG1zO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmV0Yy1sb2dpbi1mb3JtIHtcclxuICBjb2xvcjogIzkxOTE5MTtcclxuXHJcbn1cclxuLmV0Yy1sb2dpbi1mb3JtIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iLCJhIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAyMDBtcztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ldGMtbG9naW4tZm9ybSB7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuXG4uZXRjLWxvZ2luLWZvcm0gcCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/registration/registration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/registration/registration.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.submitted = false;
        this.forbiddenEmail = false;
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //   debugger;
        //   this.router.navigate(['/users/me']);
        // }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        return this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(user => {
            // this.alertService.success('Registration successful', true);
            this.router.navigate(['/login'], {
                queryParams: {
                    nowCanLogin: true
                }
            });
        }, error => {
            console.log(444, error);
            if (error === 'Conflict') {
                this.forbiddenEmail = true;
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/modules/auth/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/modules/auth/reset-password/reset-password.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/auth/reset-password/reset-password.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".authBlock {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL0M6XFxVc2Vyc1xcQW5kcmlpRnl0c3lrXFxEZXNrdG9wXFxzb2NpYWxfbmV0d29ya1xcc29jaWFsLW5ldHdvcmsvc3JjXFxhcHBcXG1vZHVsZXNcXGF1dGhcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoQmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiIsIi5hdXRoQmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/reset-password/reset-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/auth/reset-password/reset-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");




let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get("token");
        console.log(666, this.token);
    }
    onSubmit(form) {
        const { newPassword } = form.value;
        this.authService.changePassword(newPassword, this.token).subscribe(result => {
            if (result.success) {
                this.router.navigate(['/login'], {
                    queryParams: {
                        passwordChanged: true
                    }
                });
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/auth/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/modules/home/users/user/user.component.ts");
/* harmony import */ var _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/edit-profile/edit-profile.component */ "./src/app/modules/home/user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_profile_user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-messages/user-messages.component */ "./src/app/modules/home/user-profile/user-messages/user-messages.component.ts");
/* harmony import */ var _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-info/user-info.component */ "./src/app/modules/home/user-profile/user-info/user-info.component.ts");
/* harmony import */ var _user_profile_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-posts/user-posts.component */ "./src/app/modules/home/user-profile/user-posts/user-posts.component.ts");
/* harmony import */ var _user_profile_user_posts_post_modal_container_routable_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-posts/post/modal-container-routable-modals */ "./src/app/modules/home/user-profile/user-posts/post/modal-container-routable-modals.ts");










const routes = [
    // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [
            { path: 'users/me/edit', component: _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"] },
            { path: 'users/me/messages', component: _user_profile_user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_6__["UserMessagesComponent"] },
            { path: 'users/me/posts/:id', component: _user_profile_user_posts_post_modal_container_routable_modals__WEBPACK_IMPORTED_MODULE_9__["ModalContainerComponent"] },
            { path: 'users/me/posts', component: _user_profile_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_8__["UserPostsComponent"] },
            { path: 'users/me', component: _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"] },
            { path: 'users/:id', component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
        ] },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".c-pointer {\n  cursor: pointer;\n}\n\n.change-language {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxVc2Vyc1xcQW5kcmlpRnl0c3lrXFxEZXNrdG9wXFxzb2NpYWxfbmV0d29ya1xcc29jaWFsLW5ldHdvcmsvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYW5nZS1sYW5ndWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIi5jLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGFuZ2UtbGFuZ3VhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/confirmation-dialog.service */ "./src/app/modules/shared/services/confirmation-dialog.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");







let HomeComponent = class HomeComponent {
    constructor(authenticationService, translate, confirmationDialogService, router, userService) {
        this.authenticationService = authenticationService;
        this.translate = translate;
        this.confirmationDialogService = confirmationDialogService;
        this.router = router;
        this.userService = userService;
    }
    deleteUser() {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete user ?')
            .then((confirmed) => {
            if (confirmed) {
                this.userService.deleteUser()
                    .subscribe(result => {
                    console.log('result', result);
                    if (result) {
                        this.router.navigate(['/login']);
                    }
                });
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    logOut() {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to log out ?')
            .then((confirmed) => {
            if (confirmed) {
                this.authenticationService.logout();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    searchUsersByWord() {
        this.userService.searchUserByWord(this.searchUsers)
            .subscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _shared_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/modules/home/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/edit-profile/edit-profile.component */ "./src/app/modules/home/user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-info/user-info.component */ "./src/app/modules/home/user-profile/user-info/user-info.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/modules/home/users/users.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/modules/home/users/user/user.component.ts");
/* harmony import */ var _user_profile_user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-messages/user-messages.component */ "./src/app/modules/home/user-profile/user-messages/user-messages.component.ts");
/* harmony import */ var _user_profile_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-posts/user-posts.component */ "./src/app/modules/home/user-profile/user-posts/user-posts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js");
/* harmony import */ var _user_profile_user_posts_post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-posts/post/post.component */ "./src/app/modules/home/user-profile/user-posts/post/post.component.ts");
/* harmony import */ var _user_profile_user_posts_post_modal_container_routable_modals__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-profile/user-posts/post/modal-container-routable-modals */ "./src/app/modules/home/user-profile/user-posts/post/modal-container-routable-modals.ts");
/* harmony import */ var _user_profile_user_posts_post_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-profile/user-posts/post/post-preview/post-preview.component */ "./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview.component.ts");






// import {SharedModule} from '../shared/shared.module';














let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"],
            _user_profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__["UserInfoComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
            _users_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
            _user_profile_user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_11__["UserMessagesComponent"],
            _user_profile_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_12__["UserPostsComponent"],
            _user_profile_user_posts_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
            _user_profile_user_posts_post_modal_container_routable_modals__WEBPACK_IMPORTED_MODULE_18__["ModalContainerComponent"],
            _user_profile_user_posts_post_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_19__["PostPreviewComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientJsonpModule"],
            _ngx_share_button__WEBPACK_IMPORTED_MODULE_16__["ShareButtonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]
        ],
        entryComponents: [
            _user_profile_user_posts_post_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_19__["PostPreviewComponent"]
        ],
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/user-profile/edit-profile/edit-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/edit-profile/edit-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _shared_models_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/userInfo */ "./src/app/modules/shared/models/userInfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditProfileComponent = class EditProfileComponent {
    constructor(formBuilder, userService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.userInfo = {};
    }
    ngOnInit() {
        this.userService.getUsersMe().subscribe(userInfo => {
            this.userInfo = userInfo;
            console.log(31, userInfo);
        });
        this.userInfoForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        let { name, lastname, city, country, age, description } = this.userInfoForm.value;
        age = Number(age);
        const userInfo = new _shared_models_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"](name, lastname, city, country, age, description);
        this.userService.editUserInfo(userInfo)
            .subscribe(result => {
            if (result.success) {
                this.userInfo = userInfo;
                this.router.navigate(['/users/me'], {
                    queryParams: {
                        informationEdited: true
                    }
                });
            }
            this.submitted = true;
        });
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/edit-profile/edit-profile.component.html")).default
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-info/user-info.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-info/user-info.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("image-cropper > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimage-cropper {\n  padding: 0;\n}\n\nimage-cropper img {\n  width: 100%;\n}\n\n.avatar-container {\n  margin: 0 auto;\n  width: 150px;\n  height: 150px;\n}\n\n.avatar-container img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3VzZXItcHJvZmlsZS91c2VyLWluZm8vQzpcXFVzZXJzXFxBbmRyaWlGeXRzeWtcXERlc2t0b3BcXHNvY2lhbF9uZXR3b3JrXFxzb2NpYWwtbmV0d29yay9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcdXNlci1wcm9maWxlXFx1c2VyLWluZm9cXHVzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3VzZXItcHJvZmlsZS91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS91c2VyLXByb2ZpbGUvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltYWdlLWNyb3BwZXIgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW1hZ2UtY3JvcHBlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW1hZ2UtY3JvcHBlciAgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF2YXRhci1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lciBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsImltYWdlLWNyb3BwZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1hZ2UtY3JvcHBlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltYWdlLWNyb3BwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdmF0YXItY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmF2YXRhci1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/user-profile/user-info/user-info.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-info/user-info.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");





let UserInfoComponent = class UserInfoComponent {
    constructor(userService, route, alertService) {
        this.userService = userService;
        this.route = route;
        this.alertService = alertService;
        this.selectedFile = null;
        this.isUserInfoLoaded = false;
        this.isImageLoaded = false;
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe((params) => {
            if (params.informationEdited) {
                this.alertService.success('Information was successfully edited');
            }
        });
        this.userService.getUsersMe()
            .subscribe(userInfo => {
            console.log('userInfo', userInfo);
            this.userInfo = userInfo;
            this.isUserInfoLoaded = true;
        });
    }
    fileChangeEvent(event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
            this.isImageLoaded = true;
            this.selectedFile = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.selectedFile);
            reader.onload = (_event) => {
                this.userInfo.image = reader.result;
            };
        }
        else {
            this.alertService.warn('Please select an image');
        }
    }
    uploadImage() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.userService.uploadPhoto(fd)
            .subscribe();
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-info/user-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.scss */ "./src/app/modules/home/user-profile/user-info/user-info.component.scss")).default]
    })
], UserInfoComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-messages/user-messages.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-messages/user-messages.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS91c2VyLXByb2ZpbGUvdXNlci1tZXNzYWdlcy91c2VyLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/user-profile/user-messages/user-messages.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-messages/user-messages.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessagesComponent", function() { return UserMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserMessagesComponent = class UserMessagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-messages/user-messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-messages.component.scss */ "./src/app/modules/home/user-profile/user-messages/user-messages.component.scss")).default]
    })
], UserMessagesComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-posts/post/modal-container-routable-modals.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-posts/post/modal-container-routable-modals.ts ***!
  \**********************************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-preview/post-preview.component */ "./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview.component.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/posts.service */ "./src/app/services/posts.service.ts");








let ModalContainerComponent = class ModalContainerComponent {
    constructor(modalService, route, router, postsService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentDialog = null;
        this.post = {};
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy)).subscribe(params => {
            this.post = this.postsService.getPostById(params.id);
            console.log(555, this.post);
            // When router navigates on this component is takes the params and opens up the photo detail modal
            this.currentDialog = this.modalService.open(_post_preview_post_preview_component__WEBPACK_IMPORTED_MODULE_6__["PostPreviewComponent"], { centered: true });
            this.currentDialog.componentInstance.post = this.post;
            // Go back to home page after the modal is closed
            this.currentDialog.result.then(result => {
                // router.navigateByUrl('/');
            }, reason => {
                // router.navigateByUrl('/');
            });
        });
    }
    ngOnDestroy() {
        this.destroy.next();
    }
};
ModalContainerComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"] }
];
ModalContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-container',
        template: ''
    })
], ModalContainerComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PostPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPreviewComponent", function() { return PostPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookSquare */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookSquare.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterest */ "./node_modules/@fortawesome/free-brands-svg-icons/faPinterest.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitterSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitterSquare */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitterSquare.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitterSquare__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitterSquare__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let PostPreviewComponent = class PostPreviewComponent {
    constructor(fa, title, meta) {
        this.fa = fa;
        this.title = title;
        this.meta = meta;
        this.fbIcon = _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"];
        this.pinIcon = _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_3__["faPinterest"];
        this.tweetIcon = _fortawesome_free_brands_svg_icons_faTwitterSquare__WEBPACK_IMPORTED_MODULE_4__["faTwitterSquare"];
    }
    ngOnInit() {
        this.meta.updateTag({ name: 'og:title', content: this.post.title });
        this.meta.updateTag({ name: 'og:description', content: this.post.description });
        this.meta.updateTag({ name: 'og:image', content: this.post.image });
    }
};
PostPreviewComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostPreviewComponent.prototype, "post", void 0);
PostPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-preview-component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post-preview/post-preview-component.html")).default
    })
], PostPreviewComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-posts/post/post.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-posts/post/post.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostComponent = class PostComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "id", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/post/post.component.html")).default
    })
], PostComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-posts/user-posts.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-posts/user-posts.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsComponent", function() { return UserPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/posts.service */ "./src/app/services/posts.service.ts");




let UserPostsComponent = class UserPostsComponent {
    constructor(dialog, postService) {
        this.dialog = dialog;
        this.postService = postService;
        this.posts = [];
    }
    ngOnInit() {
        this.posts = this.postService.getAllPosts();
    }
    ngAfterViewInit() {
        console.log(11, this.shareFacebook);
    }
};
UserPostsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('socialShare', { static: false })
], UserPostsComponent.prototype, "socialShare", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shareFacebook', { static: false })
], UserPostsComponent.prototype, "shareFacebook", void 0);
UserPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-posts/user-posts.component.html")).default
    })
], UserPostsComponent);



/***/ }),

/***/ "./src/app/modules/home/user-profile/user-profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-profile.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  display: flex;\n  margin: 40px 0 0 40px;\n}\n\n.user-profile {\n  width: 25%;\n}\n\n.user-profile mat-card-title {\n  text-align: center;\n}\n\n.user-profile .mat-card {\n  background: white;\n  color: black;\n  width: 100%;\n}\n\n.image-circle {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3VzZXItcHJvZmlsZS9DOlxcVXNlcnNcXEFuZHJpaUZ5dHN5a1xcRGVza3RvcFxcc29jaWFsX25ldHdvcmtcXHNvY2lhbC1uZXR3b3JrL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUlFLFVBQUE7QUNGRjs7QURERTtFQUNFLGtCQUFBO0FDR0o7O0FEQUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogNDBweCAwIDAgNDBweDtcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZSB7XHJcbiAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICB3aWR0aDogMjUlO1xyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLWNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuIiwibWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogNDBweCAwIDAgNDBweDtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gIHdpZHRoOiAyNSU7XG59XG4udXNlci1wcm9maWxlIG1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItcHJvZmlsZSAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/user-profile/user-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/user-profile/user-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfileComponent = class UserProfileComponent {
    constructor() {
    }
    ngOnInit() { }
};
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/modules/home/user-profile/user-profile.component.scss")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/modules/home/users/user/user.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/users/user/user.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS91c2Vycy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/users/user/user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/users/user/user.component.ts ***!
  \***********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserComponent = class UserComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.isLoaded = false;
    }
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            const id = params.id;
            this.userService.getUserById(id)
                .subscribe(userInfo => {
                this.userInfo = userInfo;
                this.isLoaded = true;
            });
        });
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/modules/home/users/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/modules/home/users/users.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/users/users.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/home/users/users.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/users/users.component.ts ***!
  \*******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");



let UsersComponent = class UsersComponent {
    constructor(userService) {
        this.userService = userService;
        this.totalUsersAmount = 0;
        this._currentPage = 1;
        this._currentSearchValue = '';
        this._limitUsers = 10;
        this.usersLoaded = false;
    }
    ngOnInit() {
        this.sub1 = this.userService.$users.subscribe(result => {
            if (result) {
                this.users = result.users;
                this.totalUsersAmount = result.total;
                console.log(666, result);
            }
        });
        this.sub2 = this.userService.getAllUsers(this._currentPage)
            .subscribe(users => {
            this.users = users.users;
            this.totalUsersAmount = users.total;
            this.usersLoaded = true;
        });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    }
    goToPage(page) {
        this._currentPage = page;
        this._loadUsers(this._currentPage, this._limitUsers);
    }
    _loadUsers(page = 1, limit = 10) {
        this.userService.getAllUsers(page, limit).subscribe((response) => {
            this.users = response.users;
            this.totalUsersAmount = response.total;
        }, (error) => console.error(error));
    }
};
UsersComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/home/users/users.component.scss")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/alert/alert.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/alert/alert.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-top {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9DOlxcVXNlcnNcXEFuZHJpaUZ5dHN5a1xcRGVza3RvcFxcc29jaWFsX25ldHdvcmtcXHNvY2lhbC1uZXR3b3JrL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LXRvcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iLCIuZGlzcGxheS10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/components/alert/alert.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/components/alert/alert.component.ts ***!
  \********************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/alert */ "./src/app/modules/shared/models/alert.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/modules/shared/services/alert.service.ts");




let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert(this.id).subscribe((alert) => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success:
                return 'alert alert-success col-sm-2 mx-auto display-top text-center';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error:
                return 'alert alert-danger  col-sm-2 mx-auto display-top text-center';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info:
                return 'alert alert-info col-sm-2 mx-auto display-top text-center';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning:
                return 'alert alert-warning col-sm-2 mx-auto display-top text-center';
        }
    }
};
AlertComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/modules/shared/components/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/alert/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/shared/components/alert/index.ts ***!
  \**********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/modules/shared/components/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });





/***/ }),

/***/ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    decline() {
        this.activeModal.close(false);
    }
    accept() {
        this.activeModal.close(true);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationDialogComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationDialogComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.html")).default,
    })
], ConfirmationDialogComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/pagination/pagination.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/pagination/pagination.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/pagination/pagination.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/pagination/pagination.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pagesArray = [];
        this.currentPage = 1;
        this.goToPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set setPagination(pagination) {
        console.log('pagination', pagination);
        if (pagination) {
            const pagesAmount = Math.ceil(pagination.itemsCount / pagination.pageSize);
            this.pagesArray = new Array(pagesAmount).fill(1);
        }
    }
    setPage(pageNumber) {
        if (pageNumber === this.currentPage) {
            return;
        }
        this.currentPage = pageNumber;
        this.goToPage.emit(pageNumber);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "goToPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "setPagination", null);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.scss */ "./src/app/modules/shared/components/pagination/pagination.component.scss")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/modules/shared/models/alert.ts":
/*!************************************************!*\
  !*** ./src/app/modules/shared/models/alert.ts ***!
  \************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/modules/shared/models/info-message.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/models/info-message.ts ***!
  \*******************************************************/
/*! exports provided: InfoMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMessage", function() { return InfoMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class InfoMessage {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}


/***/ }),

/***/ "./src/app/modules/shared/models/userInfo.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/shared/models/userInfo.ts ***!
  \***************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserInfo {
    constructor(name, lastname, city, country, age, description, image) {
        this.name = name;
        this.lastname = lastname;
        this.city = city;
        this.country = country;
        this.age = age;
        this.description = description;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/modules/shared/services/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/shared/services/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/alert */ "./src/app/modules/shared/models/alert.ts");






let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    // subscribe to alerts
    getAlert(alertId) {
        return this.subject.asObservable().filter((x) => x && x.alertId === alertId);
    }
    hideAlert() {
        setTimeout(() => {
            this.clear();
        }, 2000);
    }
    // convenience methods
    success(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success }));
        this.hideAlert();
    }
    error(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error }));
        this.hideAlert();
    }
    info(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Info }));
        this.hideAlert();
    }
    warn(message) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _models_alert__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Warning }));
        this.hideAlert();
    }
    // main alert method
    alert(alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }
    // clear alerts
    clear(alertId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ alertId }));
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AlertService);



/***/ }),

/***/ "./src/app/modules/shared/services/confirmation-dialog.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/services/confirmation-dialog.service.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");




let ConfirmationDialogService = class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
        const modalRef = this.modalService.open(_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
};
ConfirmationDialogService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ConfirmationDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConfirmationDialogService);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/confirmation-dialog.service */ "./src/app/modules/shared/services/confirmation-dialog.service.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/modules/shared/components/pagination/pagination.component.ts");













// import {ShareButtonModule} from '@ngx-share/button';
// import {BrowserModule} from '@angular/platform-browser';
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropperModule"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        entryComponents: [_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"]],
        providers: [_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogService"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.JWT_TOKEN = 'AccessToken';
        this.REFRESH_TOKEN = 'RefreshToken';
    }
    login(user) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/login`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(result => {
            console.log(result);
            this.storeTokens(result.tokens);
        }));
    }
    isLoggedIn() {
        return !!this.getAccessToken();
    }
    refreshToken() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', this.getRefreshToken());
        return this.http.get(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/token/refresh`, {
            headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            this.storeTokens(result.tokens);
            return result;
        }));
    }
    getAccessToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }
    storeAccessToken(jwt) {
        localStorage.setItem(this.JWT_TOKEN, jwt);
    }
    storeTokens(tokens) {
        localStorage.setItem(this.JWT_TOKEN, tokens.accessToken);
        localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }
    removeTokens() {
        localStorage.removeItem(this.JWT_TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
    }
    logout() {
        this.router.navigate(['/login']);
        this.removeTokens();
    }
    forgotPassword(email) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/forgotPassword`, { email });
    }
    changePassword(password, token) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/resetPassword`, { password, token });
    }
    signInWithFacebook(token, id) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/facebook`, { token, id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            if (res && res.tokens) {
                this.storeTokens(res.tokens);
                return true;
            }
        }));
    }
    signInWithGoogle(token) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/google`, { token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            if (res && res.tokens) {
                this.storeTokens(res.tokens);
                return true;
            }
        }));
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GLOBAL = {
    url: '192.168.0.99:3001'
};


/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsService = class PostsService {
    constructor() {
        this.posts = [
            { id: 1, title: 'test title1', description: 'test description 1', image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' },
            { id: 2, title: 'test title2', description: 'test description 2', image: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' },
            { id: 3, title: 'test title3', description: 'test description 3', image: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg' },
            { id: 4, title: 'test title4', description: 'test description 4', image: 'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' },
        ];
    }
    getAllPosts() {
        return this.posts;
    }
    getPostById(id) {
        debugger;
        return this.posts.find(post => post.id === +id);
    }
};
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostsService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.$users = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.users);
        // console.log(this.$users.subscribe(res => console.log(333, res)))
    }
    getAllUsers(page, limit = 10) {
        return this.http.get(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users?page=${page}&limit=${limit}`);
    }
    deleteUser() {
        return this.http.delete(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users/me`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            return res.success;
        }));
    }
    getUserById(id) {
        return this.http.get(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users/${id}`);
    }
    register(user) {
        return this.http.post(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/auth/signup`, user);
    }
    editUserInfo(userInfo) {
        debugger;
        return this.http.put(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users/me`, userInfo);
    }
    uploadPhoto(image) {
        return this.http.put(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users/updatePhoto`, image);
    }
    getUsersMe() {
        return this.http.get(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/users/me`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            return result.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(userInfo => {
            return userInfo;
        }));
    }
    searchUserByWord(searchWord = '', page = 1, limit = 10) {
        return this.http.get(`http://${_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/search?search=${searchWord}&limit=${limit}&page=${page}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            console.log(999, result);
            this.$users.next({
                users: result.users,
                total: result.total
            });
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AndriiFytsyk\Desktop\social_network\social-network\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map