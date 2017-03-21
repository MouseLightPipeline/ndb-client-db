interface ITracingNode extends IApiItem {
}

interface ITracingNodeResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracingNode>> {
    nodesForStructure(obj: any): Array<ITracingNode>;
}

class TracingNodeService extends DataService<ITracingNode> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    private get service(): ITracingNodeResource {
        return <ITracingNodeResource>this.dataSource;
    }

    protected resourcePath(): string {
        return "nodes";
    }

    protected createCustomResourceMethods(): any {
        return {
            nodesForStructure: {
                method: "GET",
                url: this.apiUrl + "nodes/findByStructure/:id/",
                params: {id: "@id"},
                isArray: true
            }
        };
    }

    public get nodes(): Array<ITracingNode> {
        return this._entityStore.items;
    }

    public nodesForStructure(structureId: string): Promise<Array<ITracingNode>> {
        return new Promise<Array<ITracingNode>>((resolve, reject) => {
            this.service.nodesForStructure({id: structureId}).$promise.then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
