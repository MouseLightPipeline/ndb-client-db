var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function lpad(n, width, z) {
    if (z === void 0) { z = "0"; }
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
var SampleService = (function (_super) {
    __extends(SampleService, _super);
    function SampleService($resource, $rootScope) {
        _super.call(this, $resource, $rootScope);
        this.$rootScope = $rootScope;
    }
    SampleService.prototype.mapQueriedItem = function (obj) {
        obj = _super.prototype.mapQueriedItem.call(this, obj);
        obj.sampleDate = new Date(obj.sampleDate);
        return obj;
    };
    SampleService.prototype.createResource = function (location) {
        return this.$resource(location + "samples/:id", { id: "@id" }, {});
    };
    Object.defineProperty(SampleService.prototype, "samples", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    SampleService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if (item === null || item.sampleDate === null) {
            return "";
        }
        var date = item.sampleDate.getFullYear() + "-" + lpad(item.sampleDate.getMonth() + 1, 2) + "-" + lpad(item.sampleDate.getDate(), 2);
        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag + " (" + date + ")";
        }
        else {
            return item.idNumber.toString() + " (" + date + ")";
        }
    };
    SampleService.$inject = [
        "$resource",
        "$rootScope"
    ];
    return SampleService;
}(DataService));
