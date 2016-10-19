import ng = require("angular");

import {IApiNamedItem, NamedItemDataService} from "./dataService";

export interface IInjectionVirus extends IApiNamedItem {
}

export class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "viruses";
    }

    public get injectionViruses(): Array<IInjectionVirus> {
        return this._entityStore.items;
    }
}
