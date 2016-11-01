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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmplY3Rpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBV0E7SUFBK0Isb0NBQXVCO0lBVWxELDBCQUFZLFNBQXVDLEVBQVUscUJBQTRDLEVBQVUsZ0JBQWtDO1FBQ2pKLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBRHdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRjdJLHVCQUFrQixHQUF3QixFQUFFLENBQUM7SUFJckQsQ0FBQztJQUVTLHVDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRVMsMENBQWUsR0FBekIsVUFBMEIsR0FBZTtRQUNyQyxJQUFJLElBQUksR0FBZSxnQkFBSyxDQUFDLGVBQWUsWUFBQyxHQUFHLENBQWUsQ0FBQztRQUVoRSxJQUFJLElBQUksR0FBc0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsRCxDQUFDO1FBR0QsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztRQUUxSCxJQUFJLEtBQUssR0FBWSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHNUQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDhDQUFtQixHQUExQixVQUEyQixRQUFnQjtRQUN2QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFXLHdDQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBZ0IsRUFBRSxZQUF5QjtRQUF6Qiw0QkFBeUIsR0FBekIsaUJBQXlCO1FBQzdELE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNqSyxDQUFDO0lBMURhLHdCQUFPLEdBQUc7UUFDcEIsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixrQkFBa0I7S0FDckIsQ0FBQztJQXVETix1QkFBQztBQUFELENBN0RBLEFBNkRDLENBN0Q4QixXQUFXLEdBNkR6QyIsImZpbGUiOiJpbmplY3Rpb25TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElJbmplY3Rpb24gZXh0ZW5kcyBJQXBpSXRlbSB7XG4gICAgc2FtcGxlSWQ6IHN0cmluZztcbiAgICBicmFpbkFyZWFJZDogc3RyaW5nO1xuICAgIGluamVjdGlvblZpcnVzSWQ6IHN0cmluZztcbiAgICBmbHVvcm9waG9yZUlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJSW5qZWN0aW9uU2FtcGxlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxJSW5qZWN0aW9uPjtcbn1cblxuY2xhc3MgSW5qZWN0aW9uU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlPElJbmplY3Rpb24+IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIixcbiAgICAgICAgXCJpbmplY3Rpb25WaXJ1c1NlcnZpY2VcIixcbiAgICAgICAgXCJicmFpbkFyZWFTZXJ2aWNlXCJcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBpbmplY3Rpb25TYW1wbGVNYXA6IElJbmplY3Rpb25TYW1wbGVNYXAgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSwgcHJpdmF0ZSBpbmplY3Rpb25WaXJ1c1NlcnZpY2U6IEluamVjdGlvblZpcnVzU2VydmljZSwgcHJpdmF0ZSBicmFpbkFyZWFTZXJ2aWNlOiBCcmFpbkFyZWFTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpbmplY3Rpb25zXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTmV3SXRlbShvYmo6IElJbmplY3Rpb24pOiBJSW5qZWN0aW9uIHtcbiAgICAgICAgbGV0IGl0ZW06IElJbmplY3Rpb24gPSBzdXBlci5yZWdpc3Rlck5ld0l0ZW0ob2JqKSBhcyBJSW5qZWN0aW9uO1xuXG4gICAgICAgIGxldCBsaXN0OiBBcnJheTxJSW5qZWN0aW9uPiA9IHRoaXMuaW5qZWN0aW9uU2FtcGxlTWFwW2l0ZW0uc2FtcGxlSWRdO1xuXG4gICAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQgfHwgbGlzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pbmplY3Rpb25TYW1wbGVNYXBbaXRlbS5zYW1wbGVJZF0gPSBsaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpbmRleCBvZiBpdGVtIGluIGxpc3QsIGlmIHByZXNlbnQuXG4gICAgICAgIGxldCBtYXRjaGluZzogQXJyYXk8bnVtYmVyPiA9IGxpc3QubWFwKChvYmosIGluZGV4KSA9PiBvYmouaWQgPT09IGl0ZW0uc2FtcGxlSWQgPyBpbmRleCA6IC0xKS5maWx0ZXIoaW5kZXggPT4gaW5kZXggPiAtMSk7XG5cbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAgbWF0Y2hpbmcubGVuZ3RoID4gMCA/IG1hdGNoaW5nWzBdIDogLTE7IC8vIGxpc3QuaW5kZXhPZihpdGVtLnNhbXBsZUlkKTtcblxuICAgICAgICAvLyBBZGQgb3IgdXBkYXRlLlxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5qZWN0aW9uc0ZvclNhbXBsZShzYW1wbGVJZDogc3RyaW5nKTogSUluamVjdGlvbltdIHtcbiAgICAgICAgbGV0IGluamVjdGlvbnMgPSB0aGlzLmluamVjdGlvblNhbXBsZU1hcFtzYW1wbGVJZF07XG5cbiAgICAgICAgaWYgKGluamVjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBpbmplY3Rpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICBpbmplY3Rpb25zID0gW107XG4gICAgICAgICAgICB0aGlzLmluamVjdGlvblNhbXBsZU1hcFtzYW1wbGVJZF0gPSBpbmplY3Rpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluamVjdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbmplY3Rpb25zKCk6IElJbmplY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWUoaXRlbTogSUluamVjdGlvbiwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy5icmFpbkFyZWFTZXJ2aWNlLmdldERpc3BsYXlOYW1lRm9ySWQoaXRlbS5icmFpbkFyZWFJZCkgKyBcIjpcIiArIHRoaXMuaW5qZWN0aW9uVmlydXNTZXJ2aWNlLmdldERpc3BsYXlOYW1lRm9ySWQoaXRlbS5pbmplY3Rpb25WaXJ1c0lkKSArIFwiKVwiO1xuICAgIH1cbn0iXX0=
