var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NeuronService = (function (_super) {
    __extends(NeuronService, _super);
    function NeuronService($resource) {
        _super.call(this, $resource);
        this.neuronInjectionMap = {};
    }
    NeuronService.prototype.registerNewItem = function (obj) {
        var item = _super.prototype.registerNewItem.call(this, obj);
        var list = this.neuronInjectionMap[item.injectionId];
        if (list === undefined || list === null) {
            list = [];
            this.neuronInjectionMap[item.injectionId] = list;
        }
        var index = list.indexOf(item.injectionId);
        if (index < 0) {
            list.push(item);
        }
        else {
            list[index] = item;
        }
        return item;
    };
    NeuronService.prototype.resourcePath = function () {
        return "neurons";
    };
    NeuronService.prototype.neuronsForInjection = function (injectionId) {
        var neurons = this.neuronInjectionMap[injectionId];
        if (neurons === undefined || neurons === null) {
            neurons = [];
            this.neuronInjectionMap[injectionId] = neurons;
        }
        return neurons;
    };
    Object.defineProperty(NeuronService.prototype, "neurons", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    NeuronService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if (item === null) {
            return "";
        }
        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag;
        }
        else {
            return item.idNumber.toString();
        }
    };
    NeuronService.$inject = [
        "$resource"
    ];
    return NeuronService;
}(NumberedItemDataService));
