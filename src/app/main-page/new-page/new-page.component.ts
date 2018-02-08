import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ListService} from "../../shared/services/list.service";
import {LocalStorageService} from "../../shared/services/local-storage.service";

@Component({
    selector: "app-new-page",
    templateUrl: "./new-page.component.html",
    styleUrls: ["./new-page.component.less"]
})
export class NewPageComponent implements OnInit {
    @ViewChild("form") form: NgForm;
    fileInfo: string;


    constructor(private tasks: ListService,
                private localStorageService: LocalStorageService) {
    }

    public created = (new Date().toLocaleString());

    onChange(files) {
        console.log(files);
        this.fileInfo = files[0].name;
    }
    formSubmit() {
        console.log(this.form);
        // ---snackbar---
        if (this.form.valid) {
            const x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        }
        this.tasks.newDo(
            this.form.value.form_name,
            this.form.value.form_content,
            this.fileInfo,
            this.form.value.form_comment_content,
            this.form.value.form_comment_author,
            this.form.value.form_comment_created
        );
        console.log(this.tasks);
    }

    ngOnInit() {
    }

}
