"use strict";
var core_1 = require('@angular/core');
var basicTables_service_1 = require('../../basicTables.service');
var BorderedTable = (function () {
    function BorderedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.metricsTableData = _basicTablesService.metricsTableData;
    }
    BorderedTable = __decorate([
        core_1.Component({
            selector: 'bordered-table',
            template: require('./borderedTable.html'),
        }), 
        __metadata('design:paramtypes', [basicTables_service_1.BasicTablesService])
    ], BorderedTable);
    return BorderedTable;
}());
exports.BorderedTable = BorderedTable;
//# sourceMappingURL=borderedTable.component.js.map