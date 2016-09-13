var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrainAreaDepthEntry = (function () {
    function BrainAreaDepthEntry() {
    }
    return BrainAreaDepthEntry;
}());
var BrainAreaService = (function (_super) {
    __extends(BrainAreaService, _super);
    function BrainAreaService($resource) {
        _super.call(this, $resource);
    }
    Object.defineProperty(BrainAreaService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    BrainAreaService.prototype.mapQueriedItem = function (obj) {
        obj.createdAt = new Date(obj.createdAt);
        obj.updatedAt = new Date(obj.updatedAt);
        return obj;
    };
    BrainAreaService.prototype.resourcePath = function () {
        return "brainareas";
    };
    BrainAreaService.prototype.createCustomResourceMethods = function () {
        return {
            queryForDepth: {
                method: "GET",
                url: location + "brainareas/depth/:depth",
                params: { depth: "@depth" },
                isArray: true
            },
            queryForParent: {
                method: "GET",
                url: location + "brainareas/parent/:parentId",
                params: { parentId: "@parentId" },
                isArray: true
            }
        };
    };
    BrainAreaService.prototype.brainAreasForDepth = function (depth) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.queryForDepth({ depth: depth }).$promise.then(function (data) {
                data = _this.registerNewItems(data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    BrainAreaService.prototype.brainAreasForParent = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.queryForParent({ parentId: parentId }).$promise.then(function (data) {
                data = _this.registerNewItems(data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    BrainAreaService.$inject = [
        "$resource"
    ];
    return BrainAreaService;
}(NamedItemDataService));
//# sourceMappingURL=brainAreaService.js.map