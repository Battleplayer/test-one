import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

    constructor() {
    }

    todolist = [
        {
            name: 'number1',
            content: 'sometext1',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '21:00'
        },
        {
            name: "number2",
            content: "sometext2",
            file: "somefile.txt",
            comment_author: "Name None",
            comment_content: "some few words",
            comment_created: "22:40"
        },
        {
            name: "number3",
            content: "sometext3",
            file: "somefile.txt",
            comment_author: "Name None",
            comment_content: "some few words",
            comment_created: "11:05"
        },
        {
            name: "number4",
            content: "sometext4",
            file: "somefile.txt",
            comment_author: "Name None",
            comment_content: "some few words",
            comment_created: "01:10"
        },
        {
            name: "number5",
            content: "sometext5",
            file: "somefile.txt",
            comment_author: "Name None",
            comment_content: "some few words",
            comment_created: "15:55"
        },
        {
            name: "number6",
            content: "sometext6",
            file: "somefile.txt",
            comment_author: "Name None",
            comment_content: "some few words",
            comment_created: "21:00"
        },
    ];

    newDo(name: string,
          content: string,
          file: string,
          comment_author: string,
          comment_content: string,
          comment_created: string) {
        this.todolist.push({
            name, content, file, comment_author, comment_content, comment_created
        });
    }
}


