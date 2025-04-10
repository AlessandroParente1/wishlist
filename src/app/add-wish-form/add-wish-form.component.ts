import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishItem} from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish=new EventEmitter<WishItem>();

  constructor() { }

  ngOnInit() {
   }

   newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}

