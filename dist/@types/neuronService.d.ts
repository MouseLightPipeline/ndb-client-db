/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiIdNumberItem, NumberedItemDataService } from "./dataService";
export interface INeuron extends IApiIdNumberItem {
    injectionId: string;
    brainAreaId: string;
    tag: string;
    keywords: string;
    x: number;
    y: number;
    z: number;
}
export declare class NeuronService extends NumberedItemDataService<INeuron> {
    static $inject: string[];
    private neuronInjectionMap;
    constructor($resource: ng.resource.IResourceService);
    protected registerNewItem(rawObj: INeuron): INeuron;
    protected resourcePath(): string;
    neuronsForInjection(injectionId: string): Array<INeuron>;
    readonly neurons: Array<INeuron>;
    getDisplayName(item: INeuron, defaultValue?: string): string;
}
