interface IFluorophore extends IApiNamedItem {
}
declare class FluorophoreService extends NamedItemDataService<IFluorophore> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    fluorophores: Array<IFluorophore>;
}
