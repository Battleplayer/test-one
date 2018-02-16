import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../shared/services/local-storage.service';

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
    lists;

    constructor(private route: ActivatedRoute,
                localStorage: LocalStorageService) {
    }

    ngOnInit() {
        this.name = this.route.snapshot.params['name'];
        this.list = JSON.parse(localStorage.getItem('lists'));
        this.index = this.list.findIndex(filtername =>
            filtername['name'] === this.name);
        this.newlist = this.list.slice((this.index), (this.index + 1));
    }

}
