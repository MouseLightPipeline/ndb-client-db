var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FluorophoreService = (function (_super) {
    __extends(FluorophoreService, _super);
    function FluorophoreService($resource) {
        _super.call(this, $resource);
    }
    FluorophoreService.prototype.resourcePath = function () {
        return "fluorophores";
    };
    Object.defineProperty(FluorophoreService.prototype, "fluorophores", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    FluorophoreService.$inject = [
        "$resource"
    ];
    return FluorophoreService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mbHVvcm9waG9yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQUFpQyxzQ0FBa0M7SUFNL0QsNEJBQVksU0FBdUM7UUFDL0Msa0JBQU0sU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVTLHlDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQVcsNENBQVk7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFkYSwwQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBYU4seUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCZ0Msb0JBQW9CLEdBaUJwRCIsImZpbGUiOiJmbHVvcm9waG9yZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUZsdW9yb3Bob3JlIGV4dGVuZHMgSUFwaU5hbWVkSXRlbSB7XG59XG5cbmNsYXNzIEZsdW9yb3Bob3JlU2VydmljZSBleHRlbmRzIE5hbWVkSXRlbURhdGFTZXJ2aWNlPElGbHVvcm9waG9yZT4ge1xuXG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZmx1b3JvcGhvcmVzXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmbHVvcm9waG9yZXMoKTogQXJyYXk8SUZsdW9yb3Bob3JlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG59XG4iXX0=
