interface IRegistrationTransform extends IApiNamedItem {
    location: string;
    notes: string;
    sampleId: string;
}

interface IRegistrationTransformSampleMap {
    [key: string]: Array<IRegistrationTransform>;
}

class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    public static $inject = [
        "$resource"
    ];

    // Arrays of registration objects keyed by sample id.
    private registrationTransformSampleMap: IRegistrationTransformSampleMap = {};

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected registerNewItem(rawObj: any): IRegistrationTransform {
        let item: IRegistrationTransform = super.registerNewItem(rawObj) as IRegistrationTransform;

        let list = this.registrationTransformSampleMap[item.sampleId];

        if (list === undefined || list === null) {
            list = [];
            this.registrationTransformSampleMap[item.sampleId] = list;
        }

        // Find index of item in list, if present.
        let matching: Array<number> = list.map((obj, index) => obj.id === item.sampleId ? index : -1).filter(index => index > -1);

        let index: number =  matching.length > 0 ? matching[0] : -1;

        // Add or update
        if (index < 0) {
            list.push(item);
        } else {
            list[index] = item;
        }

        return item;
    }

    protected resourcePath(): string {
        return "registrationtransforms";
    }

    public registrationTransformsForSample(sampleId: string): Array<IRegistrationTransform> {
        let transforms: Array<IRegistrationTransform> = this.registrationTransformSampleMap[sampleId];

        if (transforms === undefined || transforms === null) {
            transforms = [];
            this.registrationTransformSampleMap[sampleId] = transforms;
        }

        return transforms;
    }

    public get transforms(): Array<IRegistrationTransform> {
        return this._entityStore.items;
    }
}
