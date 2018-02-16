import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {SharedModule} from '../shared/shared.module';
import {NavbarRoutingModule} from './navbar-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarRoutingModule,
        SharedModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class NavbarModule {
}
