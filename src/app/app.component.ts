import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import {AddWishFormComponent} from './add-wish-form/add-wish-form.component';

const filters = [
    (item : WishItem) => item,
    (item : WishItem) => !item.isComplete,
    (item : WishItem) => item.isComplete
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[FormsModule, WishListComponent, AddWishFormComponent],
    standalone:true
})
export class AppComponent {
    items : WishItem[] = [
        new WishItem('Learn Angular'),
        new WishItem('Get Coffee', true),
        new WishItem('Find grass that cuts itself')
    ];

    listFilter : any = '0';


    title = 'wishlist';

    get visibleItems() : WishItem[] {
        return this.items.filter(filters[this.listFilter]);
    };

}
