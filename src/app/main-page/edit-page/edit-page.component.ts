import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.less']
})
export class EditPageComponent implements OnInit {
    @ViewChild('form') form: NgForm;
    name;
    index;
    list;
    newlist;
    fileInfo;
    form_name;
    form_content;
    form_file;
    form_comment_author;
    form_comment_content;

    public form_comment_created = (new Date().toLocaleString());

    constructor(private route: ActivatedRoute,
                private router: Router,
                // private localStorage: LocalStorageService
    ) {
    }

    onChange(files) {
        // console.log(files);
        if (files[0].size > 2000000) {
            alert('TO BIG! Maximum file size 2 Mbyte.  We won\'t upload it.');
        } else {
            this.fileInfo = files[0].name;
        }
    }

    ngOnInit() {
        this.name = this.route.snapshot.params['name'];
        this.list = JSON.parse(localStorage.getItem('lists'));
        // console.log(this.list);
        this.index = this.list.findIndex(filtername =>
            filtername['name'] === this.name);
        this.newlist = this.list.slice((this.index), (this.index + 1));
        // console.log(this.newlist[0]);
        this.form_name = this.newlist[0].name;
        this.form_content = this.newlist[0].content;
        this.form_file = this.newlist[0].file;
        this.form_comment_author = this.newlist[0].comment_author;
        this.form_comment_content = this.newlist[0].comment_content;
    }

    formSubmit() {
        this.list.splice(this.index, 1);
        let newEdited = {
            name: this.form.value.name_f,
            content: this.form.value.content_f,
            file: this.fileInfo,
            comment_content: this.form.value.form_comment_content_f,
            comment_author: this.form.value.form_comment_author_f,
            comment_created: this.form.value.form_comment_created_f
        };
        this.list.push(newEdited);
        localStorage.setItem('lists', JSON.stringify(this.list));
        // ---snackbar---
        if (this.form.valid) {
            const x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () {
                x.className = x.className.replace('show', '');
            }, 2000);
        }
        setTimeout((router: Router) => {
            this.router.navigate(['/']);
        }, 2000);
    }

}
