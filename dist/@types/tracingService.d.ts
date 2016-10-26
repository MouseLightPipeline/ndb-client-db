/// <reference types="angular-resource" />
/// <reference types="angular" />
/// <reference types="es6-promise" />
import ng = require("angular");
import { IApiItem, DataService } from "./dataService";
export interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
    structureIdentifierId: string;
}
export interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj: any): ITracing;
}
export declare class TracingService extends DataService<ITracing> {
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $http: ng.IHttpService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly tracings: Array<ITracing>;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
}
