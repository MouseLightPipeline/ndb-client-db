interface WhereFunction<T> {
    (obj: T): boolean;
}
interface IEntityStore<T> {
    clear(): any;
    findItem(key: string): T;
    addItem(item: T): any;
    addItems(items: Array<T>): any;
    removeItem(item: T): any;
    removeItems(items: Array<T>): Array<T>;
    where(fcn: WhereFunction<T>): Array<T>;
    items: Array<T>;
}
declare class EntityStore<T> implements IEntityStore<T> {
    private _store;
    private _array;
    private _idKey;
    constructor(idKey?: string);
    clear(): void;
    findItem(key: string): T;
    addItem(item: T): void;
    addItems(items: Array<T>): void;
    removeItem(item: T): T;
    removeItems(items: Array<T>): Array<T>;
    where(fcn: WhereFunction<T>): Array<T>;
    items: Array<T>;
    private findObject(item);
    private getKey(item);
    private insertItem(item);
    private deleteItem(item);
}

interface IBrainArea extends IApiNamedItem {
    structureId: number;
    depth: number;
    parentStructureId: number;
    structureIdPath: string;
    safeName: string;
    acronym: string;
}
interface IBrainAreaResource extends ng.resource.IResourceClass<ng.resource.IResource<IBrainArea>> {
    queryForDepth(obj: any): any;
    queryForParent(obj: any): any;
}
declare class BrainAreaDepthEntry {
    depth: number;
    areas: Array<IBrainArea>;
    selectedAreaIndex: number;
}
declare class BrainAreaService extends NamedItemDataService<IBrainArea> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private service;
    protected mapQueriedItem(obj: any): IBrainArea;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    brainAreasForDepth(depth: number): Promise<any>;
    brainAreasForParent(parentId: number): Promise<any>;
}

interface IApiItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface IApiIdNumberItem extends IApiItem {
    idNumber: number;
}
interface IApiNamedItem extends IApiItem {
    name: string;
}
interface IMyResourceClass<T extends IApiItem> extends ng.resource.IResourceClass<ng.resource.IResource<T>> {
    update(obj: any, data: T): any;
}
declare abstract class DataService<T extends IApiItem> {
    protected $resource: ng.resource.IResourceService;
    static $inject: string[];
    protected _entityStore: IEntityStore<T>;
    resourcesAreAvailable: boolean;
    private apiLocation;
    protected dataSource: ng.resource.IResourceClass<ng.resource.IResource<T>>;
    constructor($resource: ng.resource.IResourceService);
    setLocation(resourceLocation: string): Promise<void>;
    refreshData(): Promise<void>;
    update(data: T): void;
    createItem(data: any): Promise<T>;
    find(id: string): T;
    getDisplayName(item: T, defaultValue?: string): string;
    getDisplayNameForId(id: string, defaultValue?: string): string;
    protected abstract resourcePath(): string;
    protected createCustomResourceMethods(): any;
    protected apiUrl: string;
    protected mapQueriedItem(obj: any): T;
    protected registerNewItem(obj: any): T;
    protected registerNewItems(items: any): any;
    protected where(fcn: WhereFunction<T>): T;
    protected whereAll(fcn: WhereFunction<T>): Array<T>;
    private createResource(location);
}
declare abstract class NumberedItemDataService<T extends IApiIdNumberItem> extends DataService<T> {
    findWithIdNumber(id: number): T;
}
declare abstract class NamedItemDataService<T extends IApiNamedItem> extends DataService<T> {
    findWithName(name: string): T;
}

interface IFluorophore extends IApiNamedItem {
}
declare class FluorophoreService extends NamedItemDataService<IFluorophore> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    fluorophores: Array<IFluorophore>;
}

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

interface IInjectionVirus extends IApiNamedItem {
}
declare class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    injectionViruses: Array<IInjectionVirus>;
}

interface IMouseStrain extends IApiNamedItem {
}
declare class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    mouseStrains: Array<IMouseStrain>;
}

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

interface IRegistrationTransform extends IApiNamedItem {
}
declare class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    transforms: Array<IRegistrationTransform>;
}

interface ISample extends IApiIdNumberItem {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    registrationTransformId: string;
    injections: Array<string>;
}
declare function lpad(n: any, width: any, z?: string): string;
declare class SampleService extends NumberedItemDataService<ISample> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected mapQueriedItem(obj: any): ISample;
    protected resourcePath(): string;
    samples: Array<ISample>;
    getDisplayName(item: ISample, defaultValue?: string): string;
}

interface IStructureIdentifier extends IApiNamedItem {
    value: number;
}
declare class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    structures: Array<IStructureIdentifier>;
}

interface ITracingNode extends IApiItem {
}
interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
declare class TracingNodeService extends DataService<ITracingNode> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    nodes: Array<ITracingNode>;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}

interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
}
interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj: any): ITracing;
}
declare class TracingService extends DataService<ITracing> {
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $http: ng.IHttpService);
    private service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    tracings: Array<ITracing>;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
}
