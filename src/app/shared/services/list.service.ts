import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

    constructor() {
    }

    todolist = [
        {
            name: "number1",
            content: "sometext1",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "21:00"
                }
            ]
        },
        {
            name: "number2",
            content: "sometext2",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "22:40"
                }
            ]
        },
        {
            name: "number3",
            content: "sometext3",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "11:05"
                }
            ]
        },
        {
            name: "number4",
            content: "sometext4",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "01:10"
                }
            ]
        },
        {
            name: "number5",
            content: "sometext5",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "15:55"
                }
            ]
        },
        {
            name: "number1",
            content: "sometext1",
            file: "",
            comment: [
                {
                    author: "name1 none",
                    content: "some few words",
                    craated: "21:00"
                }
            ]
        },
    ];

    newDo(name:string, content:string, file:any, comment:any) {
        this.todolist.push({name, content, file, comment})
    }

}
