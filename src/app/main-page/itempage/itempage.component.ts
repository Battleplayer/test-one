import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../../shared/services/list.service";

@Component({
    selector: 'app-itempage',
    templateUrl: './itempage.component.html',
    styleUrls: ['./itempage.component.less']
})
export class ItempageComponent implements OnInit {
    name;
    index;
    list;
    newlist;

    constructor(private route:ActivatedRoute,
                private listService:ListService) {
    }

    ngOnInit() {
        this.name = this.route.snapshot.params['name'];
        this.list = this.listService.todolist;
        this.index = this.list.findIndex(filtername=>
        filtername['name'] === this.name);
        console.log(this.index);
        this.newlist = this.list.slice((this.index), (this.index + 1));
        console.log(this.newlist);
    }

}
