var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TracingService = (function (_super) {
    __extends(TracingService, _super);
    function TracingService($resource, $http) {
        _super.call(this, $resource);
        this.$http = $http;
    }
    Object.defineProperty(TracingService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    TracingService.prototype.resourcePath = function () {
        return "tracings";
    };
    TracingService.prototype.createCustomResourceMethods = function () {
        return {
            nodes: {
                method: "GET",
                url: location + "tracings/:id/nodes/",
                params: { id: "@id" },
                isArray: true
            }
        };
    };
    Object.defineProperty(TracingService.prototype, "tracings", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    TracingService.prototype.uploadSwcFile = function (theFile, tracingInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.apiUrl + "upload";
            var fd = new FormData();
            fd.append("contents", theFile);
            _this.$http.post(url, fd, {
                params: tracingInfo,
                transformRequest: angular.identity,
                headers: { "Content-Type": undefined }
            }).then(function (result) {
                _this.dataSource.get({ id: result.data.id }, function (fullItem) {
                    _this._entityStore.addItem(fullItem);
                    resolve(fullItem);
                });
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    TracingService.$inject = [
        "$resource",
        "$http"
    ];
    return TracingService;
}(DataService));
//# sourceMappingURL=tracingService.js.map