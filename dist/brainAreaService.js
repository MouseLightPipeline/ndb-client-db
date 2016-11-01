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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icmFpbkFyZWFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBY0E7SUFBQTtJQUlBLENBQUM7SUFBRCwwQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQ7SUFBK0Isb0NBQWdDO0lBSzNELDBCQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBWSxxQ0FBTzthQUFuQjtZQUNJLE1BQU0sQ0FBcUIsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVTLHlDQUFjLEdBQXhCLFVBQXlCLEdBQVE7UUFDN0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFUyx1Q0FBWSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVTLHNEQUEyQixHQUFyQztRQUNJLE1BQU0sQ0FBQztZQUNILGFBQWEsRUFBRTtnQkFDWCxNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBeUI7Z0JBQzVDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLDZCQUE2QjtnQkFDaEQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBQztnQkFDL0IsT0FBTyxFQUFFLElBQUk7YUFDaEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLDZDQUFrQixHQUF6QixVQUEwQixLQUFhO1FBQXZDLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDN0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUztnQkFDL0QsSUFBSSxZQUFZLEdBQWlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7Z0JBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOENBQW1CLEdBQTFCLFVBQTJCLFFBQWdCO1FBQTNDLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDN0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBa0I7Z0JBQy9FLElBQUksWUFBWSxHQUFpQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFRO2dCQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVEYSx3QkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBMkROLHVCQUFDO0FBQUQsQ0E5REEsQUE4REMsQ0E5RDhCLG9CQUFvQixHQThEbEQiLCJmaWxlIjoiYnJhaW5BcmVhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJQnJhaW5BcmVhIGV4dGVuZHMgSUFwaU5hbWVkSXRlbSB7XG4gICAgc3RydWN0dXJlSWQ6IG51bWJlcjtcbiAgICBkZXB0aDogbnVtYmVyO1xuICAgIHBhcmVudFN0cnVjdHVyZUlkOiBudW1iZXI7XG4gICAgc3RydWN0dXJlSWRQYXRoOiBzdHJpbmc7XG4gICAgc2FmZU5hbWU6IHN0cmluZztcbiAgICBhY3JvbnltOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQnJhaW5BcmVhUmVzb3VyY2UgZXh0ZW5kcyBuZy5yZXNvdXJjZS5JUmVzb3VyY2VDbGFzczxuZy5yZXNvdXJjZS5JUmVzb3VyY2U8SUJyYWluQXJlYT4+IHtcbiAgICBxdWVyeUZvckRlcHRoKG9iajogYW55KTogYW55O1xuICAgIHF1ZXJ5Rm9yUGFyZW50KG9iajogYW55KTogYW55O1xufVxuXG5jbGFzcyBCcmFpbkFyZWFEZXB0aEVudHJ5IHtcbiAgICBkZXB0aDogbnVtYmVyO1xuICAgIGFyZWFzOiBBcnJheTxJQnJhaW5BcmVhPjtcbiAgICBzZWxlY3RlZEFyZWFJbmRleDogbnVtYmVyO1xufVxuXG5jbGFzcyBCcmFpbkFyZWFTZXJ2aWNlIGV4dGVuZHMgTmFtZWRJdGVtRGF0YVNlcnZpY2U8SUJyYWluQXJlYT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzZXJ2aWNlKCk6IElCcmFpbkFyZWFSZXNvdXJjZSB7XG4gICAgICAgIHJldHVybiA8SUJyYWluQXJlYVJlc291cmNlPnRoaXMuZGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUXVlcmllZEl0ZW0ob2JqOiBhbnkpOiBJQnJhaW5BcmVhIHtcbiAgICAgICAgb2JqLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKDxzdHJpbmc+b2JqLmNyZWF0ZWRBdCk7XG4gICAgICAgIG9iai51cGRhdGVkQXQgPSBuZXcgRGF0ZSg8c3RyaW5nPm9iai51cGRhdGVkQXQpO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJicmFpbmFyZWFzXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbVJlc291cmNlTWV0aG9kcygpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnlGb3JEZXB0aDoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsICsgXCJicmFpbmFyZWFzL2RlcHRoLzpkZXB0aFwiLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge2RlcHRoOiBcIkBkZXB0aFwifSxcbiAgICAgICAgICAgICAgICBpc0FycmF5OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVlcnlGb3JQYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmFwaVVybCArIFwiYnJhaW5hcmVhcy9wYXJlbnQvOnBhcmVudElkXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7cGFyZW50SWQ6IFwiQHBhcmVudElkXCJ9LFxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnJhaW5BcmVhc0ZvckRlcHRoKGRlcHRoOiBudW1iZXIpOiBQcm9taXNlPElCcmFpbkFyZWFbXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SUJyYWluQXJlYVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UucXVlcnlGb3JEZXB0aCh7ZGVwdGg6IGRlcHRofSkuJHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkRGF0YTogSUJyYWluQXJlYVtdID0gdGhpcy5yZWdpc3Rlck5ld0l0ZW1zKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWREYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBicmFpbkFyZWFzRm9yUGFyZW50KHBhcmVudElkOiBudW1iZXIpOiBQcm9taXNlPElCcmFpbkFyZWFbXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SUJyYWluQXJlYVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UucXVlcnlGb3JQYXJlbnQoe3BhcmVudElkOiBwYXJlbnRJZH0pLiRwcm9taXNlLnRoZW4oKGRhdGE6IElCcmFpbkFyZWFbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZERhdGE6IElCcmFpbkFyZWFbXSA9IHRoaXMucmVnaXN0ZXJOZXdJdGVtcyhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkRGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
