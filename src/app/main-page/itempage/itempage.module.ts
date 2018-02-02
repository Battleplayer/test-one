import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItempageComponent} from './itempage.component';
import {ItemPageRoutingModule} from './itempage-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ItemPageRoutingModule
    ],
    declarations: [ItempageComponent],
    exports: [ItempageComponent]
})
export class ItemPageModule {
}
