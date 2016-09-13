interface INeuron extends IApiItem, IApiIdNumberItem {
    injectionId: string;
    brainAreaId: string;
    tag: string;
    keywords: string;
    x: number;
    y: number;
    z: number;
}
declare class NeuronService extends NumberedItemDataService<INeuron> {
    static $inject: string[];
    private neuronInjectionMap;
    constructor($resource: ng.resource.IResourceService);
    protected registerNewItem(obj: IInjection): INeuron;
    protected resourcePath(): string;
    neuronsForInjection(injectionId: string): Array<IInjection>;
    neurons: Array<INeuron>;
    getDisplayName(item: INeuron, defaultValue?: string): string;
}
