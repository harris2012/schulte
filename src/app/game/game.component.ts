import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

    constructor() { }

    message: string;
    should: number;
    items: Item[];
    status: string;

    startTime: number;
    time: string;
    timer: any;

    ngOnInit() {
        this.onReset();
        this.message = '请点击开始';
        this.status = '已停止'
    }

    onReset() {
        this.should = 1;
        this.items = [];
        for (var i = 0; i < 25; i++) {
            var item = new Item();
            item.number = i + 1;
            this.items.push(item);
        }

        this.shuffle(this.items);
    }

    onStart() {
        this.onReset();
        this.startTime = new Date().getTime();
        this.timer = window.setInterval(() => {
            this.time = ((new Date().getTime() - this.startTime) / 1000).toFixed(1);
            this.message = "请点击" + this.should + "(耗时:" + this.time + "s)";
        }, 100)
        this.status = '已开始';
    }

    onStop() {
        window.clearInterval(this.timer);
        this.message = '请点击开始';
        this.status = '已停止'
    }

    onClick(item: Item) {
        if (this.should !== item.number) {
            return;
        }
        item.selected = true;
        this.should++;
        if (this.should > 25) {
            window.clearInterval(this.timer);
            this.message = "已完成(耗时:" + this.time + "s)";
            this.status = '已停止';
        }
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
