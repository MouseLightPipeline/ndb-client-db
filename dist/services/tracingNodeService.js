var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./dataService"], function (require, exports, dataService_1) {
    "use strict";
    var TracingNodeService = (function (_super) {
        __extends(TracingNodeService, _super);
        function TracingNodeService($resource) {
            _super.call(this, $resource);
        }
        Object.defineProperty(TracingNodeService.prototype, "service", {
            get: function () {
                return this.dataSource;
            },
            enumerable: true,
            configurable: true
        });
        TracingNodeService.prototype.resourcePath = function () {
            return "nodes";
        };
        TracingNodeService.prototype.createCustomResourceMethods = function () {
            return {
                nodesForStructure: {
                    method: "GET",
                    url: this.apiUrl + "nodes/findByStructure/:id/",
                    params: { id: "@id" },
                    isArray: true
                }
            };
        };
        Object.defineProperty(TracingNodeService.prototype, "nodes", {
            get: function () {
                return this._entityStore.items;
            },
            enumerable: true,
            configurable: true
        });
        TracingNodeService.prototype.nodesForStructure = function (structureId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.service.nodesForStructure({ id: structureId }).$promise.then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    reject(err);
                });
            });
        };
        TracingNodeService.$inject = [
            "$resource"
        ];
        return TracingNodeService;
    }(dataService_1.DataService));
    exports.TracingNodeService = TracingNodeService;
});
