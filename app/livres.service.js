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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//service pour livre
var LivresService = (function () {
    function LivresService(http) {
        this.UrlWebApi = 'http://localhost:8080'; //http://localhost:3000/data.livre.json
        this.http = http;
    }
    LivresService.prototype.RecupererLivres = function () {
        var livres = this.http
            .get((this.UrlWebApi + '/Livres'), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); });
        return livres;
    };
    //with server
    LivresService.prototype.ChercherParId = function (id) {
        return this.http
            .get((this.UrlWebApi + '/Livre/' + id), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); });
    };
    //with server
    LivresService.prototype.ChercherParCategorie = function (categorie) {
        return this.http
            .get((this.UrlWebApi + '/Livres/' + categorie), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); });
    };
    LivresService.prototype.AjouterLivre = function (livre) {
        this.Livres.push(livre);
    };
    LivresService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    LivresService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], LivresService);
    return LivresService;
    var _a;
}());
exports.LivresService = LivresService;
//# sourceMappingURL=livres.service.js.map