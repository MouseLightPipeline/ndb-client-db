interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}
interface IInjectionResource extends ng.resource.IResourceClass<ng.resource.IResource<IInjection>> {
    injectionsForSample(obj: any): Array<string>;
}
declare class InjectionService extends DataService<IInjection> {
    private injectionVirusService;
    private brainAreaService;
    static $inject: string[];
    private injectionSampleMap;
    constructor($resource: ng.resource.IResourceService, injectionVirusService: InjectionVirusService, brainAreaService: BrainAreaService);
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    protected registerNewItem(obj: IInjection): IInjection;
    injectionsForSample(sampleId: string): Array<IInjection>;
    injections: Array<IInjection>;
    getDisplayName(item: IInjection, defaultValue?: string): string;
}
