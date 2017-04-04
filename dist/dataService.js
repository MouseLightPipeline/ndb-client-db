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
        return item == null ? defaultValue : this.getDisplayName(item, defaultValue);
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
        obj.update = { method: "PUT", url: location + this.resourcePath() };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFNLENBQUksSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTCw4QkFBQztBQUFELENBVEEsQUFTQyxDQVQwRSxXQUFXLEdBU3JGO0FBRUQ7SUFBcUUsd0NBQWM7SUFBbkY7UUFBcUUsOEJBQWM7SUFTbkYsQ0FBQztJQVBVLDJDQUFZLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQWtCO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBSSxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVG9FLFdBQVcsR0FTL0UiLCJmaWxlIjoiZGF0YVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUFwaUl0ZW0ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdD86IERhdGU7XG4gICAgdXBkYXRlZEF0PzogRGF0ZTtcbn1cblxuaW50ZXJmYWNlIElBcGlJZE51bWJlckl0ZW0gZXh0ZW5kcyBJQXBpSXRlbSB7XG4gICAgaWROdW1iZXI/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJQXBpTmFtZWRJdGVtIGV4dGVuZHMgSUFwaUl0ZW0ge1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTXlSZXNvdXJjZUNsYXNzPFQgZXh0ZW5kcyBJQXBpSXRlbT4gZXh0ZW5kcyBuZy5yZXNvdXJjZS5JUmVzb3VyY2VDbGFzczxuZy5yZXNvdXJjZS5JUmVzb3VyY2U8VD4+IHtcbiAgICB1cGRhdGUob2JqOiBhbnksIGRhdGE6IFQpOiB2b2lkO1xufVxuXG5hYnN0cmFjdCBjbGFzcyBEYXRhU2VydmljZTxUIGV4dGVuZHMgSUFwaUl0ZW0+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgcHJvdGVjdGVkIF9lbnRpdHlTdG9yZTogSUVudGl0eVN0b3JlPFQ+ID0gbmV3IEVudGl0eVN0b3JlPFQ+KCk7XG5cbiAgICBwdWJsaWMgcmVzb3VyY2VzQXJlQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGFwaUxvY2F0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJvdGVjdGVkIGRhdGFTb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxUPj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2F0aW9uKHJlc291cmNlTG9jYXRpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnJlc291cmNlc0FyZUF2YWlsYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXBpTG9jYXRpb24gPSByZXNvdXJjZUxvY2F0aW9uO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVzb3VyY2UodGhpcy5hcGlMb2NhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaERhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzQXJlQXZhaWxhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fZW50aXR5U3RvcmUuY2xlYXIoKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5xdWVyeSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3SXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc0FyZUF2YWlsYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBUKSB7XG4gICAgICAgIGxldCByZXNvdXJjZUNsYXNzOiBJTXlSZXNvdXJjZUNsYXNzPFQ+O1xuXG4gICAgICAgIHJlc291cmNlQ2xhc3MgPSA8SU15UmVzb3VyY2VDbGFzczxUPj50aGlzLmRhdGFTb3VyY2U7XG5cbiAgICAgICAgcmVzb3VyY2VDbGFzcy51cGRhdGUoe30sIGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVJdGVtKGRhdGE6IGFueSk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNhdmUoZGF0YSkuJHByb21pc2UudGhlbigob2JqOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmdldCh7aWQ6IG9iai5pZH0sIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVnaXN0ZXJOZXdJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kKGlkOiBzdHJpbmcpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLmZpbmRJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWUoaXRlbTogVCwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKFwibmFtZVwiIGluIGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICgoPGFueT5pdGVtKVtcIm5hbWVcIl0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGFueT5pdGVtKVtcIm5hbWVcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNwbGF5TmFtZUZvcklkKGlkOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIik6IHN0cmluZyB7XG4gICAgICAgIGxldCBpdGVtOiBUID0gdGhpcy5maW5kKGlkKTtcblxuICAgICAgICByZXR1cm4gaXRlbSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogdGhpcy5nZXREaXNwbGF5TmFtZShpdGVtLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENvbmNyZXRlIGNsYXNzIGVudHJ5IHBvaW50c1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlc291cmNlUGF0aCgpOiBzdHJpbmc7IC8vIFJlcXVpcmVkXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFwaVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpTG9jYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFF1ZXJpZWRJdGVtKG9iajogYW55KTogVCB7XG4gICAgICAgIG9iai5jcmVhdGVkQXQgPSBuZXcgRGF0ZSg8c3RyaW5nPm9iai5jcmVhdGVkQXQpO1xuICAgICAgICBvYmoudXBkYXRlZEF0ID0gbmV3IERhdGUoPHN0cmluZz5vYmoudXBkYXRlZEF0KTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3Rlck5ld0l0ZW0ob2JqOiBhbnkpOiBUIHtcbiAgICAgICAgbGV0IGl0ZW06IFQgPSB0aGlzLm1hcFF1ZXJpZWRJdGVtKG9iaik7XG5cbiAgICAgICAgdGhpcy5fZW50aXR5U3RvcmUuYWRkSXRlbShpdGVtKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtcyhpdGVtczogYW55KSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKChvYmo6IElBcGlJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlck5ld0l0ZW0ob2JqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3aGVyZShmY246IFdoZXJlRnVuY3Rpb248VD4pOiBUIHtcbiAgICAgICAgbGV0IGl0ZW1zOiBBcnJheTxUPiA9IHRoaXMud2hlcmVBbGwoZmNuKTtcblxuICAgICAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2hlcmVBbGwoZmNuOiBXaGVyZUZ1bmN0aW9uPFQ+KTogQXJyYXk8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUud2hlcmUoZmNuKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbFxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXNvdXJjZShsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBvYmo6IGFueSA9IHRoaXMuY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk7XG5cbiAgICAgICAgb2JqLnVwZGF0ZSA9IHttZXRob2Q6IFwiUFVUXCIsIHVybDogbG9jYXRpb24gKyB0aGlzLnJlc291cmNlUGF0aCgpIH07XG5cbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy4kcmVzb3VyY2UobG9jYXRpb24gKyB0aGlzLnJlc291cmNlUGF0aCgpICsgXCIvOmlkXCIsIHtpZDogXCJAaWRcIn0sIG9iaik7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBOdW1iZXJlZEl0ZW1EYXRhU2VydmljZTxUIGV4dGVuZHMgSUFwaUlkTnVtYmVySXRlbT4gZXh0ZW5kcyBEYXRhU2VydmljZTxUPiB7XG5cbiAgICBwdWJsaWMgZmluZFdpdGhJZE51bWJlcihpZDogbnVtYmVyKTogVCB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLndoZXJlKChvYmo6IElBcGlJZE51bWJlckl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaWROdW1iZXIgPT09IGlkO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPFQ+aXRlbTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE5hbWVkSXRlbURhdGFTZXJ2aWNlPFQgZXh0ZW5kcyBJQXBpTmFtZWRJdGVtPiBleHRlbmRzIERhdGFTZXJ2aWNlPFQ+IHtcblxuICAgIHB1YmxpYyBmaW5kV2l0aE5hbWUobmFtZTogc3RyaW5nKTogVCB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLndoZXJlKChvYmo6IElBcGlOYW1lZEl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8VD5pdGVtO1xuICAgIH1cbn0iXX0=
