interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
}
interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj: any): ITracing;
}
declare class TracingService extends DataService<ITracing> {
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $http: ng.IHttpService);
    private service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    tracings: Array<ITracing>;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
}
