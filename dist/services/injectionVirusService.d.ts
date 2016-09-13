interface IInjectionVirus extends IApiNamedItem {
}
declare class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    injectionViruses: Array<IInjectionVirus>;
}
