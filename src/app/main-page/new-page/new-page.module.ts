import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewPageRoutingModule} from "./new-page-routing.module";
import {NewPageComponent} from "./new-page.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        NewPageRoutingModule,
        FormsModule,
        SharedModule
    ],
    declarations: [NewPageComponent],
    exports: [NewPageComponent]
})
export class NewPageModule {
}
