var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InjectionVirusService = (function (_super) {
    __extends(InjectionVirusService, _super);
    function InjectionVirusService($resource, $rootScope) {
        _super.call(this, $resource, $rootScope);
        this.$rootScope = $rootScope;
    }
    InjectionVirusService.prototype.createResource = function (location) {
        return this.$resource(location + "viruses/:id", { id: "@id" }, {});
    };
    Object.defineProperty(InjectionVirusService.prototype, "injectionViruses", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    InjectionVirusService.$inject = [
        "$resource",
        "$rootScope"
    ];
    return InjectionVirusService;
}(DataService));
