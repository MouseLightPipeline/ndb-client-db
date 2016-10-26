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
    MouseStrainService.prototype.resourcePath = function () {
        return "mousestrains";
    };
    Object.defineProperty(MouseStrainService.prototype, "mouseStrains", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    MouseStrainService.$inject = [
        "$resource"
    ];
    return MouseStrainService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb3VzZVN0cmFpblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQUFpQyxzQ0FBa0M7SUFLL0QsNEJBQVksU0FBdUM7UUFDL0Msa0JBQU0sU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHlDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQVcsNENBQVk7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFkYSwwQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBYU4seUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCZ0Msb0JBQW9CLEdBZ0JwRCIsImZpbGUiOiJtb3VzZVN0cmFpblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSU1vdXNlU3RyYWluIGV4dGVuZHMgSUFwaU5hbWVkSXRlbSB7XG59XG5cbmNsYXNzIE1vdXNlU3RyYWluU2VydmljZSBleHRlbmRzIE5hbWVkSXRlbURhdGFTZXJ2aWNlPElNb3VzZVN0cmFpbj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm1vdXNlc3RyYWluc1wiO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbW91c2VTdHJhaW5zKCk6IEFycmF5PElNb3VzZVN0cmFpbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuaXRlbXM7XG4gICAgfVxufVxuIl19
