import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import {AddWishFormComponent} from './wish/add-wish-form/add-wish-form.component';
import {CommonModule} from '@angular/common';
import {WishFilterComponent} from './wish/wish-filter/wish-filter.component';
import {EventService} from '../shared/services/EventService';
import {WishService} from './wish/wish.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, CommonModule],
    providers: [EventService, WishService],
    standalone:true
})
export class AppComponent {
  items : WishItem[] = [];
  filter : any;

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data : any) => {
        this.items = data;
      },
      (error : any) => {
        alert(error.message);
      }
    );
  }


}
