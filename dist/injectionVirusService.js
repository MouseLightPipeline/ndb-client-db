var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InjectionVirusService = (function (_super) {
    __extends(InjectionVirusService, _super);
    function InjectionVirusService($resource) {
        _super.call(this, $resource);
    }
    InjectionVirusService.prototype.resourcePath = function () {
        return "viruses";
    };
    Object.defineProperty(InjectionVirusService.prototype, "injectionViruses", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    InjectionVirusService.$inject = [
        "$resource"
    ];
    return InjectionVirusService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmplY3Rpb25WaXJ1c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQUFvQyx5Q0FBcUM7SUFLckUsK0JBQVksU0FBdUM7UUFDL0Msa0JBQU0sU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLDRDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQVcsbURBQWdCO2FBQTNCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBZGEsNkJBQU8sR0FBRztRQUNwQixXQUFXO0tBQ2QsQ0FBQztJQWFOLDRCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQm1DLG9CQUFvQixHQWdCdkQiLCJmaWxlIjoiaW5qZWN0aW9uVmlydXNTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElJbmplY3Rpb25WaXJ1cyBleHRlbmRzIElBcGlOYW1lZEl0ZW0ge1xufVxuXG5jbGFzcyBJbmplY3Rpb25WaXJ1c1NlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJSW5qZWN0aW9uVmlydXM+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ2aXJ1c2VzXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbmplY3Rpb25WaXJ1c2VzKCk6IEFycmF5PElJbmplY3Rpb25WaXJ1cz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuaXRlbXM7XG4gICAgfVxufVxuIl19
