"use strict";
var core_1 = require('@angular/core');
var theme_1 = require('../../../theme');
var BaKameleonPicturePipe = (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return theme_1.layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    BaKameleonPicturePipe = __decorate([
        core_1.Pipe({ name: 'baKameleonPicture' }), 
        __metadata('design:paramtypes', [])
    ], BaKameleonPicturePipe);
    return BaKameleonPicturePipe;
}());
exports.BaKameleonPicturePipe = BaKameleonPicturePipe;
//# sourceMappingURL=baKameleonPicture.pipe.js.map