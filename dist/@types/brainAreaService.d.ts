/// <reference types="angular-resource" />
/// <reference types="es6-promise" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IBrainArea extends IApiNamedItem {
    structureId: number;
    depth: number;
    parentStructureId: number;
    structureIdPath: string;
    safeName: string;
    acronym: string;
}
export interface IBrainAreaResource extends ng.resource.IResourceClass<ng.resource.IResource<IBrainArea>> {
    queryForDepth(obj: any): any;
    queryForParent(obj: any): any;
}
export declare class BrainAreaDepthEntry {
    depth: number;
    areas: Array<IBrainArea>;
    selectedAreaIndex: number;
}
export declare class BrainAreaService extends NamedItemDataService<IBrainArea> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private readonly service;
    protected mapQueriedItem(obj: any): IBrainArea;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    brainAreasForDepth(depth: number): Promise<any>;
    brainAreasForParent(parentId: number): Promise<any>;
}
