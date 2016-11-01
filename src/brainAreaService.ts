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

class BrainAreaDepthEntry {
    depth: number;
    areas: Array<IBrainArea>;
    selectedAreaIndex: number;
}

class BrainAreaService extends NamedItemDataService<IBrainArea> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    private get service(): IBrainAreaResource {
        return <IBrainAreaResource>this.dataSource;
    }

    protected mapQueriedItem(obj: any): IBrainArea {
        obj.createdAt = new Date(<string>obj.createdAt);
        obj.updatedAt = new Date(<string>obj.updatedAt);

        return obj;
    }

    protected resourcePath(): string {
        return "brainareas";
    }

    protected createCustomResourceMethods(): any {
        return {
            queryForDepth: {
                method: "GET",
                url: this.apiUrl + "brainareas/depth/:depth",
                params: {depth: "@depth"},
                isArray: true
            },
            queryForParent: {
                method: "GET",
                url: this.apiUrl + "brainareas/parent/:parentId",
                params: {parentId: "@parentId"},
                isArray: true
            }
        };
    }

    public brainAreasForDepth(depth: number): Promise<IBrainArea[]> {
        return new Promise<IBrainArea[]>((resolve, reject) => {
            this.service.queryForDepth({depth: depth}).$promise.then((data: any) => {
                let resolvedData: IBrainArea[] = this.registerNewItems(data);
                resolve(resolvedData);
            }).catch((err: any) => {
                reject(err);
            });
        });
    }

    public brainAreasForParent(parentId: number): Promise<IBrainArea[]> {
        return new Promise<IBrainArea[]>((resolve, reject) => {
            this.service.queryForParent({parentId: parentId}).$promise.then((data: IBrainArea[]) => {
                let resolvedData: IBrainArea[] = this.registerNewItems(data);
                resolve(resolvedData);
            }).catch((err: any) => {
                reject(err);
            });
        });
    }
}
