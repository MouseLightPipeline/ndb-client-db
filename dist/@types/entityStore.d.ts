/// <reference types="angular-resource" />
export interface WhereFunction<T> {
    (obj: T): boolean;
}
export interface IEntityStore<T> {
    clear(): void;
    findItem(key: string): T;
    addItem(item: T): void;
    addItems(items: Array<T>): void;
    removeItem(item: T): void;
    removeItems(items: Array<T>): Array<T>;
    where(fcn: WhereFunction<T>): Array<T>;
    items: Array<T>;
}
export declare class EntityStore<T> implements IEntityStore<T> {
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
