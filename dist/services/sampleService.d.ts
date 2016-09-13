interface ISample extends IApiIdNumberItem {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    registrationTransformId: string;
    injections: Array<string>;
}
declare function lpad(n: any, width: any, z?: string): string;
declare class SampleService extends NumberedItemDataService<ISample> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected mapQueriedItem(obj: any): ISample;
    protected resourcePath(): string;
    samples: Array<ISample>;
    getDisplayName(item: ISample, defaultValue?: string): string;
}
