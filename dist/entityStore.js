var EntityStore = (function () {
    function EntityStore(idKey) {
        if (idKey === void 0) { idKey = "id"; }
        this._array = [];
        this._idKey = idKey;
    }
    EntityStore.prototype.clear = function () {
        var _this = this;
        this._array.length = 0;
        Object.keys(this._store).forEach(function (key) {
            delete _this._store[key];
        });
    };
    EntityStore.prototype.findItem = function (key) {
        if (key == null || key.length === 0) {
            return null;
        }
        return this._store[key];
    };
    EntityStore.prototype.addItem = function (item) {
        if (this.findObject(item) == null) {
            this.insertItem(item);
        }
    };
    EntityStore.prototype.addItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.addItem(item);
        });
    };
    EntityStore.prototype.removeItem = function (item) {
        var obj = this.findObject(item);
        if (obj != null) {
            this.deleteItem(obj);
        }
        return obj;
    };
    EntityStore.prototype.removeItems = function (items) {
        var _this = this;
        return items.map(function (item) {
            return _this.removeItem(item);
        });
    };
    EntityStore.prototype.where = function (fcn) {
        return this._array.filter(function (item) {
            return fcn(item);
        });
    };
    Object.defineProperty(EntityStore.prototype, "items", {
        get: function () {
            return this._array;
        },
        enumerable: true,
        configurable: true
    });
    EntityStore.prototype.findObject = function (item) {
        return this.findItem(this.getKey(item));
    };
    EntityStore.prototype.getKey = function (item) {
        if (item == null) {
            return null;
        }
        return item[this._idKey];
    };
    EntityStore.prototype.insertItem = function (item) {
        this._array.push(item);
        this._store[item[this._idKey]] = item;
    };
    EntityStore.prototype.deleteItem = function (item) {
        if (item == null) {
            return;
        }
        var key = item[this._idKey];
        if (key == null) {
            return;
        }
        var index = this._array.indexOf(item);
        if (index > -1) {
            this._array.splice(index, 1);
        }
        if (key in this._store) {
            delete this._store[key];
        }
    };
    return EntityStore;
}());
//# sourceMappingURL=entityStore.js.map