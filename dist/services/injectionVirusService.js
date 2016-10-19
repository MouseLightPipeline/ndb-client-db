var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./dataService"], function (require, exports, dataService_1) {
    "use strict";
    var InjectionVirusService = (function (_super) {
        __extends(InjectionVirusService, _super);
        function InjectionVirusService($resource) {
            _super.call(this, $resource);
        }
        InjectionVirusService.prototype.resourcePath = function () {
            return "viruses";
        };
        Object.defineProperty(InjectionVirusService.prototype, "injectionViruses", {
            get: function () {
                return this._entityStore.items;
            },
            enumerable: true,
            configurable: true
        });
        InjectionVirusService.$inject = [
            "$resource"
        ];
        return InjectionVirusService;
    }(dataService_1.NamedItemDataService));
    exports.InjectionVirusService = InjectionVirusService;
});
