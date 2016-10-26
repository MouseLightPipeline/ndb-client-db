var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegistrationTransformService = (function (_super) {
    __extends(RegistrationTransformService, _super);
    function RegistrationTransformService($resource) {
        _super.call(this, $resource);
    }
    RegistrationTransformService.prototype.resourcePath = function () {
        return "registrationtransforms";
    };
    Object.defineProperty(RegistrationTransformService.prototype, "transforms", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationTransformService.$inject = [
        "$resource"
    ];
    return RegistrationTransformService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7SUFBMkMsZ0RBQTRDO0lBS25GLHNDQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFUyxtREFBWSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQVcsb0RBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFkYSxvQ0FBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBYU4sbUNBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCMEMsb0JBQW9CLEdBZ0I5RCIsImZpbGUiOiJyZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElSZWdpc3RyYXRpb25UcmFuc2Zvcm0gZXh0ZW5kcyBJQXBpTmFtZWRJdGVtIHtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIG5vdGVzOiBzdHJpbmc7XG59XG5cbmNsYXNzIFJlZ2lzdHJhdGlvblRyYW5zZm9ybVNlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJUmVnaXN0cmF0aW9uVHJhbnNmb3JtPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmVnaXN0cmF0aW9udHJhbnNmb3Jtc1wiO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHJhbnNmb3JtcygpOiBBcnJheTxJUmVnaXN0cmF0aW9uVHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG59XG4iXX0=
