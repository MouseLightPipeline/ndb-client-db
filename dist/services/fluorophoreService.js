var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FluorophoreService = (function (_super) {
    __extends(FluorophoreService, _super);
    function FluorophoreService($resource) {
        _super.call(this, $resource);
    }
    FluorophoreService.prototype.resourcePath = function () {
        return "fluorophores";
    };
    Object.defineProperty(FluorophoreService.prototype, "fluorophores", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    FluorophoreService.$inject = [
        "$resource"
    ];
    return FluorophoreService;
}(NamedItemDataService));
