import * as ng from "angular";

import {IApiIdNumberItem, NumberedItemDataService} from "./dataService";
import {IInjection} from "./injectionService";

interface INeuron extends IApiIdNumberItem {
    injectionId: string;
    brainAreaId: string;
    tag: string;
    keywords: string;
    x: number;
    y: number;
    z: number;
}

class NeuronService extends NumberedItemDataService<INeuron> {
    public static $inject = [
        "$resource"
    ];

    private neuronInjectionMap = {};

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected registerNewItem(obj: IInjection): INeuron {
        let item: INeuron = super.registerNewItem(obj) as INeuron;

        let list = this.neuronInjectionMap[item.injectionId];

        if (list === undefined || list === null) {
            list = [];
            this.neuronInjectionMap[item.injectionId] = list;
        }

        let index: number = list.indexOf(item.injectionId);

        if (index < 0) {
            list.push(item);
        } else {
            list[index] = item;
        }

        return item;
    }

    protected resourcePath(): string {
        return "neurons";
    }

    public neuronsForInjection(injectionId: string): Array<IInjection> {
        let neurons = this.neuronInjectionMap[injectionId];

        if (neurons === undefined || neurons === null) {
            neurons = [];
            this.neuronInjectionMap[injectionId] = neurons;
        }

        return neurons;
    }

    public get neurons(): Array<INeuron> {
        return this._entityStore.items;
    }

    public getDisplayName(item: INeuron, defaultValue: string = ""): string {
        if (item === null) {
            return "";
        }

        if (item.tag.length > 0) {
            return item.idNumber.toString() + " " + item.tag;
        } else {
            return item.idNumber.toString();
        }
    }
}
