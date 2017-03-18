"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var paint_component_1 = require('./paint.component');
var paint_routing_1 = require('./paint.routing');
var PaintModule = (function () {
    function PaintModule() {
    }
    PaintModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                paint_routing_1.routing
            ],
            declarations: [
                paint_component_1.PaintComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PaintModule);
    return PaintModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PaintModule;
//# sourceMappingURL=paint.module.js.map