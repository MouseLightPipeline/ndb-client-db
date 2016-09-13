interface ITracingNode extends IApiItem {
}
interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
declare class TracingNodeService extends DataService<ITracingNode> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    nodes: Array<ITracingNode>;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}
