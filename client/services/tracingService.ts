import ng = require("angular");

import {IApiItem, DataService} from "./dataService";

export interface ITracing extends IApiItem {
    filename: string;
    annotator: string;
    lengthMicrometers: number;
    neuronId: string;
}

export interface ITracingResource extends ng.resource.IResourceClass<ng.resource.IResource<ITracing>> {
    nodes(obj): ITracing;
}

export class TracingService extends DataService<ITracing> {
    public static $inject = [
        "$resource",
        "$http"
    ];

    constructor($resource: ng.resource.IResourceService, private $http: ng.IHttpService) {
        super($resource);
    }

    private get service(): ITracingResource {
        return <ITracingResource>this.dataSource;
    }

    protected resourcePath(): string {
        return "tracings";
    }

    protected createCustomResourceMethods(): any {
        return {
            nodes: {
                method: "GET",
                url: location + "tracings/:id/nodes/",
                params: {id: "@id"},
                isArray: true
            }
        };
    }

    public get tracings(): Array<ITracing> {
        return this._entityStore.items;
    }

    public uploadSwcFile(theFile: any, tracingInfo: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let url = this.apiUrl + "upload";

            let fd = new FormData();

            fd.append("contents", theFile);

            this.$http.post<ITracing>(url, fd, {
                params: tracingInfo,
                transformRequest: ng.identity,
                headers: {"Content-Type": undefined}
            }).then((result) => {
                this.dataSource.get({id: result.data.id}, (fullItem) => {
                    this._entityStore.addItem(fullItem);
                    resolve(fullItem);
                });
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
}
