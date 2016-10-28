var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DataService = (function () {
    function DataService($resource) {
        this.$resource = $resource;
        this._entityStore = new EntityStore();
        this.resourcesAreAvailable = false;
        this.apiLocation = "";
    }
    DataService.prototype.setLocation = function (resourceLocation) {
        this.resourcesAreAvailable = false;
        this.apiLocation = resourceLocation;
        this.createResource(this.apiLocation);
        return this.refreshData();
    };
    DataService.prototype.refreshData = function () {
        var _this = this;
        this.resourcesAreAvailable = false;
        this._entityStore.clear();
        return new Promise(function (resolve) {
            _this.dataSource.query(function (data) {
                _this.registerNewItems(data);
                _this.resourcesAreAvailable = true;
                resolve();
            });
        });
    };
    DataService.prototype.update = function (data) {
        var resourceClass;
        resourceClass = this.dataSource;
        resourceClass.update({}, data);
    };
    DataService.prototype.createItem = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataSource.save(data).$promise.then(function (obj) {
                _this.dataSource.get({ id: obj.id }, function (item) {
                    item = _this.registerNewItem(item);
                    resolve(item);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.find = function (id) {
        return this._entityStore.findItem(id);
    };
    DataService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if ("name" in item) {
            if (item["name"].length > 0) {
                return item["name"];
            }
        }
        return defaultValue;
    };
    DataService.prototype.getDisplayNameForId = function (id, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        var item = this.find(id);
        return item == null ? defaultValue : this.getDisplayName(item);
    };
    DataService.prototype.createCustomResourceMethods = function () {
        return {};
    };
    Object.defineProperty(DataService.prototype, "apiUrl", {
        get: function () {
            return this.apiLocation;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.mapQueriedItem = function (obj) {
        obj.createdAt = new Date(obj.createdAt);
        obj.updatedAt = new Date(obj.updatedAt);
        return obj;
    };
    DataService.prototype.registerNewItem = function (obj) {
        var item = this.mapQueriedItem(obj);
        this._entityStore.addItem(item);
        return item;
    };
    DataService.prototype.registerNewItems = function (items) {
        var _this = this;
        items = items.map(function (obj) {
            return _this.registerNewItem(obj);
        });
        return items;
    };
    DataService.prototype.where = function (fcn) {
        var items = this.whereAll(fcn);
        return items.length > 0 ? items[0] : null;
    };
    DataService.prototype.whereAll = function (fcn) {
        return this._entityStore.where(fcn);
    };
    DataService.prototype.createResource = function (location) {
        var obj = this.createCustomResourceMethods();
        this.dataSource = this.$resource(location + this.resourcePath() + "/:id", { id: "@id" }, obj);
    };
    DataService.$inject = [
        "$resource"
    ];
    return DataService;
}());
var NumberedItemDataService = (function (_super) {
    __extends(NumberedItemDataService, _super);
    function NumberedItemDataService() {
        _super.apply(this, arguments);
    }
    NumberedItemDataService.prototype.findWithIdNumber = function (id) {
        var item = this.where(function (obj) {
            return obj.idNumber === id;
        });
        return item;
    };
    return NumberedItemDataService;
}(DataService));
var NamedItemDataService = (function (_super) {
    __extends(NamedItemDataService, _super);
    function NamedItemDataService() {
        _super.apply(this, arguments);
    }
    NamedItemDataService.prototype.findWithName = function (name) {
        var item = this.where(function (obj) {
            return obj.name.toLowerCase() === name.toLowerCase();
        });
        return item;
    };
    return NamedItemDataService;
}(DataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWtCQTtJQWFJLHFCQUFzQixTQUF1QztRQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQVJuRCxpQkFBWSxHQUFvQixJQUFJLFdBQVcsRUFBSyxDQUFDO1FBRXhELDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUV0QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUtqQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsZ0JBQXdCO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUVuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU87WUFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBQyxJQUFTO2dCQUU1QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBRWxDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsSUFBTztRQUNqQixJQUFJLGFBQWtDLENBQUM7UUFFdkMsYUFBYSxHQUF3QixJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXJELGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixJQUFTO1FBQTNCLGlCQVdDO1FBVkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQU07Z0JBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxVQUFDLElBQVM7b0JBQ3hDLElBQUksR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQkFBSSxHQUFYLFVBQVksRUFBVTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLG9DQUFjLEdBQXJCLFVBQXNCLElBQU8sRUFBRSxZQUF5QjtRQUF6Qiw0QkFBeUIsR0FBekIsaUJBQXlCO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFPLElBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFPLElBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVNLHlDQUFtQixHQUExQixVQUEyQixFQUFVLEVBQUUsWUFBeUI7UUFBekIsNEJBQXlCLEdBQXpCLGlCQUF5QjtRQUM1RCxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFNUyxpREFBMkIsR0FBckM7UUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFjLCtCQUFNO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFUyxvQ0FBYyxHQUF4QixVQUF5QixHQUFRO1FBQzdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRVMscUNBQWUsR0FBekIsVUFBMEIsR0FBUTtRQUM5QixJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLHNDQUFnQixHQUExQixVQUEyQixLQUFVO1FBQXJDLGlCQU1DO1FBTEcsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQzVCLE1BQU0sQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRVMsMkJBQUssR0FBZixVQUFnQixHQUFxQjtRQUNqQyxJQUFJLEtBQUssR0FBYSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFUyw4QkFBUSxHQUFsQixVQUFtQixHQUFxQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlPLG9DQUFjLEdBQXRCLFVBQXVCLFFBQWdCO1FBQ25DLElBQUksR0FBRyxHQUFRLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBSWxELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBeElhLG1CQUFPLEdBQUc7UUFDcEIsV0FBVztLQUNkLENBQUM7SUF1SU4sa0JBQUM7QUFBRCxDQTFJQSxBQTBJQyxJQUFBO0FBRUQ7SUFBMkUsMkNBQWM7SUFBekY7UUFBMkUsOEJBQWM7SUFTekYsQ0FBQztJQVBVLGtEQUFnQixHQUF2QixVQUF3QixFQUFVO1FBQzlCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFxQjtZQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUksSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTCw4QkFBQztBQUFELENBVEEsQUFTQyxDQVQwRSxXQUFXLEdBU3JGO0FBRUQ7SUFBcUUsd0NBQWM7SUFBbkY7UUFBcUUsOEJBQWM7SUFTbkYsQ0FBQztJQVBVLDJDQUFZLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQWtCO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBSSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVG9FLFdBQVcsR0FTL0UiLCJmaWxlIjoiZGF0YVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUFwaUl0ZW0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuaW50ZXJmYWNlIElBcGlJZE51bWJlckl0ZW0gZXh0ZW5kcyBJQXBpSXRlbSB7XG4gICAgaWROdW1iZXI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElBcGlOYW1lZEl0ZW0gZXh0ZW5kcyBJQXBpSXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSU15UmVzb3VyY2VDbGFzczxUIGV4dGVuZHMgSUFwaUl0ZW0+IGV4dGVuZHMgbmcucmVzb3VyY2UuSVJlc291cmNlQ2xhc3M8bmcucmVzb3VyY2UuSVJlc291cmNlPFQ+PiB7XG4gICAgdXBkYXRlKG9iajogYW55LCBkYXRhOiBUKTogdm9pZDtcbn1cblxuYWJzdHJhY3QgY2xhc3MgRGF0YVNlcnZpY2U8VCBleHRlbmRzIElBcGlJdGVtPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIHByb3RlY3RlZCBfZW50aXR5U3RvcmU6IElFbnRpdHlTdG9yZTxUPiA9IG5ldyBFbnRpdHlTdG9yZTxUPigpO1xuXG4gICAgcHVibGljIHJlc291cmNlc0FyZUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBhcGlMb2NhdGlvbjogc3RyaW5nID0gXCJcIjtcblxuICAgIHByb3RlY3RlZCBkYXRhU291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VDbGFzczxuZy5yZXNvdXJjZS5JUmVzb3VyY2U8VD4+O1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkICRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2NhdGlvbihyZXNvdXJjZUxvY2F0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNBcmVBdmFpbGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFwaUxvY2F0aW9uID0gcmVzb3VyY2VMb2NhdGlvbjtcblxuICAgICAgICB0aGlzLmNyZWF0ZVJlc291cmNlKHRoaXMuYXBpTG9jYXRpb24pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnJlc291cmNlc0FyZUF2YWlsYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2VudGl0eVN0b3JlLmNsZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucXVlcnkoKGRhdGE6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld0l0ZW1zKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNBcmVBdmFpbGFibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogVCkge1xuICAgICAgICBsZXQgcmVzb3VyY2VDbGFzczogSU15UmVzb3VyY2VDbGFzczxUPjtcblxuICAgICAgICByZXNvdXJjZUNsYXNzID0gPElNeVJlc291cmNlQ2xhc3M8VD4+dGhpcy5kYXRhU291cmNlO1xuXG4gICAgICAgIHJlc291cmNlQ2xhc3MudXBkYXRlKHt9LCBkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlSXRlbShkYXRhOiBhbnkpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zYXZlKGRhdGEpLiRwcm9taXNlLnRoZW4oKG9iajogVCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5nZXQoe2lkOiBvYmouaWR9LCAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnJlZ2lzdGVyTmV3SXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZChpZDogc3RyaW5nKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5maW5kSXRlbShpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3BsYXlOYW1lKGl0ZW06IFQsIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIik6IHN0cmluZyB7XG4gICAgICAgIGlmIChcIm5hbWVcIiBpbiBpdGVtKSB7XG4gICAgICAgICAgICBpZiAoKDxhbnk+aXRlbSlbXCJuYW1lXCJdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+aXRlbSlbXCJuYW1lXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWVGb3JJZChpZDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaXRlbTogVCA9IHRoaXMuZmluZChpZCk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW0gPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHRoaXMuZ2V0RGlzcGxheU5hbWUoaXRlbSk7XG4gICAgfVxuXG4gICAgLy8gQ29uY3JldGUgY2xhc3MgZW50cnkgcG9pbnRzXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVzb3VyY2VQYXRoKCk6IHN0cmluZzsgLy8gUmVxdWlyZWRcblxuICAgIHByb3RlY3RlZCBjcmVhdGVDdXN0b21SZXNvdXJjZU1ldGhvZHMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYXBpVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlMb2NhdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUXVlcmllZEl0ZW0ob2JqOiBhbnkpOiBUIHtcbiAgICAgICAgb2JqLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKDxzdHJpbmc+b2JqLmNyZWF0ZWRBdCk7XG4gICAgICAgIG9iai51cGRhdGVkQXQgPSBuZXcgRGF0ZSg8c3RyaW5nPm9iai51cGRhdGVkQXQpO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTmV3SXRlbShvYmo6IGFueSk6IFQge1xuICAgICAgICBsZXQgaXRlbTogVCA9IHRoaXMubWFwUXVlcmllZEl0ZW0ob2JqKTtcblxuICAgICAgICB0aGlzLl9lbnRpdHlTdG9yZS5hZGRJdGVtKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3Rlck5ld0l0ZW1zKGl0ZW1zOiBhbnkpIHtcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5tYXAoKG9iajogSUFwaUl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyTmV3SXRlbShvYmopO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHdoZXJlKGZjbjogV2hlcmVGdW5jdGlvbjxUPik6IFQge1xuICAgICAgICBsZXQgaXRlbXM6IEFycmF5PFQ+ID0gdGhpcy53aGVyZUFsbChmY24pO1xuXG4gICAgICAgIHJldHVybiBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3aGVyZUFsbChmY246IFdoZXJlRnVuY3Rpb248VD4pOiBBcnJheTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS53aGVyZShmY24pO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsXG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlc291cmNlKGxvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG9iajogYW55ID0gdGhpcy5jcmVhdGVDdXN0b21SZXNvdXJjZU1ldGhvZHMoKTtcblxuICAgICAgICAvL29iai51cGRhdGUgPSB7bWV0aG9kOiBcIlBVVFwiLCB1cmw6IGxvY2F0aW9uICsgXCJicmFpbmFyZWFzXCJ9O1xuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuJHJlc291cmNlKGxvY2F0aW9uICsgdGhpcy5yZXNvdXJjZVBhdGgoKSArIFwiLzppZFwiLCB7aWQ6IFwiQGlkXCJ9LCBvYmopO1xuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgTnVtYmVyZWRJdGVtRGF0YVNlcnZpY2U8VCBleHRlbmRzIElBcGlJZE51bWJlckl0ZW0+IGV4dGVuZHMgRGF0YVNlcnZpY2U8VD4ge1xuXG4gICAgcHVibGljIGZpbmRXaXRoSWROdW1iZXIoaWQ6IG51bWJlcik6IFQge1xuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy53aGVyZSgob2JqOiBJQXBpSWROdW1iZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkTnVtYmVyID09PSBpZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxUPml0ZW07XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxUIGV4dGVuZHMgSUFwaU5hbWVkSXRlbT4gZXh0ZW5kcyBEYXRhU2VydmljZTxUPiB7XG5cbiAgICBwdWJsaWMgZmluZFdpdGhOYW1lKG5hbWU6IHN0cmluZyk6IFQge1xuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy53aGVyZSgob2JqOiBJQXBpTmFtZWRJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPFQ+aXRlbTtcbiAgICB9XG59Il19
