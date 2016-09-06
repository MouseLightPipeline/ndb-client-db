var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FluorophoreService = (function (_super) {
    __extends(FluorophoreService, _super);
    function FluorophoreService($resource, $rootScope) {
        _super.call(this, $resource, $rootScope);
        this.$rootScope = $rootScope;
    }
    FluorophoreService.prototype.createResource = function (location) {
        return this.$resource(location + "fluorophores/:id", { id: "@id" }, {});
    };
    Object.defineProperty(FluorophoreService.prototype, "fluorophores", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    FluorophoreService.$inject = [
        "$resource",
        "$rootScope"
    ];
    return FluorophoreService;
}(DataService));
