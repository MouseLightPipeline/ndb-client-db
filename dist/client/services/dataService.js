var DataService = (function () {
    function DataService($resource) {
        this.$resource = $resource;
        this.resourcesAreAvailable = false;
        this.items = [];
        this.apiLocation = "";
    }
    Object.defineProperty(DataService.prototype, "apiUrl", {
        get: function () {
            return this.apiLocation;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setLocation = function (resourceLocation) {
        this.resourcesAreAvailable = false;
        this.apiLocation = resourceLocation;
        this.dataSource = this.createResource(this.apiLocation);
        return this.refreshData();
    };
    DataService.prototype.mapQueriedItem = function (obj) {
        obj.createdAt = new Date(obj.createdAt);
        obj.updatedAt = new Date(obj.updatedAt);
        return obj;
    };
    DataService.prototype.registerNewItem = function (obj) {
        var item = this.mapQueriedItem(obj);
        this[item.id] = item;
        var index = this.items.findIndex(function (obj) {
            return obj.id === item.id;
        });
        if (index > -1) {
            this.items[index] = item;
        }
        else {
            this.items.push(item);
        }
        return item;
    };
    DataService.prototype.registerNewItems = function (items) {
        var _this = this;
        items = items.map(function (obj) {
            return _this.registerNewItem(obj);
        });
        return items;
    };
    DataService.prototype.refreshDataWithCallback = function (fcn) {
        this.dataSource.query(fcn);
    };
    DataService.prototype.refreshData = function () {
        var _this = this;
        this.resourcesAreAvailable = false;
        this.items = [];
        return new Promise(function (resolve) {
            _this.refreshDataWithCallback(function (data) {
                _this.registerNewItems(data);
                _this.resourcesAreAvailable = true;
                resolve(true);
            });
        });
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
    DataService.prototype.find = function (id, fcn) {
        if (fcn === void 0) { fcn = null; }
        var item;
        if (fcn === null) {
            item = this[id];
        }
        else {
            item = this.items.find(fcn);
        }
        if (item === undefined)
            item = null;
        return item;
    };
    DataService.prototype.findWithIdNumber = function (id) {
        return this.find("", function (obj) {
            return obj.idNumber === id;
        });
    };
    DataService.prototype.findWithName = function (name) {
        return this.find("", function (obj) {
            return obj.name.toLowerCase() === name.toLowerCase();
        });
    };
    DataService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if ("name" in item)
            return item["name"];
        return defaultValue;
    };
    DataService.prototype.getDisplayNameForId = function (id, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        var item = this.find(id);
        return item === null ? defaultValue : this.getDisplayName(item);
    };
    DataService.$inject = [
        "$resource"
    ];
    return DataService;
}());
