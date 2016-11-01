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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYW1wbGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0E7SUFBNEIsaUNBQWdDO0lBS3hELHVCQUFZLFNBQXVDO1FBQy9DLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFUyxzQ0FBYyxHQUF4QixVQUF5QixHQUFRO1FBQzdCLEdBQUcsR0FBRyxnQkFBSyxDQUFDLGNBQWMsWUFBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVTLG9DQUFZLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQVcsa0NBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFhLEVBQUUsWUFBeUI7UUFBekIsNEJBQXlCLEdBQXpCLGlCQUF5QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQXBDYSxxQkFBTyxHQUFHO1FBQ3BCLFdBQVc7S0FDZCxDQUFDO0lBbUNOLG9CQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsQ0F0QzJCLHVCQUF1QixHQXNDbEQ7QUFFRCxjQUFjLENBQVMsRUFBRSxLQUFhLEVBQUUsQ0FBTztJQUFQLGlCQUFPLEdBQVAsT0FBTztJQUMzQyxJQUFJLEdBQUcsR0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN2RixDQUFDIiwiZmlsZSI6InNhbXBsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSVNhbXBsZSBleHRlbmRzIElBcGlJZE51bWJlckl0ZW0ge1xuICAgIHNhbXBsZURhdGU6IERhdGU7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgY29tbWVudDogc3RyaW5nO1xuICAgIG1vdXNlU3RyYWluSWQ6IHN0cmluZztcbiAgICBhY3RpdmVSZWdpc3RyYXRpb25UcmFuc2Zvcm1JZDogc3RyaW5nO1xuICAgIGluamVjdGlvbnM6IHN0cmluZ1tdO1xufVxuXG5jbGFzcyBTYW1wbGVTZXJ2aWNlIGV4dGVuZHMgTnVtYmVyZWRJdGVtRGF0YVNlcnZpY2U8SVNhbXBsZT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgJGluamVjdCA9IFtcbiAgICAgICAgXCIkcmVzb3VyY2VcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoJHJlc291cmNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUXVlcmllZEl0ZW0ob2JqOiBhbnkpOiBJU2FtcGxlIHtcbiAgICAgICAgb2JqID0gc3VwZXIubWFwUXVlcmllZEl0ZW0ob2JqKTtcblxuICAgICAgICBvYmouc2FtcGxlRGF0ZSA9IG5ldyBEYXRlKDxzdHJpbmc+b2JqLnNhbXBsZURhdGUpO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzYW1wbGVzXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzYW1wbGVzKCk6IElTYW1wbGVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTdG9yZS5pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGlzcGxheU5hbWUoaXRlbTogSVNhbXBsZSwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbS5zYW1wbGVEYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRlOiBzdHJpbmcgPSBpdGVtLnNhbXBsZURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbHBhZChpdGVtLnNhbXBsZURhdGUuZ2V0TW9udGgoKSArIDEsIDIpICsgXCItXCIgKyBscGFkKGl0ZW0uc2FtcGxlRGF0ZS5nZXREYXRlKCksIDIpO1xuXG4gICAgICAgIGlmIChpdGVtLnRhZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZE51bWJlci50b1N0cmluZygpICsgXCIgXCIgKyBpdGVtLnRhZyArIFwiIChcIiArIGRhdGUgKyBcIilcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkTnVtYmVyLnRvU3RyaW5nKCkgKyBcIiAoXCIgKyBkYXRlICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxwYWQobjogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCB6ID0gXCIwXCIpOiBzdHJpbmcge1xuICAgIGxldCBzdHI6IHN0cmluZyA9IG4gKyBcIlwiO1xuICAgIHJldHVybiBzdHIubGVuZ3RoID49IHdpZHRoID8gc3RyIDogbmV3IEFycmF5KHdpZHRoIC0gc3RyLmxlbmd0aCArIDEpLmpvaW4oeikgKyBzdHI7XG59XG4iXX0=
