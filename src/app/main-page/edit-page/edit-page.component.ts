import {Component, OnInit, ViewChild} from "@angular/core";
import {ListService} from "../../shared/services/list.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: "app-edit-page",
    templateUrl: "./edit-page.component.html",
    styleUrls: ["./edit-page.component.less"]
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
                private listService: ListService) {
    }

    onChange(files) {
        console.log(files);
        this.fileInfo = files[0].name;
        // console.log(files[0].name);
    }

    ngOnInit() {
        this.name = this.route.snapshot.params["name"];
        this.list = this.listService.todolist;
        this.index = this.list.findIndex(filtername =>
            filtername["name"] === this.name);
        this.newlist = this.list.slice((this.index), (this.index + 1));
        console.log(this.newlist[0]);
        this.form_name = this.newlist[0].name;
        this.form_content = this.newlist[0].content;
        this.form_file = this.newlist[0].file;
        this.form_comment_author = this.newlist[0].comment_author;
        this.form_comment_content = this.newlist[0].comment_content;
    }

    formSubmit() {
        console.log(this.form.value);
        // ---snackbar---
        if (this.form.valid) {
            const x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        }
    }

}
