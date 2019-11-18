import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

    constructor() { }

    items: Item[];

    ngOnInit() {
        this.items = [];
        for (var i = 0; i < 25; i++) {
            var item = new Item();
            item.number = i + 1;
            this.items.push(item);
        }
    }
}
