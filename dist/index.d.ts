/// <reference types="angular-resource" />
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
    readonly items: Array<T>;
    private findObject(item);
    private getKey(item);
    private insertItem(item);
    private deleteItem(item);
}

/// <reference types="angular-resource" />
/// <reference types="es6-promise" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IBrainArea extends IApiNamedItem {
    structureId: number;
    depth: number;
    parentStructureId: number;
    structureIdPath: string;
    safeName: string;
    acronym: string;
}
export interface IBrainAreaResource extends ng.resource.IResourceClass<ng.resource.IResource<IBrainArea>> {
    queryForDepth(obj: any): any;
    queryForParent(obj: any): any;
}
export declare class BrainAreaDepthEntry {
    depth: number;
    areas: Array<IBrainArea>;
    selectedAreaIndex: number;
}
export declare class BrainAreaService extends NamedItemDataService<IBrainArea> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private readonly service;
    protected mapQueriedItem(obj: any): IBrainArea;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    brainAreasForDepth(depth: number): Promise<any>;
    brainAreasForParent(parentId: number): Promise<any>;
}

/// <reference types="angular-resource" />
/// <reference types="es6-promise" />
import * as ng from "angular";
export interface IApiItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IApiIdNumberItem extends IApiItem {
    idNumber: number;
}
export interface IApiNamedItem extends IApiItem {
    name: string;
}
export interface IMyResourceClass<T extends IApiItem> extends ng.resource.IResourceClass<ng.resource.IResource<T>> {
    update(obj: any, data: T): any;
}
export declare abstract class DataService<T extends IApiItem> {
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
export declare abstract class NumberedItemDataService<T extends IApiIdNumberItem> extends DataService<T> {
    findWithIdNumber(id: number): T;
}
export declare abstract class NamedItemDataService<T extends IApiNamedItem> extends DataService<T> {
    findWithName(name: string): T;
}

/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IFluorophore extends IApiNamedItem {
}
export declare class FluorophoreService extends NamedItemDataService<IFluorophore> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly fluorophores: Array<IFluorophore>;
}

/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiItem, DataService } from "./dataService";
import { InjectionVirusService } from "./injectionVirusService";
import { BrainAreaService } from "./brainAreaService";
export interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}
export interface IInjectionResource extends ng.resource.IResourceClass<ng.resource.IResource<IInjection>> {
    injectionsForSample(obj: any): Array<string>;
}
export declare class InjectionService extends DataService<IInjection> {
    private injectionVirusService;
    private brainAreaService;
    static $inject: string[];
    private injectionSampleMap;
    constructor($resource: ng.resource.IResourceService, injectionVirusService: InjectionVirusService, brainAreaService: BrainAreaService);
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    protected registerNewItem(obj: IInjection): IInjection;
    injectionsForSample(sampleId: string): Array<IInjection>;
    readonly injections: Array<IInjection>;
    getDisplayName(item: IInjection, defaultValue?: string): string;
}

/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IInjectionVirus extends IApiNamedItem {
}
export declare class InjectionVirusService extends NamedItemDataService<IInjectionVirus> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly injectionViruses: Array<IInjectionVirus>;
}

/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IMouseStrain extends IApiNamedItem {
}
export declare class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly mouseStrains: Array<IMouseStrain>;
}


/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IRegistrationTransform extends IApiNamedItem {
}
export declare class RegistrationTransformService extends NamedItemDataService<IRegistrationTransform> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly transforms: Array<IRegistrationTransform>;
}

/// <reference types="angular-resource" />
import * as ng from "angular";
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

/// <reference types="angular-resource" />
import * as ng from "angular";
import { IApiNamedItem, NamedItemDataService } from "./dataService";
export interface IStructureIdentifier extends IApiNamedItem {
    value: number;
}
export declare class StructureIdentifierService extends NamedItemDataService<IStructureIdentifier> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    protected resourcePath(): string;
    readonly structures: Array<IStructureIdentifier>;
}

/// <reference types="angular-resource" />
/// <reference types="es6-promise" />
import * as ng from "angular";
import { IApiItem, DataService } from "./dataService";
export interface ITracingNode extends IApiItem {
}
export interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}
export declare class TracingNodeService extends DataService<ITracingNode> {
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly nodes: Array<ITracingNode>;
    nodesForStructure(structureId: string): Promise<Array<ITracingNode>>;
}

/// <reference types="angular-resource" />
/// <reference types="angular" />
/// <reference types="es6-promise" />
import * as ng from "angular";
import { IApiItem, DataService } from "./dataService";
export interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
}
export interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj: any): ITracing;
}
export declare class TracingService extends DataService<ITracing> {
    private $http;
    static $inject: string[];
    constructor($resource: ng.resource.IResourceService, $http: ng.IHttpService);
    private readonly service;
    protected resourcePath(): string;
    protected createCustomResourceMethods(): any;
    readonly tracings: Array<ITracing>;
    uploadSwcFile(theFile: any, tracingInfo: any): Promise<any>;
}
