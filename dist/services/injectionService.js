var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InjectionService = (function (_super) {
    __extends(InjectionService, _super);
    function InjectionService($resource, injectionVirusService, brainAreaService) {
        _super.call(this, $resource);
        this.injectionVirusService = injectionVirusService;
        this.brainAreaService = brainAreaService;
        this.injectionSampleMap = {};
    }
    InjectionService.prototype.resourcePath = function () {
        return "injections";
    };
    InjectionService.prototype.createCustomResourceMethods = function () {
        return {
            injectionsForSample: {
                method: "GET",
                url: location + "injections/sample/:id/",
                params: { id: "@id" },
                isArray: true
            }
        };
    };
    InjectionService.prototype.registerNewItem = function (obj) {
        var item = _super.prototype.registerNewItem.call(this, obj);
        var list = this.injectionSampleMap[item.sampleId];
        if (list === undefined || list === null) {
            list = [];
            this.injectionSampleMap[item.sampleId] = list;
        }
        var index = list.indexOf(item.sampleId);
        if (index < 0) {
            list.push(item);
        }
        else {
            list[index] = item;
        }
        return item;
    };
    InjectionService.prototype.injectionsForSample = function (sampleId) {
        var injections = this.injectionSampleMap[sampleId];
        if (injections === undefined || injections === null) {
            injections = [];
            this.injectionSampleMap[sampleId] = injections;
        }
        return injections;
    };
    Object.defineProperty(InjectionService.prototype, "injections", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    InjectionService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        return "(" + this.brainAreaService.getDisplayNameForId(item.brainAreaId) + ":" + this.injectionVirusService.getDisplayNameForId(item.injectionVirusId) + ")";
    };
    InjectionService.$inject = [
        "$resource",
        "injectionVirusService",
        "brainAreaService"
    ];
    return InjectionService;
}(DataService));
