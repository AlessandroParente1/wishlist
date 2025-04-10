import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import {AddWishFormComponent} from './add-wish-form/add-wish-form.component';
import {CommonModule} from '@angular/common';
import {WishFilterComponent} from './wish-filter/wish-filter.component';
import {EventService} from '../shared/services/EventService';
import {WishService} from './wish.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, CommonModule],
    standalone:true
})
export class AppComponent {
  items : WishItem[] = [];

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

    filter : any;

}
