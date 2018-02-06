import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styleUrls: ['./new-page.component.less']
})
export class NewPageComponent implements OnInit {
    @ViewChild('form') form: NgForm;

    constructor() {
    }

    formSubmit() {
        console.log(this.form);
        if (this.form.valid) {
            const x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () {
                x.className = x.className.replace('show', '');
            }, 3000);
        }
        this.form.reset();
    }

    ngOnInit() {
    }

}
