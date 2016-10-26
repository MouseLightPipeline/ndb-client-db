interface INeuron extends IApiIdNumberItem {
    injectionId: string;
    brainAreaId: string;
    tag: string;
    keywords: string;
    x: number;
    y: number;
    z: number;
}

interface INeuronInjectionMap {
    [key: string]: Array<INeuron>;
}

class NeuronService extends NumberedItemDataService<INeuron> {
    public static $inject = [
        "$resource"
    ];

    // Arrays of neuron objects keyed by injection id.
    private neuronInjectionMap: INeuronInjectionMap = {};

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected registerNewItem(rawObj: INeuron): INeuron {
        let item: INeuron = super.registerNewItem(rawObj) as INeuron;

        let list = this.neuronInjectionMap[item.injectionId];

        if (list === undefined || list === null) {
            list = [];
            this.neuronInjectionMap[item.injectionId] = list;
        }

        // Find index of item in list, if present.
        let matching: Array<number> = list.map((obj, index) => obj.id === item.injectionId ? index : -1).filter(index => index > -1);

        let index: number =  matching.length > 0 ? matching[0] : -1; // list.indexOf(item.injectionId);

        // Add or update
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

    public neuronsForInjection(injectionId: string): Array<INeuron> {
        let neurons: Array<INeuron> = this.neuronInjectionMap[injectionId];

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
