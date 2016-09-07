interface IMouseStrain extends IApiNamedResourceItem<IMouseStrain> {
}

interface IMouseStrainResource extends IDataServiceResource<IMouseStrain>, IApiItem {
}

class MouseStrainService extends DataService<IMouseStrain> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected createResource(location: string): IMouseStrainResource {
        return <IMouseStrainResource>this.$resource(location + "mousestrains/:id", { id: "@id" }, {});
    }

    public get mouseStrains(): any {
        return this.items;
    }
}
