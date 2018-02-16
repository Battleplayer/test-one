import {AfterContentChecked, Component} from '@angular/core';
import {MethodsService} from '../shared/services/methods.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements AfterContentChecked {
    list;
    lists;

    constructor(private methods: MethodsService) {
    }

    ngAfterContentChecked() {
        this.list = JSON.parse(localStorage.getItem('lists'));
    }

        delete(item: any) {
        let index = this.list.indexOf(item);
        this.methods.delete(item, index);
    }
}
