import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItempageComponent} from './itempage.component';
import {ItemPageRoutingModule} from './itempage-routing.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        ItemPageRoutingModule,
        SharedModule
    ],
    declarations: [ItempageComponent]
})
export class ItemPageModule {
}
