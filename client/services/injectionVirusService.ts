interface IInjectionVirus extends IApiNamedItem {
}

class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "viruses";
    }

    public get injectionViruses(): Array<IInjectionVirus> {
        return this._entityStore.items;
    }
}
