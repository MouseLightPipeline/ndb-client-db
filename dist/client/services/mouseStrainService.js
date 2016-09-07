var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MouseStrainService = (function (_super) {
    __extends(MouseStrainService, _super);
    function MouseStrainService($resource) {
        _super.call(this, $resource);
    }
    MouseStrainService.prototype.createResource = function (location) {
        return this.$resource(location + "mousestrains/:id", { id: "@id" }, {});
    };
    Object.defineProperty(MouseStrainService.prototype, "mouseStrains", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    MouseStrainService.$inject = [
        "$resource"
    ];
    return MouseStrainService;
}(DataService));
