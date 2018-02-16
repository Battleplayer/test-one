import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from './shared/services/local-storage.service';
import {ListService} from './shared/services/list.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'app';

    list;
    lists;

    constructor(private  listService: ListService,
                private localStorage: LocalStorageService) {
    }

    ngOnInit() {
        this.localStorage.setItem('lists', this.listService.todolist);
        this.list = JSON.parse(localStorage.getItem('lists'));
        // console.log(this.list);
    }
}
