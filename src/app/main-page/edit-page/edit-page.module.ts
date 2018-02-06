import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPageComponent} from './edit-page.component';
import {EditPageRoutingModule} from './edit-page-routing.module';

@NgModule({
    imports: [
        CommonModule,
        EditPageRoutingModule
    ],
    declarations: [EditPageComponent]
})
export class EditPageModule {
}
