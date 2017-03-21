var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TracingNodeService = (function (_super) {
    __extends(TracingNodeService, _super);
    function TracingNodeService($resource) {
        _super.call(this, $resource);
    }
    Object.defineProperty(TracingNodeService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    TracingNodeService.prototype.resourcePath = function () {
        return "nodes";
    };
    TracingNodeService.prototype.createCustomResourceMethods = function () {
        return {
            nodesForStructure: {
                method: "GET",
                url: this.apiUrl + "nodes/findByStructure/:id/",
                params: { id: "@id" },
                isArray: true
            }
        };
    };
    Object.defineProperty(TracingNodeService.prototype, "nodes", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    TracingNodeService.prototype.nodesForStructure = function (structureId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.nodesForStructure({ id: structureId }).$promise.then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    TracingNodeService.$inject = [
        "$resource"
    ];
    return TracingNodeService;
}(DataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjaW5nTm9kZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQTtJQUFpQyxzQ0FBeUI7SUFLdEQsNEJBQVksU0FBdUM7UUFDL0Msa0JBQU0sU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFZLHVDQUFPO2FBQW5CO1lBQ0ksTUFBTSxDQUF1QixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBRVMseUNBQVksR0FBdEI7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFUyx3REFBMkIsR0FBckM7UUFDSSxNQUFNLENBQUM7WUFDSCxpQkFBaUIsRUFBRTtnQkFDZixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBNEI7Z0JBQy9DLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUM7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBVyxxQ0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVNLDhDQUFpQixHQUF4QixVQUF5QixXQUFtQjtRQUE1QyxpQkFRQztRQVBHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBc0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZDYSwwQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBc0NOLHlCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6Q2dDLFdBQVcsR0F5QzNDIiwiZmlsZSI6InRyYWNpbmdOb2RlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJVHJhY2luZ05vZGUgZXh0ZW5kcyBJQXBpSXRlbSB7XG59XG5cbmludGVyZmFjZSBJVHJhY2luZ05vZGVSZXNvdXJjZSBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxJVHJhY2luZ05vZGU+PiB7XG4gICAgbm9kZXNGb3JTdHJ1Y3R1cmUob2JqOiBhbnkpOiBBcnJheTxJVHJhY2luZ05vZGU+O1xufVxuXG5jbGFzcyBUcmFjaW5nTm9kZVNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZTxJVHJhY2luZ05vZGU+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc2VydmljZSgpOiBJVHJhY2luZ05vZGVSZXNvdXJjZSB7XG4gICAgICAgIHJldHVybiA8SVRyYWNpbmdOb2RlUmVzb3VyY2U+dGhpcy5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibm9kZXNcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub2Rlc0ZvclN0cnVjdHVyZToge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsICsgXCJub2Rlcy9maW5kQnlTdHJ1Y3R1cmUvOmlkL1wiLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge2lkOiBcIkBpZFwifSxcbiAgICAgICAgICAgICAgICBpc0FycmF5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBub2RlcygpOiBBcnJheTxJVHJhY2luZ05vZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBub2Rlc0ZvclN0cnVjdHVyZShzdHJ1Y3R1cmVJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJVHJhY2luZ05vZGU+PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxJVHJhY2luZ05vZGU+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uubm9kZXNGb3JTdHJ1Y3R1cmUoe2lkOiBzdHJ1Y3R1cmVJZH0pLiRwcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
