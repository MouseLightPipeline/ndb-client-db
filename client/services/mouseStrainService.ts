import * as ng from "angular";

import {IApiNamedItem, NamedItemDataService} from "./dataService";

export interface IMouseStrain extends IApiNamedItem {
}

export class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "mousestrains";
    }

    public get mouseStrains(): Array<IMouseStrain> {
        return this._entityStore.items;
    }
}
