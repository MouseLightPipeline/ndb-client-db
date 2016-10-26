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

export class EntityStore<T> implements IEntityStore<T> {
    private _store: any = {};
    private _array: Array<T> = [];
    private _idKey: string;

    constructor(idKey: string = "id") {
        this._idKey = idKey;
    }

    public clear(): void {
        this._array.length = 0;

        Object.keys(this._store).forEach((key) => {
            delete this._store[key];
        });
    }

    public findItem(key: string): T {
        if (key == null || key.length === 0) {
            return null;
        }

        return this._store[key];
    }

    public addItem(item: T): void {
        if (this.findObject(item) == null) {
            this.insertItem(item);
        }
    }

    public addItems(items: Array<T>): void {
        items.forEach((item) => {
            this.addItem(item);
        });
    }

    public removeItem(item: T): T {
        let obj = this.findObject(item);

        if (obj != null) {
            this.deleteItem(obj);
        }

        return obj;
    }

    public removeItems(items: Array<T>): Array<T> {
        return items.map((item) => {
            return this.removeItem(item);
        });
    }

    public where(fcn: WhereFunction<T>): Array<T> {
        return this._array.filter((item) => {
            return fcn(item);
        });
    }

    public get items(): Array<T> {
        return this._array;
    }

    // Internal

    private findObject(item: T) {
        return this.findItem(this.getKey(item));
    }

    private getKey(item: T): string {
        if (item == null) {
            return null;
        }

        return (<any>item)[this._idKey];
    }

    private insertItem(item: T): void {
        this._array.push(item);

        this._store[(<any>item)[this._idKey]] = item;
    }

    private deleteItem(item: T): void {
        if (item == null) {
            return;
        }

        let key = (<any>item)[this._idKey];

        if (key == null) {
            return;
        }

        let index = this._array.indexOf(item);

        if (index > -1) {
            this._array.splice(index, 1);
        }

        if (key in this._store) {
            delete this._store[key];
        }
    }
}