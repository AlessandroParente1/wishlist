import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import {AddWishFormComponent} from './add-wish-form/add-wish-form.component';
import {CommonModule} from '@angular/common';
import {WishFilterComponent} from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, CommonModule],
    standalone:true
})
export class AppComponent {
    items : WishItem[] = [
        new WishItem('Learn Angular'),
        new WishItem('Get Coffee', true),
        new WishItem('Find grass that cuts itself')
    ];

  constructor() {
    events.listen('removeWish', (wish : any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

    filter : any;

}
