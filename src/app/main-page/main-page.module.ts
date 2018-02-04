import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {NewPageModule} from "./new-page/new-page.module";
import {EditPageModule} from "./edit-page/edit-page.module";
import {SharedModule} from "../shared/shared.module";
import {ItemPageModule} from "./itempage/itempage.module";
import {MainPageRoutingModule} from "./main-page-routing.module";

@NgModule({
    imports: [
        CommonModule,
        NewPageModule,
        EditPageModule,
        ItemPageModule,
        MainPageRoutingModule,
        SharedModule
    ],
    declarations: [MainPageComponent]
})
export class MainPageModule {
}
