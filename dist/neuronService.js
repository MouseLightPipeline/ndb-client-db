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
            return item.idString.toString() + " " + item.tag;
        }
        else {
            return item.idString.toString();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uZXVyb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBbUJBO0lBQTRCLGlDQUFnQztJQVF4RCx1QkFBWSxTQUF1QztRQUMvQyxrQkFBTSxTQUFTLENBQUMsQ0FBQztRQUhiLHVCQUFrQixHQUF3QixFQUFFLENBQUM7SUFJckQsQ0FBQztJQUVELHNCQUFZLGtDQUFPO2FBQW5CO1lBQ0ksTUFBTSxDQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRVMsdUNBQWUsR0FBekIsVUFBMEIsTUFBZTtRQUNyQyxJQUFJLElBQUksR0FBWSxnQkFBSyxDQUFDLGVBQWUsWUFBQyxNQUFNLENBQVksQ0FBQztRQUU3RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELENBQUM7UUFHRCxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRTdILElBQUksS0FBSyxHQUFZLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUc1RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsbURBQTJCLEdBQXJDO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCO2dCQUN4QyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUNuQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRVMsb0NBQVksR0FBdEI7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsV0FBbUI7UUFDMUMsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBVyxrQ0FBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLElBQWEsRUFBRSxZQUF5QjtRQUF6Qiw0QkFBeUIsR0FBekIsaUJBQXlCO1FBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixRQUFnQjtRQUF4QyxpQkFRQztRQVBHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBc0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQzdELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFGYSxxQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBeUZOLG9CQUFDO0FBQUQsQ0E1RkEsQUE0RkMsQ0E1RjJCLHVCQUF1QixHQTRGbEQiLCJmaWxlIjoibmV1cm9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJTmV1cm9uIGV4dGVuZHMgSUFwaUlkTnVtYmVySXRlbSB7XG4gICAgaW5qZWN0aW9uSWQ6IHN0cmluZztcbiAgICBicmFpbkFyZWFJZDogc3RyaW5nO1xuICAgIGlkU3RyaW5nOiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAga2V5d29yZHM6IHN0cmluZztcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHo6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElOZXVyb25JbmplY3Rpb25NYXAge1xuICAgIFtrZXk6IHN0cmluZ106IEFycmF5PElOZXVyb24+O1xufVxuXG5pbnRlcmZhY2UgSU5ldXJvblJlc291cmNlIGV4dGVuZHMgbmcucmVzb3VyY2UuSVJlc291cmNlQ2xhc3M8bmcucmVzb3VyY2UuSVJlc291cmNlPElOZXVyb24+PiB7XG4gICAgbmV1cm9uc0ZvclNhbXBsZShvYmo6IGFueSk6IEFycmF5PElTYW1wbGU+O1xufVxuXG5jbGFzcyBOZXVyb25TZXJ2aWNlIGV4dGVuZHMgTnVtYmVyZWRJdGVtRGF0YVNlcnZpY2U8SU5ldXJvbj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICAvLyBBcnJheXMgb2YgbmV1cm9uIG9iamVjdHMga2V5ZWQgYnkgaW5qZWN0aW9uIGlkLlxuICAgIHByaXZhdGUgbmV1cm9uSW5qZWN0aW9uTWFwOiBJTmV1cm9uSW5qZWN0aW9uTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzZXJ2aWNlKCk6IElOZXVyb25SZXNvdXJjZSB7XG4gICAgICAgIHJldHVybiA8SU5ldXJvblJlc291cmNlPnRoaXMuZGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtKHJhd09iajogSU5ldXJvbik6IElOZXVyb24ge1xuICAgICAgICBsZXQgaXRlbTogSU5ldXJvbiA9IHN1cGVyLnJlZ2lzdGVyTmV3SXRlbShyYXdPYmopIGFzIElOZXVyb247XG5cbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLm5ldXJvbkluamVjdGlvbk1hcFtpdGVtLmluamVjdGlvbklkXTtcblxuICAgICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkIHx8IGxpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubmV1cm9uSW5qZWN0aW9uTWFwW2l0ZW0uaW5qZWN0aW9uSWRdID0gbGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgaW5kZXggb2YgaXRlbSBpbiBsaXN0LCBpZiBwcmVzZW50LlxuICAgICAgICBsZXQgbWF0Y2hpbmc6IEFycmF5PG51bWJlcj4gPSBsaXN0Lm1hcCgob2JqLCBpbmRleCkgPT4gb2JqLmlkID09PSBpdGVtLmluamVjdGlvbklkID8gaW5kZXggOiAtMSkuZmlsdGVyKGluZGV4ID0+IGluZGV4ID4gLTEpO1xuXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gIG1hdGNoaW5nLmxlbmd0aCA+IDAgPyBtYXRjaGluZ1swXSA6IC0xOyAvLyBsaXN0LmluZGV4T2YoaXRlbS5pbmplY3Rpb25JZCk7XG5cbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZVxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tUmVzb3VyY2VNZXRob2RzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXVyb25zRm9yU2FtcGxlOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5hcGlVcmwgKyBcIm5ldXJvbnMvc2FtcGxlLzppZC9cIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtpZDogXCJAaWRcIn0sXG4gICAgICAgICAgICAgICAgaXNBcnJheTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibmV1cm9uc1wiO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZXVyb25zRm9ySW5qZWN0aW9uKGluamVjdGlvbklkOiBzdHJpbmcpOiBBcnJheTxJTmV1cm9uPiB7XG4gICAgICAgIGxldCBuZXVyb25zOiBBcnJheTxJTmV1cm9uPiA9IHRoaXMubmV1cm9uSW5qZWN0aW9uTWFwW2luamVjdGlvbklkXTtcblxuICAgICAgICBpZiAobmV1cm9ucyA9PT0gdW5kZWZpbmVkIHx8IG5ldXJvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ldXJvbnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubmV1cm9uSW5qZWN0aW9uTWFwW2luamVjdGlvbklkXSA9IG5ldXJvbnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV1cm9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5ldXJvbnMoKTogQXJyYXk8SU5ldXJvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuaXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3BsYXlOYW1lKGl0ZW06IElOZXVyb24sIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIik6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLnRhZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZFN0cmluZy50b1N0cmluZygpICsgXCIgXCIgKyBpdGVtLnRhZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkU3RyaW5nLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmV1cm9uc0ZvclNhbXBsZShzYW1wbGVJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJVHJhY2luZ05vZGU+PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxJVHJhY2luZ05vZGU+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UubmV1cm9uc0ZvclNhbXBsZSh7aWQ6IHNhbXBsZUlkfSkuJHByb21pc2UudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
