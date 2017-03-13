var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TracingStructureService = (function (_super) {
    __extends(TracingStructureService, _super);
    function TracingStructureService($resource) {
        _super.call(this, $resource);
    }
    TracingStructureService.prototype.resourcePath = function () {
        return "tracingStructures";
    };
    Object.defineProperty(TracingStructureService.prototype, "structures", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    TracingStructureService.$inject = [
        "$resource"
    ];
    return TracingStructureService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjaW5nU3RydWN0dXJlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0lBQXNDLDJDQUF1QztJQU16RSxpQ0FBWSxTQUF1QztRQUMvQyxrQkFBTSxTQUFTLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRVMsOENBQVksR0FBdEI7UUFDSSxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFXLCtDQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBZGEsK0JBQU8sR0FBRztRQUNwQixXQUFXO0tBQ2QsQ0FBQztJQWFOLDhCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQnFDLG9CQUFvQixHQWlCekQiLCJmaWxlIjoidHJhY2luZ1N0cnVjdHVyZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSVRyYWNpbmdTdHJ1Y3R1cmUgZXh0ZW5kcyAgSUFwaU5hbWVkSXRlbSB7XG4gICAgdmFsdWU6IG51bWJlcjtcbn1cblxuY2xhc3MgVHJhY2luZ1N0cnVjdHVyZVNlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJVHJhY2luZ1N0cnVjdHVyZT4ge1xuXG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidHJhY2luZ1N0cnVjdHVyZXNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHN0cnVjdHVyZXMoKTogQXJyYXk8SVRyYWNpbmdTdHJ1Y3R1cmU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cbn1cbiJdfQ==
