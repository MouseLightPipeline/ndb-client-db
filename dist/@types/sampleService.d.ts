/// <reference types="angular-resource" />
import ng = require("angular");
import { IApiIdNumberItem, NumberedItemDataService } from "./dataService";
export interface ISample extends IApiIdNumberItem {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    registrationTransformId: string;
    injections: Array<string>;
}
export declare class SampleService extends NumberedItemDataService<ISample> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected mapQueriedItem(obj: any): ISample;
    protected resourcePath(): string;
    readonly samples: Array<ISample>;
    getDisplayName(item: ISample, defaultValue?: string): string;
}
