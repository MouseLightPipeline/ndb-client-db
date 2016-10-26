interface IFluorophore extends IApiNamedItem {
}

class FluorophoreService extends NamedItemDataService<IFluorophore> {

    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "fluorophores";
    }

    public get fluorophores(): Array<IFluorophore> {
        return this._entityStore.items;
    }
}
