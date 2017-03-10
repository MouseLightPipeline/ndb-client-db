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
    Object.defineProperty(BrainAreaService.prototype, "brainAreas", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
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
                var resolvedData = _this.registerNewItems(data);
                resolve(resolvedData);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    BrainAreaService.prototype.brainAreasForParent = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.queryForParent({ parentId: parentId }).$promise.then(function (data) {
                var resolvedData = _this.registerNewItems(data);
                resolve(resolvedData);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icmFpbkFyZWFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBY0E7SUFBQTtJQUlBLENBQUM7SUFBRCwwQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQ7SUFBK0Isb0NBQWdDO0lBSzNELDBCQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBVyx3Q0FBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLHFDQUFPO2FBQW5CO1lBQ0ksTUFBTSxDQUFxQixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRVMseUNBQWMsR0FBeEIsVUFBeUIsR0FBUTtRQUM3QixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVTLHVDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRVMsc0RBQTJCLEdBQXJDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsYUFBYSxFQUFFO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUF5QjtnQkFDNUMsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztnQkFDekIsT0FBTyxFQUFFLElBQUk7YUFDaEI7WUFDRCxjQUFjLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQTZCO2dCQUNoRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDO2dCQUMvQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRU0sNkNBQWtCLEdBQXpCLFVBQTBCLEtBQWE7UUFBdkMsaUJBU0M7UUFSRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUMvRCxJQUFJLFlBQVksR0FBaUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUTtnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4Q0FBbUIsR0FBMUIsVUFBMkIsUUFBZ0I7UUFBM0MsaUJBU0M7UUFSRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFrQjtnQkFDL0UsSUFBSSxZQUFZLEdBQWlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7Z0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEVhLHdCQUFPLEdBQUc7UUFDcEIsV0FBVztLQUNkLENBQUM7SUErRE4sdUJBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFOEIsb0JBQW9CLEdBa0VsRCIsImZpbGUiOiJicmFpbkFyZWFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElCcmFpbkFyZWEgZXh0ZW5kcyBJQXBpTmFtZWRJdGVtIHtcbiAgICBzdHJ1Y3R1cmVJZDogbnVtYmVyO1xuICAgIGRlcHRoOiBudW1iZXI7XG4gICAgcGFyZW50U3RydWN0dXJlSWQ6IG51bWJlcjtcbiAgICBzdHJ1Y3R1cmVJZFBhdGg6IHN0cmluZztcbiAgICBzYWZlTmFtZTogc3RyaW5nO1xuICAgIGFjcm9ueW06IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElCcmFpbkFyZWFSZXNvdXJjZSBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxJQnJhaW5BcmVhPj4ge1xuICAgIHF1ZXJ5Rm9yRGVwdGgob2JqOiBhbnkpOiBhbnk7XG4gICAgcXVlcnlGb3JQYXJlbnQob2JqOiBhbnkpOiBhbnk7XG59XG5cbmNsYXNzIEJyYWluQXJlYURlcHRoRW50cnkge1xuICAgIGRlcHRoOiBudW1iZXI7XG4gICAgYXJlYXM6IEFycmF5PElCcmFpbkFyZWE+O1xuICAgIHNlbGVjdGVkQXJlYUluZGV4OiBudW1iZXI7XG59XG5cbmNsYXNzIEJyYWluQXJlYVNlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJQnJhaW5BcmVhPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYnJhaW5BcmVhcygpOiBJQnJhaW5BcmVhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuaXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc2VydmljZSgpOiBJQnJhaW5BcmVhUmVzb3VyY2Uge1xuICAgICAgICByZXR1cm4gPElCcmFpbkFyZWFSZXNvdXJjZT50aGlzLmRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFF1ZXJpZWRJdGVtKG9iajogYW55KTogSUJyYWluQXJlYSB7XG4gICAgICAgIG9iai5jcmVhdGVkQXQgPSBuZXcgRGF0ZSg8c3RyaW5nPm9iai5jcmVhdGVkQXQpO1xuICAgICAgICBvYmoudXBkYXRlZEF0ID0gbmV3IERhdGUoPHN0cmluZz5vYmoudXBkYXRlZEF0KTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiYnJhaW5hcmVhc1wiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDdXN0b21SZXNvdXJjZU1ldGhvZHMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5Rm9yRGVwdGg6IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmFwaVVybCArIFwiYnJhaW5hcmVhcy9kZXB0aC86ZGVwdGhcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtkZXB0aDogXCJAZGVwdGhcIn0sXG4gICAgICAgICAgICAgICAgaXNBcnJheTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5Rm9yUGFyZW50OiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5hcGlVcmwgKyBcImJyYWluYXJlYXMvcGFyZW50LzpwYXJlbnRJZFwiLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3BhcmVudElkOiBcIkBwYXJlbnRJZFwifSxcbiAgICAgICAgICAgICAgICBpc0FycmF5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGJyYWluQXJlYXNGb3JEZXB0aChkZXB0aDogbnVtYmVyKTogUHJvbWlzZTxJQnJhaW5BcmVhW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElCcmFpbkFyZWFbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnF1ZXJ5Rm9yRGVwdGgoe2RlcHRoOiBkZXB0aH0pLiRwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZERhdGE6IElCcmFpbkFyZWFbXSA9IHRoaXMucmVnaXN0ZXJOZXdJdGVtcyhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkRGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJhaW5BcmVhc0ZvclBhcmVudChwYXJlbnRJZDogbnVtYmVyKTogUHJvbWlzZTxJQnJhaW5BcmVhW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElCcmFpbkFyZWFbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnF1ZXJ5Rm9yUGFyZW50KHtwYXJlbnRJZDogcGFyZW50SWR9KS4kcHJvbWlzZS50aGVuKChkYXRhOiBJQnJhaW5BcmVhW10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWREYXRhOiBJQnJhaW5BcmVhW10gPSB0aGlzLnJlZ2lzdGVyTmV3SXRlbXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZERhdGEpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
