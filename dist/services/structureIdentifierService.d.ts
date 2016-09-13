interface IStructureIdentifier extends IApiNamedItem {
    value: number;
}
declare class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    structures: Array<IStructureIdentifier>;
}
