/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IFluorophore extends IApiNamedItem {
}
export declare class FluorophoreService extends NamedItemDataService<IFluorophore> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly fluorophores: Array<IFluorophore>;
}
