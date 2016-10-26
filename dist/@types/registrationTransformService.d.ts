/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IRegistrationTransform extends IApiNamedItem {
    location: string;
    notes: string;
}
export declare class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly transforms: Array<IRegistrationTransform>;
}
