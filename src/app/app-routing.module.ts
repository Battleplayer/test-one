import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {NewPageComponent} from "./main-page/new-page/new-page.component";
import {EditPageComponent} from "./main-page/edit-page/edit-page.component";

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'new', component: NewPageComponent},
    {path: 'edit', component: EditPageComponent},
    // {path: ':name', component: ItempageComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


