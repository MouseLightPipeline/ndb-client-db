/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IStructureIdentifier extends IApiNamedItem {
    value: number;
}
export declare class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly structures: Array<IStructureIdentifier>;
}
