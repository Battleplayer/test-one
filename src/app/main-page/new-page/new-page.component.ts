import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListService} from '../../shared/services/list.service';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html',
    styleUrls: ['./new-page.component.less']
})
export class NewPageComponent implements OnInit {
    @ViewChild('form') form: NgForm;
    fileInfo;
    lists;
    list;

    constructor(private localStorageService: LocalStorageService) {
    }

    public created = (new Date().toLocaleString());

    onChange(files) {
        console.log(files);
        if (files[0].size > 2000000) {
            alert('TO BIG! Maximum file size 2 Mbyte. We won\'t upload it.');
            // document.getElementById('myFile').value = '';
        } else {
            this.fileInfo = files[0].name;
        }
    }

    formSubmit() {
        console.log(this.form);
        // ---snackbar---
        if (this.form.valid) {
            const x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () {
                x.className = x.className.replace('show', '');
            }, 3000);
        }
        this.list = JSON.parse(localStorage.getItem('lists'));
        let newItem = {
            name: this.form.value.form_name,
            content: this.form.value.form_content,
            file: this.fileInfo,
            comment_content: this.form.value.form_comment_content,
            comment_author: this.form.value.form_comment_author,
            comment_created: this.form.value.form_comment_created
        };
        console.log(newItem);
        this.list.push(newItem);
        localStorage.setItem('lists', JSON.stringify(this.list));
    }

    ngOnInit() {
    }

}
