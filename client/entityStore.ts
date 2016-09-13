
interface WhereFunction<T> {
    (obj: T): boolean;
}

interface IEntityStore<T> {
    clear();
    findItem(key: string): T;
    addItem(item: T);
    addItems(items: Array<T>);
    removeItem(item: T);
    removeItems(items: Array<T>): Array<T>;
    where(fcn: WhereFunction<T>): Array<T>;
    items: Array<T>;
}

class EntityStore<T> implements IEntityStore<T> {
    private _store: {};
    private _array: Array<T> = [];
    private _idKey: string;

    constructor(idKey: string = "id") {
        this._idKey = idKey;
    }

    public clear() {
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

    public addItem(item: T) {
        if (this.findObject(item) == null) {
            this.insertItem(item);
        }
    }

    public addItems(items: Array<T>) {
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

        return item[this._idKey];
    }

    private insertItem(item: T) {
        this._array.push(item);

        this._store[item[this._idKey]] = item;
    }

    private deleteItem(item: T) {
        if (item == null) {
            return;
        }

        let key = item[this._idKey];

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