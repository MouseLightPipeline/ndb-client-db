var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrainAreaDepthEntry = (function () {
    function BrainAreaDepthEntry() {
    }
    return BrainAreaDepthEntry;
}());
var BrainAreaService = (function (_super) {
    __extends(BrainAreaService, _super);
    function BrainAreaService($resource) {
        _super.call(this, $resource);
    }
    Object.defineProperty(BrainAreaService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    BrainAreaService.prototype.mapQueriedItem = function (obj) {
        obj.createdAt = new Date(obj.createdAt);
        obj.updatedAt = new Date(obj.updatedAt);
        return obj;
    };
    BrainAreaService.prototype.resourcePath = function () {
        return "brainareas";
    };
    BrainAreaService.prototype.createCustomResourceMethods = function () {
        return {
            queryForDepth: {
                method: "GET",
                url: this.apiUrl + "brainareas/depth/:depth",
                params: { depth: "@depth" },
                isArray: true
            },
            queryForParent: {
                method: "GET",
                url: this.apiUrl + "brainareas/parent/:parentId",
                params: { parentId: "@parentId" },
                isArray: true
            }
        };
    };
    BrainAreaService.prototype.brainAreasForDepth = function (depth) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.queryForDepth({ depth: depth }).$promise.then(function (data) {
                data = _this.registerNewItems(data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    BrainAreaService.prototype.brainAreasForParent = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.queryForParent({ parentId: parentId }).$promise.then(function (data) {
                data = _this.registerNewItems(data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    BrainAreaService.$inject = [
        "$resource"
    ];
    return BrainAreaService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icmFpbkFyZWFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBY0E7SUFBQTtJQUlBLENBQUM7SUFBRCwwQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQ7SUFBK0Isb0NBQWdDO0lBSzNELDBCQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBWSxxQ0FBTzthQUFuQjtZQUNJLE1BQU0sQ0FBcUIsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVTLHlDQUFjLEdBQXhCLFVBQXlCLEdBQVE7UUFDN0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFUyx1Q0FBWSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVTLHNEQUEyQixHQUFyQztRQUNJLE1BQU0sQ0FBQztZQUNILGFBQWEsRUFBRTtnQkFDWCxNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBeUI7Z0JBQzVDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUE2QjtnQkFDaEQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBQztnQkFDL0IsT0FBTyxFQUFFLElBQUk7YUFDaEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLDZDQUFrQixHQUF6QixVQUEwQixLQUFhO1FBQXZDLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUztnQkFDL0QsSUFBSSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7Z0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOENBQW1CLEdBQTFCLFVBQTJCLFFBQWdCO1FBQTNDLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUztnQkFDdEUsSUFBSSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7Z0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNURhLHdCQUFPLEdBQUc7UUFDcEIsV0FBVztLQUNkLENBQUM7SUEyRE4sdUJBQUM7QUFBRCxDQTlEQSxBQThEQyxDQTlEOEIsb0JBQW9CLEdBOERsRCIsImZpbGUiOiJicmFpbkFyZWFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElCcmFpbkFyZWEgZXh0ZW5kcyBJQXBpTmFtZWRJdGVtIHtcbiAgICBzdHJ1Y3R1cmVJZDogbnVtYmVyO1xuICAgIGRlcHRoOiBudW1iZXI7XG4gICAgcGFyZW50U3RydWN0dXJlSWQ6IG51bWJlcjtcbiAgICBzdHJ1Y3R1cmVJZFBhdGg6IHN0cmluZztcbiAgICBzYWZlTmFtZTogc3RyaW5nO1xuICAgIGFjcm9ueW06IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElCcmFpbkFyZWFSZXNvdXJjZSBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxJQnJhaW5BcmVhPj4ge1xuICAgIHF1ZXJ5Rm9yRGVwdGgob2JqOiBhbnkpOiBhbnk7XG4gICAgcXVlcnlGb3JQYXJlbnQob2JqOiBhbnkpOiBhbnk7XG59XG5cbmNsYXNzIEJyYWluQXJlYURlcHRoRW50cnkge1xuICAgIGRlcHRoOiBudW1iZXI7XG4gICAgYXJlYXM6IEFycmF5PElCcmFpbkFyZWE+O1xuICAgIHNlbGVjdGVkQXJlYUluZGV4OiBudW1iZXI7XG59XG5cbmNsYXNzIEJyYWluQXJlYVNlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJQnJhaW5BcmVhPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHNlcnZpY2UoKTogSUJyYWluQXJlYVJlc291cmNlIHtcbiAgICAgICAgcmV0dXJuIDxJQnJhaW5BcmVhUmVzb3VyY2U+dGhpcy5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBRdWVyaWVkSXRlbShvYmo6IGFueSk6IElCcmFpbkFyZWEge1xuICAgICAgICBvYmouY3JlYXRlZEF0ID0gbmV3IERhdGUoPHN0cmluZz5vYmouY3JlYXRlZEF0KTtcbiAgICAgICAgb2JqLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKDxzdHJpbmc+b2JqLnVwZGF0ZWRBdCk7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImJyYWluYXJlYXNcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeUZvckRlcHRoOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5hcGlVcmwgKyBcImJyYWluYXJlYXMvZGVwdGgvOmRlcHRoXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7ZGVwdGg6IFwiQGRlcHRoXCJ9LFxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWVyeUZvclBhcmVudDoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsICsgXCJicmFpbmFyZWFzL3BhcmVudC86cGFyZW50SWRcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtwYXJlbnRJZDogXCJAcGFyZW50SWRcIn0sXG4gICAgICAgICAgICAgICAgaXNBcnJheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBicmFpbkFyZWFzRm9yRGVwdGgoZGVwdGg6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5xdWVyeUZvckRlcHRoKHtkZXB0aDogZGVwdGh9KS4kcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5yZWdpc3Rlck5ld0l0ZW1zKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJhaW5BcmVhc0ZvclBhcmVudChwYXJlbnRJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnF1ZXJ5Rm9yUGFyZW50KHtwYXJlbnRJZDogcGFyZW50SWR9KS4kcHJvbWlzZS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5yZWdpc3Rlck5ld0l0ZW1zKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
