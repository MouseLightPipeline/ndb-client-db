interface IInjection extends IApiItem {
    sampleId: string;
    brainAreaId: string;
    injectionVirusId: string;
    fluorophoreId: string;
}

interface IInjectionResource extends ng.resource.IResourceClass<ng.resource.IResource<IInjection>> {
    injectionsForSample(obj): Array<string>;
}

class InjectionService extends DataService<IInjection> {

    public static $inject = [
        "$resource",
        "injectionVirusService",
        "brainAreaService"
    ];

    private injectionSampleMap = {};

    constructor($resource: ng.resource.IResourceService, private injectionVirusService: InjectionVirusService, private brainAreaService: BrainAreaService) {
        super($resource);
    }

    protected resourcePath(): string {
        return "injections";
    }

    protected createCustomResourceMethods(): any {
        return {
            injectionsForSample: {
                method: "GET",
                url: this.apiUrl + "injections/sample/:id/",
                params: {id: "@id"},
                isArray: true
            }
        };
    }

    protected registerNewItem(obj: IInjection): IInjection {
        let item: IInjection = super.registerNewItem(obj) as IInjection;

        let list = this.injectionSampleMap[item.sampleId];

        if (list === undefined || list === null) {
            list = [];
            this.injectionSampleMap[item.sampleId] = list;
        }

        let index: number = list.indexOf(item.sampleId);

        if (index < 0) {
            list.push(item);
        } else {
            list[index] = item;
        }

        return item;
    }

    public injectionsForSample(sampleId: string): Array<IInjection> {
        let injections = this.injectionSampleMap[sampleId];

        if (injections === undefined || injections === null) {
            injections = [];
            this.injectionSampleMap[sampleId] = injections;
        }

        return injections;
    }


    public get injections(): Array<IInjection> {
        return this._entityStore.items;
    }

    public getDisplayName(item: IInjection, defaultValue: string = ""): string {
        return "(" + this.brainAreaService.getDisplayNameForId(item.brainAreaId) + ":" + this.injectionVirusService.getDisplayNameForId(item.injectionVirusId) + ")";
    }
}