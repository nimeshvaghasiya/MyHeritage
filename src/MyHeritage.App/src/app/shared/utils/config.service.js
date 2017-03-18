"use strict";
var core_1 = require('@angular/core');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:5000/api/';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService.prototype.getApiHost = function () {
        return this._apiURI.replace('api/', '');
    };
    ConfigService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error._body;
        var modelStateErrors = '';
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    ConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map