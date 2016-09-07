interface ITracingNode extends ng.resource.IResource<ITracingNode>, IApiItem {
}

interface ITracingNodeResource extends IDataServiceResource<ITracingNode> {
    nodesForStructure(obj): Array<ITracingNode>;
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


    protected createResource(location: string): ITracingNodeResource {
        return <ITracingNodeResource>this.$resource(location + "nodes/:id", {id: "@id"}, {
            nodesForStructure: {
                method: "GET",
                url: location + "nodes/findByStructure/:id/",
                params: {id: "@id"},
                isArray: true
            }
        });
    }

    public get nodes(): any {
        return this.items;
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
