var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NeuronService = (function (_super) {
    __extends(NeuronService, _super);
    function NeuronService($resource) {
        _super.call(this, $resource);
        this.neuronInjectionMap = {};
    }
    Object.defineProperty(NeuronService.prototype, "service", {
        get: function () {
            return this.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    NeuronService.prototype.registerNewItem = function (rawObj) {
        var item = _super.prototype.registerNewItem.call(this, rawObj);
        var list = this.neuronInjectionMap[item.injectionId];
        if (list === undefined || list === null) {
            list = [];
            this.neuronInjectionMap[item.injectionId] = list;
        }
        var matching = list.map(function (obj, index) { return obj.id === item.injectionId ? index : -1; }).filter(function (index) { return index > -1; });
        var index = matching.length > 0 ? matching[0] : -1;
        if (index < 0) {
            list.push(item);
        }
        else {
            list[index] = item;
        }
        return item;
    };
    NeuronService.prototype.createCustomResourceMethods = function () {
        return {
            neuronsForSample: {
                method: "GET",
                url: this.apiUrl + "neurons/sample/:id/",
                params: { id: "@id" },
                isArray: true
            }
        };
    };
    NeuronService.prototype.resourcePath = function () {
        return "neurons";
    };
    NeuronService.prototype.neuronsForInjection = function (injectionId) {
        var neurons = this.neuronInjectionMap[injectionId];
        if (neurons === undefined || neurons === null) {
            neurons = [];
            this.neuronInjectionMap[injectionId] = neurons;
        }
        return neurons;
    };
    Object.defineProperty(NeuronService.prototype, "neurons", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    NeuronService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if (item === null) {
            return "";
        }
        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag;
        }
        else {
            return item.idNumber.toString();
        }
    };
    NeuronService.prototype.neuronsForSample = function (sampleId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.neuronsForSample({ id: sampleId }).$promise.then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    NeuronService.$inject = [
        "$resource"
    ];
    return NeuronService;
}(NumberedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uZXVyb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBa0JBO0lBQTRCLGlDQUFnQztJQVF4RCx1QkFBWSxTQUF1QztRQUMvQyxrQkFBTSxTQUFTLENBQUMsQ0FBQztRQUhiLHVCQUFrQixHQUF3QixFQUFFLENBQUM7SUFJckQsQ0FBQztJQUVELHNCQUFZLGtDQUFPO2FBQW5CO1lBQ0ksTUFBTSxDQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRVMsdUNBQWUsR0FBekIsVUFBMEIsTUFBZTtRQUNyQyxJQUFJLElBQUksR0FBWSxnQkFBSyxDQUFDLGVBQWUsWUFBQyxNQUFNLENBQVksQ0FBQztRQUU3RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELENBQUM7UUFHRCxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRTdILElBQUksS0FBSyxHQUFZLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUc1RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsbURBQTJCLEdBQXJDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCO2dCQUN4QyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUNuQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRVMsb0NBQVksR0FBdEI7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsV0FBbUI7UUFDMUMsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBVyxrQ0FBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLElBQWEsRUFBRSxZQUF5QjtRQUF6Qiw0QkFBeUIsR0FBekIsaUJBQXlCO1FBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixRQUFnQjtRQUF4QyxpQkFRQztRQVBHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBc0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQzdELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFGYSxxQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBeUZOLG9CQUFDO0FBQUQsQ0E1RkEsQUE0RkMsQ0E1RjJCLHVCQUF1QixHQTRGbEQiLCJmaWxlIjoibmV1cm9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJTmV1cm9uIGV4dGVuZHMgSUFwaUlkTnVtYmVySXRlbSB7XG4gICAgaW5qZWN0aW9uSWQ6IHN0cmluZztcbiAgICBicmFpbkFyZWFJZDogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIGtleXdvcmRzOiBzdHJpbmc7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB6OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJTmV1cm9uSW5qZWN0aW9uTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxJTmV1cm9uPjtcbn1cblxuaW50ZXJmYWNlIElOZXVyb25SZXNvdXJjZSBleHRlbmRzIG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPG5nLnJlc291cmNlLklSZXNvdXJjZTxJTmV1cm9uPj4ge1xuICAgIG5ldXJvbnNGb3JTYW1wbGUob2JqOiBhbnkpOiBBcnJheTxJU2FtcGxlPjtcbn1cblxuY2xhc3MgTmV1cm9uU2VydmljZSBleHRlbmRzIE51bWJlcmVkSXRlbURhdGFTZXJ2aWNlPElOZXVyb24+IHtcbiAgICBwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG4gICAgICAgIFwiJHJlc291cmNlXCJcbiAgICBdO1xuXG4gICAgLy8gQXJyYXlzIG9mIG5ldXJvbiBvYmplY3RzIGtleWVkIGJ5IGluamVjdGlvbiBpZC5cbiAgICBwcml2YXRlIG5ldXJvbkluamVjdGlvbk1hcDogSU5ldXJvbkluamVjdGlvbk1hcCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc2VydmljZSgpOiBJTmV1cm9uUmVzb3VyY2Uge1xuICAgICAgICByZXR1cm4gPElOZXVyb25SZXNvdXJjZT50aGlzLmRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTmV3SXRlbShyYXdPYmo6IElOZXVyb24pOiBJTmV1cm9uIHtcbiAgICAgICAgbGV0IGl0ZW06IElOZXVyb24gPSBzdXBlci5yZWdpc3Rlck5ld0l0ZW0ocmF3T2JqKSBhcyBJTmV1cm9uO1xuXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5uZXVyb25JbmplY3Rpb25NYXBbaXRlbS5pbmplY3Rpb25JZF07XG5cbiAgICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZCB8fCBsaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLm5ldXJvbkluamVjdGlvbk1hcFtpdGVtLmluamVjdGlvbklkXSA9IGxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGl0ZW0gaW4gbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgICAgbGV0IG1hdGNoaW5nOiBBcnJheTxudW1iZXI+ID0gbGlzdC5tYXAoKG9iaiwgaW5kZXgpID0+IG9iai5pZCA9PT0gaXRlbS5pbmplY3Rpb25JZCA/IGluZGV4IDogLTEpLmZpbHRlcihpbmRleCA9PiBpbmRleCA+IC0xKTtcblxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9ICBtYXRjaGluZy5sZW5ndGggPiAwID8gbWF0Y2hpbmdbMF0gOiAtMTsgLy8gbGlzdC5pbmRleE9mKGl0ZW0uaW5qZWN0aW9uSWQpO1xuXG4gICAgICAgIC8vIEFkZCBvciB1cGRhdGVcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdFtpbmRleF0gPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbVJlc291cmNlTWV0aG9kcygpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV1cm9uc0ZvclNhbXBsZToge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsICsgXCJuZXVyb25zL3NhbXBsZS86aWQvXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7aWQ6IFwiQGlkXCJ9LFxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm5ldXJvbnNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV1cm9uc0ZvckluamVjdGlvbihpbmplY3Rpb25JZDogc3RyaW5nKTogQXJyYXk8SU5ldXJvbj4ge1xuICAgICAgICBsZXQgbmV1cm9uczogQXJyYXk8SU5ldXJvbj4gPSB0aGlzLm5ldXJvbkluamVjdGlvbk1hcFtpbmplY3Rpb25JZF07XG5cbiAgICAgICAgaWYgKG5ldXJvbnMgPT09IHVuZGVmaW5lZCB8fCBuZXVyb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICBuZXVyb25zID0gW107XG4gICAgICAgICAgICB0aGlzLm5ldXJvbkluamVjdGlvbk1hcFtpbmplY3Rpb25JZF0gPSBuZXVyb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldXJvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuZXVyb25zKCk6IEFycmF5PElOZXVyb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNwbGF5TmFtZShpdGVtOiBJTmV1cm9uLCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS50YWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWROdW1iZXIudG9TdHJpbmcoKSArIFwiIFwiICsgaXRlbS50YWc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZE51bWJlci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5ldXJvbnNGb3JTYW1wbGUoc2FtcGxlSWQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8SVRyYWNpbmdOb2RlPj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8SVRyYWNpbmdOb2RlPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLm5ldXJvbnNGb3JTYW1wbGUoe2lkOiBzYW1wbGVJZH0pLiRwcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
