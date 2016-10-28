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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUM7SUFDbkIsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVDBFLFdBQVcsR0FTckY7QUFFRDtJQUFxRSx3Q0FBYztJQUFuRjtRQUFxRSw4QkFBYztJQVNuRixDQUFDO0lBUFUsMkNBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBa0I7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFJLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUb0UsV0FBVyxHQVMvRSIsImZpbGUiOiJkYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJQXBpSXRlbSB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0PzogRGF0ZTtcbiAgICB1cGRhdGVkQXQ/OiBEYXRlO1xufVxuXG5pbnRlcmZhY2UgSUFwaUlkTnVtYmVySXRlbSBleHRlbmRzIElBcGlJdGVtIHtcbiAgICBpZE51bWJlcj86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElBcGlOYW1lZEl0ZW0gZXh0ZW5kcyBJQXBpSXRlbSB7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElNeVJlc291cmNlQ2xhc3M8VCBleHRlbmRzIElBcGlJdGVtPiBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxUPj4ge1xuICAgIHVwZGF0ZShvYmo6IGFueSwgZGF0YTogVCk6IHZvaWQ7XG59XG5cbmFic3RyYWN0IGNsYXNzIERhdGFTZXJ2aWNlPFQgZXh0ZW5kcyBJQXBpSXRlbT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICBwcm90ZWN0ZWQgX2VudGl0eVN0b3JlOiBJRW50aXR5U3RvcmU8VD4gPSBuZXcgRW50aXR5U3RvcmU8VD4oKTtcblxuICAgIHB1YmxpYyByZXNvdXJjZXNBcmVBdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXBpTG9jYXRpb246IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcm90ZWN0ZWQgZGF0YVNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlQ2xhc3M8bmcucmVzb3VyY2UuSVJlc291cmNlPFQ+PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCAkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYXRpb24ocmVzb3VyY2VMb2NhdGlvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzQXJlQXZhaWxhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hcGlMb2NhdGlvbiA9IHJlc291cmNlTG9jYXRpb247XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZXNvdXJjZSh0aGlzLmFwaUxvY2F0aW9uKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNBcmVBdmFpbGFibGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9lbnRpdHlTdG9yZS5jbGVhcigpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnF1ZXJ5KChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdJdGVtcyhkYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzQXJlQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IFQpIHtcbiAgICAgICAgbGV0IHJlc291cmNlQ2xhc3M6IElNeVJlc291cmNlQ2xhc3M8VD47XG5cbiAgICAgICAgcmVzb3VyY2VDbGFzcyA9IDxJTXlSZXNvdXJjZUNsYXNzPFQ+PnRoaXMuZGF0YVNvdXJjZTtcblxuICAgICAgICByZXNvdXJjZUNsYXNzLnVwZGF0ZSh7fSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUl0ZW0oZGF0YTogYW55KTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2F2ZShkYXRhKS4kcHJvbWlzZS50aGVuKChvYmo6IFQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZ2V0KHtpZDogb2JqLmlkfSwgKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5yZWdpc3Rlck5ld0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQoaWQ6IHN0cmluZyk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuZmluZEl0ZW0oaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNwbGF5TmFtZShpdGVtOiBULCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoXCJuYW1lXCIgaW4gaXRlbSkge1xuICAgICAgICAgICAgaWYgKCg8YW55Pml0ZW0pW1wibmFtZVwiXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8YW55Pml0ZW0pW1wibmFtZVwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3BsYXlOYW1lRm9ySWQoaWQ6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGl0ZW06IFQgPSB0aGlzLmZpbmQoaWQpO1xuXG4gICAgICAgIHJldHVybiBpdGVtID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB0aGlzLmdldERpc3BsYXlOYW1lKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIENvbmNyZXRlIGNsYXNzIGVudHJ5IHBvaW50c1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlc291cmNlUGF0aCgpOiBzdHJpbmc7IC8vIFJlcXVpcmVkXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFwaVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpTG9jYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFF1ZXJpZWRJdGVtKG9iajogYW55KTogVCB7XG4gICAgICAgIG9iai5jcmVhdGVkQXQgPSBuZXcgRGF0ZSg8c3RyaW5nPm9iai5jcmVhdGVkQXQpO1xuICAgICAgICBvYmoudXBkYXRlZEF0ID0gbmV3IERhdGUoPHN0cmluZz5vYmoudXBkYXRlZEF0KTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3Rlck5ld0l0ZW0ob2JqOiBhbnkpOiBUIHtcbiAgICAgICAgbGV0IGl0ZW06IFQgPSB0aGlzLm1hcFF1ZXJpZWRJdGVtKG9iaik7XG5cbiAgICAgICAgdGhpcy5fZW50aXR5U3RvcmUuYWRkSXRlbShpdGVtKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtcyhpdGVtczogYW55KSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKChvYmo6IElBcGlJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlck5ld0l0ZW0ob2JqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3aGVyZShmY246IFdoZXJlRnVuY3Rpb248VD4pOiBUIHtcbiAgICAgICAgbGV0IGl0ZW1zOiBBcnJheTxUPiA9IHRoaXMud2hlcmVBbGwoZmNuKTtcblxuICAgICAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2hlcmVBbGwoZmNuOiBXaGVyZUZ1bmN0aW9uPFQ+KTogQXJyYXk8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUud2hlcmUoZmNuKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbFxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXNvdXJjZShsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBvYmo6IGFueSA9IHRoaXMuY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk7XG5cbiAgICAgICAgb2JqLnVwZGF0ZSA9IHttZXRob2Q6IFwiUFVUXCIsIHVybDogbG9jYXRpb24gKyB0aGlzLnJlc291cmNlUGF0aCgpIH07XG5cbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy4kcmVzb3VyY2UobG9jYXRpb24gKyB0aGlzLnJlc291cmNlUGF0aCgpICsgXCIvOmlkXCIsIHtpZDogXCJAaWRcIn0sIG9iaik7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBOdW1iZXJlZEl0ZW1EYXRhU2VydmljZTxUIGV4dGVuZHMgSUFwaUlkTnVtYmVySXRlbT4gZXh0ZW5kcyBEYXRhU2VydmljZTxUPiB7XG5cbiAgICBwdWJsaWMgZmluZFdpdGhJZE51bWJlcihpZDogbnVtYmVyKTogVCB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLndoZXJlKChvYmo6IElBcGlJZE51bWJlckl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaWROdW1iZXIgPT09IGlkO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPFQ+aXRlbTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE5hbWVkSXRlbURhdGFTZXJ2aWNlPFQgZXh0ZW5kcyBJQXBpTmFtZWRJdGVtPiBleHRlbmRzIERhdGFTZXJ2aWNlPFQ+IHtcblxuICAgIHB1YmxpYyBmaW5kV2l0aE5hbWUobmFtZTogc3RyaW5nKTogVCB7XG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLndoZXJlKChvYmo6IElBcGlOYW1lZEl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8VD5pdGVtO1xuICAgIH1cbn0iXX0=
