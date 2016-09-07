interface IInjectionVirus extends IApiNamedResourceItem<IInjectionVirus> {
}

interface IInjectionVirusResource extends IDataServiceResource<IInjectionVirus> {
}

class InjectionVirusService extends DataService<IInjectionVirus> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected createResource(location: string): IInjectionVirusResource {
        return <IInjectionVirusResource>this.$resource(location + "viruses/:id", {id: "@id"}, {});
    }

    public get injectionViruses(): any {
        return this.items;
    }
}
