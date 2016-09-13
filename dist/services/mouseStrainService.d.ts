interface IMouseStrain extends IApiNamedItem {
}
declare class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    mouseStrains: Array<IMouseStrain>;
}
