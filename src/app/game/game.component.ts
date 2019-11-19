import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

    constructor() { }

    should: number;
    items: Item[];

    ngOnInit() {
        this.should = 1;
        this.items = [];
        for (var i = 0; i < 25; i++) {
            var item = new Item();
            item.number = i + 1;
            this.items.push(item);
        }

        this.shuffle(this.items);
    }

    onClick(item: Item) {
        if (this.should !== item.number) {
            return;
        }
        item.selected = true;
        this.should++;
    }

    shuffle = arr => {
        arr.forEach((element, index) => {
            const randomIndex = Math.floor(Math.random() * (index + 1))
            this.swap(arr, index, randomIndex)
        })
        return arr
    }

    swap(arr, indexA, indexB) {
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
    }
}
