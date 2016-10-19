interface IStructureIdentifier extends  IApiNamedItem {
    value: number;
}

class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {

    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "structures";
    }

    public get structures(): Array<IStructureIdentifier> {
        return this._entityStore.items;
    }
}
