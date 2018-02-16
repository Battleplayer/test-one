import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'new', loadChildren: 'app/main-page/new-page/new-page.module#NewPageModule'},
    {path: 'edit/:name', loadChildren: 'app/main-page/edit-page/edit-page.module#EditPageModule'},
    {path: 'item/:name', loadChildren: 'app/main-page/itempage/itempage.module#ItemPageModule'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


