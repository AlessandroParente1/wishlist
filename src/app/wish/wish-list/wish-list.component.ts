import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';


@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  imports: [CommonModule, CommonModule, WishListItemComponent
  ],
  standalone:true


})
export class WishListComponent implements OnInit {
  @Input() wishes : WishItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
