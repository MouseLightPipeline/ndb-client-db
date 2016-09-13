interface ISample extends IApiIdNumberItem {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    registrationTransformId: string;
    injections: Array<string>;
}

function lpad(n, width, z = "0"): string {
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

class SampleService extends NumberedItemDataService<ISample> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected mapQueriedItem(obj: any): ISample {
        obj = super.mapQueriedItem(obj);

        obj.sampleDate = new Date(<string>obj.sampleDate);

        return obj;
    }

    protected resourcePath(): string {
        return "samples";
    }

    public get samples(): Array<ISample> {
        return this._entityStore.items;
    }

    public getDisplayName(item: ISample, defaultValue: string = ""): string {
        if (item === null || item.sampleDate === null) {
            return "";
        }

        let date: string = item.sampleDate.getFullYear() + "-" + lpad(item.sampleDate.getMonth() + 1, 2) + "-" + lpad(item.sampleDate.getDate(), 2);

        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag + " (" + date + ")";
        } else {
            return item.idNumber.toString() + " (" + date + ")";
        }
    }
}
