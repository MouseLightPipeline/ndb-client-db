/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="../../typings/globals/es6-promise/index.d.ts" />
interface IApiItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface IApiIdNumberItem {
    idNumber: number;
}
interface IApiNamedItem {
    name: string;
}
interface IApiResourceItem<T> extends ng.resource.IResource<T>, IApiItem {
}
interface IApiNamedResourceItem<T> extends IApiResourceItem<T>, IApiNamedItem {
}
interface IApiNumberedResourceItem<T> extends IApiResourceItem<T>, IApiIdNumberItem {
}
interface IDataServiceResource<T extends IApiResourceItem<T>> extends ng.resource.IResourceClass<T> {
}
declare abstract class DataService<T extends IApiResourceItem<T>> {
    protected $resource: ng.resource.IResourceService;
    protected $rootScope: ng.IScope;
    static $inject: string[];
    resourcesAreAvailable: boolean;
    items: any;
    private apiLocation;
    protected dataSource: IDataServiceResource<T>;
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected abstract createResource(location: string): IDataServiceResource<T>;
    protected apiUrl: string;
    setLocation(resourceLocation: string): Promise<boolean>;
    protected mapQueriedItem(obj: any): IApiItem;
    protected registerNewItem(obj: IApiItem): IApiItem;
    protected registerNewItems(items: any): any;
    protected refreshDataWithCallback(fcn: any): void;
    refreshData(): Promise<boolean>;
    createItem(data: any): Promise<T>;
    find(id: string, fcn?: any): T;
    findWithIdNumber(id: number): T;
    findWithName(name: string): T;
    getDisplayName(item: T, defaultValue?: string): string;
    getDisplayNameForId(id: string, defaultValue?: string): string;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IBrainArea extends IApiNamedResourceItem<IBrainArea> {
    structureId: number;
    depth: number;
    parentStructureId: number;
    structureIdPath: string;
    safeName: string;
    acronym: string;
}
interface IBrainAreaResource extends IDataServiceResource<IBrainArea> {
    queryForDepth(obj: any): any;
    queryForParent(obj: any): any;
}
declare class BrainAreaDepthEntry {
    depth: number;
    areas: Array<IBrainArea>;
    selectedAreaIndex: number;
}
declare class BrainAreaService extends DataService<IBrainArea> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    private service;
    protected mapQueriedItem(obj: any): IBrainArea;
    protected createResource(location: string): IBrainAreaResource;
    brainAreasForDepth(depth: number): Promise<any>;
    brainAreasForParent(parentId: number): Promise<any>;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IFluorophore extends IApiNamedResourceItem<IFluorophore> {
}
interface IFluorophoreResource extends IDataServiceResource<IFluorophore> {
}
declare class FluorophoreService extends DataService<IFluorophore> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected createResource(location: string): IFluorophoreResource;
    fluorophores: any;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}
interface IInjectionResourceItem extends IInjection, IApiResourceItem<IInjectionResourceItem> {
}
interface IInjectionResource extends IDataServiceResource<IInjectionResourceItem> {
    injectionsForSample(obj: any): Array<string>;
}
declare class InjectionService extends DataService<IInjectionResourceItem> {
    protected $rootScope: ng.IScope;
    private injectionVirusService;
    private brainAreaService;
    static $inject: string[];
    private injectionSampleMap;
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope, injectionVirusService: InjectionVirusService, brainAreaService: BrainAreaService);
    protected registerNewItem(obj: IInjection): IInjection;
    protected createResource(location: string): IInjectionResource;
    injectionsForSample(sampleId: string): Array<IInjection>;
    injections: any;
    getDisplayName(item: IInjection, defaultValue?: string): string;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IInjectionVirus extends IApiNamedResourceItem<IInjectionVirus> {
}
interface IInjectionVirusResource extends IDataServiceResource<IInjectionVirus> {
}
declare class InjectionVirusService extends DataService<IInjectionVirus> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected createResource(location: string): IInjectionVirusResource;
    injectionViruses: any;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IMouseStrain extends IApiNamedResourceItem<IMouseStrain> {
}
interface IMouseStrainResource extends IDataServiceResource<IMouseStrain>, IApiItem {
}
declare class MouseStrainService extends DataService<IMouseStrain> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected createResource(location: string): IMouseStrainResource;
    mouseStrains: any;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface INeuron extends IApiNumberedResourceItem<INeuron> {
    injectionId: string;
    brainAreaId: string;
    tag: string;
    keywords: string;
    x: number;
    y: number;
    z: number;
}
interface INeuronResource extends IDataServiceResource<INeuron> {
}
declare class NeuronService extends DataService<INeuron> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    private neuronInjectionMap;
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected registerNewItem(obj: IInjection): INeuron;
    protected createResource(location: string): INeuronResource;
    neuronsForInjection(injectionId: string): Array<IInjection>;
    neurons: any;
    getDisplayName(item: INeuron, defaultValue?: string): string;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IRegistrationTransform extends IApiNamedResourceItem<IRegistrationTransform> {
}
interface IRegistrationTransformResource extends IDataServiceResource<IRegistrationTransform> {
}
declare class RegistrationTransformService extends DataService<IRegistrationTransform> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected createResource(location: string): IRegistrationTransformResource;
    transforms: any;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface ISample extends IApiNumberedResourceItem<ISample> {
    sampleDate: Date;
    tag: string;
    comment: string;
    mouseStrainId: string;
    registrationTransformId: string;
    injections: Array<string>;
}
interface ISampleResource extends IDataServiceResource<ISample> {
}
declare function lpad(n: any, width: any, z?: string): string;
declare class SampleService extends DataService<ISample> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected mapQueriedItem(obj: any): ISample;
    protected createResource(location: string): ISampleResource;
    samples: any;
    getDisplayName(item: ISample, defaultValue?: string): string;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface IStructureIdentifier extends IApiNamedResourceItem<IStructureIdentifier> {
    value: number;
}
interface IStructureIdentifierResource extends IDataServiceResource<IStructureIdentifier> {
}
declare class StructureIdentifierService extends DataService<IStructureIdentifier> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    protected createResource(location: string): IStructureIdentifierResource;
    structures: any;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface ITracingNode extends ng.resource.IResource<ITracingNode>, IApiItem {
}
interface ITracingNodeResource extends IDataServiceResource<ITracingNode> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
declare class TracingNodeService extends DataService<ITracingNode> {
    protected $rootScope: ng.IScope;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope);
    private service;
    protected createResource(location: string): ITracingNodeResource;
    nodes: any;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}

/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-resource/index.d.ts" />
/// <reference path="../../typings/globals/es6-promise/index.d.ts" />
/// <reference path="dataService.d.ts" />
interface ITracing extends ng.resource.IResource<ITracing>, IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
}
interface ITracingResource extends IDataServiceResource<ITracing> {
    nodes(obj: any): ITracing;
}
declare class TracingService extends DataService<ITracing> {
    protected $rootScope: ng.IScope;
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $rootScope: ng.IScope, $http: ng.IHttpService);
    private service;
    protected createResource(location: string): ITracingResource;
    tracings: any;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
    nodesForTracing(id: string): ng.IPromise<ITracing>;
}
