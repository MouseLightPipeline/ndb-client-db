interface ITracingStructure extends  IApiNamedItem {
    value: number;
}

class TracingStructureService extends NamedItemDataService<ITracingStructure> {

    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "tracingStructures";
    }

    public get structures(): Array<ITracingStructure> {
        return this._entityStore.items;
    }
}
