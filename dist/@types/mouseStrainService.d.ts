/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IMouseStrain extends IApiNamedItem {
}
export declare class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly mouseStrains: Array<IMouseStrain>;
}
