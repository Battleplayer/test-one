import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from "./not-found.component";
import {NotFoundRoutingModule} from "./not-found-routing.module";
import {SharedModule} from "../shared.module";

@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        SharedModule
    ],
    exports: [NotFoundComponent],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {
}
