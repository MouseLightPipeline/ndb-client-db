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
    update(obj: any, data: T): void;
}

abstract class DataService<T extends IApiItem> {
    public static $inject = [
        "$resource"
    ];

    protected _entityStore: IEntityStore<T> = new EntityStore<T>();

    public resourcesAreAvailable: boolean = false;

    private apiLocation: string = "";

    protected dataSource: ng.resource.IResourceClass<ng.resource.IResource<T>>;

    constructor(protected $resource: ng.resource.IResourceService) {
    }

    public setLocation(resourceLocation: string): Promise<void> {
        this.resourcesAreAvailable = false;

        this.apiLocation = resourceLocation;

        this.createResource(this.apiLocation);

        return this.refreshData();
    }

    public refreshData(): Promise<void> {
        this.resourcesAreAvailable = false;

        this._entityStore.clear();

        return new Promise<void>((resolve) => {
            this.dataSource.query((data: any) => {

                this.registerNewItems(data);

                this.resourcesAreAvailable = true;

                resolve();
            });
        });
    }

    public update(data: T) {
        let resourceClass: IMyResourceClass<T>;

        resourceClass = <IMyResourceClass<T>>this.dataSource;

        resourceClass.update({}, data);
    }

    public createItem(data: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.dataSource.save(data).$promise.then((obj: T) => {
                this.dataSource.get({id: obj.id}, (item: any) => {
                    item = this.registerNewItem(item);
                    resolve(item);
                });
            }).catch((err) => {
                reject(err);
            });
        });
    }

    public find(id: string): T {
        return this._entityStore.findItem(id);
    }

    public getDisplayName(item: T, defaultValue: string = ""): string {
        if ("name" in item)
            return (<any>item)["name"];

        return defaultValue;
    }

    public getDisplayNameForId(id: string, defaultValue: string = ""): string {
        let item: T = this.find(id);

        return item == null ? defaultValue : this.getDisplayName(item);
    }

    // Concrete class entry points

    protected abstract resourcePath(): string; // Required

    protected createCustomResourceMethods(): any {
        return {};
    }

    protected get apiUrl() {
        return this.apiLocation;
    }

    protected mapQueriedItem(obj: any): T {
        obj.createdAt = new Date(<string>obj.createdAt);
        obj.updatedAt = new Date(<string>obj.updatedAt);

        return obj;
    }

    protected registerNewItem(obj: any): T {
        let item: T = this.mapQueriedItem(obj);

        this._entityStore.addItem(item);

        return item;
    }

    protected registerNewItems(items: any) {
        items = items.map((obj: IApiItem) => {
            return this.registerNewItem(obj);
        });

        return items;
    }

    protected where(fcn: WhereFunction<T>): T {
        let items: Array<T> = this.whereAll(fcn);

        return items.length > 0 ? items[0] : null;
    }

    protected whereAll(fcn: WhereFunction<T>): Array<T> {
        return this._entityStore.where(fcn);
    }

    // Internal

    private createResource(location: string) {
        let obj: any = this.createCustomResourceMethods();

        obj.update = {method: "PUT", url: location + "brainareas"};

        this.dataSource = this.$resource(location + this.resourcePath() + "/:id", {id: "@id"}, obj);
    }
}

abstract class NumberedItemDataService<T extends IApiIdNumberItem> extends DataService<T> {

    public findWithIdNumber(id: number): T {
        let item: any = this.where((obj: IApiIdNumberItem) => {
            return obj.idNumber === id;
        });

        return <T>item;
    }
}

abstract class NamedItemDataService<T extends IApiNamedItem> extends DataService<T> {

    public findWithName(name: string): T {
        let item: any = this.where((obj: IApiNamedItem) => {
            return obj.name.toLowerCase() === name.toLowerCase();
        });

        return <T>item;
    }
}