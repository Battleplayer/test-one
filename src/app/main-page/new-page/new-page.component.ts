import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListService} from "../../shared/services/list.service";

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styleUrls: ['./new-page.component.less']
})
export class NewPageComponent implements OnInit {
    @ViewChild('form') form:NgForm;
    val:string;

    constructor(private tasks:ListService) {
    }

    formSubmit() {
        var date = new Date();
        var values = [date.getDate(), date.getMonth() + 1];
        for (var id in  values) {
            values[id] = values[id].toString().replace(/^([0-9])$/, '0$1');
        }
        this.val = (values[0] + '.' + values[1] + '.' + date.getFullYear() + ' ' + +date.getHours() + ':' + date.getMinutes() );
        console.log(this.form);
        if (this.form.valid) {
            const x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () {
                x.className = x.className.replace('show', '');
            }, 3000);
        }
        this.tasks.newDo(
            this.form.value.form_name,
            this.form.value.form_content,
            this.form.value.form_comment_date,
            this.form.value.form_comment_author,
            this.form.value.form_comment_date
        );
        console.log(this.tasks);
        // this.form.reset();
    }

    ngOnInit() {
    }

}
