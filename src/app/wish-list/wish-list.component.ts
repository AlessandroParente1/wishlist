import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  imports: [CommonModule],
  standalone:true

})
export class WishListComponent implements OnInit {
  @Input() wishes : WishItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
