/// <reference types="angular-resource" />
import { IApiItem, DataService } from "./dataService";
import ng = require("angular");
import { BrainAreaService } from "./brainAreaService";
import { InjectionVirusService } from "./injectionVirusService";
export interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}
export interface IInjectionResource extends ng.resource.IResourceClass<ng.resource.IResource<IInjection>> {
    injectionsForSample(obj: any): Array<string>;
}
export declare class InjectionService extends DataService<IInjection> {
    private injectionVirusService;
    private brainAreaService;
    static $inject: string[];
    private injectionSampleMap;
    constructor($resource: ng.resource.IResourceService, injectionVirusService: InjectionVirusService, brainAreaService: BrainAreaService);
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    protected registerNewItem(obj: IInjection): IInjection;
    injectionsForSample(sampleId: string): Array<IInjection>;
    readonly injections: Array<IInjection>;
    getDisplayName(item: IInjection, defaultValue?: string): string;
}
