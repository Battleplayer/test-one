import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewPageRoutingModule} from "./new-page-routing.module";
import {NewPageComponent} from "./new-page.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        NewPageRoutingModule,
        SharedModule
    ],
    declarations: [NewPageComponent],
    exports: [NewPageComponent]
})
export class NewPageModule {
}
