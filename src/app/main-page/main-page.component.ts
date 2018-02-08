import {Component, OnInit} from "@angular/core";
import {ListService} from "../shared/services/list.service";
import {LocalStorageService} from "../shared/services/local-storage.service";

@Component({
    selector: "app-main-page",
    templateUrl: "./main-page.component.html",
    styleUrls: ["./main-page.component.less"]
})
export class MainPageComponent implements OnInit {
    list;
    lists;
    //
    // constructor(private  listService:ListService,
    //             private localStorage:LocalStorageService) {
    // }
    //
    ngOnInit() {
    //     this.localStorage.setItem('lists', this.listService.todolist);
        this.list = JSON.parse(localStorage.getItem('lists'));
    //     console.log(this.list);
    }

    delete(item:any) {
        let index = this.list.indexOf(item);
        if (index > -1) {
            this.list.splice(index, 1);
        }

    }
}
