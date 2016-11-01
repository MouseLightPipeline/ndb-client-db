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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3RyYXRpb25UcmFuc2Zvcm1TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBVUE7SUFBMkMsZ0RBQTRDO0lBUW5GLHNDQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBSGIsbUNBQThCLEdBQW9DLEVBQUUsQ0FBQztJQUk3RSxDQUFDO0lBRVMsc0RBQWUsR0FBekIsVUFBMEIsTUFBVztRQUNqQyxJQUFJLElBQUksR0FBMkIsZ0JBQUssQ0FBQyxlQUFlLFlBQUMsTUFBTSxDQUEyQixDQUFDO1FBRTNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDOUQsQ0FBQztRQUdELElBQUksUUFBUSxHQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztRQUVySCxJQUFJLEtBQUssR0FBWSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHNUQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLG1EQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFTSxzRUFBK0IsR0FBdEMsVUFBdUMsUUFBZ0I7UUFDbkQsSUFBSSxVQUFVLEdBQWtDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5RixFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMvRCxDQUFDO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcsb0RBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFyRGEsb0NBQU8sR0FBRztRQUNwQixXQUFXO0tBQ2QsQ0FBQztJQW9ETixtQ0FBQztBQUFELENBdkRBLEFBdURDLENBdkQwQyxvQkFBb0IsR0F1RDlEIiwiZmlsZSI6InJlZ2lzdHJhdGlvblRyYW5zZm9ybVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSVJlZ2lzdHJhdGlvblRyYW5zZm9ybSBleHRlbmRzIElBcGlOYW1lZEl0ZW0ge1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBzYW1wbGVJZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogQXJyYXk8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT47XG59XG5cbmNsYXNzIFJlZ2lzdHJhdGlvblRyYW5zZm9ybVNlcnZpY2UgZXh0ZW5kcyBOYW1lZEl0ZW1EYXRhU2VydmljZTxJUmVnaXN0cmF0aW9uVHJhbnNmb3JtPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIC8vIEFycmF5cyBvZiByZWdpc3RyYXRpb24gb2JqZWN0cyBrZXllZCBieSBzYW1wbGUgaWQuXG4gICAgcHJpdmF0ZSByZWdpc3RyYXRpb25UcmFuc2Zvcm1TYW1wbGVNYXA6IElSZWdpc3RyYXRpb25UcmFuc2Zvcm1TYW1wbGVNYXAgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3Rlck5ld0l0ZW0ocmF3T2JqOiBhbnkpOiBJUmVnaXN0cmF0aW9uVHJhbnNmb3JtIHtcbiAgICAgICAgbGV0IGl0ZW06IElSZWdpc3RyYXRpb25UcmFuc2Zvcm0gPSBzdXBlci5yZWdpc3Rlck5ld0l0ZW0ocmF3T2JqKSBhcyBJUmVnaXN0cmF0aW9uVHJhbnNmb3JtO1xuXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5yZWdpc3RyYXRpb25UcmFuc2Zvcm1TYW1wbGVNYXBbaXRlbS5zYW1wbGVJZF07XG5cbiAgICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZCB8fCBsaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcFtpdGVtLnNhbXBsZUlkXSA9IGxpc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGl0ZW0gaW4gbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgICAgbGV0IG1hdGNoaW5nOiBudW1iZXJbXSA9IGxpc3QubWFwKChvYmosIGluZGV4KSA9PiBvYmouaWQgPT09IGl0ZW0uc2FtcGxlSWQgPyBpbmRleCA6IC0xKS5maWx0ZXIoaW5kZXggPT4gaW5kZXggPiAtMSk7XG5cbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAgbWF0Y2hpbmcubGVuZ3RoID4gMCA/IG1hdGNoaW5nWzBdIDogLTE7XG5cbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZVxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJlZ2lzdHJhdGlvbnRyYW5zZm9ybXNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0cmF0aW9uVHJhbnNmb3Jtc0ZvclNhbXBsZShzYW1wbGVJZDogc3RyaW5nKTogQXJyYXk8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT4ge1xuICAgICAgICBsZXQgdHJhbnNmb3JtczogQXJyYXk8SVJlZ2lzdHJhdGlvblRyYW5zZm9ybT4gPSB0aGlzLnJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcFtzYW1wbGVJZF07XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybXMgPT09IHVuZGVmaW5lZCB8fCB0cmFuc2Zvcm1zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1zID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblRyYW5zZm9ybVNhbXBsZU1hcFtzYW1wbGVJZF0gPSB0cmFuc2Zvcm1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2Zvcm1zKCk6IElSZWdpc3RyYXRpb25UcmFuc2Zvcm1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG59XG4iXX0=
