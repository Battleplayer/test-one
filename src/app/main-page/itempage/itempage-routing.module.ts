import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItempageComponent} from "./itempage.component";

const routes: Routes = [{path: '', component: ItempageComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemPageRoutingModule {
}