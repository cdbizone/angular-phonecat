import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {Phone} from "../../app/core/phone/phone.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule
    ],
    providers: [Phone],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
