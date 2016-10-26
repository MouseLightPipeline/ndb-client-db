var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegistrationTransformService = (function (_super) {
    __extends(RegistrationTransformService, _super);
    function RegistrationTransformService($resource) {
        _super.call(this, $resource);
        this.registrationTransformSampleMap = {};
    }
    RegistrationTransformService.prototype.registerNewItem = function (rawObj) {
        var item = _super.prototype.registerNewItem.call(this, rawObj);
        var list = this.registrationTransformSampleMap[item.sampleId];
        if (list === undefined || list === null) {
            list = [];
            this.registrationTransformSampleMap[item.sampleId] = list;
        }
        var matching = list.map(function (obj, index) { return obj.id === item.sampleId ? index : -1; }).filter(function (index) { return index > -1; });
        var index = matching.length > 0 ? matching[0] : -1;
        if (index < 0) {
            list.push(item);
        }
        else {
            list[index] = item;
        }
        return item;
    };
    RegistrationTransformService.prototype.resourcePath = function () {
        return "registrationtransforms";
    };
    RegistrationTransformService.prototype.registrationTransformsForSample = function (sampleId) {
        var transforms = this.registrationTransformSampleMap[sampleId];
        if (transforms === undefined || transforms === null) {
            transforms = [];
            this.registrationTransformSampleMap[sampleId] = transforms;
        }
        return transforms;
    };
    Object.defineProperty(RegistrationTransformService.prototype, "transforms", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationTransformService.$inject = [
        "$resource"
    ];
    return RegistrationTransformService;
}(NamedItemDataService));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBVUE7SUFBMkMsZ0RBQTRDO0lBUW5GLHNDQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBSGIsbUNBQThCLEdBQW9DLEVBQUUsQ0FBQztJQUk3RSxDQUFDO0lBRVMsc0RBQWUsR0FBekIsVUFBMEIsTUFBVztRQUNqQyxJQUFJLElBQUksR0FBMkIsZ0JBQUssQ0FBQyxlQUFlLFlBQUMsTUFBTSxDQUEyQixDQUFDO1FBRTNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDOUQsQ0FBQztRQUdELElBQUksUUFBUSxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxPQUFBLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFFMUgsSUFBSSxLQUFLLEdBQVksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRzVELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxtREFBWSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0sc0VBQStCLEdBQXRDLFVBQXVDLFFBQWdCO1FBQ25ELElBQUksVUFBVSxHQUFrQyxJQUFJLENBQUMsOEJBQThCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUYsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDL0QsQ0FBQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFXLG9EQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBckRhLG9DQUFPLEdBQUc7UUFDcEIsV0FBVztLQUNkLENBQUM7SUFvRE4sbUNBQUM7QUFBRCxDQXZEQSxBQXVEQyxDQXZEMEMsb0JBQW9CLEdBdUQ5RCIsImZpbGUiOiJyZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElSZWdpc3RyYXRpb25UcmFuc2Zvcm0gZXh0ZW5kcyBJQXBpTmFtZWRJdGVtIHtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgc2FtcGxlSWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElSZWdpc3RyYXRpb25UcmFuc2Zvcm1TYW1wbGVNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IEFycmF5PElSZWdpc3RyYXRpb25UcmFuc2Zvcm0+O1xufVxuXG5jbGFzcyBSZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlIGV4dGVuZHMgTmFtZWRJdGVtRGF0YVNlcnZpY2U8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICAvLyBBcnJheXMgb2YgcmVnaXN0cmF0aW9uIG9iamVjdHMga2V5ZWQgYnkgc2FtcGxlIGlkLlxuICAgIHByaXZhdGUgcmVnaXN0cmF0aW9uVHJhbnNmb3JtU2FtcGxlTWFwOiBJUmVnaXN0cmF0aW9uVHJhbnNmb3JtU2FtcGxlTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJOZXdJdGVtKHJhd09iajogYW55KTogSVJlZ2lzdHJhdGlvblRyYW5zZm9ybSB7XG4gICAgICAgIGxldCBpdGVtOiBJUmVnaXN0cmF0aW9uVHJhbnNmb3JtID0gc3VwZXIucmVnaXN0ZXJOZXdJdGVtKHJhd09iaikgYXMgSVJlZ2lzdHJhdGlvblRyYW5zZm9ybTtcblxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMucmVnaXN0cmF0aW9uVHJhbnNmb3JtU2FtcGxlTWFwW2l0ZW0uc2FtcGxlSWRdO1xuXG4gICAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQgfHwgbGlzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25UcmFuc2Zvcm1TYW1wbGVNYXBbaXRlbS5zYW1wbGVJZF0gPSBsaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBpbmRleCBvZiBpdGVtIGluIGxpc3QsIGlmIHByZXNlbnQuXG4gICAgICAgIGxldCBtYXRjaGluZzogQXJyYXk8bnVtYmVyPiA9IGxpc3QubWFwKChvYmosIGluZGV4KSA9PiBvYmouaWQgPT09IGl0ZW0uc2FtcGxlSWQgPyBpbmRleCA6IC0xKS5maWx0ZXIoaW5kZXggPT4gaW5kZXggPiAtMSk7XG5cbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAgbWF0Y2hpbmcubGVuZ3RoID4gMCA/IG1hdGNoaW5nWzBdIDogLTE7XG5cbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZVxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJlZ2lzdHJhdGlvbnRyYW5zZm9ybXNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0cmF0aW9uVHJhbnNmb3Jtc0ZvclNhbXBsZShzYW1wbGVJZDogc3RyaW5nKTogQXJyYXk8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT4ge1xuICAgICAgICBsZXQgdHJhbnNmb3JtczogQXJyYXk8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT4gPSB0aGlzLnJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcFtzYW1wbGVJZF07XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybXMgPT09IHVuZGVmaW5lZCB8fCB0cmFuc2Zvcm1zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1zID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcFtzYW1wbGVJZF0gPSB0cmFuc2Zvcm1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2Zvcm1zKCk6IEFycmF5PElSZWdpc3RyYXRpb25UcmFuc2Zvcm0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVN0b3JlLml0ZW1zO1xuICAgIH1cbn1cbiJdfQ==
