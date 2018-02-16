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
            comment_created: '08.11.2018, 16:05:54'
        },
        {
            name: 'number2',
            content: 'sometext2',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '09.01.2010, 17:00:55'
        },
        {
            name: 'number3',
            content: 'sometext3',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '09.11.2018, 11:48:55'
        },
        {
            name: 'number4',
            content: 'sometext4',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '09.02.2008, 21:08:55'
        },
        {
            name: 'number5',
            content: 'sometext5',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '01.02.2050, 17:48:55'
        },
        {
            name: 'number6',
            content: 'sometext6',
            file: 'somefile.txt',
            comment_author: 'Name None',
            comment_content: 'some few words',
            comment_created: '09.05.2019, 11:48:55'
        },
    ];
}


