"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var myheritage_component_1 = require('./myheritage.component');
var myharitage_service_1 = require('../../shared/services/myharitage.service');
var d3_routing_1 = require('./d3.routing');
var D3Module = (function () {
    function D3Module() {
    }
    D3Module = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                d3_routing_1.routing
            ],
            declarations: [
                myheritage_component_1.MyHeritageComponent
            ],
            providers: [
                myharitage_service_1.MyHeritageService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], D3Module);
    return D3Module;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = D3Module;
//# sourceMappingURL=d3.module.js.map