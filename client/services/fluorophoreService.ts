interface IFluorophore extends IApiNamedResourceItem<IFluorophore> {
}

interface IFluorophoreResource extends IDataServiceResource<IFluorophore> {
}

class FluorophoreService extends DataService<IFluorophore> {

    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected createResource(location: string): IFluorophoreResource {
        return <IFluorophoreResource>this.$resource(location + "fluorophores/:id", {id: "@id"}, {});
    }

    public get fluorophores(): any {
        return this.items;
    }
}
