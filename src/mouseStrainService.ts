interface IMouseStrain extends IApiNamedItem {
}

class MouseStrainService extends NamedItemDataService<IMouseStrain> {
    public static $inject = [
        "$resource"
    ];

    constructor($resource: ng.resource.IResourceService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "mousestrains";
    }

    public get mouseStrains(): Array<IMouseStrain> {
        return this._entityStore.items;
    }
}
