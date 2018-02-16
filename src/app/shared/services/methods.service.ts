import {Injectable} from '@angular/core';
import {ListService} from './list.service';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class MethodsService {
    list;

    constructor(private listService: ListService,
                private localstorage: LocalStorageService) {
        this.list = JSON.parse(localStorage.getItem('lists'));
    }

    delete(item: any, index: number) {
        this.list.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify(this.list));
    }

    newI(name: any, content: any, file: any, comment_content, comment_author, comment_created) {
        this.list.push({name, content, file, comment_content, comment_author, comment_created});
        localStorage.setItem( 'lists', JSON.stringify(this.list));
    }

}
