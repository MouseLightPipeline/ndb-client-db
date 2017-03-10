interface WhereFunction<T> {
    (obj: T): boolean;
}
interface IEntityStore<T> {
    clear(): void;
    findItem(key: string): T;
    addItem(item: T): void;
    addItems(items: Array<T>): void;
    removeItem(item: T): void;
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
    readonly items: Array<T>;
    private findObject(item);
    private getKey(item);
    private insertItem(item);
    private deleteItem(item);
}

interface IApiItem {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface IApiIdNumberItem extends IApiItem {
    idNumber?: number;
}
interface IApiNamedItem extends IApiItem {
    name?: string;
}
interface IMyResourceClass<T extends IApiItem> extends ng.resource.IResourceClass<ng.resource.IResource<T>> {
    update(obj: any, data: T): void;
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
    protected readonly apiUrl: string;
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
    readonly brainAreas: IBrainArea[];
    private readonly service;
    protected mapQueriedItem(obj: any): IBrainArea;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    brainAreasForDepth(depth: number): Promise<IBrainArea[]>;
    brainAreasForParent(parentId: number): Promise<IBrainArea[]>;
}

interface IFluorophore extends IApiNamedItem {
}
declare class FluorophoreService extends NamedItemDataService<IFluorophore> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly fluorophores: Array<IFluorophore>;
}

interface IInjectionVirus extends IApiNamedItem {
}
declare class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly injectionViruses: Array<IInjectionVirus>;
}

interface IRegistrationTransform extends IApiNamedItem {
    location: string;
    notes: string;
    sampleId: string;
}
interface IRegistrationTransformSampleMap {
    [key: string]: Array<IRegistrationTransform>;
}
declare class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    static $inject: string[];
    private registrationTransformSampleMap;
    constructor($resource: ng.resource.IResourceService);
    protected registerNewItem(rawObj: any): IRegistrationTransform;
    protected resourcePath(): string;
    registrationTransformsForSample(sampleId: string): Array<IRegistrationTransform>;
    readonly transforms: IRegistrationTransform[];
}

interface IMouseStrain extends IApiNamedItem {
}
declare class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly mouseStrains: Array<IMouseStrain>;
}

interface IStructureIdentifier extends IApiNamedItem {
    value: number;
}
declare class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly structures: Array<IStructureIdentifier>;
}

interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}
interface IInjectionSampleMap {
    [key: string]: Array<IInjection>;
}
declare class InjectionService extends DataService<IInjection> {
    private injectionVirusService;
    private brainAreaService;
    static $inject: string[];
    private injectionSampleMap;
    constructor($resource: ng.resource.IResourceService, injectionVirusService: InjectionVirusService, brainAreaService: BrainAreaService);
    protected resourcePath(): string;
    protected registerNewItem(obj: IInjection): IInjection;
    injectionsForSample(sampleId: string): IInjection[];
    readonly injections: IInjection[];
    getDisplayName(item: IInjection, defaultValue?: string): string;
}

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
declare class NeuronService extends NumberedItemDataService<INeuron> {
    static $inject: string[];
    private neuronInjectionMap;
    constructor($resource: ng.resource.IResourceService);
    protected registerNewItem(rawObj: INeuron): INeuron;
    protected resourcePath(): string;
    neuronsForInjection(injectionId: string): Array<INeuron>;
    readonly neurons: Array<INeuron>;
    getDisplayName(item: INeuron, defaultValue?: string): string;
}

interface ISample extends IApiIdNumberItem {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    activeRegistrationTransformId: string;
    injections: string[];
}
declare class SampleService extends NumberedItemDataService<ISample> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected mapQueriedItem(obj: any): ISample;
    protected resourcePath(): string;
    readonly samples: ISample[];
    getDisplayName(item: ISample, defaultValue?: string): string;
}
declare function lpad(n: number, width: number, z?: string): string;

interface ITracingNode extends IApiItem {
}
interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
declare class TracingNodeService extends DataService<ITracingNode> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly nodes: Array<ITracingNode>;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}

interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
    structureIdentifierId: string;
}
interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj: any): ITracing;
}
declare class TracingService extends DataService<ITracing> {
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $http: ng.IHttpService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly tracings: Array<ITracing>;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
}
