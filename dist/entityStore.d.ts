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
