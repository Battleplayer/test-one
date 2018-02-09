import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    public getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    public setItem(key: string, data: any) {
        return localStorage.setItem(key, JSON.stringify(data));
                            
    }
}
