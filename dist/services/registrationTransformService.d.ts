interface IRegistrationTransform extends IApiNamedItem {
}
declare class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    transforms: Array<IRegistrationTransform>;
}
