var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TracingService = (function (_super) {
    __extends(TracingService, _super);
    function TracingService($resource, $http) {
        _super.call(this, $resource);
        this.$http = $http;
    }
    Object.defineProperty(TracingService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    TracingService.prototype.resourcePath = function () {
        return "tracings";
    };
    TracingService.prototype.createCustomResourceMethods = function () {
        return {
            nodes: {
                method: "GET",
                url: location + "tracings/:id/nodes/",
                params: { id: "@id" },
                isArray: true
            }
        };
    };
    Object.defineProperty(TracingService.prototype, "tracings", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    TracingService.prototype.uploadSwcFile = function (theFile, tracingInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.apiUrl + "upload";
            var fd = new FormData();
            fd.append("contents", theFile);
            _this.$http.post(url, fd, {
                params: tracingInfo,
                transformRequest: angular.identity,
                headers: { "Content-Type": undefined }
            }).then(function (result) {
                _this.dataSource.get({ id: result.data.id }, function (fullItem) {
                    _this._entityStore.addItem(fullItem);
                    resolve(fullItem);
                });
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    TracingService.$inject = [
        "$resource",
        "$http"
    ];
    return TracingService;
}(DataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjaW5nU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBO0lBQTZCLGtDQUFxQjtJQU05Qyx3QkFBWSxTQUF1QyxFQUFVLEtBQXNCO1FBQy9FLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBRHdDLFVBQUssR0FBTCxLQUFLLENBQWlCO0lBRW5GLENBQUM7SUFFRCxzQkFBWSxtQ0FBTzthQUFuQjtZQUNJLE1BQU0sQ0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVTLHFDQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRVMsb0RBQTJCLEdBQXJDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFO2dCQUNILE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxRQUFRLEdBQUcscUJBQXFCO2dCQUNyQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUNuQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQVcsb0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixPQUFZLEVBQUUsV0FBZ0I7UUFBbkQsaUJBc0JDO1FBckJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3BDLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBRWpDLElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFFeEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVcsR0FBRyxFQUFFLEVBQUUsRUFBRTtnQkFDL0IsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsRUFBQyxjQUFjLEVBQUUsU0FBUyxFQUFDO2FBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsVUFBQyxRQUFhO29CQUNwRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdERhLHNCQUFPLEdBQUc7UUFDcEIsV0FBVztRQUNYLE9BQU87S0FDVixDQUFDO0lBb0ROLHFCQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RDRCLFdBQVcsR0F3RHZDIiwiZmlsZSI6InRyYWNpbmdTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElUcmFjaW5nIGV4dGVuZHMgSUFwaUl0ZW0ge1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgYW5ub3RhdG9yOiBzdHJpbmc7XG4gICAgbGVuZ3RoTWljcm9tZXRlcnM6IG51bWJlcjtcbiAgICBuZXVyb25JZDogc3RyaW5nO1xuICAgIHRyYWNpbmdTdHJ1Y3R1cmVJZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRyYWNpbmdSZXNvdXJjZSBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxJVHJhY2luZz4+IHtcbiAgICBub2RlcyhvYmo6IGFueSk6IElUcmFjaW5nO1xufVxuXG5jbGFzcyBUcmFjaW5nU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlPElUcmFjaW5nPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiLFxuICAgICAgICBcIiRodHRwXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlLCBwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzZXJ2aWNlKCk6IElUcmFjaW5nUmVzb3VyY2Uge1xuICAgICAgICByZXR1cm4gPElUcmFjaW5nUmVzb3VyY2U+dGhpcy5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidHJhY2luZ3NcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IGxvY2F0aW9uICsgXCJ0cmFjaW5ncy86aWQvbm9kZXMvXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7aWQ6IFwiQGlkXCJ9LFxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRyYWNpbmdzKCk6IEFycmF5PElUcmFjaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBsb2FkU3djRmlsZSh0aGVGaWxlOiBhbnksIHRyYWNpbmdJbmZvOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5hcGlVcmwgKyBcInVwbG9hZFwiO1xuXG4gICAgICAgICAgICBsZXQgZmQgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgZmQuYXBwZW5kKFwiY29udGVudHNcIiwgdGhlRmlsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdDxJVHJhY2luZz4odXJsLCBmZCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdHJhY2luZ0luZm8sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogYW5ndWxhci5pZGVudGl0eSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogdW5kZWZpbmVkfVxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmdldCh7aWQ6IHJlc3VsdC5kYXRhLmlkfSwgKGZ1bGxJdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW50aXR5U3RvcmUuYWRkSXRlbShmdWxsSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnVsbEl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
