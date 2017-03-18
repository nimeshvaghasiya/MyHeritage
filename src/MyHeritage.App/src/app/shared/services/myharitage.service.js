"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var config_service_1 = require('../utils/config.service');
var MyHeritageService = (function () {
    function MyHeritageService(http, configService) {
        this.http = http;
        this.configService = configService;
        this._baseUrl = '';
        this._baseUrl = configService.getApiURI();
    }
    MyHeritageService.prototype.getAll = function (event) {
        return this.http.get(this._baseUrl + 'memberheritage/').map(function (res) {
            return res.json();
        }).catch(this.configService.handleError);
    };
    MyHeritageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], MyHeritageService);
    return MyHeritageService;
}());
exports.MyHeritageService = MyHeritageService;
//# sourceMappingURL=myharitage.service.js.map