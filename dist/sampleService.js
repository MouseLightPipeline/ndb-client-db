var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleService = (function (_super) {
    __extends(SampleService, _super);
    function SampleService($resource) {
        _super.call(this, $resource);
    }
    SampleService.prototype.mapQueriedItem = function (obj) {
        obj = _super.prototype.mapQueriedItem.call(this, obj);
        obj.sampleDate = new Date(obj.sampleDate);
        return obj;
    };
    SampleService.prototype.resourcePath = function () {
        return "samples";
    };
    Object.defineProperty(SampleService.prototype, "samples", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    SampleService.prototype.getDisplayName = function (item, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        if (item === null || item.sampleDate === null) {
            return "";
        }
        var date = item.sampleDate.getFullYear() + "-" + lpad(item.sampleDate.getMonth() + 1, 2) + "-" + lpad(item.sampleDate.getDate(), 2);
        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag + " (" + date + ")";
        }
        else {
            return item.idNumber.toString() + " (" + date + ")";
        }
    };
    SampleService.$inject = [
        "$resource"
    ];
    return SampleService;
}(NumberedItemDataService));
function lpad(n, width, z) {
    if (z === void 0) { z = "0"; }
    var str = n + "";
    return str.length >= width ? str : new Array(width - str.length + 1).join(z) + str;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYW1wbGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0E7SUFBNEIsaUNBQWdDO0lBS3hELHVCQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFUyxzQ0FBYyxHQUF4QixVQUF5QixHQUFRO1FBQzdCLEdBQUcsR0FBRyxnQkFBSyxDQUFDLGNBQWMsWUFBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVTLG9DQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQVcsa0NBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFhLEVBQUUsWUFBeUI7UUFBekIsNEJBQXlCLEdBQXpCLGlCQUF5QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQXBDYSxxQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBbUNOLG9CQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsQ0F0QzJCLHVCQUF1QixHQXNDbEQ7QUFFRCxjQUFjLENBQVMsRUFBRSxLQUFhLEVBQUUsQ0FBTztJQUFQLGlCQUFPLEdBQVAsT0FBTztJQUMzQyxJQUFJLEdBQUcsR0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN2RixDQUFDIiwiZmlsZSI6InNhbXBsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSVNhbXBsZSBleHRlbmRzIElBcGlJZE51bWJlckl0ZW0ge1xuICAgIHNhbXBsZURhdGU6IERhdGU7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgY29tbWVudDogc3RyaW5nO1xuICAgIG1vdXNlU3RyYWluSWQ6IHN0cmluZztcbiAgICBhY3RpdmVSZWdpc3RyYXRpb25UcmFuc2Zvcm1JZDogc3RyaW5nO1xuICAgIGluamVjdGlvbnM6IEFycmF5PHN0cmluZz47XG59XG5cbmNsYXNzIFNhbXBsZVNlcnZpY2UgZXh0ZW5kcyBOdW1iZXJlZEl0ZW1EYXRhU2VydmljZTxJU2FtcGxlPiB7XG4gICAgcHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuICAgICAgICBcIiRyZXNvdXJjZVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkge1xuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBRdWVyaWVkSXRlbShvYmo6IGFueSk6IElTYW1wbGUge1xuICAgICAgICBvYmogPSBzdXBlci5tYXBRdWVyaWVkSXRlbShvYmopO1xuXG4gICAgICAgIG9iai5zYW1wbGVEYXRlID0gbmV3IERhdGUoPHN0cmluZz5vYmouc2FtcGxlRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNhbXBsZXNcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNhbXBsZXMoKTogQXJyYXk8SVNhbXBsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3RvcmUuaXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERpc3BsYXlOYW1lKGl0ZW06IElTYW1wbGUsIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIik6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0uc2FtcGxlRGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0ZTogc3RyaW5nID0gaXRlbS5zYW1wbGVEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGxwYWQoaXRlbS5zYW1wbGVEYXRlLmdldE1vbnRoKCkgKyAxLCAyKSArIFwiLVwiICsgbHBhZChpdGVtLnNhbXBsZURhdGUuZ2V0RGF0ZSgpLCAyKTtcblxuICAgICAgICBpZiAoaXRlbS50YWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWROdW1iZXIudG9TdHJpbmcoKSArIFwiIFwiICsgaXRlbS50YWcgKyBcIiAoXCIgKyBkYXRlICsgXCIpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZE51bWJlci50b1N0cmluZygpICsgXCIgKFwiICsgZGF0ZSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBscGFkKG46IG51bWJlciwgd2lkdGg6IG51bWJlciwgeiA9IFwiMFwiKTogc3RyaW5nIHtcbiAgICBsZXQgc3RyOiBzdHJpbmcgPSBuICsgXCJcIjtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA+PSB3aWR0aCA/IHN0ciA6IG5ldyBBcnJheSh3aWR0aCAtIHN0ci5sZW5ndGggKyAxKS5qb2luKHopICsgc3RyO1xufVxuIl19
