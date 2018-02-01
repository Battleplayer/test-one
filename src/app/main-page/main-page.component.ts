import {Component, OnInit} from '@angular/core';
import {ListService} from "../shared/services/list.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
    list;

    constructor(private  listService:ListService ) {

    }

    ngOnInit() {
        this.list = this.listService.todolist;
    }

}
