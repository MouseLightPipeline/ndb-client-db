var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StructureIdentifierService = (function (_super) {
    __extends(StructureIdentifierService, _super);
    function StructureIdentifierService($resource) {
        _super.call(this, $resource);
    }
    StructureIdentifierService.prototype.resourcePath = function () {
        return "structures";
    };
    Object.defineProperty(StructureIdentifierService.prototype, "structures", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    StructureIdentifierService.$inject = [
        "$resource"
    ];
    return StructureIdentifierService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHJ1Y3R1cmVJZGVudGlmaWVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0lBQXlDLDhDQUEwQztJQU0vRSxvQ0FBWSxTQUF1QztRQUMvQyxrQkFBTSxTQUFTLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRVMsaURBQVksR0FBdEI7UUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBVyxrREFBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQWRhLGtDQUFPLEdBQUc7UUFDcEIsV0FBVztLQUNkLENBQUM7SUFhTixpQ0FBQztBQUFELENBakJBLEFBaUJDLENBakJ3QyxvQkFBb0IsR0FpQjVEIiwiZmlsZSI6InN0cnVjdHVyZUlkZW50aWZpZXJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElTdHJ1Y3R1cmVJZGVudGlmaWVyIGV4dGVuZHMgIElBcGlOYW1lZEl0ZW0ge1xuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmNsYXNzIFN0cnVjdHVyZUlkZW50aWZpZXJTZXJ2aWNlIGV4dGVuZHMgTmFtZWRJdGVtRGF0YVNlcnZpY2U8SVN0cnVjdHVyZUlkZW50aWZpZXI+IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInN0cnVjdHVyZXNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHN0cnVjdHVyZXMoKTogQXJyYXk8SVN0cnVjdHVyZUlkZW50aWZpZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cbn1cbiJdfQ==
