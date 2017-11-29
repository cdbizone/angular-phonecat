'use strict';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {downgradeInjectable} from "@angular/upgrade/static";
import * as angular from "angular";

export interface PhoneData {
    name: string;
    snippet: string;
    images: string[];
}

@Injectable()
export class Phone {
    constructor(private httpClient: HttpClient ) { }
    query() {
        return this.httpClient.get<PhoneData[]>(`phones/phones.json`);
    }
    get(id: string) {
        return this.httpClient.get<PhoneData> (`phones/${id}.json`);
    }
}

angular.module('core.phone').factory('Phone', downgradeInjectable(Phone));