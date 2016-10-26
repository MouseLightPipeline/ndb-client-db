interface IRegistrationTransform extends IApiNamedItem {
    location: string;
    notes: string;
}

class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "registrationtransforms";
    }

    public get transforms(): Array<IRegistrationTransform> {
        return this._entityStore.items;
    }
}
