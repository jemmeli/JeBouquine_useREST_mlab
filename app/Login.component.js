"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var compte_service_1 = require("./compte.service");
var LoginComponent = (function () {
    function LoginComponent(compteService, router) {
        this.compteService = compteService;
        this.router = router;
    }
    //with server
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('should register:', form.value);
        this.compteService.Login(form.value.user, form.value.password).subscribe(function (data) {
            console.log('data', data);
            if (data != null) {
                _this.compteService.isLoggedIn = true;
                _this.compteService.loggedIn.next(_this.compteService.isLoggedIn);
                _this.compteService._compte = data;
                _this.compteService.Compte.next(_this.compteService._compte);
                _this.router.navigate(['/LesLivres']);
            }
            else {
                _this.compteService.isLoggedIn = false;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Authentication Complete'); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: "../app/html/Login.html",
            styleUrls: ["../../Content/login.css"],
            styles: [" input.ng-dirty.ng-invalid { border: solid red 2px; !important;} input.ng-dirty.ng-valid { border: solid green 2px; !important;} "]
        }), 
        __metadata('design:paramtypes', [compte_service_1.CompteService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=Login.component.js.map