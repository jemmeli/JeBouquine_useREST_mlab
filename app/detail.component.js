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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var livres_service_1 = require('./livres.service');
var panier_service_1 = require('./panier.service');
var livre_1 = require("./livre");
var DetailComponent = (function () {
    function DetailComponent(route, livresService, panierService) {
        this.route = route;
        this.livresService = livresService;
        this.panierService = panierService;
        this.Id = "";
        this.Livre = new livre_1.Livre();
    }
    //with server
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.route.snapshot.params['Id'];
        this.livresService.ChercherParId(this.Id)
            .subscribe(function (p) {
            _this.Livre = p;
        }, function (err) {
            console.log(err);
        });
    };
    DetailComponent.prototype.AjouterLivrePanier = function (item) {
        this.panierService.AjouterLivre(item);
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            templateUrl: "../app/html/Detail.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, livres_service_1.LivresService, panier_service_1.PanierService])
    ], DetailComponent);
    return DetailComponent;
    var _a;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map