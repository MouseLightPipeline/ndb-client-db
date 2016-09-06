interface IRegistrationTransform extends IApiNamedResourceItem<IRegistrationTransform> {
}

interface IRegistrationTransformResource extends IDataServiceResource<IRegistrationTransform> {
}

class RegistrationTransformService extends DataService<IRegistrationTransform> {
    public static $inject = [
        "$resource",
        "$rootScope"
    ];

    constructor($resource: ng.resource.IResourceService, protected $rootScope: ng.IScope) {
        super($resource, $rootScope);
    }

    protected createResource(location: string): IRegistrationTransformResource {
        return <IRegistrationTransformResource>this.$resource(location + "registrationtransforms/:id", { id: "@id" }, {});
    }

    public get transforms(): any {
        return this.items;
    }
}
