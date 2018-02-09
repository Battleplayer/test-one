import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainPageModule} from "./main-page/main-page.module";
import {ListService} from "./shared/services/list.service";
import {NotFoundModule} from "./shared/not-found/not-found.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarModule} from "./navbar/navbar.module";
import {LocalStorageService} from "./shared/services/local-storage.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        MainPageModule,
        NavbarModule,
        NotFoundModule
    ],
    providers: [ListService, LocalStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
