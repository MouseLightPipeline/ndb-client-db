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
    NeuronService.prototype.registerNewItem = function (rawObj) {
        var item = _super.prototype.registerNewItem.call(this, rawObj);
        var list = this.neuronInjectionMap[item.injectionId];
        if (list === undefined || list === null) {
            list = [];
            this.neuronInjectionMap[item.injectionId] = list;
        }
        var matching = list.map(function (obj, index) { return obj.id === item.injectionId ? index : -1; }).filter(function (index) { return index > -1; });
        var index = matching.length > 0 ? matching[0] : -1;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQWpFYSxxQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBZ0VOLG9CQUFDO0FBQUQsQ0FuRUEsQUFtRUMsQ0FuRTJCLHVCQUF1QixHQW1FbEQiLCJmaWxlIjoibmV1cm9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJTmV1cm9uIGV4dGVuZHMgSUFwaUlkTnVtYmVySXRlbSB7XG4gICAgaW5qZWN0aW9uSWQ6IHN0cmluZztcbiAgICBicmFpbkFyZWFJZDogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIGtleXdvcmRzOiBzdHJpbmc7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB6OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJTmV1cm9uU2FtcGxlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxJTmV1cm9uPjtcbn1cblxuY2xhc3MgTmV1cm9uU2VydmljZSBleHRlbmRzIE51bWJlcmVkSXRlbURhdGFTZXJ2aWNlPElOZXVyb24+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgLy8gQXJyYXlzIG9mIG5ldXJvbiBvYmplY3RzIGtleWVkIGJ5IGluamVjdGlvbiBpZC5cbiAgICBwcml2YXRlIG5ldXJvbkluamVjdGlvbk1hcDogSU5ldXJvblNhbXBsZU1hcCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTmV3SXRlbShyYXdPYmo6IElOZXVyb24pOiBJTmV1cm9uIHtcbiAgICAgICAgbGV0IGl0ZW06IElOZXVyb24gPSBzdXBlci5yZWdpc3Rlck5ld0l0ZW0ocmF3T2JqKSBhcyBJTmV1cm9uO1xuXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5uZXVyb25JbmplY3Rpb25NYXBbaXRlbS5pbmplY3Rpb25JZF07XG5cbiAgICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZCB8fCBsaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLm5ldXJvbkluamVjdGlvbk1hcFtpdGVtLmluamVjdGlvbklkXSA9IGxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGl0ZW0gaW4gbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgICAgbGV0IG1hdGNoaW5nOiBBcnJheTxudW1iZXI+ID0gbGlzdC5tYXAoKG9iaiwgaW5kZXgpID0+IG9iai5pZCA9PT0gaXRlbS5pbmplY3Rpb25JZCA/IGluZGV4IDogLTEpLmZpbHRlcihpbmRleCA9PiBpbmRleCA+IC0xKTtcblxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9ICBtYXRjaGluZy5sZW5ndGggPiAwID8gbWF0Y2hpbmdbMF0gOiAtMTsgLy8gbGlzdC5pbmRleE9mKGl0ZW0uaW5qZWN0aW9uSWQpO1xuXG4gICAgICAgIC8vIEFkZCBvciB1cGRhdGVcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdFtpbmRleF0gPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJuZXVyb25zXCI7XG4gICAgfVxuXG4gICAgcHVibGljIG5ldXJvbnNGb3JJbmplY3Rpb24oaW5qZWN0aW9uSWQ6IHN0cmluZyk6IEFycmF5PElOZXVyb24+IHtcbiAgICAgICAgbGV0IG5ldXJvbnM6IEFycmF5PElOZXVyb24+ID0gdGhpcy5uZXVyb25JbmplY3Rpb25NYXBbaW5qZWN0aW9uSWRdO1xuXG4gICAgICAgIGlmIChuZXVyb25zID09PSB1bmRlZmluZWQgfHwgbmV1cm9ucyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbmV1cm9ucyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uZXVyb25JbmplY3Rpb25NYXBbaW5qZWN0aW9uSWRdID0gbmV1cm9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXVyb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmV1cm9ucygpOiBBcnJheTxJTmV1cm9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWUoaXRlbTogSU5ldXJvbiwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0udGFnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkTnVtYmVyLnRvU3RyaW5nKCkgKyBcIiBcIiArIGl0ZW0udGFnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWROdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
