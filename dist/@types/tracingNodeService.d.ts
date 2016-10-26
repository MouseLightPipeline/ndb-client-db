/// <reference types="angular-resource" />
/// <reference types="es6-promise" />
import ng = require("angular");
import { IApiItem, DataService } from "./dataService";
export interface ITracingNode extends IApiItem {
}
export interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
export declare class TracingNodeService extends DataService<ITracingNode> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly nodes: Array<ITracingNode>;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}
