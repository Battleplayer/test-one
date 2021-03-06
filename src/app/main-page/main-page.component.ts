import {AfterContentChecked, Component} from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements AfterContentChecked {
    list;
    lists;

    ngAfterContentChecked() {
        this.list = JSON.parse(localStorage.getItem('lists'));
    }

    delete(item: any) {
        let index = this.list.indexOf(item);
        this.list.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify(this.list));
    }
}
