/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IInjectionVirus extends IApiNamedItem {
}
export declare class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly injectionViruses: Array<IInjectionVirus>;
}
