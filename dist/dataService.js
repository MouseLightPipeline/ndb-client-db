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
        obj.update = { method: "PUT" };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBVDBFLFdBQVcsR0FTckY7QUFFRDtJQUFxRSx3Q0FBYztJQUFuRjtRQUFxRSw4QkFBYztJQVNuRixDQUFDO0lBUFUsMkNBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBa0I7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFJLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUb0UsV0FBVyxHQVMvRSIsImZpbGUiOiJkYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJQXBpSXRlbSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5pbnRlcmZhY2UgSUFwaUlkTnVtYmVySXRlbSBleHRlbmRzIElBcGlJdGVtIHtcbiAgICBpZE51bWJlcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUFwaU5hbWVkSXRlbSBleHRlbmRzIElBcGlJdGVtIHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTXlSZXNvdXJjZUNsYXNzPFQgZXh0ZW5kcyBJQXBpSXRlbT4gZXh0ZW5kcyBuZy5yZXNvdXJjZS5JUmVzb3VyY2VDbGFzczxuZy5yZXNvdXJjZS5JUmVzb3VyY2U8VD4+IHtcbiAgICB1cGRhdGUob2JqOiBhbnksIGRhdGE6IFQpOiB2b2lkO1xufVxuXG5hYnN0cmFjdCBjbGFzcyBEYXRhU2VydmljZTxUIGV4dGVuZHMgSUFwaUl0ZW0+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgcHJvdGVjdGVkIF9lbnRpdHlTdG9yZTogSUVudGl0eVN0b3JlPFQ+ID0gbmV3IEVudGl0eVN0b3JlPFQ+KCk7XG5cbiAgICBwdWJsaWMgcmVzb3VyY2VzQXJlQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGFwaUxvY2F0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJvdGVjdGVkIGRhdGFTb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxUPj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2F0aW9uKHJlc291cmNlTG9jYXRpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnJlc291cmNlc0FyZUF2YWlsYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXBpTG9jYXRpb24gPSByZXNvdXJjZUxvY2F0aW9uO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVzb3VyY2UodGhpcy5hcGlMb2NhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaERhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzQXJlQXZhaWxhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fZW50aXR5U3RvcmUuY2xlYXIoKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5xdWVyeSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3SXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc0FyZUF2YWlsYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBUKSB7XG4gICAgICAgIGxldCByZXNvdXJjZUNsYXNzOiBJTXlSZXNvdXJjZUNsYXNzPFQ+O1xuXG4gICAgICAgIHJlc291cmNlQ2xhc3MgPSA8SU15UmVzb3VyY2VDbGFzczxUPj50aGlzLmRhdGFTb3VyY2U7XG5cbiAgICAgICAgcmVzb3VyY2VDbGFzcy51cGRhdGUoe30sIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVJdGVtKGRhdGE6IGFueSk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNhdmUoZGF0YSkuJHByb21pc2UudGhlbigob2JqOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmdldCh7aWQ6IG9iai5pZH0sIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVnaXN0ZXJOZXdJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKGlkOiBzdHJpbmcpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLmZpbmRJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWUoaXRlbTogVCwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKFwibmFtZVwiIGluIGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICgoPGFueT5pdGVtKVtcIm5hbWVcIl0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGFueT5pdGVtKVtcIm5hbWVcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNwbGF5TmFtZUZvcklkKGlkOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIik6IHN0cmluZyB7XG4gICAgICAgIGxldCBpdGVtOiBUID0gdGhpcy5maW5kKGlkKTtcblxuICAgICAgICByZXR1cm4gaXRlbSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogdGhpcy5nZXREaXNwbGF5TmFtZShpdGVtKTtcbiAgICB9XG5cbiAgICAvLyBDb25jcmV0ZSBjbGFzcyBlbnRyeSBwb2ludHNcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZXNvdXJjZVBhdGgoKTogc3RyaW5nOyAvLyBSZXF1aXJlZFxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbVJlc291cmNlTWV0aG9kcygpOiBhbnkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBhcGlVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaUxvY2F0aW9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBRdWVyaWVkSXRlbShvYmo6IGFueSk6IFQge1xuICAgICAgICBvYmouY3JlYXRlZEF0ID0gbmV3IERhdGUoPHN0cmluZz5vYmouY3JlYXRlZEF0KTtcbiAgICAgICAgb2JqLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKDxzdHJpbmc+b2JqLnVwZGF0ZWRBdCk7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtKG9iajogYW55KTogVCB7XG4gICAgICAgIGxldCBpdGVtOiBUID0gdGhpcy5tYXBRdWVyaWVkSXRlbShvYmopO1xuXG4gICAgICAgIHRoaXMuX2VudGl0eVN0b3JlLmFkZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTmV3SXRlbXMoaXRlbXM6IGFueSkge1xuICAgICAgICBpdGVtcyA9IGl0ZW1zLm1hcCgob2JqOiBJQXBpSXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJOZXdJdGVtKG9iaik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2hlcmUoZmNuOiBXaGVyZUZ1bmN0aW9uPFQ+KTogVCB7XG4gICAgICAgIGxldCBpdGVtczogQXJyYXk8VD4gPSB0aGlzLndoZXJlQWxsKGZjbik7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyBpdGVtc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHdoZXJlQWxsKGZjbjogV2hlcmVGdW5jdGlvbjxUPik6IEFycmF5PFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLndoZXJlKGZjbik7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxcblxuICAgIHByaXZhdGUgY3JlYXRlUmVzb3VyY2UobG9jYXRpb246IHN0cmluZykge1xuICAgICAgICBsZXQgb2JqOiBhbnkgPSB0aGlzLmNyZWF0ZUN1c3RvbVJlc291cmNlTWV0aG9kcygpO1xuXG4gICAgICAgIG9iai51cGRhdGUgPSB7bWV0aG9kOiBcIlBVVFwifTtcblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLiRyZXNvdXJjZShsb2NhdGlvbiArIHRoaXMucmVzb3VyY2VQYXRoKCkgKyBcIi86aWRcIiwge2lkOiBcIkBpZFwifSwgb2JqKTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE51bWJlcmVkSXRlbURhdGFTZXJ2aWNlPFQgZXh0ZW5kcyBJQXBpSWROdW1iZXJJdGVtPiBleHRlbmRzIERhdGFTZXJ2aWNlPFQ+IHtcblxuICAgIHB1YmxpYyBmaW5kV2l0aElkTnVtYmVyKGlkOiBudW1iZXIpOiBUIHtcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMud2hlcmUoKG9iajogSUFwaUlkTnVtYmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5pZE51bWJlciA9PT0gaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8VD5pdGVtO1xuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgTmFtZWRJdGVtRGF0YVNlcnZpY2U8VCBleHRlbmRzIElBcGlOYW1lZEl0ZW0+IGV4dGVuZHMgRGF0YVNlcnZpY2U8VD4ge1xuXG4gICAgcHVibGljIGZpbmRXaXRoTmFtZShuYW1lOiBzdHJpbmcpOiBUIHtcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMud2hlcmUoKG9iajogSUFwaU5hbWVkSXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxUPml0ZW07XG4gICAgfVxufSJdfQ==
