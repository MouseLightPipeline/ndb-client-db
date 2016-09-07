interface IStructureIdentifier extends IApiNamedResourceItem<IStructureIdentifier> {
    value: number;
}

interface IStructureIdentifierResource extends IDataServiceResource<IStructureIdentifier> {
}

class StructureIdentifierService extends DataService<IStructureIdentifier> {

    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected createResource(location: string): IStructureIdentifierResource {
        return <IStructureIdentifierResource>this.$resource(location + "structures/:id", { id: "@id" }, {});
    }

    public get structures(): any {
        return this.items;
    }
}
