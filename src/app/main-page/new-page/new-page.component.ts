import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styleUrls: ['./new-page.component.less']
})
export class NewPageComponent implements OnInit {

    constructor() {
    }

    formSubmit(form: NgForm) {
        console.log('hello', form);
    }

    ngOnInit() {
    }

}
