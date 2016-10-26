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
                url: this.apiUrl + "injections/sample/:id/",
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
        var matching = list.map(function (obj, index) { return obj.id === item.sampleId ? index : -1; }).filter(function (index) { return index > -1; });
        var index = matching.length > 0 ? matching[0] : -1;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQXpCLGlCQUF5QjtRQUM3RCxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDakssQ0FBQztJQXRFYSx3QkFBTyxHQUFHO1FBQ3BCLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsa0JBQWtCO0tBQ3JCLENBQUM7SUFtRU4sdUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxDQXpFOEIsV0FBVyxHQXlFekMiLCJmaWxlIjoiaW5qZWN0aW9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJSW5qZWN0aW9uIGV4dGVuZHMgSUFwaUl0ZW0ge1xuICAgIHNhbXBsZUlkOiBzdHJpbmc7XG4gICAgYnJhaW5BcmVhSWQ6IHN0cmluZztcbiAgICBpbmplY3Rpb25WaXJ1c0lkOiBzdHJpbmc7XG4gICAgZmx1b3JvcGhvcmVJZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUluamVjdGlvblJlc291cmNlIGV4dGVuZHMgbmcucmVzb3VyY2UuSVJlc291cmNlQ2xhc3M8bmcucmVzb3VyY2UuSVJlc291cmNlPElJbmplY3Rpb24+PiB7XG4gICAgaW5qZWN0aW9uc0ZvclNhbXBsZShvYmo6IGFueSk6IEFycmF5PHN0cmluZz47XG59XG5cbmludGVyZmFjZSBJSW5qZWN0aW9uU2FtcGxlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxJSW5qZWN0aW9uPjtcbn1cblxuY2xhc3MgSW5qZWN0aW9uU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlPElJbmplY3Rpb24+IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIixcbiAgICAgICAgXCJpbmplY3Rpb25WaXJ1c1NlcnZpY2VcIixcbiAgICAgICAgXCJicmFpbkFyZWFTZXJ2aWNlXCJcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBpbmplY3Rpb25TYW1wbGVNYXA6IElJbmplY3Rpb25TYW1wbGVNYXAgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSwgcHJpdmF0ZSBpbmplY3Rpb25WaXJ1c1NlcnZpY2U6IEluamVjdGlvblZpcnVzU2VydmljZSwgcHJpdmF0ZSBicmFpbkFyZWFTZXJ2aWNlOiBCcmFpbkFyZWFTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpbmplY3Rpb25zXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbVJlc291cmNlTWV0aG9kcygpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5qZWN0aW9uc0ZvclNhbXBsZToge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsICsgXCJpbmplY3Rpb25zL3NhbXBsZS86aWQvXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7aWQ6IFwiQGlkXCJ9LFxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtKG9iajogSUluamVjdGlvbik6IElJbmplY3Rpb24ge1xuICAgICAgICBsZXQgaXRlbTogSUluamVjdGlvbiA9IHN1cGVyLnJlZ2lzdGVyTmV3SXRlbShvYmopIGFzIElJbmplY3Rpb247XG5cbiAgICAgICAgbGV0IGxpc3Q6IEFycmF5PElJbmplY3Rpb24+ID0gdGhpcy5pbmplY3Rpb25TYW1wbGVNYXBbaXRlbS5zYW1wbGVJZF07XG5cbiAgICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZCB8fCBsaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLmluamVjdGlvblNhbXBsZU1hcFtpdGVtLnNhbXBsZUlkXSA9IGxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGl0ZW0gaW4gbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgICAgbGV0IG1hdGNoaW5nOiBBcnJheTxudW1iZXI+ID0gbGlzdC5tYXAoKG9iaiwgaW5kZXgpID0+IG9iai5pZCA9PT0gaXRlbS5zYW1wbGVJZCA/IGluZGV4IDogLTEpLmZpbHRlcihpbmRleCA9PiBpbmRleCA+IC0xKTtcblxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9ICBtYXRjaGluZy5sZW5ndGggPiAwID8gbWF0Y2hpbmdbMF0gOiAtMTsgLy8gbGlzdC5pbmRleE9mKGl0ZW0uc2FtcGxlSWQpO1xuXG4gICAgICAgIC8vIEFkZCBvciB1cGRhdGUuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmplY3Rpb25zRm9yU2FtcGxlKHNhbXBsZUlkOiBzdHJpbmcpOiBBcnJheTxJSW5qZWN0aW9uPiB7XG4gICAgICAgIGxldCBpbmplY3Rpb25zID0gdGhpcy5pbmplY3Rpb25TYW1wbGVNYXBbc2FtcGxlSWRdO1xuXG4gICAgICAgIGlmIChpbmplY3Rpb25zID09PSB1bmRlZmluZWQgfHwgaW5qZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaW5qZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbmplY3Rpb25TYW1wbGVNYXBbc2FtcGxlSWRdID0gaW5qZWN0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmplY3Rpb25zO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBpbmplY3Rpb25zKCk6IEFycmF5PElJbmplY3Rpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNwbGF5TmFtZShpdGVtOiBJSW5qZWN0aW9uLCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLmJyYWluQXJlYVNlcnZpY2UuZ2V0RGlzcGxheU5hbWVGb3JJZChpdGVtLmJyYWluQXJlYUlkKSArIFwiOlwiICsgdGhpcy5pbmplY3Rpb25WaXJ1c1NlcnZpY2UuZ2V0RGlzcGxheU5hbWVGb3JJZChpdGVtLmluamVjdGlvblZpcnVzSWQpICsgXCIpXCI7XG4gICAgfVxufSJdfQ==
